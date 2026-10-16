# JanSahay AI – Indian Government Scheme Discovery & Assistance Engine

[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-3.1+-green.svg)](https://flask.palletsprojects.com/)
[![Multilingual](https://img.shields.io/badge/Languages-Telugu%20%7C%20Hindi%20%7C%20English-orange.svg)](#multilingual-support)
[![Accessibility](https://img.shields.io/badge/Accessibility-High%20Contrast%20%26%20Font%20Scale-success.svg)](#accessibility-controls)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **JanSahay AI** is a citizen-first, accessible, multilingual web application designed to help people across India discover, understand, and apply for government welfare schemes. Sourced from authentic central and state government records, JanSahay AI never invents eligibility rules or official requirements.

---

## Key Features

### 1. Welcoming Citizen Homepage
- Dignified, accessible entry point for citizens seeking government support.
- Quick keyword search bar and category filters (Farmers, Students, Healthcare, Women, Social Security, MSME).
- Clear 3-step citizen workflow: **Discover Schemes** &rarr; **Verify Official Eligibility & Documents** &rarr; **Track Application Steps**.

### 2. Zero Broken Images with Styled CSS Placeholders
- Robust CSS-rendered fallback banner for `schemesfinder.jpg` featuring Ashoka-inspired emblem, Indian Tricolor accent band, verified scheme counts, and interactive hover effects.
- Clean vector icons replace missing image assets, ensuring the portal never displays broken image icons.

### 3. Native Multilingual Interface (Telugu, Hindi, English)
- Instant, client-side translation across all pages with zero page reloads.
- Full UI label translation for:
  - **English** (`en`)
  - **हिन्दी** (`hi` - Hindi)
  - **తెలుగు** (`te` - Telugu)
- Preserves the citizen's selected language in browser `localStorage`.

### 4. Scheme Cards with Authentic CSV Data
- Search results are presented in clear, high-contrast scheme cards.
- Each card highlights:
  - **Scheme Title** with link to details.
  - **Badges**: Central / State level, State/Ministry, Application Mode (Online / Offline).
  - **Official Eligibility Summary**: Verbatim from official database (never invented).
  - **Official Benefits Summary**: Verbatim financial and welfare entitlements.
  - **Quick Action Buttons**: "View Scheme & Steps" and "Volunteer Help (Demo)".

### 5. Interactive Application Step Tracker
- Parses real application instructions from the dataset into discrete steps (Step 1, Step 2, etc.).
- Real-time progress bar (e.g., `50% (2 of 4 steps)`).
- Prominent **Current Step** highlight indicating the citizen's immediate next action.
- Interactive checkboxes to mark steps complete/incomplete.
- "Advance to Next Step &rarr;" and "Reset Steps Tracker" buttons.
- Celebratory guidance alert once 100% of application steps are complete.
- Remembers progress in `localStorage` keyed by scheme ID.

### 6. Interactive Required Documents Checklist
- Extracted and parsed checklist of required certificates, IDs, and proofs.
- Interactive checkboxes so citizens can verify their physical paperwork before visiting an office or submitting online.
- Real-time document counter (`3 / 5 documents collected`).

### 7. Accessible Controls & High-Contrast Mode
- **Font Size Adjustments**: `A-` (14px), `A` (16px), `A+` (18px), `A++` (20px) adjusting site-wide typography dynamically.
- **High-Contrast Mode**: Dedicated toggle (`🌓 High Contrast`) providing WCAG AAA compliant high-contrast colors (deep black background, high-visibility yellow `#ffff00` accents, crisp white text, bold borders, and distinct focus rings).
- **Accessible Touch Targets**: High-contrast buttons with minimum 44px touch height.

### 8. Volunteer Assistance Section (Demo Prototype)
- Community guidance form for citizens needing assistance with form filling, document gathering, eligibility checking, or language translation.
- **Prominently Labeled Demo Notice**: Clear amber alert informing users that this is a simulated prototype and no real volunteers are dispatched.
- Generates simulated demo tracking numbers (e.g., `JS-VOL-84920`).
- Provides official national helplines (**14449**, **1800-11-5526**) and Common Service Centre (CSC) guidance.

### 9. AI Assistant with Resilient Fallback
- Multilingual chatbot widget.
- When Gemini API key is configured, provides natural language responses based strictly on the retrieved context.
- If Gemini API is offline, quota-limited, or unconfigured, the assistant **intelligently falls back to verified CSV data**, returning matching schemes and links without failing.

---

## Project Structure

```
.
├── app.py                      # Flask application (search, details, volunteer, chatbot)
├── indianschemes.csv          # Verified Indian government schemes dataset (2,000+ schemes)
├── requirements.txt            # Python dependencies (Flask, pandas, google-generativeai, python-dotenv)
├── .gitignore                  # Excludes venv, .env, secrets, logs, and caches
├── README.md                   # Documentation, setup, and deployment guide
├── static/
│   ├── css/
│   │   └── jansahay.css        # Accessible, responsive stylesheet with high-contrast mode & CSS placeholder
│   └── js/
│       └── jansahay.js         # Multilingual engine (EN, HI, TE), step tracker, accessibility controller
└── templates/
    ├── home.html               # Welcoming citizen landing page & volunteer demo form
    ├── index.html              # Search and filter page with responsive scheme cards
    └── scheme.html             # Detailed scheme guide with interactive step tracker & document checklist
```

---

## Windows Setup & Quick Start

### Prerequisites
- Python 3.9 to 3.12 installed on Windows.
- Windows PowerShell or Command Prompt.

### Step 1: Open Terminal in Project Directory
Open PowerShell in the project directory:
```powershell
cd c:\Users\HP\OneDrive\Desktop\AI-AUGMENTED-AND-RULE-DRIVEN-MULTILINGUAL-ENGINE-FOR-GOVERNMENT-SCHEME-DISCOVERY--main
```

### Step 2: Virtual Environment Activation
Use the existing virtual environment or create one:

**In PowerShell:**
```powershell
# If using existing venv:
.\venv\Scripts\Activate.ps1

# (Optional: If PowerShell execution policy restricts scripts, run):
# Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

**In Command Prompt (CMD):**
```cmd
venv\Scripts\activate.bat
```

### Step 3: Verify Dependencies
All required packages are preserved in `requirements.txt`:
```powershell
pip install -r requirements.txt
```

### Step 4: (Optional) Set Google Gemini API Key
If you wish to enable generative AI responses in the chatbot:
```powershell
# PowerShell:
$env:GEMINI_API_KEY="your_actual_gemini_api_key_here"

# Command Prompt (CMD):
set GEMINI_API_KEY=your_actual_gemini_api_key_here
```
*(Note: If no API key is provided, the chatbot seamlessly operates in rule-based CSV search fallback mode).*

### Step 5: Run the Application
Launch the Flask development server:
```powershell
.\venv\Scripts\python.exe app.py
```
Output will confirm:
```
CSV data loaded successfully with utf-8-sig encoding.
 * Running on http://127.0.0.1:5000
```

### Step 6: Test in Browser
Open your web browser and navigate to:
- **Homepage**: [http://127.0.0.1:5000/](http://127.0.0.1:5000/)
- **Scheme Search & Filter**: [http://127.0.0.1:5000/search](http://127.0.0.1:5000/search)
- **Sample Scheme Detail**: [http://127.0.0.1:5000/scheme/0](http://127.0.0.1:5000/scheme/0)

---

## Exact Windows Testing Commands

You can run automated checks against the running server using PowerShell:

```powershell
# 1. Test Homepage
Invoke-WebRequest -Uri "http://127.0.0.1:5000/" -UseBasicParsing | Select-Object StatusCode

# 2. Test Search by Keyword
Invoke-WebRequest -Uri "http://127.0.0.1:5000/search?query=farmer" -UseBasicParsing | Select-Object StatusCode

# 3. Test Scheme Details & Step Tracker
Invoke-WebRequest -Uri "http://127.0.0.1:5000/scheme/0" -UseBasicParsing | Select-Object StatusCode

# 4. Test Volunteer Assistance Demo Endpoint
$body = @{
    name = "Ramesh Kumar"
    phone = "9876543210"
    state_district = "Andhra Pradesh, Guntur"
    scheme_name = "PM Kisan"
    assistance_type = "Form Filling Assistance"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://127.0.0.1:5000/request-assistance" -Method Post -ContentType "application/json" -Body $body

# 5. Test AI Chatbot Route
$chatBody = @{
    message = "Tell me about farmer subsidy"
    lang = "en"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://127.0.0.1:5000/chat" -Method Post -ContentType "application/json" -Body $chatBody
```

---

## Production Deployment Guidelines

When deploying JanSahay AI to a production Windows or Linux server, follow these best practices:

### 1. Production WSGI Server
Do not use Flask's built-in development server (`app.run()`) in production.

#### Windows Server Deployment (using Waitress)
```powershell
pip install waitress
waitress-serve --port=5000 app:app
```

#### Linux Server Deployment (using Gunicorn)
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### 2. Environment Variables & Secrets
- Never commit `.env` or raw API keys to source control (strictly excluded in `.gitignore`).
- Store production configurations in system environment variables or a secure key vault.
- Set `FLASK_ENV=production` and `FLASK_DEBUG=0`.

### 3. Reverse Proxy & SSL (HTTPS)
- Place Nginx, Apache, or IIS in front of the WSGI server.
- Terminate SSL with Let's Encrypt certificates to protect citizen interactions over HTTPS.
- Configure HTTP security headers:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Content-Security-Policy`

---

## License & Attribution
- Built with Python, Flask, and the Indian Government Schemes dataset.
- Released under the [MIT License](LICENSE).

