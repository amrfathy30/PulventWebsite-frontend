import { ArrowUpCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const FooterSection = (): JSX.Element => {
  const { isRTL, t } = useLanguage();

  const pagesLinks = [
    { label: t("footer.home") },
    { label: t("footer.about") },
    { label: t("footer.portfolio") },
    { label: t("footer.policies") },
  ];

  const servicesLinks = [
    { label: t("footer.itSolutions") },
    { label: t("footer.marketingGrowth") },
    { label: t("footer.uiux") },
    { label: t("footer.dataAnalytics") },
    { label: t("footer.digitalSolutions") },
    { label: t("footer.automation") },
  ];

  return (
    <footer className="relative w-full bg-white-background py-12 md:py-[72px] px-6 overflow-hidden">
      <div className="max-w-[1352px] mx-auto">
        <div className={`flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-[121px] ${isRTL ? "lg:flex-row-reverse" : ""}`}>
          <div className="flex flex-col w-full max-w-[467px] items-center justify-center gap-[27px] text-center">
            <img
              className="w-[120px] md:w-[173.65px] h-auto"
              alt="Logo removebg"
              src="/figmaAssets/logo-removebg-preview-1.png"
            />

            <p className="self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#1e1d1e] text-base md:text-xl text-center tracking-[0] leading-snug md:leading-[29px]">
              {t("footer.description")}
            </p>
          </div>

          <div className={`flex flex-wrap items-start justify-center gap-8 md:gap-[85px] ${isRTL ? "flex-row-reverse" : ""}`}>
            <nav className={`flex flex-col items-center lg:items-start gap-4 md:gap-[17px] ${isRTL ? "lg:items-end" : ""}`}>
              <h3 className="[font-family:'Montserrat',Helvetica] font-normal text-[#221c9d] text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {t("footer.pages")}
              </h3>

              {pagesLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Montserrat',Helvetica] font-normal text-black-fonts-headings text-base md:text-[19px] tracking-[0] leading-[normal] hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <nav className={`flex flex-col items-center lg:items-start gap-4 ${isRTL ? "lg:items-end" : ""}`}>
              <h3 className="[font-family:'Montserrat',Helvetica] font-normal text-[#221c9d] text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {t("footer.services")}
              </h3>

              {servicesLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`[font-family:'Montserrat',Helvetica] font-normal text-black-fonts-headings text-base md:text-[19px] tracking-[0] leading-[normal] hover:underline text-center lg:text-left ${isRTL ? "lg:text-right" : ""}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className={`flex flex-col items-center lg:items-start gap-6 md:gap-[27px] ${isRTL ? "lg:items-end" : ""}`}>
              <h3 className="[font-family:'Montserrat',Helvetica] font-normal text-[#221c9d] text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {t("footer.followUs")}
              </h3>

              <img
                className="flex-[0_0_auto] w-[180px] md:w-auto"
                alt="Social media icons"
                src="/figmaAssets/frame-343.svg"
              />
            </div>
          </div>
        </div>

        <div className={`flex justify-center lg:justify-end mt-12 md:mt-[72px] ${isRTL ? "lg:justify-start" : ""}`}>
          <Button className={`w-full sm:w-auto h-12 md:h-[61px] bg-[#1babc6] hover:bg-[#1babc6]/90 flex items-center justify-center gap-2.5 px-6 md:px-4 rounded-[110px] ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#ffffff] text-lg md:text-[21px] tracking-[0] leading-[normal]">
              {t("footer.getInTouch")}
            </span>

            <ArrowUpCircleIcon className={`w-6 h-6 md:w-[29px] md:h-[29px] ${isRTL ? "rotate-180" : ""}`} />
          </Button>
        </div>
      </div>
    </footer>
  );
};
