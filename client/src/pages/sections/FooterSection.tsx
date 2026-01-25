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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <footer className="relative w-full  bg-white-background py-12 md:py-[72px] px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className={`flex flex-col lg:flex-row items-center lg:items-start justify-between`}>
          <div className="flex flex-col w-full max-w-[467px] items-center justify-center gap-[27px] text-center my-auto mr-0 md:mr-4">
            <img
              className="w-[120px] md:w-[173.65px] h-auto"
              alt="Logo"
              src="/figmaAssets/logo.svg"
            />

            <p className="self-stretch font-normal text-[#1e1d1e] text-base md:text-xl text-center tracking-[0] leading-snug md:leading-[29px]">
              {t("footer.description")}
            </p>
          </div>

          <div className={`hidden md:flex items-start justify-center gap-8 md:gap-[85px]`}>
            {/* <nav className={`flex flex-col items-center lg:items-start gap-4 md:gap-[17px]`}>
              <h3 className="font-normal text-[#221c9d] text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {t("footer.pages")}
              </h3>

              {pagesLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-normal text-black-fonts-headings text-base tracking-[0] leading-[normal] hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav> */}

            <nav className={`flex flex-col items-center lg:items-start gap-4 `}>
              <h3 className="font-normal text-[#221c9d] text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {t("footer.services")}
              </h3>

              {servicesLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={()=>scrollToSection("services")}
                  className={`font-normal text-black-fonts-headings text-base  tracking-[0] leading-[normal] hover:underline text-center lg:text-left ${isRTL ? "lg:text-right" : ""}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className={`flex flex-col items-center lg:items-start gap-6 md:gap-[27px] `}>
              <h3 className="font-normal text-[#221c9d] text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {t("footer.followUs")}
              </h3>

              <div className="w-full flex gap-x-4" >
           <a 
           className="w-[20px] aspect-[1/1] flex items-center justify-center"
            href="https://www.instagram.com/pulvent_technologies"
            target="_blank"
            >
           <img
              className="w-[20px] aspect-[1/1]"
              alt="Social media icons"
              src="/figmaAssets/instagram-sm.svg"
            />
            </a>
              <a 
               className="w-[20px] aspect-[1/1] flex items-center justify-center"
            href="https://www.facebook.com/pulvent/"
            target="_blank"
            >
              <img
              className="w-[20px] aspect-[1/1]"
              alt="Social media icons"
              src="/figmaAssets/facebook-sm.svg"
            />
             </a>
              <a 
               className="w-[20px] aspect-[1/1] flex items-center justify-center"
             href="https://www.tiktok.com/@pulvent"
            target="_blank"
            >
             <img
              className="w-[20px] aspect-[1/1]"
              alt="Social media icons"
              src="/figmaAssets/tiktok-s.svg"
            />
             </a>
              <a 
               className="w-[20px] aspect-[1/1] flex items-center justify-center"
            href="https://www.linkedin.com/company/pulvent/"
            target="_blank"
            >
              <img
              className="w-[20px] aspect-[1/1]"
              alt="Social media icons"
              src="/figmaAssets/linked-in.svg"
            />
            </a>
             </div>

              <Button className={`w-full sm:w-auto h-12 md:h-[61px] bg-[#1babc6] hover:bg-[#1babc6]/90 flex items-center justify-center gap-2.5 px-6 md:px-4 rounded-[110px]`}
              onClick={() => scrollToSection("contact-us")}
              >
                <span className="font-medium text-[#ffffff] text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  {t("footer.getInTouch")}
                </span>

                <img
                  className={`w-6 h-6 md:w-[29px] md:h-[29px] ${isRTL ? "rotate-180" : ""}`}
                  alt="Iconoir arrow up"
                  src="/figmaAssets/iconoir-arrow-up-circle.svg"
                />
              </Button>

            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};
