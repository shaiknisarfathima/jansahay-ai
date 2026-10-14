/**
 * JanSahay AI - Multilingual Interface, Step Tracker & Accessibility Engine
 * Supports: English (en), Hindi (hi), Telugu (te)
 */

const TRANSLATIONS = {
    en: {
        // Brand & Nav
        brand_name: "JanSahay AI",
        brand_subtitle: "Government Scheme Discovery & Assistance",
        nav_home: "Home",
        nav_search: "Find Schemes",
        nav_volunteer: "Volunteer Help (Demo)",
        nav_contact: "Contact",
        nav_chat: "AI Assistant",
        font_label: "Font Size:",
        contrast_btn: "🌓 High Contrast",
        
        // Homepage Hero
        hero_badge: "Official Scheme Discovery Platform",
        hero_title: "Find Government Schemes You Deserve",
        hero_subtitle: "Access verified welfare schemes across India. Check official eligibility, prepare documents with interactive checklists, and track application steps.",
        search_placeholder: "Search schemes (e.g., scholarship, farmer, pension, health)...",
        btn_search: "Search Schemes",
        btn_explore: "Explore All Schemes",
        btn_volunteer_hero: "Need Help? Request a Volunteer",
        
        // Trust Stats
        stat_schemes_num: "2,000+",
        stat_schemes_lbl: "Verified Government Schemes",
        stat_portals_num: "Central & State",
        stat_portals_lbl: "Official Welfare Portals",
        stat_free_num: "100% Free",
        stat_free_lbl: "Transparent Citizen Access",
        
        // How it works
        how_it_works_title: "How JanSahay AI Empowers Citizens",
        how_it_works_subtitle: "We simplify government schemes without modifying or inventing rules.",
        how_step1_title: "1. Discover Schemes",
        how_step1_desc: "Filter schemes by state, central level, application mode or your specific need.",
        how_step2_title: "2. Verify Official Eligibility",
        how_step2_desc: "Review authentic eligibility rules and tick off required certificates in your interactive checklist.",
        how_step3_title: "3. Track Application Steps",
        how_step3_desc: "Follow the application tracker, mark completed steps, and discover direct official portals.",
        
        // Categories
        categories_title: "Popular Scheme Categories",
        categories_subtitle: "Browse schemes tailored to different life stages and professions.",
        cat_farmers: "Farmers & Agriculture",
        cat_students: "Students & Education",
        cat_women: "Women & Child Care",
        cat_health: "Healthcare & Medicine",
        cat_pension: "Social Security & Pension",
        cat_business: "Small Business & MSME",
        
        // CSS Placeholder & Card
        start_finding: "Start Finding Schemes",
        ph_title: "JanSahay AI Scheme Engine",
        ph_subtitle: "2,000+ Verified Government Schemes",
        
        // Search Page
        search_page_title: "Search & Filter Government Schemes",
        search_page_subtitle: "Find central and state government schemes matching your needs.",
        filter_heading: "Search Options & Filters",
        keyword_label: "Keyword Search",
        keyword_placeholder: "e.g., student scholarship, farmer subsidy, pension, health...",
        btn_keyword_search: "Search by Keyword",
        region_label: "State / UT / Ministry",
        all_regions: "-- All States & Ministries --",
        level_label: "Government Level",
        all_levels: "-- All Levels (Central & State) --",
        level_central: "Central Government",
        level_state: "State / UT Government",
        mode_label: "Application Mode",
        all_modes: "-- All Modes (Online / Offline) --",
        mode_online: "Online",
        mode_offline: "Offline",
        btn_filter: "Apply Filters",
        btn_reset: "Reset Filters",
        results_heading: "Matched Government Schemes",
        no_results_msg: "No schemes found matching your search. Try broader keywords or clearing filters.",
        
        // Scheme Card
        card_level: "Level:",
        card_state: "State/Ministry:",
        card_mode: "Mode:",
        card_eligibility: "Eligibility Criteria:",
        card_benefits: "Benefits Summary:",
        btn_view_scheme: "View Scheme & Application Steps →",
        btn_help_card: "Volunteer Help (Demo)",
        
        // Scheme Details Page
        back_search: "← Back to Scheme Search",
        scheme_overview: "Scheme Overview",
        scheme_benefits: "Key Benefits & Assistance",
        scheme_eligibility: "Official Eligibility Criteria",
        scheme_ineligibility: "Exclusions & Ineligibility",
        docs_title: "Required Documents Checklist",
        docs_subtitle: "Check off each document as you gather it before applying:",
        docs_ready_count: "documents collected",
        btn_check_all_docs: "Mark All Collected",
        btn_reset_docs: "Reset Checklist",
        steps_title: "Application Process & Interactive Step Tracker",
        steps_tracker_subtitle: "Track your progress step-by-step. Mark completed steps to see what's next:",
        tracker_progress: "Application Progress:",
        tracker_next_step: "Current Step:",
        tracker_completed_badge: "Completed",
        tracker_pending_badge: "Pending",
        btn_mark_step_done: "Mark Step Complete",
        btn_mark_step_undone: "Mark Incomplete",
        btn_next_step: "Advance to Next Step →",
        btn_reset_steps: "Reset Steps Tracker",
        all_steps_done_msg: "🎉 Congratulations! You have completed all application steps. Make sure to keep your acknowledgment receipt and reference ID safely.",
        official_portal_title: "Official Government Portal & Links",
        btn_open_official: "Open Official Government Portal ↗",
        btn_open_myscheme: "View on MyScheme.gov.in ↗",
        faqs_title: "Frequently Asked Questions (FAQs)",
        
        // Volunteer Section
        vol_title: "JanSahay Volunteer Assistance",
        vol_subtitle: "Need help understanding eligibility or filling out the application? Request friendly community guidance.",
        vol_demo_badge: "DEMO PROTOTYPE ONLY",
        vol_demo_alert: "DEMO NOTICE: This volunteer request portal is a prototype for demonstration and testing. No real volunteers are currently dispatched. For immediate official government assistance, please visit your nearest Common Service Centre (CSC) or call the national citizen helpline at 14449.",
        vol_name_label: "Your Full Name *",
        vol_phone_label: "Mobile Number (10 digits) *",
        vol_location_label: "State & District / Town *",
        vol_scheme_label: "Scheme You Need Help With",
        vol_type_label: "Type of Assistance Needed",
        vol_type_opt1: "Form Filling Assistance",
        vol_type_opt2: "Document Checklist Preparation",
        vol_type_opt3: "Eligibility Verification",
        vol_type_opt4: "Language Translation / Explanation",
        vol_lang_label: "Preferred Contact Language",
        vol_notes_label: "Additional Notes or Accessibility Needs",
        btn_submit_vol: "Submit Volunteer Request (Demo)",
        vol_success_title: "Demo Request Submitted Successfully!",
        vol_success_msg: "Thank you! Your simulated request has been recorded under Demo Tracking ID:",
        vol_helpline_note: "Remember: For official government scheme applications, consult official government portals or CSC centers.",
        
        // Chatbot
        chat_title: "JanSahay AI Assistant",
        chat_greeting: "Namaste! I am JanSahay AI. Ask me about any government scheme, eligibility, benefits or application steps in Telugu, Hindi or English.",
        chat_input_ph: "Ask about a scheme (e.g. farmer subsidy)...",
        chat_send: "Send",
        chat_typing: "Searching schemes..."
    },
    
    hi: {
        // Brand & Nav
        brand_name: "जनसहाय AI",
        brand_subtitle: "सरकारी योजना खोज एवं सहायता पोर्टल",
        nav_home: "मुख्य पृष्ठ",
        nav_search: "योजनाएं खोजें",
        nav_volunteer: "स्वयंसेवक सहायता (डेमो)",
        nav_contact: "संपर्क",
        nav_chat: "AI सहायक",
        font_label: "फ़ॉन्ट आकार:",
        contrast_btn: "🌓 उच्च कंट्रास्ट",
        
        // Homepage Hero
        hero_badge: "आधिकारिक योजना खोज मंच",
        hero_title: "अपनी हकदार सरकारी योजनाएं आसानी से खोजें",
        hero_subtitle: "भारत भर की प्रामाणिक कल्याणकारी योजनाओं तक पहुंचें। आधिकारिक पात्रता जांचें, चेकलिस्ट से दस्तावेज़ तैयार करें और आवेदन चरणों को ट्रैक करें।",
        search_placeholder: "योजनाएं खोजें (उदा. छात्रवृत्ति, किसान, पेंशन, स्वास्थ्य)...",
        btn_search: "योजनाएं खोजें",
        btn_explore: "सभी योजनाएं देखें",
        btn_volunteer_hero: "मदद चाहिए? स्वयंसेवक सहायता मांगें",
        
        // Trust Stats
        stat_schemes_num: "2,000+",
        stat_schemes_lbl: "सत्यापित सरकारी योजनाएं",
        stat_portals_num: "केंद्र और राज्य",
        stat_portals_lbl: "कल्याणकारी पोर्टल",
        stat_free_num: "100% निःशुल्क",
        stat_free_lbl: "पारदर्शी नागरिक पहुंच",
        
        // How it works
        how_it_works_title: "जनसहाय AI नागरिकों को कैसे सशक्त बनाता है",
        how_it_works_subtitle: "हम नियमों में बदलाव किए बिना सरकारी योजनाओं को समझना आसान बनाते हैं।",
        how_step1_title: "1. योजनाएं खोजें",
        how_step1_desc: "राज्य, केंद्रीय स्तर, आवेदन के तरीके या अपनी आवश्यकता के अनुसार योजनाएं फ़िल्टर करें।",
        how_step2_title: "2. आधिकारिक नियम और दस्तावेज़",
        how_step2_desc: "आधिकारिक पात्रता मानदंड देखें और इंटरैक्टिव चेकलिस्ट में आवश्यक प्रमाणपत्रों पर टिक करें।",
        how_step3_title: "3. चरण-दर-चरण आवेदन",
        how_step3_desc: "आवेदन ट्रैकर का पालन करें, पूर्ण किए गए चरणों को चिह्नित करें और आधिकारिक पोर्टलों तक पहुंचें।",
        
        // Categories
        categories_title: "लोकप्रिय योजना श्रेणियां",
        categories_subtitle: "विभिन्न जीवन चरणों और व्यवसायों के अनुसार तैयार की गई योजनाएं देखें।",
        cat_farmers: "किसान और कृषि",
        cat_students: "विद्यार्थी और शिक्षा",
        cat_women: "महिला एवं बाल कल्याण",
        cat_health: "स्वास्थ्य और चिकित्सा",
        cat_pension: "सामाजिक सुरक्षा और पेंशन",
        cat_business: "लघु व्यवसाय और स्वरोजगार",
        
        // CSS Placeholder & Card
        start_finding: "योजनाएं खोजना शुरू करें",
        ph_title: "जनसहाय AI योजना इंजन",
        ph_subtitle: "2,000+ सत्यापित सरकारी योजनाएं",
        
        // Search Page
        search_page_title: "सरकारी योजनाएं खोजें और फ़िल्टर करें",
        search_page_subtitle: "अपनी आवश्यकताओं के अनुसार केंद्र और राज्य सरकार की योजनाएं खोजें।",
        filter_heading: "खोज विकल्प और फ़िल्टर",
        keyword_label: "कीवर्ड खोज",
        keyword_placeholder: "उदा. छात्रवृत्ति, किसान सब्सिडी, पेंशन, स्वास्थ्य...",
        btn_keyword_search: "कीवर्ड से खोजें",
        region_label: "राज्य / केंद्र शासित प्रदेश / मंत्रालय",
        all_regions: "-- सभी राज्य और मंत्रालय --",
        level_label: "सरकारी स्तर",
        all_levels: "-- सभी स्तर (केंद्रीय और राज्य) --",
        level_central: "केंद्र सरकार",
        level_state: "राज्य / यूटी सरकार",
        mode_label: "आवेदन का माध्यम",
        all_modes: "-- सभी माध्यम (ऑनलाइन / ऑफलाइन) --",
        mode_online: "ऑनलाइन",
        mode_offline: "ऑफलाइन",
        btn_filter: "फ़िल्टर लागू करें",
        btn_reset: "फ़िल्टर रीसेट करें",
        results_heading: "उपयुक्त सरकारी योजनाएं",
        no_results_msg: "आपकी खोज से मेल खाती कोई योजना नहीं मिली। कृपया व्यापक कीवर्ड आज़माएं।",
        
        // Scheme Card
        card_level: "स्तर:",
        card_state: "राज्य/मंत्रालय:",
        card_mode: "माध्यम:",
        card_eligibility: "पात्रता मापदंड:",
        card_benefits: "लाभ विवरण:",
        btn_view_scheme: "योजना और आवेदन चरण देखें →",
        btn_help_card: "स्वयंसेवक सहायता (डेमो)",
        
        // Scheme Details Page
        back_search: "← योजना खोज पर वापस जाएं",
        scheme_overview: "योजना का परिचय",
        scheme_benefits: "मुख्य लाभ और वित्तीय सहायता",
        scheme_eligibility: "आधिकारिक पात्रता मापदंड",
        scheme_ineligibility: "अपवर्जन और अपात्रता",
        docs_title: "आवश्यक दस्तावेजों की चेकलिस्ट",
        docs_subtitle: "आवेदन करने से पहले प्रत्येक दस्तावेज़ एकत्र करते समय टिक करें:",
        docs_ready_count: "दस्तावेज़ तैयार",
        btn_check_all_docs: "सभी एकत्र चिह्नित करें",
        btn_reset_docs: "चेकलिस्ट रीसेट करें",
        steps_title: "आवेदन प्रक्रिया और इंटरैक्टिव स्टेप ट्रैकर",
        steps_tracker_subtitle: "अपनी प्रगति को चरण-दर-चरण ट्रैक करें। अगला चरण देखने के लिए पूर्ण चरण चिह्नित करें:",
        tracker_progress: "आवेदन की प्रगति:",
        tracker_next_step: "वर्तमान चरण:",
        tracker_completed_badge: "पूर्ण",
        tracker_pending_badge: "लंबित",
        btn_mark_step_done: "चरण पूर्ण चिह्नित करें",
        btn_mark_step_undone: "अपूर्ण चिह्नित करें",
        btn_next_step: "अगले चरण पर जाएं →",
        btn_reset_steps: "स्टेप्स ट्रैकर रीसेट करें",
        all_steps_done_msg: "🎉 बधाई हो! आपने सभी आवेदन चरण पूर्ण कर लिए हैं। अपनी पावती रसीद और संदर्भ संख्या अवश्य सुरक्षित रखें।",
        official_portal_title: "आधिकारिक योजना पोर्टल और लिंक",
        btn_open_official: "आधिकारिक सरकारी पोर्टल खोलें ↗",
        btn_open_myscheme: "MyScheme.gov.in पर देखें ↗",
        faqs_title: "अक्सर पूछे जाने वाले प्रश्न (FAQs)",
        
        // Volunteer Section
        vol_title: "जनसहाय स्वयंसेवक सहायता",
        vol_subtitle: "फॉर्म भरने या दस्तावेजों को समझने में मदद चाहिए? निःशुल्क सामुदायिक स्वयंसेवक सहायता का अनुरोध करें।",
        vol_demo_badge: "केवल डेमो प्रोटोटाइप",
        vol_demo_alert: "डेमो सूचना: यह स्वयंसेवक अनुरोध पोर्टल प्रदर्शन और परीक्षण के लिए एक प्रोटोटाइप है। वर्तमान में कोई वास्तविक स्वयंसेवक नहीं भेजा जाता है। तत्काल आधिकारिक सहायता के लिए अपने निकटतम कॉमन सर्विस सेंटर (CSC) पर जाएं या राष्ट्रीय हेल्पलाइन 14449 पर कॉल करें।",
        vol_name_label: "आपका पूरा नाम *",
        vol_phone_label: "मोबाइल नंबर (10 अंक) *",
        vol_location_label: "राज्य और जिला / कस्बा *",
        vol_scheme_label: "वह योजना जिसके लिए सहायता चाहिए",
        vol_type_label: "आवश्यक सहायता का प्रकार",
        vol_type_opt1: "फॉर्म भरने में सहायता",
        vol_type_opt2: "दस्तावेज़ चेकलिस्ट तैयारी",
        vol_type_opt3: "पात्रता सत्यापन",
        vol_type_opt4: "भाषा अनुवाद / स्पष्टीकरण",
        vol_lang_label: "संपर्क की पसंदीदा भाषा",
        vol_notes_label: "अतिरिक्त विवरण या आवश्यकताएं",
        btn_submit_vol: "स्वयंसेवक अनुरोध सबमिट करें (डेमो)",
        vol_success_title: "डेमो अनुरोध सफलतापूर्वक सबमिट हुआ!",
        vol_success_msg: "धन्यवाद! आपका सिमुलेटेड अनुरोध डेमो ट्रैकिंग आईडी के तहत दर्ज किया गया है:",
        vol_helpline_note: "याद रखें: आधिकारिक सरकारी योजना आवेदनों के लिए आधिकारिक सरकारी पोर्टल या सीएससी केंद्र से संपर्क करें।",
        
        // Chatbot
        chat_title: "जनसहाय AI सहायक",
        chat_greeting: "नमस्ते! मैं जनसहाय AI हूँ। मुझसे किसी भी सरकारी योजना, पात्रता, लाभ या आवेदन चरणों के बारे में हिंदी, तेलुगु या अंग्रेजी में पूछें।",
        chat_input_ph: "योजना के बारे में पूछें (उदा. किसान सब्सिडी)...",
        chat_send: "भेजें",
        chat_typing: "योजनाएं खोजी जा रही हैं..."
    },
    
    te: {
        // Brand & Nav
        brand_name: "జనసహాయ్ AI",
        brand_subtitle: "ప్రభుత్వ పథకాల అన్వేషణ & సహాయ పోర్టల్",
        nav_home: "హోమ్",
        nav_search: "పథకాలను వెతకండి",
        nav_volunteer: "వాలంటీర్ సహాయం (డెమో)",
        nav_contact: "సంప్రదించండి",
        nav_chat: "AI అసిస్టెంట్",
        font_label: "ఫాంట్ పరిమాణం:",
        contrast_btn: "🌓 అధిక కాంట్రాస్ట్",
        
        // Homepage Hero
        hero_badge: "అధికారిక పథకాల అన్వేషణ వేదిక",
        hero_title: "మీరు అర్హులైన ప్రభుత్వ ప్రయోజనాలను తెలుసుకోండి",
        hero_subtitle: "భారతదేశం అంతటా ధృవీకరించబడిన సంక్షేమ పథకాలను పొందండి. అధికారిక అర్హతను తనిఖీ చేయండి, చెక్‌లిస్ట్‌లతో పత్రాలను సిద్ధం చేసుకోండి మరియు దరఖాస్తు దశలను ట్రాక్ చేయండి.",
        search_placeholder: "పథకాలను శోధించండి (ఉదా. పీఎం కిసాన్, స్కాలర్‌షిప్, రైతు, పెన్షన్, ఆరోగ్యం)...",
        btn_search: "పథకాలను వెతకండి",
        btn_explore: "అన్ని పథకాలను చూడండి",
        btn_volunteer_hero: "సహాయం కావాలా? వాలంటీర్‌ను కోరండి",
        
        // Trust Stats
        stat_schemes_num: "2,000+",
        stat_schemes_lbl: "ధృవీకరించబడిన ప్రభుత్వ పథకాలు",
        stat_portals_num: "కేంద్ర & రాష్ట్ర",
        stat_portals_lbl: "అధికారిక సంక్షేమ పోర్టల్స్",
        stat_free_num: "100% ఉచితం",
        stat_free_lbl: "పారదర్శక పౌర సేవలు",
        
        // How it works
        how_it_works_title: "జనసహాయ్ AI పౌరులకు ఎలా సాధికారత చేకూరుస్తుంది",
        how_it_works_subtitle: "మేము నిబంధనలను మార్చకుండా ప్రభుత్వ పథకాల సమాచారాన్ని సులభతరం చేస్తాము.",
        how_step1_title: "1. పథకాలను కనుగొనండి",
        how_step1_desc: "రాష్ట్రం, కేంద్ర స్థాయి, దరఖాస్తు విధానం లేదా మీ నిర్దిష్ట అవసరం ప్రకారం పథకాలను ఫిల్టర్ చేయండి.",
        how_step2_title: "2. అధికారిక అర్హత & పత్రాలు",
        how_step2_desc: "ప్రామాణిక అర్హత ప్రమాణాలను సమీక్షించండి మరియు ఇంటరాక్టివ్ చెక్‌లిస్ట్‌లో అవసరమైన పత్రాలను టిక్ చేయండి.",
        how_step3_title: "3. దశలవారీ దరఖాస్తు ప్రక్రియ",
        how_step3_desc: "దరఖాస్తు ట్రాకర్‌ను అనుసరించండి, పూర్తయిన దశలను గుర్తించండి మరియు అధికారిక పోర్టల్‌లను చేరుకోండి.",
        
        // Categories
        categories_title: "ప్రజాదరణ పొందిన పథకాల విభాగాలు",
        categories_subtitle: "వివిధ జీవన దశలు మరియు వృత్తులకు తగిన పథకాలను బ్రౌజ్ చేయండి.",
        cat_farmers: "రైతులు & వ్యవసాయం",
        cat_students: "విద్యార్థులు & విద్య",
        cat_women: "మహిళా & శిశు సంక్షేమం",
        cat_health: "ఆరోగ్య సంరక్షణ & ఔషధం",
        cat_pension: "సామాజిక భద్రత & పెన్షన్",
        cat_business: "చిన్న వ్యాపారం & ఎంఎస్ఎంఈ",
        
        // CSS Placeholder & Card
        start_finding: "పథకాలను వెతకడం ప్రారంభించండి",
        ph_title: "జనసహాయ్ AI పథకాల ఇంజిన్",
        ph_subtitle: "2,000+ ధృవీకరించబడిన ప్రభుత్వ పథకాలు",
        
        // Search Page
        search_page_title: "ప్రభుత్వ పథకాలను శోధించండి & ఫిల్టర్ చేయండి",
        search_page_subtitle: "మీ అవసరాలకు సరిపోయే కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ పథకాలను కనుగొనండి.",
        filter_heading: "శోధన ఎంపికలు మరియు ఫిల్టర్లు",
        keyword_label: "కీవర్డ్ శోధన",
        keyword_placeholder: "ఉదా. స్కాలర్‌షిప్, రైతు సబ్సిడీ, పెన్షన్, ఆరోగ్యం...",
        btn_keyword_search: "కీవర్డ్‌తో వెతకండి",
        region_label: "రాష్ట్రం / యుటి / మంత్రిత్వ శాఖ",
        all_regions: "-- అన్ని రాష్ట్రాలు & మంత్రిత్వ శాఖలు --",
        level_label: "ప్రభుత్వ స్థాయి",
        all_levels: "-- అన్ని స్థాయిలు (కేంద్ర & రాష్ట్రం) --",
        level_central: "కేంద్ర ప్రభుత్వం",
        level_state: "రాష్ట్ర / కేంద్రపాలిత ప్రాంత ప్రభుత్వం",
        mode_label: "దరఖాస్తు విధానం",
        all_modes: "-- అన్ని విధానాలు (ఆన్‌లైన్ / ఆఫ్‌లైన్) --",
        mode_online: "ఆన్‌లైన్",
        mode_offline: "ఆఫ్‌లైన్",
        btn_filter: "ఫిల్టర్లను వర్తింపజేయండి",
        btn_reset: "ఫిల్టర్లను రీసెట్ చేయండి",
        results_heading: "సరిపోలిన ప్రభుత్వ పథకాలు",
        no_results_msg: "మీ శోధనకు సరిపోయే పథకాలు ఏవీ కనుగొనబడలేదు. దయచేసి విస్తృత కీలకపదాలను ప్రయత్నించండి.",
        
        // Scheme Card
        card_level: "స్థాయి:",
        card_state: "రాష్ట్రం/మంత్రిత్వ శాఖ:",
        card_mode: "విధానం:",
        card_eligibility: "అర్హత ప్రమాణాలు:",
        card_benefits: "ప్రయోజనాల వివరాలు:",
        btn_view_scheme: "పథకం & దరఖాస్తు దశలను చూడండి →",
        btn_help_card: "వాలంటీర్ సహాయం (డెమో)",
        
        // Scheme Details Page
        back_search: "← పథకాల శోధనకు తిరిగి వెళ్ళండి",
        scheme_overview: "పథకం అవలోకనం",
        scheme_benefits: "ముఖ్య ప్రయోజనాలు & ఆర్థిక సహాయం",
        scheme_eligibility: "అధికారిక అర్హత ప్రమాణాలు",
        scheme_ineligibility: "మినహాయింపులు మరియు అనర్హత",
        docs_title: "అవసరమైన పత్రాల చెక్‌లిస్ట్",
        docs_subtitle: "దరఖాస్తు చేయడానికి ముందు పత్రాలను సిద్ధం చేసుకుంటూ టిక్ చేయండి:",
        docs_ready_count: "పత్రాలు సిద్ధమయ్యాయి",
        btn_check_all_docs: "అన్నీ సిద్ధమైనట్లు గుర్తించండి",
        btn_reset_docs: "చెక్‌లిస్ట్‌ను రీసెట్ చేయండి",
        steps_title: "దరఖాస్తు ప్రక్రియ & ఇంటరాక్టివ్ స్టెప్ ట్రాకర్",
        steps_tracker_subtitle: "మీ పురోగతిని దశలవారీగా ట్రాక్ చేయండి. తదుపరి దశను చూడటానికి పూర్తయిన దశలను మార్క్ చేయండి:",
        tracker_progress: "దరఖాస్తు పురోగతి:",
        tracker_next_step: "ప్రస్తుత దశ:",
        tracker_completed_badge: "పూర్తయింది",
        tracker_pending_badge: "బాకీ ఉంది",
        btn_mark_step_done: "దశ పూర్తయినట్లు గుర్తించండి",
        btn_mark_step_undone: "అసంపూర్తిగా గుర్తించండి",
        btn_next_step: "తదుపరి దశకు వెళ్లండి →",
        btn_reset_steps: "స్టెప్స్ ట్రాకర్‌ను రీసెట్ చేయండి",
        all_steps_done_msg: "🎉 అభినందనలు! మీరు అన్ని దరఖాస్తు దశలను పూర్తి చేసారు. మీ రసీదు మరియు రిఫరెన్స్ నంబర్‌ను సురక్షితంగా ఉంచుకోండి.",
        official_portal_title: "అధికారిక పథకం పోర్టల్ మరియు లింకులు",
        btn_open_official: "అధికారిక ప్రభుత్వ పోర్టల్ తెరవండి ↗",
        btn_open_myscheme: "MyScheme.gov.in లో చూడండి ↗",
        faqs_title: "తరచుగా అడిగే ప్రశ్నలు (FAQs)",
        
        // Volunteer Section
        vol_title: "జనసహాయ్ వాలంటీర్ సహాయం",
        vol_subtitle: "ఫారమ్ నింపడంలో లేదా పత్రాలను అర్థం చేసుకోవడంలో సహాయం కావాలా? ఉచిత కమ్యూనిటీ వాలంటీర్ సహాయాన్ని కోరండి.",
        vol_demo_badge: "డెమో ప్రోటోటైప్ మాత్రమే",
        vol_demo_alert: "డెమో గమనిక: ఈ వాలంటీర్ అభ్యర్థన పోర్టల్ ప్రదర్శన మరియు పరీక్ష కోసం ఉద్దేశించిన ప్రోటోటైప్. ప్రస్తుతం వాస్తవ వాలంటీర్లు ఎవరూ పంపబడరు. తక్షణ అధికారిక సహాయం కోసం మీ సమీప కామన్ సర్వీస్ సెంటర్ (CSC) ని సంప్రదించండి లేదా జాతీయ హెల్ప్‌లైన్ 14449 కు కాల్ చేయండి.",
        vol_name_label: "మీ పూర్తి పేరు *",
        vol_phone_label: "మొబైల్ నంబర్ (10 అంకెలు) *",
        vol_location_label: "రాష్ట్రం మరియు జిల్లా / పట్టణం *",
        vol_scheme_label: "మీకు సహాయం అవసరమైన పథకం",
        vol_type_label: "అవసరమైన సహాయం రకం",
        vol_type_opt1: "ఫారం నింపడంలో సహాయం",
        vol_type_opt2: "పత్రాల చెక్‌లిస్ట్ తయారీ",
        vol_type_opt3: "అర్హత ధృవీకరణ",
        vol_type_opt4: "భాష అనువాదం / వివరణ",
        vol_lang_label: "సంప్రదింపు ప్రాధాన్య భాష",
        vol_notes_label: "అదనపు వివరాలు లేదా అవసరాలు",
        btn_submit_vol: "వాలంటీర్ అభ్యర్థనను సమర్పించండి (డెమో)",
        vol_success_title: "డెమో అభ్యర్థన విజయవంతంగా సమర్పించబడింది!",
        vol_success_msg: "ధన్యవాదాలు! మీ సిమ్యులేటెడ్ అభ్యర్థన డెమో ట్రాకింగ్ ID కింద నమోదు చేయబడింది:",
        vol_helpline_note: "గుర్తుంచుకోండి: అధికారిక ప్రభుత్వ పథకాల దరఖాస్తుల కోసం, అధికారిక ప్రభుత్వ పోర్టల్‌లు లేదా CSC కేంద్రాలను సంప్రదించండి.",
        
        // Chatbot
        chat_title: "జనసహాయ్ AI అసిస్టెంట్",
        chat_greeting: "నమస్తే! నేను జనసహాయ్ AI ని. ఏదైనా ప్రభుత్వ పథకం, అర్హత, ప్రయోజనాలు లేదా దరఖాస్తు దశల గురించి తెలుగు, హిందీ లేదా ఇంగ్లీషులో నన్ను అడగండి.",
        chat_input_ph: "పథకం గురించి అడగండి (ఉదా. రైతు సబ్సిడీ)...",
        chat_send: "పంపండి",
        chat_typing: "పథకాల కోసం వెతుకుతోంది..."
    }
};

