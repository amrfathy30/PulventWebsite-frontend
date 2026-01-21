import { useLanguage } from "@/contexts/LanguageContext";

export const ContactFormSection = (): JSX.Element => {
  const { isRTL, t } = useLanguage();

  const philosophyItems = [
    {
      title: t("philosophy.innovation"),
      description: t("philosophy.innovationDesc"),
      image: "/figmaAssets/rectangle-2036-1.svg",
      imagePosition: "right",
    },
    {
      title: t("philosophy.performance"),
      description: t("philosophy.performanceDesc"),
      image: "/figmaAssets/rectangle-2036.svg",
      imagePosition: "left",
    },
    {
      title: t("philosophy.human"),
      description: t("philosophy.humanDesc"),
      image: "/figmaAssets/rectangle-2036-2.svg",
      imagePosition: "right",
    },
  ];

  return (
    <section id="core-philosophy" className="flex max-w-[1200px] mx-auto flex-col w-full items-center gap-6 md:gap-8 px-6 md:px-0 py-8 overflow-hidden">
      <h2 className="w-full font-semibold text-[#1babc6] text-xl md:text-2xl lg:text-[37px] text-center tracking-[0] leading-[normal]">
        {t("philosophy.title")}
      </h2>

<div className="flex flex-col items-start gap-10 md:gap-14 lg:gap-12 w-full max-w-[1200px] mx-auto">
  {philosophyItems.map((item, index) => {
    const shouldReverse = isRTL 
      ? item.imagePosition === "right" 
      : item.imagePosition === "left";
    
    return (
      <article
        key={index}
        className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 w-full ${
          shouldReverse ? "md:flex-row-reverse" : "md:flex-row"
        } text-center md:text-left ${isRTL ? "md:text-right" : ""}`}
      >
        <div className={`flex flex-col flex-1 items-center md:items-start gap-4 md:gap-6 ${isRTL ? "md:items-end" : ""}`}>
          <h3 className="w-full font-semibold text-[#2a24a3] text-xl md:text-2xl lg:text-3xl tracking-[0] leading-tight">
            {item.title}
          </h3>

          <p className="w-full font-medium text-[#6f797b] text-base md:text-xg lg:text-2xl tracking-[0] leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="flex-1 w-full flex justify-center">
          <img
               className="w-full h-auto max-w-[550px] object-cover rounded-xl shadow-sm"
            alt={item.title}
            src={item.image}
          />
        </div>
      </article>
    );
  })}
</div>
    </section>
  );
};
