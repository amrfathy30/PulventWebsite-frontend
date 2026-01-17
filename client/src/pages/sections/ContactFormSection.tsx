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
    <section className="flex flex-col w-full items-center gap-10 md:gap-14 lg:gap-[65px] px-6 md:px-4 py-12 overflow-hidden">
      <h2 className="w-full font-semibold text-[#1babc6] text-xl md:text-2xl lg:text-[37px] text-center tracking-[0] leading-[normal]">
        {t("philosophy.title")}
      </h2>

      <div className="flex flex-col items-start gap-10 md:gap-14 lg:gap-[52px] w-full max-w-[1365px]">
        {philosophyItems.map((item, index) => {
          const shouldReverse = isRTL 
            ? item.imagePosition === "right" 
            : item.imagePosition === "left";
          
          return (
            <article
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-7 w-full ${
                shouldReverse ? "md:flex-row-reverse" : "md:flex-row"
              } text-center md:text-left ${isRTL ? "md:text-right" : ""}`}
            >
              <div className={`flex flex-col flex-1 items-center md:items-start gap-4 md:gap-6 lg:gap-[27px] ${isRTL ? "md:items-end" : ""}`}>
                <h3 className="w-full font-semibold text-[#2a24a3] text-xl md:text-2xl lg:text-[38px] tracking-[0] leading-tight md:leading-[normal]">
                  {item.title}
                </h3>

                <p className="w-full font-medium text-[#6f797b] text-base md:text-lg lg:text-3xl tracking-[0] leading-normal">
                  {item.description}
                </p>
              </div>

              <img
                className="w-full md:flex-1 max-w-[450px] lg:max-w-[661px] h-auto object-cover rounded-xl"
                alt={item.title}
                src={item.image}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
