from flask import Flask, render_template, request, jsonify
import pandas as pd
import os
import re
import google.generativeai as genai
import time
import random

# --- JanSahay AI Application ---

# API Key configuration: check environment first, then fallback
API_KEY = os.environ.get('GEMINI_API_KEY') or os.environ.get('GOOGLE_API_KEY') or 'AIzaSyBTUj7WdT8uMJ8cnjrHGAP903wocmUjU'

model = None
try:
    if API_KEY and API_KEY != 'YOUR_API_KEY_HERE':
        genai.configure(api_key=API_KEY)
        generation_config = {
            "temperature": 0.7,
            "top_p": 1,
            "top_k": 1,
            "max_output_tokens": 2048,
        }
        model = genai.GenerativeModel(
            model_name="gemini-flash-latest",
            generation_config=generation_config
        )
except Exception as e:
    print(f"Notice: Generative AI configuration initialized with fallback. {e}")

# --- Load Government Schemes CSV Dataset ---
CSV_FILE = os.path.join(os.path.dirname(__file__), 'indianschemes.csv')

try:
    df_raw = pd.read_csv(CSV_FILE, dtype=str, keep_default_na=False, encoding='utf-8-sig')
    print("CSV data loaded successfully with utf-8-sig encoding.")
except Exception:
    try:
        df_raw = pd.read_csv(CSV_FILE, dtype=str, keep_default_na=False, encoding='latin-1')
        print("CSV data loaded successfully with latin-1 fallback encoding.")
    except FileNotFoundError:
        print(f"FATAL ERROR: Could not find the CSV file at {CSV_FILE}")
        exit()

# Strip whitespace and any leading BOM from column names
df_raw.columns = [c.strip().lstrip('\ufeff') for c in df_raw.columns]

# --- Helper to find columns by keywords ---
def find_col(df, keywords):
    for col in df.columns:
        col_l = col.lower().strip()
        for k in keywords:
            if k in col_l:
                return col
    return None

# Map columns to official dataset fields
col_scheme = find_col(df_raw, ['scheme name', 'schemename', 'name']) or 'Scheme Name'
col_slug = find_col(df_raw, ['slug'])
col_level = find_col(df_raw, ['level'])
col_region = find_col(df_raw, ['state / ut / ministry', 'ministry', 'region', 'state', 'location'])
col_application_mode = find_col(df_raw, ['application mode', 'mode'])
col_application = find_col(df_raw, ['application process', 'process', 'steps']) or find_col(df_raw, ['application', 'apply'])
col_tags = find_col(df_raw, ['tags / categories', 'tags', 'category', 'categories', 'keywords'])
col_description = find_col(df_raw, ['description', 'descript'])
col_eligibility = find_col(df_raw, ['eligibility criteria', 'criteria', 'eligib'])
col_eligibility_gen = find_col(df_raw, ['eligibility (general)', 'general'])
col_exclusions = find_col(df_raw, ['exclusions / ineligibility', 'exclusion', 'ineligib'])
col_benefits = find_col(df_raw, ['benefits', 'benefit'])
col_documents = find_col(df_raw, ['documents required', 'document', 'required', 'doc'])
col_faqs = find_col(df_raw, ['frequently asked questions', 'faqs', 'faq'])
col_official_link = find_col(df_raw, ['official link', 'official url', 'website'])
col_myscheme_link = find_col(df_raw, ['myscheme url', 'myscheme'])

# Legacy demographic columns for backwards compatibility
col_age = find_col(df_raw, ['age'])
col_gender = find_col(df_raw, ['gender', 'sex'])
col_occupation = find_col(df_raw, ['occup', 'category', 'job'])
col_income = find_col(df_raw, ['income', 'annual'])
col_caste = find_col(df_raw, ['caste'])

# Clean dataframe with sequential IDs
df = df_raw.fillna('').reset_index().rename(columns={'index': 'id'})