// Current language state (defaults to localStorage or 'en')
let currentLang = localStorage.getItem('jansahay_lang') || 'en';

/**
 * Switch language and re-translate all data-i18n elements
 */
function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('jansahay_lang', lang);
    document.documentElement.lang = lang;

    // Update active class on language buttons
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        if (btn.getAttribute('data-lang-btn') === lang) {
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        }
    });

    // Translate all elements with data-i18n
    const dict = TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // Dispatch event for components that need custom refresh
    window.dispatchEvent(new CustomEvent('jansahay:langchange', { detail: { lang: lang } }));
}

/**
 * Font Size Controls
 */
const FONT_SIZES = {
    'sm': '14px',
    'md': '16px',
    'lg': '18px',
    'xl': '20px'
};

function setFontSize(sizeKey) {
    const size = FONT_SIZES[sizeKey] || '16px';
    document.documentElement.style.setProperty('--base-font-size', size);
    localStorage.setItem('jansahay_fontsize', sizeKey);

    document.querySelectorAll('[data-fontsize-btn]').forEach(btn => {
        if (btn.getAttribute('data-fontsize-btn') === sizeKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * High Contrast Toggle
 */
function toggleContrast() {
    const isContrast = document.body.classList.toggle('high-contrast');
    localStorage.setItem('jansahay_contrast', isContrast ? 'true' : 'false');
    const contrastBtn = document.getElementById('contrastToggleBtn');
    if (contrastBtn) {
        contrastBtn.classList.toggle('active', isContrast);
    }
}

/**
 * Interactive Step Tracker
 */
function initStepTracker(schemeId) {
    const trackerCard = document.querySelector('.step-tracker-card');
    if (!trackerCard) return;

    const storageKey = 'jansahay_steps_' + schemeId;
    const items = trackerCard.querySelectorAll('.step-item');
    if (!items.length) return;

    // Load saved states
    let saved = [];
    try {
        saved = JSON.parse(localStorage.getItem(storageKey)) || [];
    } catch (e) {
        saved = [];
    }

    // Apply saved checkboxes
    items.forEach((item, idx) => {
        const cb = item.querySelector('.step-checkbox');
        if (cb) {
            cb.checked = !!saved[idx];
            if (cb.checked) {
                item.classList.add('completed');
            } else {
                item.classList.remove('completed');
            }

            cb.addEventListener('change', () => {
                if (cb.checked) {
                    item.classList.add('completed');
                } else {
                    item.classList.remove('completed');
                }
                saveTrackerState();
                updateTrackerUI();
            });
        }
    });

    function saveTrackerState() {
        const states = [];
        items.forEach(item => {
            const cb = item.querySelector('.step-checkbox');
            states.push(cb ? cb.checked : false);
        });
        localStorage.setItem(storageKey, JSON.stringify(states));
    }

    function updateTrackerUI() {
        let completedCount = 0;
        let firstPendingIdx = -1;

        items.forEach((item, idx) => {
            const cb = item.querySelector('.step-checkbox');
            const isDone = cb ? cb.checked : false;
            if (isDone) {
                completedCount++;
                item.classList.remove('active');
            } else {
                if (firstPendingIdx === -1) {
                    firstPendingIdx = idx;
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            }
        });

        const total = items.length;
        const pct = Math.round((completedCount / total) * 100);

        // Progress bar
        const barInner = document.getElementById('stepProgressBar');
        if (barInner) barInner.style.width = pct + '%';

        // Progress text
        const pctText = document.getElementById('stepProgressPct');
        if (pctText) pctText.textContent = `${pct}% (${completedCount} of ${total} steps)`;

        // Active step callout text
        const activeTextEl = document.getElementById('activeStepDesc');
        if (activeTextEl) {
            if (firstPendingIdx !== -1) {
                const pendingItem = items[firstPendingIdx];
                const titleBadge = pendingItem.querySelector('.step-badge');
                const badgeText = titleBadge ? titleBadge.textContent : `Step ${firstPendingIdx + 1}`;
                const stepText = pendingItem.querySelector('.step-text').textContent;
                activeTextEl.textContent = `${badgeText}: ${stepText.slice(0, 110)}...`;
            } else {
                activeTextEl.textContent = TRANSLATIONS[currentLang]?.all_steps_done_msg || "All steps completed!";
            }
        }

        // Celebration banner
        const celebration = document.getElementById('stepCelebrationBanner');
        if (celebration) {
            celebration.style.display = (completedCount === total && total > 0) ? 'block' : 'none';
        }
    }

    // Advance to Next Step button
    const nextBtn = document.getElementById('advanceNextStepBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            for (let item of items) {
                const cb = item.querySelector('.step-checkbox');
                if (cb && !cb.checked) {
                    cb.checked = true;
                    item.classList.add('completed');
                    saveTrackerState();
                    updateTrackerUI();
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    break;
                }
            }
        });
    }

    // Reset button
    const resetBtn = document.getElementById('resetStepTrackerBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm("Reset step tracker progress for this scheme?")) {
                items.forEach(item => {
                    const cb = item.querySelector('.step-checkbox');
                    if (cb) cb.checked = false;
                    item.classList.remove('completed');
                });
                saveTrackerState();
                updateTrackerUI();
            }
        });
    }

    // Initial update
    updateTrackerUI();
}

