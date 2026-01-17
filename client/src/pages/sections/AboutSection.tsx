import { ArrowUpCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

const contactInfo = [
  {
    icon: "/figmaAssets/email.png",
    text: "contact@pulvent.com",
    iconClass: "w-[33.14px] h-[27.48px]",
  },
  {
    icon: "/figmaAssets/property-location.png",
    text: "129 Othman Ibn Affan St., Al Nozha – Cairo",
    iconClass: "w-[33.14px] h-[31.72px]",
  },
  {
    icon: "/figmaAssets/mobile-chat.png",
    text: "+20 15 50009295",
    iconClass: "w-[31.72px] h-[33.14px]",
  },
];

export const AboutSection = (): JSX.Element => {
  const { isRTL, t } = useLanguage();

  return (
    <section className="flex flex-col w-full items-center gap-12 md:gap-[78px] py-12 px-6 overflow-hidden">
      <div className="w-full flex justify-center">
        <h2 className="font-semibold text-[#1babc6] text-2xl md:text-[37px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          {t("contact.title")}
        </h2>
      </div>

      <div className="flex flex-col items-start gap-8 md:gap-[7px] w-full max-w-[1297px]">
        <div className={`flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-[65px] w-full`}>
          <div className={`w-full lg:w-[574px] gap-8 md:gap-[42px] flex flex-col items-center lg:items-start text-center lg:text-left ${isRTL ? "lg:items-end lg:text-right" : ""}`}>
            <h3 className="self-stretch font-bold text-[#2a24a3] text-3xl md:text-[42px] tracking-[0] leading-tight md:leading-[normal]">
              {t("contact.together")}
            </h3>

            <p className="self-stretch font-medium text-[#6f797b] text-lg md:text-3xl tracking-[0] leading-normal">
              {t("contact.description")}
            </p>

            <div className={`flex flex-col w-full items-center lg:items-start gap-6 md:gap-[33px] ${isRTL ? "lg:items-end" : ""}`}>
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 md:gap-[19px] w-full `}
                >
                  <img
                    className={`${item.iconClass} flex-shrink-0 w-8 md:w-auto h-auto`}
                    alt={`Contact ${index}`}
                    src={item.icon}
                  />
                  <span className={`font-normal text-black text-base md:text-[23px] tracking-[0] leading-snug md:leading-[33.4px] `}
                  style={{
                    direction:isRTL?'ltr':"rtl"
                  }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

           <div className="w-full flex gap-x-4" >
           <a 
            href="https://www.instagram.com/pulvent_technologies"
            target="_blank"
            >
           <img
              className="w-[68px] aspect-[1/1]"
              alt="Social media icons"
              src="/figmaAssets/instagram.svg"
            />
            </a>
              <a 
            href="https://www.tiktok.com/@pulvent"
            target="_blank"
            >
              <img
              className="w-[68px] aspect-[1/1]"
              alt="Social media icons"
              src="/figmaAssets/tiktok.svg"
            />
             </a>
              <a 
            href="https://www.linkedin.com/company/pulvent/"
            target="_blank"
            >
             <img
              className="w-[68px] aspect-[1/1]"
              alt="Social media icons"
              src="/figmaAssets/linkedIn.svg"
            />
             </a>
              <a 
            href="https://wa.me/+201550009295"
            target="_blank"
            >
              <img
              className="w-[68px] aspect-[1/1]"
              alt="Social media icons"
              src="/figmaAssets/whatsapp.svg"
            />
            </a>
             </div>
          </div>

          <div className="w-full lg:w-[658px] flex flex-col items-start gap-4 p-0">
            <div className="flex flex-col items-end gap-1.5 w-full">
              <div className="flex flex-col w-full items-start gap-4">
                <div className="relative w-full">
                  <Input
                    placeholder={t("contact.name")}
                    className={`w-full h-14 md:h-[67px] bg-white rounded-lg border border-solid border-[#d7d7d7] px-4 md:px-[27px] font-normal text-text-color text-base md:text-[21px] ${isRTL ? "text-right" : ""}`}
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                  <span className={`absolute top-4 md:top-[21px] ${isRTL ? "right-20 md:right-[95px]" : "left-20 md:left-[95px]"} font-normal text-red text-base md:text-lg`}>
                    *
                  </span>
                </div>

                <div className="relative w-full">
                  <Input
                    placeholder={t("contact.email")}
                    type="email"
                    className={`w-full h-14 md:h-[67px] bg-white rounded-lg border border-solid border-[#d7d7d7] px-4 md:px-[27px] font-normal text-text-color text-base md:text-[21px] ${isRTL ? "text-right" : ""}`}
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                  <span className={`absolute top-4 md:top-[15px] ${isRTL ? "right-28 md:right-[150px]" : "left-18 md:left-[91px]"} font-normal text-red text-base md:text-lg`}>
                    *
                  </span>
                </div>

                <div className="relative w-full">
                  <Textarea
                    placeholder={t("contact.message")}
                    className={`w-full h-40 md:h-[209px] bg-white rounded-lg border border-solid border-[#d7d7d7] px-4 md:px-[27px] py-4 md:py-[21px] font-normal text-text-color text-base md:text-[21px] resize-none ${isRTL ? "text-right" : ""}`}
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                </div>

                <Button className={`w-full h-14 md:h-[68px] bg-[#2a24a3] hover:bg-[#2a24a3]/90 rounded-[110px] flex items-center justify-center gap-2.5 font-medium text-[#ffffff] text-lg md:text-[21px]`}>
                  {t("contact.submit")}
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
      </div>
    </section>
  );
};