split_re = re.compile(r'[,;]')

def tokens_from_cell(cell):
    if cell is None:
        return []
    cell_str = str(cell).strip()
    if not cell_str:
        return []
    parts = [p.strip().title() for p in split_re.split(cell_str) if p.strip()]
    return parts

def unique_tokens_for_col(col):
    if not col or col not in df.columns:
        return []
    s = set()
    for cell in df[col].astype(str):
        for t in tokens_from_cell(cell):
            if len(t) > 1:
                s.add(t)
    return sorted(s, key=lambda x: x.lower())

# Dropdown list options
ages = unique_tokens_for_col(col_age)
genders = unique_tokens_for_col(col_gender)
occupations = unique_tokens_for_col(col_occupation)
incomes = unique_tokens_for_col(col_income)
regions = unique_tokens_for_col(col_region)
castes = unique_tokens_for_col(col_caste)
levels = unique_tokens_for_col(col_level)
modes = ['Online', 'Offline', 'Online & Offline']

# Match cell helper (fixed: correctly checks non-empty selections)
def match_cell(cell, selected):
    if not selected or not selected.strip() or selected.lower() in ['any', 'all']:
        return True
    sel = selected.strip().lower()
    tokens = [t.lower() for t in tokens_from_cell(cell)]
    if not tokens:
        # direct string containment check
        return sel in str(cell).lower()
    for t in tokens:
        if sel == t or sel in t:
            return True
    return False

# --- Step & Document Parsing Helpers (Never invent data; authentic CSV parsing) ---
def parse_application_steps(text):
    if not text:
        return []
    cleaned = text.strip()
    # Check for "Step 01:", "Step 1:", "Step 1 -", etc.
    step_pattern = re.compile(r'(Step\s*\d+[\s:.-]*)', re.IGNORECASE)
    parts = step_pattern.split(cleaned)
    steps = []
    if len(parts) > 1:
        prefix = parts[0].strip()
        # If prefix contains mode or title, keep it if meaningful
        if prefix and not re.match(r'^mode:\s*(online|offline|online & offline)\.?$', prefix, re.I):
            steps.append(prefix)
        for i in range(1, len(parts), 2):
            lbl = parts[i].strip()
            content = parts[i+1].strip() if i+1 < len(parts) else ''
            steps.append(f"{lbl} {content}".strip())
    else:
        # Numbered list or newlines fallback
        lines = [l.strip() for l in re.split(r'[\r\n]+', cleaned) if l.strip()]
        steps = lines if len(lines) > 1 else [cleaned]
    return steps

def parse_documents_list(text):
    if not text:
        return []
    cleaned = text.strip()
    # Normalize bullet characters (•, \u2022, \ufffd, etc.)
    cleaned = re.sub(r'[\u2022\u25cf\u25aa\ufffd\x80\x90\x95]+', '\n• ', cleaned)
    lines = [l.strip().lstrip('•-–* ').strip() for l in re.split(r'[\r\n]+', cleaned) if l.strip()]
    final_docs = []
    for l in lines:
        if l and len(l) > 2:
            final_docs.append(l)
    return final_docs

def make_scheme_card(row):
    """Creates a comprehensive scheme card dictionary from a dataframe row."""
    raw_desc = str(row.get(col_description, '')) if col_description else ''
    raw_elig = str(row.get(col_eligibility, '')) if col_eligibility else ''
    raw_ben = str(row.get(col_benefits, '')) if col_benefits else ''
    raw_docs = str(row.get(col_documents, '')) if col_documents else ''
    raw_app = str(row.get(col_application, '')) if col_application else ''

    return {
        'id': int(row['id']),
        'name': str(row.get(col_scheme, 'Scheme Details')),
        'level': str(row.get(col_level, '')) if col_level else '',
        'region': str(row.get(col_region, '')) if col_region else '',
        'mode': str(row.get(col_application_mode, '')) if col_application_mode else '',
        'description': raw_desc,
        'eligibility': raw_elig,
        'benefits': raw_ben,
        'documents': raw_docs,
        'application': raw_app,
        'tags': str(row.get(col_tags, '')) if col_tags else ''
    }