/**
 * Interactive Required Documents Checklist
 */
function initDocsChecklist(schemeId) {
    const docsCard = document.querySelector('.docs-checklist-card');
    if (!docsCard) return;

    const storageKey = 'jansahay_docs_' + schemeId;
    const items = docsCard.querySelectorAll('.doc-item');
    if (!items.length) return;

    let saved = [];
    try {
        saved = JSON.parse(localStorage.getItem(storageKey)) || [];
    } catch (e) {
        saved = [];
    }

    items.forEach((item, idx) => {
        const cb = item.querySelector('.doc-checkbox');
        if (cb) {
            cb.checked = !!saved[idx];
            if (cb.checked) item.classList.add('checked');

            cb.addEventListener('change', () => {
                if (cb.checked) {
                    item.classList.add('checked');
                } else {
                    item.classList.remove('checked');
                }
                saveDocsState();
                updateDocsCounter();
            });
        }
    });

    function saveDocsState() {
        const states = [];
        items.forEach(item => {
            const cb = item.querySelector('.doc-checkbox');
            states.push(cb ? cb.checked : false);
        });
        localStorage.setItem(storageKey, JSON.stringify(states));
    }

    function updateDocsCounter() {
        let count = 0;
        items.forEach(item => {
            const cb = item.querySelector('.doc-checkbox');
            if (cb && cb.checked) count++;
        });
        const badge = document.getElementById('docsCountBadge');
        if (badge) {
            const label = TRANSLATIONS[currentLang]?.docs_ready_count || "documents collected";
            badge.textContent = `${count} / ${items.length} ${label}`;
        }
    }

    // Mark all docs button
    const checkAllBtn = document.getElementById('checkAllDocsBtn');
    if (checkAllBtn) {
        checkAllBtn.addEventListener('click', () => {
            items.forEach(item => {
                const cb = item.querySelector('.doc-checkbox');
                if (cb) cb.checked = true;
                item.classList.add('checked');
            });
            saveDocsState();
            updateDocsCounter();
        });
    }

    // Reset docs button
    const resetDocsBtn = document.getElementById('resetDocsBtn');
    if (resetDocsBtn) {
        resetDocsBtn.addEventListener('click', () => {
            items.forEach(item => {
                const cb = item.querySelector('.doc-checkbox');
                if (cb) cb.checked = false;
                item.classList.remove('checked');
            });
            saveDocsState();
            updateDocsCounter();
        });
    }

    updateDocsCounter();
}

