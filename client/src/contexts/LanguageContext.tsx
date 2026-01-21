import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.service": "Service",
    "nav.aboutUs": "About Us",
    "nav.portfolio": "Portfolio",
    "nav.whyUs": "Why Us?",
    "nav.contactUs": "Contact us",
    "nav.langSwitch": "العربية",

    // Hero Section
    "hero.integrated": "Integrated ",
    "hero.businessSolutions": "Business ",
    "hero.businessSolutions2":'Solutions',
    "hero.subtitle": "Bridging the gap between ambitious vision and technical reality.",
    "hero.getStarted": "Get Started",
    "hero.ourServices": "Our Services",

    // Services Section
    "services.our": "Our ",
    "services.title": "Services",
    "services.software": "Software",
    "services.itServices": "It Services",
    "services.marketing": "Marketing",
    "services.analytics": "Analytics",
    "services.design": "Design",
    "services.consulting": "Consulting",
    "services.custom": "Custom ",
    "services.softwareWord": "Software",
    "services.and": " & ",
    "services.enterprise": "Enterprise",
    "services.solutions": " Solutions",
    "services.description": "We develop high-performance software designed to scale with your user base and operational complexity.",
    "services.webMobile": "Web & Mobile Development",
    "services.webMobileDesc": "Full-stack engineering using modern frameworks to deliver responsive web portals and intuitive iOS/Android applications.",
    "services.workflow": "Workflow Automation",
    "services.workflowDesc": "Reducing manual overhead by deploying logic-based triggers via Microsoft Power Automate, Zapier, and n8n",
    "services.rapidDev": "Mobile Attribution",
    "services.rapidDevDesc": "Utilizing AppsFlyer and Adjust to track the exact journey of your mobile app users from click to conversion",
    "services.systems": "Cloud & Hosting",
    "services.systemsDesc": "Scalable Shared and VPS Hosting environments optimized for speed, paired with expert Cloud Management and Domain administration",
    "services.erp": "Enterprise Resource Planning (ERP) & CRM",
    "services.erpDesc": "Specialized deployment and customization of market-leading platforms to centralize finance, HR, and supply chain operations",
    "services.moreDetails": "More Details",

    // IT Services
    "services.it.title": "Managed IT Services &  Infrastructure ",
    "services.it.desc": "Reliable, secure, and scalable infrastructure designed to minimize downtime and protect digital assets",
    "services.it.support": "Network Implementation",
    "services.it.supportDesc": "Design and deployment of robust physical infrastructures, including Low Current systems and structured cabling",
    "services.it.cloud": "Systems Administration & IT Support",
    "services.it.cloudDesc": "24/7 monitoring, server maintenance, and multi-tier technical support for your internal team",
    "services.it.security": "IT Outsourcing",
    "services.it.securityDesc": "Access a dedicated pool of engineers and specialists without the overhead of full-time internal hiring",
    "services.it.moreTitle":"Unified VoIP & Communication Solutions",
    "services.it.moreDesc":"We provide enterprise-grade voice systems deployable on On-Premises hardware or as a Cloud PBX, supported by flexible integration via VoIP Gateways (GSM Gateways, USB Dongles, and Digital Trunks)",
    // Marketing
    "services.marketing.title": "Digital Marketing & Growth Engineering ",
    "services.marketing.desc": "We combine creative storytelling with rigorous data science to maximize your Return on Ad Spend (ROAS)",
    "services.marketing.seo": "Multi-Channel Media Buying",
    "services.marketing.seoDesc": "Precision-targeted campaigns across Meta, TikTok, Google, YouTube, Snapchat, and LinkedIn",
    "services.marketing.performance": "Content & Moderation",
    "services.marketing.performanceDesc": "Creating high-impact visual/textual content and managing community engagement to maintain a 24/7 positive brand image.",
    "services.marketing.brand": "Marketing Analytics",
    "services.marketing.brandDesc": "Advanced tracking setups using Google Tag Manager and GA4",

    // Analytics
    "services.analytics.title": "Data Analysis & Business  Intelligence (BI)",
    "services.analytics.desc": "Transforming fragmented data into a clear roadmap for executive decision-making.",
    "services.analytics.bi": "Data Processing",
    "services.analytics.biDesc": "Utilizing Excel for rapid modeling and Python for complex, large scale data manipulation",
    "services.analytics.predictive": "Visual Storytelling",
    "services.analytics.predictiveDesc": "Developing interactive, real-time dashboards in Microsoft Power BI and Tableau that highlight KPIs and identify market trends",
    "services.analytics.audit": "Data Auditing",
    "services.analytics.auditDesc": "Ensuring data integrity and compliance through rigorous validation processes.",

    // Design
    "services.design.title": "Design Brand Identity, UI & UX",
    "services.design.desc": "Merging psychology with aesthetics to create seamless digital journeys.",
    "services.design.uiux": "Visual Identity",
    "services.design.uiuxDesc": "Establishing a cohesive brand language, from logos to typography and brand guidelines",
    "services.design.mobile": "UX Research & Redesign",
    "services.design.mobileDesc": "Analyzing user behavior to identify friction points and redesigning interfaces to improve conversion rates",
    "services.design.designSystems": "Prototyping",
    "services.design.designSystemsDesc": "From low-fidelity wireframes to interactive high-fidelity prototypes, we validate the user journey before a single line of code is written",

    // Consulting
    "services.consulting.title": "Strategic Consulting",
    "services.consulting.desc": "Expert guidance to navigate digital transformation and achieve operational excellence.",
    "services.consulting.roadmap": "Digital Roadmap",
    "services.consulting.roadmapDesc": "Long-term technology strategies aligned with your business's core objectives.",
    "services.consulting.efficiency": "Operational Efficiency",
    "services.consulting.efficiencyDesc": "Auditing and optimizing business processes through technological intervention.",
    "services.consulting.talent": "Tech Talent Advisory",
    "services.consulting.talentDesc": "Assisting in building and scaling high-performance internal technical teams.",

    // About Section
    "about.title": "About Us",
    "about.description": "Pulvent is a premier technology, marketing, and consulting powerhouse engineered to design, scale, and optimize modern digital ecosystems. We bridge the gap between complex technical challenges and high-impact business results. By fusing rigorous engineering with creative strategy, we don't just build tools—we architect the future of your organization.",

    // Our Work Section
    "work.title": "Our work",
    "work.all": "All",
    "work.mobile": "Mobile",
    "work.web": "Web",
    "work.desktop": "Desktop",
    "work.marketing": "Marketing",
    "work.ai": "Ai",


    // Philosophy Section
    "philosophy.title": "Our Core Philosophy",
    "philosophy.innovation": "Innovation-Driven Architecture",
    "philosophy.innovationDesc": "We don't just follow trends; we build for what's next. By leveraging cutting-edge frameworks, automation, and modern architectures, we ensure your business remains resilient in an evolving digital landscape",
    "philosophy.performance": "Performance-First Strategy",
    "philosophy.performanceDesc": "Technology is only as good as the value it creates. Every line of code we write and every campaign we launch is obsessively aligned with your measurable growth, operational efficiency, and ROI",
    "philosophy.human": "Human-Centric Partnership",
    "philosophy.humanDesc": "We believe the best technology empowers people. Our culture of transparent leadership and collaborative excellence ensures that we act as an extension of your team, driving success through trust and shared vision",

    // Contact Section
    "contact.title": "Contact Us",
    "contact.together": "Lets Contact together",
    "contact.description": "We are committed to processing the information in order to contact you and talk about your project.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Submit",
    "contact.loading":"Sending...",
    "contact.success":"Message sent! We will get back to you soon.",
    "contact.error":"Failed to send message. Please try again.",


    // Footer
    "footer.description": "Manage Customers, Automate Tasks, Collaborate With Your Team, And Keep All Operations In One Smart Platform.",
    "footer.pages": "Pages",
    "footer.home": "Home",
    "footer.about": "About",
    "footer.portfolio": "Portfolio",
    "footer.policies": "Policies",
    "footer.services": "Services",
    "footer.itSolutions": "IT Solutions & Software",
    "footer.marketingGrowth": "Marketing & Growth",
    "footer.uiux": "UI/UX Design & Branding",
    "footer.dataAnalytics": "Data & Analytics",
    "footer.digitalSolutions": "Digital Solutions Development",
    "footer.automation": "Automation & AI Solutions",
    "footer.followUs": "Follow us",
    "footer.getInTouch": "Get in touch",
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.service": "الخدمات",
    "nav.aboutUs": "من نحن",
    "nav.portfolio": "أعمالنا",
    "nav.whyUs": "لماذا نحن؟",
    "nav.contactUs": "تواصل معنا",
    "nav.langSwitch": "English",

    // Hero Section
    "hero.integrated": "حلول ",
    "hero.businessSolutions": "متكاملة ",
    "hero.businessSolutions2":'للأعمال',
    "hero.subtitle":"نحول الرؤية الطموحة إلى واقع عملي",
    "hero.getStarted": "ابدأ رحلتك",
    "hero.ourServices": "خدماتنا",

    // Services Section
    "services.our": " ",
    "services.title": "خدماتنا",
    "services.software": "البرمجيات",
    "services.itServices": "خدمات تقنية",
    "services.marketing": "التسويق",
    "services.analytics": "التحليلات",
    "services.design": "التصميم",
    "services.consulting": "الاستشارات",
    "services.custom": "حلول ",
    "services.softwareWord": "برمجية",
    "services.and": " ",
    "services.enterprise": "مخصصة ",
    "services.solutions": " للمؤسسات",
    "services.description": "نطوّر برمجيات عالية الأداء، مصممة للنمو مع توسّع قاعدة المستخدمين وتعقيد العمليات التشغيلية.",
    "services.webMobile": "تطوير تطبيقات الويب والموبايل",
    "services.webMobileDesc": "نطوّر تطبيقات ويب وموبايل متكاملة باستخدام أحدث التقنيات، لتقديم منصات سريعة الاستجابة وتطبيقات iOS وAndroid سهلة الاستخدام.",
    "services.workflow": "أتمتة سير العمل",
    "services.workflowDesc": "نقلّل الاعتماد على العمليات اليدوية من خلال أتمتة ذكية تعتمد على قواعد منطقية باستخدام Power Automate وZapier وn8n.",
    "services.rapidDev": "إسناد الأجهزة المحمولة",
    "services.rapidDevDesc":"استخدم AppsFlyer وAdjust لتتبع رحلة مستخدمي تطبيقك على الهاتف المحمول بدقة من النقر إلى التحويل",
    "services.systems": "تكامل الأنظمة",
    "services.systemsDesc": "نربط أنظمتك الحالية ونلغي تجزئة البيانات من خلال واجهات برمجية مخصصة (APIs) وحلول تكامل وسيطة.",
    "services.erp": "تخطيط موارد المؤسسات (ERP) وإدارة علاقات العملاء (CRM)",
    "services.erpDesc": "تنفيذ وتخصيص احترافي لمنصات رائدة في السوق، بهدف توحيد وإدارة العمليات المالية والموارد البشرية وسلاسل الإمداد في نظام مركزي واحد.",
    "services.moreDetails": "تفاصيل اكتر",

    // IT Services
    "services.it.title": "خدمات تقنية المعلومات المُدارة",
    "services.it.desc": "حلول تقنية قابلة للتوسع مصممة لتحسين عملياتك الداخلية وتعزيز أمنك الرقمي.",
    "services.it.support": "بناء الشبكات",
    "services.it.supportDesc": "مراقبة استباقية وحل سريع لمشاكل الأجهزة والبرمجيات والشبكات.",
    "services.it.cloud": "البنية التحتية السحابية",
    "services.it.cloudDesc": "تصميم بيئات سحابية آمنة وعالية التوافر على AWS و Azure و Google Cloud.",
    "services.it.security": "تدقيق الأمن السيبراني",
    "services.it.securityDesc": "تقييمات منتظمة للثغرات الأمنية وتطبيق بروتوكولات أمنية متقدمة.",
    "services.it.moreTitle":"Unified VoIP & Communication Solutions",
    "services.it.moreDesc":"Unified VoIP & Communication Solutions",

    // Marketing
    "services.marketing.title": "تسويق رقمي يركز على النمو",
    "services.marketing.desc": "نجمع بين سرد القصص الإبداعي وعلم البيانات الدقيق لتحقيق أقصى عائد على الإنفاق الإعلاني (ROAS).",
    "services.marketing.seo": "شراء الوسائط عبر قنوات متعددة",
    "services.marketing.seoDesc":"حملات تسويقية دقيقة الاستهداف عبر منصات Meta وTikTok وGoogle وYouTube وSnapchat وLinkedIn",
    "services.marketing.performance": "المحتوى والإشراف",
    "services.marketing.performanceDesc": "إنشاء محتوى مرئي/نصي عالي التأثير وإدارة تفاعل المجتمع للحفاظ على صورة إيجابية للعلامة التجارية على مدار الساعة.",
    "services.marketing.brand": "تحليلات التسويق",
    "services.marketing.brandDesc": "إعدادات تتبع متقدمة باستخدام مدير علامات جوجل و GA4",

    // Analytics
    "services.analytics.title": "ذكاء الأعمال القائم على البيانات",
    "services.analytics.desc": "تحويل البيانات المجزأة إلى خارطة طريق واضحة لاتخاذ القرارات التنفيذية.",
    "services.analytics.bi": "معالجة البيانات",
    "services.analytics.biDesc": "استخدام برنامج Excel للنمذجة السريعة ولغة Python لمعالجة البيانات المعقدة واسعة النطاق",
    "services.analytics.predictive": "سرد القصص المرئية",
    "services.analytics.predictiveDesc": "تطوير لوحات معلومات تفاعلية وفورية في Microsoft Power BI و Tableau تُبرز مؤشرات الأداء الرئيسية وتحدد اتجاهات السوق",
    "services.analytics.audit": "تدقيق البيانات",
    "services.analytics.auditDesc": "ضمان سلامة البيانات والامتثال من خلال عمليات التحقق الصارمة.",

    // Design
    "services.design.title": "تصميم يتمحور حول المستخدم",
    "services.design.desc": "دمج علم النفس مع علم الجمال لخلق رحلات رقمية سلسة.",
    "services.design.uiux": "الهوية البصرية",
    "services.design.uiuxDesc": "تأسيس لغة علامة تجارية متماسكة، بدءًا من الشعارات وحتى الطباعة وإرشادات العلامة التجارية",
    "services.design.mobile":"أبحاث تجربة المستخدم وإعادة تصميمها",
    "services.design.mobileDesc": "تحليل سلوك المستخدم لتحديد نقاط الاحتكاك وإعادة تصميم واجهات المستخدم لتحسين معدلات التحويل",
    "services.design.designSystems": "نمازج اوليه",
    "services.design.designSystemsDesc": "بدءًا من المخططات الأولية منخفضة الدقة وصولًا إلى النماذج التفاعلية عالية الدقة، نتحقق من صحة رحلة المستخدم قبل كتابة سطر واحد من التعليمات البرمجية.",

    // Consulting
    "services.consulting.title": "استشارات تقنية استراتيجية",
    "services.consulting.desc": "توجيهات خبيرة للتنقل في التحول الرقمي وتحقيق التميز التشغيلي.",
    "services.consulting.roadmap": "خارطة الطريق الرقمية",
    "services.consulting.roadmapDesc": "استراتيجيات تكنولوجية طويلة الأمد تتماشى مع الأهداف الأساسية لعملك.",
    "services.consulting.efficiency": "الكفاءة التشغيلية",
    "services.consulting.efficiencyDesc": "تدقيق وتحسين العمليات التجارية من خلال التدخل التكنولوجي.",
    "services.consulting.talent": "استشارات المواهب التقنية",
    "services.consulting.talentDesc": "المساعدة في بناء وتوسيع فرق تقنية داخلية عالية الأداء.",

    // About Section
    "about.title": "من نحن",
    "about.description": "Pulvent هي شركة رائدة في التكنولوجيا والتسويق والاستشارات، متخصصة في تصميم وتوسيع وتحسين الأنظمة الرقمية الحديثة. نربط بين التحديات التقنية المعقدة والنتائج التجارية عالية التأثير. ومن خلال الدمج بين هندسة دقيقة واستراتيجية إبداعية، لا نكتفي ببناء الأدوات — بل نُصمّم مستقبل مؤسستك.",

    // Our Work Section
    "work.title": "نماذج من أعمالنا",
    "work.all": "الكل",
    "work.mobile": "موبايل",
    "work.web": "ويب",
    "work.desktop": "سطح المكتب",
    "work.marketing": "تسويق",
    "work.ai": "ذكاء اصطناعي",


    // Philosophy Section
    "philosophy.title": "منهجيتنا في العمل",
    "philosophy.innovation": "بنية تقنية قائمة على الابتكار",
    "philosophy.innovationDesc": "لا نكتفي باتّباع الاتجاهات، بل نبني لما هو قادم. نعتمد على أحدث الأطر التقنية، والأتمتة، والهياكل المعمارية الحديثة لضمان بقاء أعمالك مرنة وقادرة على التكيّف في عالم رقمي متغيّر.",
    "philosophy.performance": "استراتيجية تضع الأداء أولً",
    "philosophy.performanceDesc": "قيمة التكنولوجيا تُقاس بالأثر الذي تحققه. كل سطر برمجي وكل حملة نطلقها موجّهة بدقة لدعم نموك القابل للقياس، ورفع كفاءة العمليات، وتعظيم العائد على الاستثمار.",
    "philosophy.human": "شراكة تتمحور حول الإنسان",
    "philosophy.humanDesc": "نؤمن بأن أفضل التقنيات هي التي تمكّن الإنسان. ثقافتنا القائمة على الشفافية والعمل التعاوني تجعلنا امتدادًا حقيقيًا لفريقك، ونقود النجاح من خلال الثقة ورؤية مشتركة.",

    // Contact Section
    "contact.title": "تواصل معنا",
    "contact.together": "لنبدأ التواصل معًا",
    "contact.description": "نلتزم بمعالجة بياناتك للتواصل معك ومناقشة تفاصيل مشروعك.",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "الرسالة",
    "contact.submit": "إرسال",
    "contact.loading":"جاري الارسال...",
    "contact.success":"تم الإرسال بنجاح! سوف نقوم بالتواصل معك في اقرب وقت.",
    "contact.error":"فشل في ارسال رسالتك برجاء المحاوله مره اخري",

    // Footer
    "footer.description": "إدارة العملاء، وأتمتة المهام، والتعاون مع فريقك، وتنظيم جميع عملياتك في منصة ذكية واحدة.",
    "footer.pages": "الصفحات",
    "footer.home": "الرئيسية",
    "footer.about": "من نحن",
    "footer.portfolio": "أعمالنا",
    "footer.policies": "السياسات",
    "footer.services": "الخدمات",
    "footer.itSolutions": "حلول تقنية المعلومات والبرمجيات",
    "footer.marketingGrowth": "التسويق والنمو",
    "footer.uiux": "تصميم واجهات المستخدم وبناء الهوية",
    "footer.dataAnalytics": "البيانات والتحليلات",
    "footer.digitalSolutions": "تطوير الحلول الرقمية",
    "footer.automation":"حلول الأتمتة والذكاء الاصطناعي",
    "footer.followUs": "تابعنا",
    "footer.getInTouch": "تواصل معنا الآن",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("pulvent-language");
    return (saved === "ar" || saved === "en") ? saved : "en";
  });

  const isRTL = language === "ar";

  useEffect(() => {
    localStorage.setItem("pulvent-language", language);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
    if (isRTL) {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [language, isRTL]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