# --- Flask App Initialization ---
app = Flask(__name__)

@app.route('/')
def home():
    # Check if schemesfinder.jpg exists in static folder (Req 1)
    static_img_path = os.path.join(app.static_folder, 'schemesfinder.jpg')
    has_schemesfinder_img = os.path.exists(static_img_path)

    # Curate popular featured schemes for welcoming discovery (Req 2)
    featured_schemes = []
    for _, r in df.head(6).iterrows():
        featured_schemes.append(make_scheme_card(r))

    total_schemes_count = len(df)
    unique_regions_count = len(regions)

    return render_template('home.html',
                           has_schemesfinder_img=has_schemesfinder_img,
                           featured_schemes=featured_schemes,
                           total_schemes_count=total_schemes_count,
                           unique_regions_count=unique_regions_count,
                           regions=regions)

@app.route('/search', methods=['GET', 'POST'])
def search():
    results = None
    query = ''
    selected_region = ''
    selected_level = ''
    selected_mode = ''

    # Read inputs from either POST form or GET query parameters
    req_data = request.form if request.method == 'POST' else request.args

    if 'query' in req_data or 'region' in req_data or 'level' in req_data or 'mode' in req_data:
        query = req_data.get('query', '').strip()
        selected_region = req_data.get('region', '').strip()
        selected_level = req_data.get('level', '').strip()
        selected_mode = req_data.get('mode', '').strip()

        age = req_data.get('age', '').strip()
        gender = req_data.get('gender', '').strip()
        occupation = req_data.get('occupation', '').strip()
        income = req_data.get('income', '').strip()
        caste = req_data.get('caste', '').strip()

        if query:
            keywords = set(query.lower().split())
            relevant_schemes = []

            for _, row in df.iterrows():
                # Apply filter constraints if selected
                if selected_region and not match_cell(row.get(col_region, ''), selected_region):
                    continue
                if selected_level and not match_cell(row.get(col_level, ''), selected_level):
                    continue
                if selected_mode and not match_cell(row.get(col_application_mode, ''), selected_mode):
                    continue

                match_count = 0
                for keyword in keywords:
                    if len(keyword) > 2:
                        if col_tags and keyword in str(row[col_tags]).lower():
                            match_count += 10
                        if col_scheme and keyword in str(row[col_scheme]).lower():
                            match_count += 8
                        if col_region and keyword in str(row[col_region]).lower():
                            match_count += 3
                        for col in [col_description, col_eligibility, col_benefits, col_occupation]:
                            if col and col in row and keyword in str(row[col]).lower():
                                match_count += 2
                                break

                if match_count > 0:
                    relevant_schemes.append((match_count, row))

            relevant_schemes.sort(key=lambda x: x[0], reverse=True)
            results = [make_scheme_card(r) for count, r in relevant_schemes[:50]]
        else:
            # Dropdown Filter Search
            mask = df.apply(lambda row: match_cell(row.get(col_region, ''), selected_region) and
                                        match_cell(row.get(col_level, ''), selected_level) and
                                        match_cell(row.get(col_application_mode, ''), selected_mode) and
                                        match_cell(row.get(col_age, '') if col_age else '', age) and
                                        match_cell(row.get(col_gender, '') if col_gender else '', gender) and
                                        match_cell(row.get(col_occupation, '') if col_occupation else '', occupation) and
                                        match_cell(row.get(col_income, '') if col_income else '', income) and
                                        match_cell(row.get(col_caste, '') if col_caste else '', caste), axis=1)

            matched_df = df[mask]
            results = [make_scheme_card(r) for _, r in matched_df.head(50).iterrows()]

    # If direct GET without params, show initial empty state with popular recommendations
    return render_template('index.html',
                           ages=ages, genders=genders, occupations=occupations,
                           incomes=incomes, regions=regions, castes=castes,
                           levels=levels, modes=modes,
                           results=results,
                           query=query,
                           selected_region=selected_region,
                           selected_level=selected_level,
                           selected_mode=selected_mode)

