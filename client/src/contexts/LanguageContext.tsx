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
    "hero.businessSolutions": "Business Solutions",
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
    "hero.businessSolutions": "أعمال متكاملة",
    "hero.subtitle": "نسد الفجوة بين الرؤية الطموحة والواقع التقني.",
    "hero.getStarted": "ابدأ الآن",
    "hero.ourServices": "خدماتنا",

    // Services Section
    "services.our": "",
    "services.title": "خدماتنا",
    "services.software": "البرمجيات",
    "services.itServices": "خدمات تقنية",
    "services.marketing": "التسويق",
    "services.analytics": "التحليلات",
    "services.design": "التصميم",
    "services.consulting": "الاستشارات",
    "services.custom": "حلول ",
    "services.softwareWord": "برمجية",
    "services.and": " و",
    "services.enterprise": "مؤسسية",
    "services.solutions": " مخصصة",
    "services.description": "نطور برمجيات عالية الأداء مصممة للتوسع مع قاعدة المستخدمين وتعقيد العمليات.",
    "services.webMobile": "تطوير الويب والموبايل",
    "services.webMobileDesc": "هندسة متكاملة باستخدام أحدث الأطر لتقديم بوابات ويب سريعة الاستجابة وتطبيقات iOS/Android بديهية.",
    "services.workflow": "أتمتة سير العمل",
    "services.workflowDesc": "تقليل الجهد اليدوي من خلال نشر المشغلات المنطقية عبر Microsoft Power Automate وZapier وn8n",
    "services.rapidDev": "التطوير السريع (Low-Code)",
    "services.rapidDevDesc": "استخدام OutSystems وWeWeb وXano وSupabase لإطلاق المنتجات بسرعة 3 أضعاف دون المساس بالأمان.",
    "services.systems": "تكامل الأنظمة",
    "services.systemsDesc": "إزالة صوامع البيانات عن طريق ربط أدواتك الحالية عبر واجهات برمجة التطبيقات المخصصة والبرمجيات الوسيطة",
    "services.erp": "تخطيط موارد المؤسسات (ERP) وإدارة علاقات العملاء",
    "services.erpDesc": "نشر وتخصيص متخصص للمنصات الرائدة في السوق لمركزة عمليات المالية والموارد البشرية وسلسلة التوريد",
    "services.moreDetails": "المزيد من التفاصيل",

    // About Section
    "about.title": "من نحن",
    "about.description": "بولفنت هي شركة رائدة في مجال التكنولوجيا والتسويق والاستشارات، مصممة لتصميم وتوسيع وتحسين النظم البيئية الرقمية الحديثة. نحن نسد الفجوة بين التحديات التقنية المعقدة ونتائج الأعمال عالية التأثير. من خلال دمج الهندسة الدقيقة مع الاستراتيجية الإبداعية، نحن لا نبني أدوات فحسب - بل نصمم مستقبل مؤسستك.",

    // Our Work Section
    "work.title": "أعمالنا",
    "work.all": "الكل",
    "work.mobile": "موبايل",
    "work.web": "ويب",
    "work.desktop": "سطح المكتب",
    "work.marketing": "تسويق",
    "work.ai": "ذكاء اصطناعي",
    "work.taxik": "تطبيق تاكسيك",

    // Philosophy Section
    "philosophy.title": "فلسفتنا الأساسية",
    "philosophy.innovation": "هندسة مدفوعة بالابتكار",
    "philosophy.innovationDesc": "نحن لا نتبع الاتجاهات فحسب؛ بل نبني للمستقبل. من خلال الاستفادة من أحدث الأطر والأتمتة والهندسات الحديثة، نضمن أن يظل عملك مرنًا في المشهد الرقمي المتطور",
    "philosophy.performance": "استراتيجية الأداء أولاً",
    "philosophy.performanceDesc": "التكنولوجيا جيدة بقدر القيمة التي تخلقها. كل سطر من التعليمات البرمجية نكتبه وكل حملة نطلقها متوافقة بشكل مهووس مع نموك القابل للقياس وكفاءتك التشغيلية وعائد الاستثمار",
    "philosophy.human": "شراكة محورها الإنسان",
    "philosophy.humanDesc": "نؤمن بأن أفضل التكنولوجيا تمكّن الناس. ثقافتنا القائمة على القيادة الشفافة والتميز التعاوني تضمن أننا نعمل كامتداد لفريقك، ندفع النجاح من خلال الثقة والرؤية المشتركة",

    // Contact Section
    "contact.title": "تواصل معنا",
    "contact.together": "لنتواصل معًا",
    "contact.description": "نحن ملتزمون بمعالجة المعلومات من أجل التواصل معك والحديث عن مشروعك.",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "الرسالة",
    "contact.submit": "إرسال",

    // Footer
    "footer.description": "إدارة العملاء، أتمتة المهام، التعاون مع فريقك، والحفاظ على جميع العمليات في منصة ذكية واحدة.",
    "footer.pages": "الصفحات",
    "footer.home": "الرئيسية",
    "footer.about": "من نحن",
    "footer.portfolio": "أعمالنا",
    "footer.policies": "السياسات",
    "footer.services": "الخدمات",
    "footer.itSolutions": "حلول تقنية المعلومات والبرمجيات",
    "footer.marketingGrowth": "التسويق والنمو",
    "footer.uiux": "تصميم واجهة المستخدم والعلامة التجارية",
    "footer.dataAnalytics": "البيانات والتحليلات",
    "footer.digitalSolutions": "تطوير الحلول الرقمية",
    "footer.automation": "الأتمتة وحلول الذكاء الاصطناعي",
    "footer.followUs": "تابعنا",
    "footer.getInTouch": "تواصل معنا",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const isRTL = language === "ar";

  useEffect(() => {
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
