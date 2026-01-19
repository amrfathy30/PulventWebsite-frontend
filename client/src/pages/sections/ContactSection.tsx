import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";



export const ContactSection = (): JSX.Element => {
  const { isRTL, t  } = useLanguage();
  const [activeService, setActiveService] = useState("software");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sheetService, setSheetService] = useState<string | null>(null);
  const partnerLogos = [
    {
      src: "/figmaAssets/image-3.png",
      alt: "Microsoft Dynamics 365",
      className: "w-[175.19px] h-[52.89px]",
      description:
      isRTL?"حلٌّ رائدٌ على مستوى المؤسسات، يوحّد إمكانيات إدارة علاقات العملاء (CRM) وتخطيط موارد المؤسسات (ERP) بالاستفادة من منظومة مايكروسوفت. صُمّم هذا الحل للمؤسسات التي تسعى إلى تكاملٍ عميقٍ مع Office 365 وPower BI، مستخدماً تقنيات الذكاء الاصطناعي المدمجة لدعم عملية اتخاذ القرارات على مستوى الإدارة العليا.":
       "A premier enterprise-grade solution that unifies CRM and ERP capabilities by leveraging the Microsoft ecosystem. It is designed for organizations seeking deep integration with Office 365 and Power BI, utilizing built-in Al to drive executive-level decision-making.",
    },
    {
      src: "/figmaAssets/image-4.png",
      alt: "Odoo",
      className: "w-[166.54px] h-[55.51px] object-cover",
      description: isRTL?`منصة "متكاملة" متعددة الاستخدامات وسهلة الاستخدام. يسمح هيكلها المعياري للشركات بالبدء بالتطبيقات الأساسية - مثل إدارة المخزون أو المحاسبة - وإضافة وظائف متكاملة مع نمو أعمالها، مما يجعلها مثالية لسير العمل المخصص والمحدد للغاية.`:
      `A versatile, user-friendly "all-in-one" platform. Its modular structure allows businesses to start with essential apps—like Inventory or Accounting— and add integrated functionalities as they grow, making it ideal for highly specific, custom workflows`
    },
    {
      src: "/figmaAssets/11-1.png",
      alt: "ERPNext",
      className: "w-[127.63px] h-[41.19px] object-cover",
       description: isRTL?"نظام تخطيط موارد المؤسسات (ERP) شامل ومفتوح المصدر، مصمم خصيصاً لتحقيق المرونة والشفافية. تم تطويره خصيصاً للتصنيع والتوزيع، ويوفر رؤية شاملة لكل شيء بدءاً من الرواتب وحتى تتبع الأصول، مع إعطاء الأولوية لكفاءة التكلفة والعمق الوظيفي.":
       `A comprehensive, open-source ERP tailored for agility and transparency. Built for manufacturing and distribution, it provides a "single pane-of-glass" view of everything from payroll to asset tracking, prioritizing cost efficiency and functional depth`
    },
    {
      src: "/figmaAssets/11-2.png",
      alt: "CRM Systems (Vtiger)",
      className: "w-[169.86px] h-[30.8px]",
       description: isRTL?"نظام تخطيط موارد المؤسسات (ERP) شامل ومفتوح المصدر، مصمم خصيصاً لتحقيق المرونة والشفافية. تم تطويره خصيصاً للتصنيع والتوزيع، ويوفر رؤية شاملة لكل شيء بدءاً من الرواتب وحتى تتبع الأصول، مع إعطاء الأولوية لكفاءة التكلفة والعمق الوظيفي.":
       `A specialized platform designed to bridge marketing, sales, and support. It provides a 360-degree view of the customer journey, enabling automated lead scoring and personalized service to improve long-term retention.`
    },
  ];
  const partnerLogos2 = [
    {
      src: "/figmaAssets/image_3.png",
      alt: "Grandstream",
      className: "w-[175.19px] h-[52.89px]",
      description:isRTL?
      "تُعدّ شركة Grandstream Networks شركة مصنّعة لمعدات الاتصالات الصوتية والمرئية عبر بروتوكول الإنترنت، وأنظمة المراقبة بالفيديو، والبوابات، ومحولات الهاتف التناظرية، وأجهزة IP-PBX القائمة على نظام Asterisk. وتزود Grandstream الشركات الصغيرة والمتوسطة الحجم والمستهلكين بمنتجات قائمة على معيار SIP المفتوح.":
      "Grandstream Networks is a manufacturer of IP voice and video communications equipment, video surveillance, gateways and analog telephone adapters, and Asterisk-based IP-PBX appliances. Grandstream supplies small and medium businesses and consumers with open-standard SIP-based products.",
    },
    {
      src: "/figmaAssets/image_4.png",
      alt: "Yeastar",
      className: "w-[166.54px] h-[55.51px] object-cover",
      description:isRTL?`تلتزم شركة Yestar بمساعدة عملائها على إزالة العوائق التي تحول دون إنشاء بيئة عمل رقمية متصلة وتعاونية. ومن خلال حلولنا سهلة التبني والاستخدام والإدارة، نساعد عملائنا على خوض رحلة تحول رقمي سهلة وممتعة.`:
      `Yeastar is committed to helping customers remove the barriers to a connected and collaborative digital workplace. Through our easy-to-adopt, easy-to-use, and easy-to-manage solutions, we embark our customers on an easy and pleasant digital transformation journey.`
    },
    {
      src: "/figmaAssets/11_1.png",
      alt: "FreePBX",
      className: "w-[127.63px] h-[41.19px] object-cover",
      description:isRTL?`FreePBX هو مشروع مفتوح المصدر، مجاني تمامًا للتنزيل والاستخدام. تستمد FreePBX قوتها من مجتمع عالمي من المطورين الذين يضمنون بقاءها منصة عالية التوافق وقابلة للتخصيص، مع جميع الميزات الأساسية اللازمة لبناء نظام هاتف أعمال قابل للتطوير مهما كانت الميزانية. مع ملايين عمليات التثبيت حول العالم وقاعدة تطوير نشطة للغاية، يواصل مجتمع FreePBX التفوق على الجهود التجارية لقطاع الاتصالات.`:
      `FreePBX is an open source community Completely free to download and use, the power of FreePBX comes from a global community of developers who ensure it remains a high compatibility and customizable platform with all the key features needed to build a scalable business phone system on any budget. With millions of installations worldwide and a very active development base, the FreePBX community continues to out-perform the telecom industry’s commercial efforts.`
    },
    {
      src: "/figmaAssets/11_2.png",
      alt: "Issabel",
      className: "w-[169.86px] h-[30.8px]",
       description:isRTL?`إيزابيل مشروع مفتوح المصدر يتطور باستمرار بفضل تعاون الشركات وعشاق التكنولوجيا. منذ انطلاقه، اعتمد إيزابيل متخصصون من مختلف البلدان ممن يتشاركون رؤية منصة اتصالات موحدة مفتوحة ومتطورة باستمرار. وتساهم الشركات والمطورون والمستخدمون بأفكارهم وملاحظاتهم وخبراتهم لتعزيز منظومته.`:
       `Issabel is an open-source project that continues to evolve thanks to the collaboration of companies and technology enthusiasts. Since its inception, Issabel has been adopted by professionals from various countries who share the vision of an open and continuously improving Unified Communications platform. Companies, developers, and users contribute with ideas, feedback, and expertise to strengthen its ecosystem`
    },
  ];
  // Helper function to render title with alternating font weights
  const renderTitleWithAlternatingWeights = (title: string) => {
    const words = title.split(" ");
    return words.map((word, index) => {
      const fontWeight = index % 2 === 0 ? "font-normal" : "font-semibold"; // 400 (normal) for even, 500 (medium) for odd
      return (
        <span key={index} className={fontWeight}>
          {word}
          {index < words.length - 1 && " "}
        </span>
      );
    });
  };

  const tabItems = [
    { id: "software", label: t("services.software") },
    { id: "it-services", label: t("services.itServices") },
    { id: "marketing", label: t("services.marketing") },
    { id: "analytics", label: t("services.analytics") },
    { id: "design", label: t("services.design") },
    { id: "consulting", label: t("services.consulting") },
  ];

  const getServiceData = (id: string) => {
    switch (id) {
      case "it-services":
        return {
          image:"/figmaAssets/card2.png",
          title: t("services.it.title"),
          description: t("services.it.desc"),
          cards: [
            { icon: "/figmaAssets/Local-area-network.png", title: t("services.it.support"), description: t("services.it.supportDesc") },
            { icon: "/figmaAssets/administration.png", title: t("services.it.cloud"), description: t("services.it.cloudDesc") },
            { icon: "/figmaAssets/outsourcing.png", title: t("services.it.security"), description: t("services.it.securityDesc") },
            { icon: "/figmaAssets/cloud.png", title: t("services.systems"), description: t("services.systemsDesc") },
          ],
        };
      case "marketing":
        return {
          image:"/figmaAssets/card3.png",
          title: t("services.marketing.title"),
          description: t("services.marketing.desc"),
          cards: [
            { icon: "/figmaAssets/Marketing1.png", title: t("services.marketing.seo"), description: t("services.marketing.seoDesc") },
            { icon: "/figmaAssets/Marketing2.png", title: t("services.marketing.performance"), description: t("services.marketing.performanceDesc") },
            { icon: "/figmaAssets/Marketing3.png", title: t("services.marketing.brand"), description: t("services.marketing.brandDesc") },
            { icon: "/figmaAssets/Marketing4.png", title: t("services.rapidDev"), description: t("services.rapidDevDesc") },
          ],
        };
      case "analytics":
        return {
          image:"/figmaAssets/card4.png",
          title: t("services.analytics.title"),
          description: t("services.analytics.desc"),
          cards: [
            { icon: "/figmaAssets/Marketing1.png", title: t("services.analytics.bi"), description: t("services.analytics.biDesc") },
            { icon: "/figmaAssets/Marketing2.png", title: t("services.analytics.predictive"), description: t("services.analytics.predictiveDesc") },
          ],
        };
      case "design":
        return {
          image:"/figmaAssets/card5.png",
          title: t("services.design.title"),
          description: t("services.design.desc"),
          cards: [
            { icon: "/figmaAssets/design1.png", title: t("services.design.uiux"), description: t("services.design.uiuxDesc") },
            { icon: "/figmaAssets/design2.png", title: t("services.design.mobile"), description: t("services.design.mobileDesc") },
            { icon: "/figmaAssets/design3.png", title: t("services.design.designSystems"), description: t("services.design.designSystemsDesc") },
          ],
        };
      case "consulting":
        return {
          image:"/figmaAssets/card6.png",
          title: t("services.consulting.title"),
          description: t("services.consulting.desc"),
        
        };
      default:
        return {
          image:"/figmaAssets/chatgpt-image-jan-3--2026--12-47-23-pm-1.png",
          title: t("services.custom") + t("services.softwareWord") + t("services.and") + t("services.enterprise") + t("services.solutions"),
          description: t("services.description"),
          cards: [
            { icon: "/figmaAssets/web-development.png", title: t("services.webMobile"), description: t("services.webMobileDesc") },
            { icon: "/figmaAssets/strategy.png", title: t("services.workflow"), description: t("services.workflowDesc") },
            { icon: "/figmaAssets/success.png", title: t("services.rapidDev"), description: t("services.rapidDevDesc") },
            { icon: "/figmaAssets/automation.png", title: t("services.systems"), description: t("services.systemsDesc") },
          ],
        };
    }
  };

  const currentService = getServiceData(activeService);

  return (
    <>
      <section className="flex bg-[#ffffff] w-full overflow-hidden mb-6 md:mb-12 lg:mb-[57px] pb-4 md:pb-10 lg:pb-[36px]">
      <div className="flex mt-8 md:mt-16 lg:mt-[76px] w-full max-w-[1353px] mx-auto px-6 md:px-4 flex-col items-center gap-6 md:gap-[38px]">
        <h2 id="our-services" className="font-normal text-transparent text-xl md:text-2xl lg:text-[37px] text-center tracking-[0] leading-[normal]">
          <span className="font-medium text-[#1babc6]">{t("services.our")}</span>
          <span className="font-bold text-[#1babc6]">{t("services.title")}</span>
        </h2>

        <div className="flex flex-col items-center gap-6 md:gap-12 lg:gap-[66px] w-full">
          <Tabs value={activeService} onValueChange={setActiveService} className="w-full max-w-[759px]">
            <TabsList className={`w-full h-auto md:h-12 lg:h-[63px] bg-[#ffffff] rounded-xl md:rounded-[100000px] shadow-0 md:shadow-[0px_0px_2px_#00000040] p-1.5 flex md:flex-wrap justify-start md:justify-between gap-3 md:gap-1 overflow-auto ${isRTL ? "md:flex-row-reverse" : ""}`}>
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`md:bg-transparent h-9 md:h-10 lg:h-[51px] px-2.5 md:px-3 lg:px-2.5 rounded-[110px] text-xs md:text-sm lg:text-lg tracking-[0] leading-[normal] data-[state=active]:bg-[#2a24a3] data-[state=active]:text-[#ffffff] data-[state=active]:font-semibold data-[state=active]:text-sm md:data-[state=active]:text-base lg:data-[state=active]:text-[19px]  data-[state=inactive]:bg-[#E8F0F2] md:data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#2a24a3] data-[state=inactive]:font-medium`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex flex-col items-start gap-6 md:gap-12 lg:gap-[57px] w-full">
            <div className={`flex ${currentService?.cards?'flex-col-reverse md:flex-row':"flex-col-reverse"} items-center gap-6 md:gap-10 lg:gap-[49px] w-full`}>
              <div className={`flex flex-col ${currentService?.cards?'fw-full md:max-w-[666px] items-center md:items-start text-center md:text-left ':"w-[80%] items-center text-center"}  gap-4`}>
                <h3 className={`${isRTL ? "flex space-x-[2px]" : ""} max-w-[450px] text-start w-full font-bold text-[#2a24a3] text-xl md:text-3xl lg:text-[42px] tracking-[0] leading-tight md:leading-[normal]`}>
                  {/* {currentService.title} */}
                  {renderTitleWithAlternatingWeights(currentService.title)}
                </h3>

                <p className={`${currentService?.cards?'text-start':"text-center"}  font-medium text-[#6f797b] text-base md:text-xl lg:text-3xl tracking-[0] leading-normal`}>
                  {currentService.description}
                </p>
              </div>

              <img
                className="w-full md:max-w-[450px] lg:max-w-[617.39px] h-auto"
                alt="Service Representation"
                src={currentService?.image}
              />
            </div>

            <div className="flex flex-col items-start gap-5 md:gap-6 w-full">
              <div className={`${isRTL ? "md:flex-row-reverse" : "md:flex-row "} 
               flex flex-col md:flex-row items-center gap-6 md:gap-[22px] w-full`}>
                {currentService?.cards?
                currentService?.cards.slice(0, currentService?.cards?.length>3?2:3).map((card, index) => (
                  <Card
                    key={index}
                    className="w-full md:flex-1 h-auto md:h-[320px] lg:h-[394px] rounded-[20px] border border-solid border-[#f0e2e2]"
                  >
                    <CardContent className="flex flex-col h-full items-center gap-4 md:gap-6 lg:gap-[37px] pt-6 md:pt-8 lg:pt-[31px] pb-6 lg:pb-[21px] px-4 lg:px-[17px]">
                      <div className="relative flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[114px] lg:h-[114px] bg-[#f6f6f6] rounded-full" />
                        <img
                          className="absolute w-20 h-20 md:w-[90px] md:h-[90px] lg:w-[123px] lg:h-[123px] object-cover"
                          alt={card.title}
                          src={card.icon}
                        />
                      </div>

                      <div className="flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-[21px] w-full">
                        <h4 className="text-[#2a24a3] text-lg md:text-xl lg:text-[25px] text-center tracking-[0] leading-[normal]">
                         {card.title}
                        </h4>

                        <p className="font-medium text-[#6f7a7c] text-sm md:text-base lg:text-2xl text-center tracking-[0] leading-[normal]">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )):""}
              </div>

              <div className={`${isRTL ? "md:flex-row-reverse" : "md:flex-row "} flex flex-col md:flex-row items-center gap-6 md:gap-[22px] w-full`}>
                
                 {(currentService?.cards&&currentService?.cards?.length>3)?
                  currentService.cards.slice(2, 4).map((card, index) => (
                  <Card
                    key={index}
                    className="w-full md:flex-1 h-auto md:h-[320px] lg:h-[394px] rounded-[20px] border border-solid border-[#f0e2e2]"
                  >
                    <CardContent className="flex flex-col h-full items-center gap-4 md:gap-6 lg:gap-[37px] pt-6 md:pt-8 lg:pt-[31px] pb-6 lg:pb-[21px] px-4 lg:px-[17px]">
                      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[114px] lg:h-[114px] bg-[#f6f6f6] rounded-full flex items-center justify-center">
                        <img
                          className="w-14 h-14 md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] object-cover"
                          alt={card.title}
                          src={card.icon}
                        />
                      </div>

                      <div className="flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-[21px] w-full">
                        <h4 className="text-[#2a24a3] text-lg md:text-xl lg:text-[25px] text-center tracking-[0] leading-[normal]">
                        {card.title}
                        </h4>

                        <p className="font-medium text-[#6f7a7c] text-sm md:text-base lg:text-2xl text-center tracking-[0] leading-[normal]">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )):""}
              </div>

              {/* ERP Card - Only show for software service */}
              {activeService === "software" && (
                <Card className="w-full rounded-[20px] border border-solid border-[#f0e2e2]">
                  <CardContent className={`flex flex-col lg:flex-row items-center gap-8 px-6 md:px-[41px] py-8 md:py-[31px] `}>
                    <div className="w-[80px] h-[80px] md:w-[114px] md:h-[114px] bg-[#f6f6f6] rounded-full flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-[50px] h-[50px] md:w-[69.66px] md:h-[69.66px] object-cover"
                        alt="Crm"
                        src="/figmaAssets/crm.png"
                      />
                    </div>

                    <div className={`flex flex-col items-center lg:items-start justify-center gap-6 md:gap-[41px] flex-1 text-center lg:text-left ${isRTL ? "lg:items-end lg:text-right" : ""}`}>
                      <div className={`flex flex-col items-center lg:items-start justify-center gap-4 md:gap-[21px] w-full ${isRTL ? "lg:items-end" : ""}`}>
                        <h4 className="w-full font-semibold text-[#2a24a3] text-xl md:text-[27px] tracking-[0] leading-[normal]">
                          {t("services.erp")}
                        </h4>

                        <p className="font-medium text-[#6f7a7c] text-base md:text-2xl tracking-[0] leading-[normal]">
                          {t("services.erpDesc")}
                        </p>
                      </div>

                      <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-[43px] ${isRTL ? "flex-row-reverse lg:justify-end" : ""}`}>
                        {partnerLogos.map((logo, index) => (
                          <img
                            key={index}
                            className="h-8 md:h-12 w-auto object-contain"
                            alt={logo.alt}
                            src={logo.src}
                          />
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={() => {
                        setSheetService("software");
                        setIsSheetOpen(true);
                      }}
                      className={`w-full md:w-[213px] h-12 md:h-[55px] bg-[#2a24a3] rounded-[110px] flex items-center justify-center gap-2.5 p-2.5 hover:bg-[#2a24a3]/90`}
                    >
                      <span className="font-medium text-[#ffffff] text-lg md:text-[21px] tracking-[0] leading-[normal]">
                        {t("services.moreDetails")}
                      </span>
                      <img
                        className={`w-6 h-6 md:w-[29px] md:h-[29px] ${isRTL ? "rotate-180" : ""}`}
                        alt="Iconoir arrow up"
                        src="/figmaAssets/iconoir-arrow-up-circle.svg"
                      />
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* IT Services More Details Card */}
              {activeService === "it-services" && (
                <Card className="w-full rounded-[20px] border border-solid border-[#f0e2e2]">
                <CardContent className={`flex flex-col lg:flex-row items-center gap-8 px-6 md:px-[41px] py-8 md:py-[31px] `}>
                  <div className="w-[80px] h-[80px] md:w-[114px] md:h-[114px] bg-[#f6f6f6] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      className="w-[50px] h-[50px] md:w-[69.66px] md:h-[69.66px] object-cover"
                      alt="Crm"
                      src="/figmaAssets/1.png"
                    />
                  </div>

                  <div className={`flex flex-col items-center lg:items-start justify-center gap-6 md:gap-[41px] flex-1 text-center lg:text-left ${isRTL ? "lg:items-end lg:text-right" : ""}`}>
                    <div className={`flex flex-col items-center lg:items-start justify-center gap-4 md:gap-[21px] w-full ${isRTL ? "lg:items-end" : ""}`}>
                      <h4 className="w-full font-semibold text-[#2a24a3] text-xl md:text-[27px] tracking-[0] leading-[normal]">
                        {t("services.it.moreTitle")}
                      </h4>

                      <p className="font-medium text-[#6f7a7c] text-base md:text-2xl tracking-[0] leading-[normal]">
                        {t("services.it.moreDesc")}
                      </p>
                    </div>

                    <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-[43px] ${isRTL ? "flex-row-reverse lg:justify-end" : ""}`}>
                    <img
                        
                          className="h-8 md:h-12 w-auto object-contain"
                          alt=""
                          src="/figmaAssets/2.png"
                        />
                    </div>
                  </div>

                  <Button 
                    onClick={() => {
                      setSheetService("it-services");
                      setIsSheetOpen(true);
                    }}
                    className={`w-full md:w-[213px] h-12 md:h-[55px] bg-[#2a24a3] rounded-[110px] flex items-center justify-center gap-2.5 p-2.5 hover:bg-[#2a24a3]/90`}
                  >
                    <span className="font-medium text-[#ffffff] text-lg md:text-[21px] tracking-[0] leading-[normal]">
                      {t("services.moreDetails")}
                    </span>
                    <img
                      className={`w-6 h-6 md:w-[29px] md:h-[29px] ${isRTL ? "rotate-180" : ""}`}
                      alt="Iconoir arrow up"
                      src="/figmaAssets/iconoir-arrow-up-circle.svg"
                    />
                  </Button>
                </CardContent>
              </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetContent side={isRTL ? "left" : "right"} className="w-full sm:max-w-2xl overflow-y-auto">
        {sheetService === "it-services" ? (
          <>
            <div className={`flex flex-col gap-8 mt-8 ${isRTL ? "items-end text-right" : ""}`}>
              <div className={`flex flex-col gap-6 ${isRTL ? "items-end" : ""}`}>
                <div className={`flex flex-wrap items-center gap-6 md:gap-6 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                  {partnerLogos2.map((logo, index) => (
                      <div className="p-4 border shadow-bd rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                    <img
                        className="h-8 md:h-8 w-auto object-contain"
                        alt={logo.alt}
                        src={logo.src}
                      />
                      <p className="font-bold text-xl text-black">{logo.alt}</p>
                    </div>
                      <p className="text-[#2A24A3] font-[500] text-sm md:text-base">
                        {logo?.description}
                      </p>
            
                    </div>
                  ))}
                </div>
              </div>

             
            </div>   </>
        ) : (
          <>
            <div className={`flex flex-col gap-8 mt-8 ${isRTL ? "items-end text-right" : ""}`}>
              <div className={`flex flex-col gap-6 ${isRTL ? "items-end" : ""}`}>
                <div className={`flex flex-wrap items-center gap-6 md:gap-6 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                  {partnerLogos.map((logo, index) => (
                      <div className="p-4 border shadow-bd rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                    <img
                        className="h-8 md:h-8 w-auto object-contain"
                        alt={logo.alt}
                        src={logo.src}
                      />
                      <p className="font-bold text-xl text-black">{logo.alt}</p>
                    </div>
                      <p className="text-[#2A24A3] font-[500] text-sm md:text-base">
                        {logo?.description}
                      </p>
            
                    </div>
                  ))}
                </div>
              </div>

             
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
    </>
  );
};
