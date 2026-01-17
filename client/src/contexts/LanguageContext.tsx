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
    "services.rapidDev": "Rapid Development (Low-Code)",
    "services.rapidDevDesc": "Utilizing OutSystems, WeWeb, Xano, and Supabase to bring products to market 3x faster without compromising on security.",
    "services.systems": "Systems Integrations",
    "services.systemsDesc": "Eliminating data silos by connecting your existing tools via custom APIs and middleware",
    "services.erp": "Enterprise Resource Planning (ERP) & CRM",
    "services.erpDesc": "Specialized deployment and customization of market-leading platforms to centralize finance, HR, and supply chain operations",
    "services.moreDetails": "More Details",

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
    "work.taxik": "Taxik Mobile App",

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
    "services.rapidDev": "التطوير السريع (Low-Code)",
    "services.rapidDevDesc": "نسرّع إطلاق المنتجات باستخدام منصات Low-Code مثل OutSystems وWeWeb وXano وSupabase، بسرعة تصل إلى 3 أضعاف دون المساس بالأمان.",
    "services.systems": "تكامل الأنظمة",
    "services.systemsDesc": "نربط أنظمتك الحالية ونلغي تجزئة البيانات من خلال واجهات برمجية مخصصة (APIs) وحلول تكامل وسيطة.",
    "services.erp": "تخطيط موارد المؤسسات (ERP) وإدارة علاقات العملاء (CRM)",
    "services.erpDesc": "تنفيذ وتخصيص احترافي لمنصات رائدة في السوق، بهدف توحيد وإدارة العمليات المالية والموارد البشرية وسلاسل الإمداد في نظام مركزي واحد.",
    "services.moreDetails": "تفاصيل اكتر",

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
    "work.taxik": "تطبيق تاكسيك",

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