@app.route('/scheme/<int:scheme_id>')
def scheme_details(scheme_id):
    row = df[df['id'] == scheme_id]
    if row.empty:
        return render_template('scheme.html', scheme=None)
    
    r = row.iloc[0]

    raw_application = str(r.get(col_application, '')) if col_application else ''
    steps = parse_application_steps(raw_application)

    raw_documents = str(r.get(col_documents, '')) if col_documents else ''
    documents_list = parse_documents_list(raw_documents)

    scheme = {
        'id': int(r['id']),
        'name': str(r.get(col_scheme, 'Scheme Details')),
        'slug': str(r.get(col_slug, '')) if col_slug else '',
        'level': str(r.get(col_level, '')) if col_level else '',
        'region': str(r.get(col_region, '')) if col_region else '',
        'mode': str(r.get(col_application_mode, '')) if col_application_mode else '',
        'tags': str(r.get(col_tags, '')) if col_tags else '',
        'description': str(r.get(col_description, '')) if col_description else '',
        'benefits': str(r.get(col_benefits, '')) if col_benefits else '',
        'eligibility': str(r.get(col_eligibility, '')) if col_eligibility else '',
        'eligibility_gen': str(r.get(col_eligibility_gen, '')) if col_eligibility_gen else '',
        'exclusions': str(r.get(col_exclusions, '')) if col_exclusions else '',
        'application': raw_application,
        'steps': steps,
        'documents': raw_documents,
        'documents_list': documents_list,
        'faqs': str(r.get(col_faqs, '')) if col_faqs else '',
        'official_link': str(r.get(col_official_link, '')).strip() if col_official_link else '',
        'myscheme_url': str(r.get(col_myscheme_link, '')).strip() if col_myscheme_link else '',
    }
    return render_template('scheme.html', scheme=scheme)

# --- Volunteer Assistance Demo Handler (Req 7) ---
@app.route('/request-assistance', methods=['POST'])
@app.route('/volunteer-help', methods=['POST'])
def volunteer_assistance():
    if request.is_json:
        data = request.get_json() or {}
        name = data.get('name', '').strip()
        phone = data.get('phone', '').strip()
        scheme_name = data.get('scheme_name', '').strip()
        state_district = data.get('state_district', '').strip()
        assistance_type = data.get('assistance_type', 'General Guidance')
        preferred_lang = data.get('preferred_lang', 'en')
        notes = data.get('notes', '').strip()
    else:
        name = request.form.get('name', '').strip()
        phone = request.form.get('phone', '').strip()
        scheme_name = request.form.get('scheme_name', '').strip()
        state_district = request.form.get('state_district', '').strip()
        assistance_type = request.form.get('assistance_type', 'General Guidance')
        preferred_lang = request.form.get('preferred_lang', 'en')
        notes = request.form.get('notes', '').strip()

    if not name or not phone:
        if request.is_json:
            return jsonify({'success': False, 'message': 'Please provide both your name and phone number.'}), 400
        return render_template('home.html', volunteer_error="Please provide your name and phone number.")

    tracking_id = f"JS-VOL-{random.randint(10000, 99999)}"
    
    response_payload = {
        'success': True,
        'tracking_id': tracking_id,
        'name': name,
        'phone': phone,
        'scheme_name': scheme_name or 'General Citizen Scheme Assistance',
        'state_district': state_district,
        'assistance_type': assistance_type,
        'preferred_lang': preferred_lang,
        'is_demo': True,
        'disclaimer': 'DEMO NOTICE: This is a prototype volunteer service. No actual volunteer is dispatched. For official government scheme applications, please visit your nearest Common Service Centre (CSC) or call the national citizen helpline at 14449.',
        'message': f"Demo assistance request received for {name}. Your demo tracking number is {tracking_id}."
    }

    if request.is_json:
        return jsonify(response_payload)
    return render_template('home.html', volunteer_result=response_payload)

