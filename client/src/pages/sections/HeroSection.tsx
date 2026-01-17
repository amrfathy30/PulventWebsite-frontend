import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = (): JSX.Element => {
  const { language, setLanguage, isRTL, t } = useLanguage();

  const navigationItems = [
    { label: t("nav.service"), hasDropdown: true },
    { label: t("nav.aboutUs"), hasDropdown: false },
    { label: t("nav.portfolio"), hasDropdown: false },
    { label: t("nav.whyUs"), hasDropdown: false },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <section className="w-full relative overflow-hidden">
      <nav className={`flex items-center justify-between gap-4 py-4 px-4 md:py-6 md:px-12`}>
        <img
          className="w-[100px] h-auto md:w-[150.12px] md:h-[55.62px]"
          alt="Logo removebg"
          src="/figmaAssets/logo-removebg-preview-1-1.png"
        />

        <div className={`hidden md:flex items-center justify-between p-1.5 bg-[#ffffff] rounded-[100000px] shadow-[0px_0px_2px_#00000040] gap-4`}>
          <Button className="bg-[#2a24a3] hover:bg-[#2a24a3]/90 text-[#ffffff] rounded-[110px] h-auto px-4 py-2.5 font-bold text-[19px]">
            {t("nav.home")}
          </Button>

          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`text-[#2a24a3] hover:text-[#2a24a3] hover:bg-transparent font-medium text-[17px] h-auto px-2 py-0`}
            >
              {item.label}
              {item.hasDropdown && <ChevronDownIcon className={`w-6 h-6`} />}
            </Button>
          ))}
        </div>

        <div className={`flex items-center gap-2 md:gap-6`}>
          <button 
            onClick={toggleLanguage}
            className="font-medium text-[#2a24a3] text-sm md:text-[21px] cursor-pointer hover:opacity-80 transition-opacity"
            data-testid="button-language-toggle"
          >
            {t("nav.langSwitch")}
          </button>

          <Button className={` bg-[#2a24a3] hover:bg-[#2a24a3]/90 text-[#ffffff] rounded-[110px] h-10 md:h-[55px] px-3 md:px-4 font-medium text-sm md:text-[21px] gap-1 md:gap-2 `}>
            {t("nav.contactUs")}
            <img
              className={`w-5 h-5 md:w-[29px] md:h-[29px] ${isRTL ? "rotate-180" : ""}`}
              alt="Iconoir arrow up"
              src="/figmaAssets/iconoir-arrow-up-circle.svg"
            />
          </Button>
        </div>
      </nav>

      <div className={`flex flex-col md:flex-row gap-8 md:gap-11 px-6 md:px-12 py-10 md:py-14 items-center xs:items-start text-center md:text-left`}>
        <div className={`flex flex-col items-center md:items-start gap-6 md:gap-11 w-full md:w-[603px] ${isRTL ? "md:items-end" : ""}`}>
          <div className={`flex flex-col items-center md:items-start gap-4 md:gap-[39px] w-full ${isRTL ? "md:items-end" : ""}`}>
            <h1 className="text-start w-full max-w-[582px] text-3xl md:text-4xl lg:text-[57px] leading-tight md:leading-normal">
              <span className="font-normal text-[#2a24a3]">{t("hero.integrated")}</span>
              <span className="font-extrabold text-[#2a24a3]">
                {t("hero.businessSolutions")}
              </span>
              <span className={`${isRTL ? "font-normal" : "font-extrabold"}  text-[#2a24a3]`}>
                {t("hero.businessSolutions2")}
              </span>
            </h1>

            <p className="text-start w-full font-medium text-[#000000] text-lg md:text-xl lg:text-[31px] leading-[100%]">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className={`w-full flex flex-col sm:flex-row items-center justify-start gap-4 md:gap-[25px] `}>
            <Button className={`w-full sm:w-auto bg-[#2a24a3] hover:bg-[#2a24a3]/90 text-[#ffffff] rounded-[110px] h-11 md:h-12 lg:h-[55px] px-6 md:px-4 font-medium text-base md:text-lg lg:text-[21px] gap-2`}>
              {t("hero.getStarted")}
              <img
                className={`w-5 h-5 md:w-6 md:h-6 lg:w-[29px] lg:h-[29px] ${isRTL ? "rotate-180" : ""}`}
                alt="Iconoir arrow up"
                src="/figmaAssets/iconoir-arrow-up-circle.svg"
              />
            </Button>

            <Button className={`w-full sm:w-auto bg-[#1babc6] hover:bg-[#1babc6]/90 text-[#ffffff] rounded-[110px] h-11 md:h-12 lg:h-[55px] px-6 md:px-4 font-medium text-base md:text-lg lg:text-[21px] gap-2`}>
              {t("hero.ourServices")}
              <img
                className={`w-5 h-5 md:w-6 md:h-6 lg:w-[29px] lg:h-[29px] ${isRTL ? "rotate-180" : ""}`}
                alt="Iconoir arrow up"
                src="/figmaAssets/iconoir-arrow-up-circle.svg"
              />
            </Button>
          </div>
        </div>

        <img
          className="w-full max-w-[500px] lg:max-w-[714px] h-auto"
          alt="Chatgpt image jan"
          src="/figmaAssets/chatgpt-image-jan-2--2026--12-05-35-am-1.png"
        />
      </div>
    </section>
  );
};
