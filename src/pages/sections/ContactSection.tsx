import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

const partnerLogos = [
  {
    src: "/figmaAssets/image-3.png",
    alt: "Image",
    className: "w-[175.19px] h-[52.89px]",
  },
  {
    src: "/figmaAssets/image-4.png",
    alt: "Image",
    className: "w-[166.54px] h-[55.51px] object-cover",
  },
  {
    src: "/figmaAssets/11-1.png",
    alt: "Element",
    className: "w-[127.63px] h-[41.19px] object-cover",
  },
  {
    src: "/figmaAssets/11-2.png",
    alt: "Element",
    className: "w-[169.86px] h-[30.8px]",
  },
];

export const ContactSection = (): JSX.Element => {
  const { isRTL, t } = useLanguage();

  const tabItems = [
    { id: "software", label: t("services.software"), active: true },
    { id: "it-services", label: t("services.itServices"), active: false },
    { id: "marketing", label: t("services.marketing"), active: false },
    { id: "analytics", label: t("services.analytics"), active: false },
    { id: "design", label: t("services.design"), active: false },
    { id: "consulting", label: t("services.consulting"), active: false },
  ];

  const serviceCards = [
    {
      icon: "/figmaAssets/web-development.png",
      title: t("services.webMobile"),
      description: t("services.webMobileDesc"),
    },
    {
      icon: "/figmaAssets/strategy.png",
      title: t("services.workflow"),
      description: t("services.workflowDesc"),
    },
    {
      icon: "/figmaAssets/success.png",
      title: t("services.rapidDev"),
      description: t("services.rapidDevDesc"),
    },
    {
      icon: "/figmaAssets/automation.png",
      title: t("services.systems"),
      description: t("services.systemsDesc"),
    },
  ];

  return (
    <section className="flex bg-[#ffffff] w-full overflow-hidden">
      <div className="flex mt-8 md:mt-16 lg:mt-[76px] w-full max-w-[1353px] mx-auto px-6 md:px-4 flex-col items-center gap-6 md:gap-[38px]">
        <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-transparent text-xl md:text-2xl lg:text-[37px] text-center tracking-[0] leading-[normal]">
          <span className="font-medium text-[#1babc6]">{t("services.our")}</span>
          <span className="font-bold text-[#1babc6]">{t("services.title")}</span>
        </h2>

        <div className="flex flex-col items-center gap-6 md:gap-12 lg:gap-[66px] w-full">
          <Tabs defaultValue="software" className="w-full max-w-[759px]">
            <TabsList className={`w-full h-auto md:h-12 lg:h-[63px] bg-[#ffffff] rounded-xl md:rounded-[100000px] shadow-[0px_0px_2px_#00000040] p-1.5 flex flex-wrap justify-center md:justify-between gap-1 ${isRTL ? "md:flex-row-reverse" : ""}`}>
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`h-9 md:h-10 lg:h-[51px] px-2.5 md:px-3 lg:px-2.5 rounded-[110px] [font-family:'Montserrat',Helvetica] text-xs md:text-sm lg:text-lg tracking-[0] leading-[normal] data-[state=active]:bg-[#2a24a3] data-[state=active]:text-[#ffffff] data-[state=active]:font-semibold data-[state=active]:text-sm md:data-[state=active]:text-base lg:data-[state=active]:text-[19px] data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#2a24a3] data-[state=inactive]:font-medium ${tab.active ? "md:min-w-[100px] lg:min-w-[139px]" : ""}`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex flex-col items-start gap-6 md:gap-12 lg:gap-[57px] w-full">
            <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-[49px] w-full ${isRTL ? "md:flex-row-reverse" : ""}`}>
              <div className={`flex flex-col w-full md:max-w-[666px] items-center md:items-start gap-4 text-center md:text-left ${isRTL ? "md:items-end md:text-right" : ""}`}>
                <h3 className="w-full md:max-w-[444px] [font-family:'Montserrat',Helvetica] font-normal text-[#2a24a3] text-xl md:text-3xl lg:text-[42px] tracking-[0] leading-tight md:leading-[normal]">
                  <span className="font-medium">{t("services.custom")}</span>
                  <span className="font-bold">{t("services.softwareWord")}</span>
                  <span className="font-medium">{t("services.and")}</span>
                  <span className="font-bold">{t("services.enterprise")}</span>
                  <span className="font-medium">{t("services.solutions")}</span>
                </h3>

                <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#6f797b] text-base md:text-xl lg:text-3xl tracking-[0] leading-normal">
                  {t("services.description")}
                </p>
              </div>

              <img
                className="w-full md:max-w-[450px] lg:max-w-[617.39px] h-auto"
                alt="Chatgpt image jan"
                src="/figmaAssets/chatgpt-image-jan-3--2026--12-47-23-pm-1.png"
              />
            </div>

            <div className="flex flex-col items-start gap-5 md:gap-6 w-full">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[22px] w-full">
                {serviceCards.slice(0, 2).map((card, index) => (
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
                        <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#2a24a3] text-lg md:text-xl lg:text-[25px] text-center tracking-[0] leading-[normal]">
                          {card.title}
                        </h4>

                        <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#6f7a7c] text-sm md:text-base lg:text-2xl text-center tracking-[0] leading-[normal]">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[22px] w-full">
                {serviceCards.slice(2, 4).map((card, index) => (
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
                        <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#2a24a3] text-lg md:text-xl lg:text-[25px] text-center tracking-[0] leading-[normal]">
                          {card.title}
                        </h4>

                        <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#6f7a7c] text-sm md:text-base lg:text-2xl text-center tracking-[0] leading-[normal]">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="w-full rounded-[20px] border border-solid border-[#f0e2e2]">
                <CardContent className={`flex flex-col lg:flex-row items-center gap-8 px-6 md:px-[41px] py-8 md:py-[31px] ${isRTL ? "lg:flex-row-reverse" : ""}`}>
                  <div className="w-[80px] h-[80px] md:w-[114px] md:h-[114px] bg-[#f6f6f6] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      className="w-[50px] h-[50px] md:w-[69.66px] md:h-[69.66px] object-cover"
                      alt="Crm"
                      src="/figmaAssets/crm.png"
                    />
                  </div>

                  <div className={`flex flex-col items-center lg:items-start justify-center gap-6 md:gap-[41px] flex-1 text-center lg:text-left ${isRTL ? "lg:items-end lg:text-right" : ""}`}>
                    <div className={`flex flex-col items-center lg:items-start justify-center gap-4 md:gap-[21px] w-full ${isRTL ? "lg:items-end" : ""}`}>
                      <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#2a24a3] text-xl md:text-[27px] tracking-[0] leading-[normal]">
                        {t("services.erp")}
                      </h4>

                      <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#6f7a7c] text-base md:text-2xl tracking-[0] leading-[normal]">
                        {t("services.erpDesc")}
                      </p>
                    </div>

                    <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-[43px] ${isRTL ? "lg:justify-end" : ""}`}>
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

                  <Button className={`w-full md:w-[213px] h-12 md:h-[55px] bg-[#2a24a3] rounded-[110px] flex items-center justify-center gap-2.5 p-2.5 hover:bg-[#2a24a3]/90 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#ffffff] text-lg md:text-[21px] tracking-[0] leading-[normal]">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