# --- Multilingual AI Chatbot Route with Smart Rule-Based Fallback ---
@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json() or {}
    user_message = data.get('message', '').strip().lower()
    user_lang = data.get('lang', 'en')

    if not user_message:
        return jsonify({'response': "Please type a question about a government scheme."})

    keywords = set(user_message.split())
    relevant_schemes = []

    for _, row in df.iterrows():
        match_count = 0
        for keyword in keywords:
            if len(keyword) > 2:
                if col_tags and keyword in str(row[col_tags]).lower():
                    match_count += 10
                if col_scheme and keyword in str(row[col_scheme]).lower():
                    match_count += 6
                for col in [col_description, col_eligibility, col_benefits, col_occupation]:
                    if col and keyword in str(row[col]).lower():
                        match_count += 2
                        break
        if match_count > 0:
            relevant_schemes.append((match_count, row.to_dict()))

    relevant_schemes.sort(key=lambda x: x[0], reverse=True)
    top_schemes_data = [scheme_data for count, scheme_data in relevant_schemes[:3]]

    # Context construction
    context = "No relevant schemes found."
    if top_schemes_data:
        context = "Here is authentic information on government schemes from our database:\n\n"
        for i, scheme in enumerate(top_schemes_data):
            context += f"--- Scheme {i+1} ---\n"
            context += f"Name: {scheme.get(col_scheme, 'N/A')}\n"
            context += f"Level: {scheme.get(col_level, 'N/A')}\n"
            context += f"State/Ministry: {scheme.get(col_region, 'N/A')}\n"
            context += f"Eligibility: {scheme.get(col_eligibility, 'N/A')}\n"
            context += f"Benefits: {scheme.get(col_benefits, 'N/A')}\n"
            context += f"Mode: {scheme.get(col_application_mode, 'N/A')}\n"
            context += "--------------------\n"

    prompt = f"""You are JanSahay AI, a respectful, clear, and helpful assistant for the Indian Government Scheme Finder.
Answer the user's question accurately using ONLY the context provided below. Never invent eligibility rules or benefits.
Respond politely in the same language as the user's query or in their preferred language ({user_lang} - English, Hindi or Telugu).
If the context does not contain the answer, politely guide them to use the search page filters or visit their nearest Common Service Centre (CSC).

Context:
{context}

User's Question: {user_message}

Answer:"""

    bot_response = None
    if model:
        try:
            response = model.generate_content(prompt)
            if response and response.text:
                bot_response = response.text.strip()
        except Exception as e:
            print(f"Gemini API request note: {e}")

    # Intelligent fallback from CSV data if Gemini API is inactive/unavailable
    if not bot_response:
        if top_schemes_data:
            lines = ["Here are verified government schemes matching your inquiry:\n"]
            for i, sc in enumerate(top_schemes_data[:2]):
                s_name = sc.get(col_scheme, 'Scheme')
                s_ben = sc.get(col_benefits, '')
                s_elig = sc.get(col_eligibility, '')
                s_id = sc.get('id', '')
                lines.append(f"• {s_name}")
                if s_ben:
                    lines.append(f"  Benefits: {s_ben[:180]}...")
                if s_elig:
                    lines.append(f"  Eligibility: {s_elig[:180]}...")
                lines.append(f"  Guide: /scheme/{s_id}\n")
            lines.append("You can also use our Search page filters or request volunteer assistance.")
            bot_response = "\n".join(lines)
        else:
            bot_response = "I couldn't find a scheme matching that exact term. Please try searching for keywords like 'farmer', 'scholarship', 'pension', 'women', or 'health'."

    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(debug=True)
