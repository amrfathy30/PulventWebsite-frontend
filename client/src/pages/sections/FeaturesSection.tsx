import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesSection = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative w-full bg-[url(/figmaAssets/rectangle-2035.png)] bg-cover bg-center  overflow-hidden">
      <div className="w-full h-full bg-[#083841C9] py-16 md:py-24 lg:py-[156px]">
      <div className="flex flex-col w-[92%] md:w-[89.48%] max-w-[1352px] mx-auto items-center gap-6 md:gap-[34px] px-4">
        <h2 className="self-stretch font-bold text-white text-2xl md:text-3xl lg:text-[39px] text-center tracking-[0] leading-normal">
          {t("about.title")}
        </h2>

        <p className="self-stretch font-medium text-white text-base md:text-xl lg:text-[33px] text-center tracking-[0] leading-snug md:leading-relaxed lg:leading-[44px]">
          {t("about.description")}
        </p>
      </div>
      </div>

    </section>
  );
};