/**
 * Volunteer Assistance Request Demo Form
 */
function initVolunteerForm() {
    const form = document.getElementById('volunteerRequestForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = "Recording Demo Request...";

        const formData = new FormData(form);
        const payload = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            state_district: formData.get('state_district'),
            scheme_name: formData.get('scheme_name'),
            assistance_type: formData.get('assistance_type'),
            preferred_lang: formData.get('preferred_lang') || currentLang,
            notes: formData.get('notes')
        };

        try {
            const res = await fetch('/request-assistance', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            
            // Show Demo Confirmation Card
            const resultBox = document.getElementById('volunteerDemoResult');
            if (resultBox && data.success) {
                resultBox.style.display = 'block';
                document.getElementById('demoTrackingId').textContent = data.tracking_id;
                document.getElementById('demoCitizenName').textContent = data.name;
                document.getElementById('demoSchemeName').textContent = data.scheme_name || 'General Guidance';
                form.reset();
                resultBox.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (err) {
            console.error('Demo request error:', err);
            // Simulated local fallback
            const randId = 'JS-DEMO-' + Math.floor(10000 + Math.random() * 90000);
            const resultBox = document.getElementById('volunteerDemoResult');
            if (resultBox) {
                resultBox.style.display = 'block';
                document.getElementById('demoTrackingId').textContent = randId;
                document.getElementById('demoCitizenName').textContent = payload.name;
                document.getElementById('demoSchemeName').textContent = payload.scheme_name || 'General Guidance';
                form.reset();
                resultBox.scrollIntoView({ behavior: 'smooth' });
            }
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

/**
 * AI Chatbot Assistant Widget
 */
function initChatbot() {
    const chatWindow = document.getElementById('chatWindow');
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');
    if (!chatWindow || !chatBody || !chatInput) return;

    window.toggleChatWindow = function() {
        const isHidden = (chatWindow.style.display === 'none' || !chatWindow.style.display);
        chatWindow.style.display = isHidden ? 'flex' : 'none';
        if (isHidden) chatInput.focus();
    };

    window.handleKeydown = function(event) {
        if (event.key === 'Enter') sendMessage();
    };

    window.sendMessage = async function() {
        const text = chatInput.value.trim();
        if (!text) return;

        appendMessage(text, 'user');
        chatInput.value = '';
        chatInput.disabled = true;

        const typingText = TRANSLATIONS[currentLang]?.chat_typing || "Searching schemes...";
        const typingIndicator = appendMessage(typingText, 'bot');

        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, lang: currentLang })
            });
            if (!response.ok) throw new Error('Network error');
            const data = await response.json();
            if (typingIndicator.parentNode) chatBody.removeChild(typingIndicator);
            appendMessage(data.response, 'bot');
        } catch (error) {
            console.warn('Chat API error:', error);
            if (typingIndicator.parentNode) chatBody.removeChild(typingIndicator);
            appendMessage("I couldn't reach the AI server right now, but you can explore schemes on our Search page or check back shortly.", 'bot');
        } finally {
            chatInput.disabled = false;
            chatInput.focus();
        }
    };

    function appendMessage(msg, sender) {
        const el = document.createElement('div');
        el.className = `chat-message ${sender}`;
        el.textContent = msg;
        chatBody.appendChild(el);
        chatBody.scrollTop = chatBody.scrollHeight;
        return el;
    }
}

/**
 * Broken Image Prevention Handler (Req 1)
 */
function handleBrokenImages() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            // If next sibling is a CSS placeholder, reveal it
            if (this.nextElementSibling && this.nextElementSibling.classList.contains('styled-css-placeholder')) {
                this.nextElementSibling.style.display = 'flex';
            }
        });
    });
}

// On DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Init
    setLanguage(currentLang);

    // 2. Font Size Init
    const savedFontSize = localStorage.getItem('jansahay_fontsize') || 'md';
    setFontSize(savedFontSize);

    // 3. Contrast Init
    if (localStorage.getItem('jansahay_contrast') === 'true') {
        document.body.classList.add('high-contrast');
        const contrastBtn = document.getElementById('contrastToggleBtn');
        if (contrastBtn) contrastBtn.classList.add('active');
    }

    // 4. Broken image prevention
    handleBrokenImages();

    // 5. Initialize Components
    initVolunteerForm();
    initChatbot();

    // Check for scheme page initializers
    const schemeMeta = document.getElementById('schemeMetadata');
    if (schemeMeta) {
        const schemeId = schemeMeta.getAttribute('data-scheme-id');
        initStepTracker(schemeId);
        initDocsChecklist(schemeId);
    }
});
