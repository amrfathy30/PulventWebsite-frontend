export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[url(/figmaAssets/rectangle-2035.png)] bg-cover bg-center py-16 md:py-24 lg:py-[156px] overflow-hidden">
      <div className="flex flex-col w-[92%] md:w-[89.48%] max-w-[1352px] mx-auto items-center gap-6 md:gap-[34px] px-4">
        <h2 className="self-stretch [font-family:'Montserrat',Helvetica] font-bold text-white text-2xl md:text-3xl lg:text-[39px] text-center tracking-[0] leading-normal">
          About Us
        </h2>

        <p className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-white text-base md:text-xl lg:text-[33px] text-center tracking-[0] leading-snug md:leading-relaxed lg:leading-[44px]">
          Pulvent is a premier technology, marketing, and consulting powerhouse
          engineered to design, scale, and optimize modern digital ecosystems.
          We bridge the gap between complex technical challenges and high-impact
          business results. By fusing rigorous engineering with creative
          strategy, we don&apos;t just build tools—we architect the future of
          your organization.
        </p>
      </div>
    </section>
  );
};
