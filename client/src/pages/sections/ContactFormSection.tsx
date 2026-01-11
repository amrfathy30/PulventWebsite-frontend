export const ContactFormSection = (): JSX.Element => {
  const philosophyItems = [
    {
      title: "Innovation-Driven Architecture",
      description:
        "We don't just follow trends; we build for what's next. By leveraging cutting-edge frameworks, automation, and modern architectures, we ensure your business remains resilient in an evolving digital landscape",
      image: "/figmaAssets/rectangle-2036-1.svg",
      imagePosition: "right",
    },
    {
      title: "Performance-First Strategy",
      description:
        "Technology is only as good as the value it creates. Every line of code we write and every campaign we launch is obsessively aligned with your measurable growth, operational efficiency, and ROI",
      image: "/figmaAssets/rectangle-2036.svg",
      imagePosition: "left",
    },
    {
      title: "Human-Centric Partnership",
      description:
        "We believe the best technology empowers people. Our culture of transparent leadership and collaborative excellence ensures that we act as an extension of your team, driving success through trust and shared vision",
      image: "/figmaAssets/rectangle-2036-2.svg",
      imagePosition: "right",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-12 md:gap-[65px] px-6 md:px-4 py-12 md:py-8 overflow-hidden">
      <h2 className="w-full [font-family:'Roboto',Helvetica] font-semibold text-[#1babc6] text-2xl md:text-[37px] text-center tracking-[0] leading-[normal]">
        Our Core Philosophy
      </h2>

      <div className="flex flex-col items-start gap-12 md:gap-[52px] w-full max-w-[1365px]">
        {philosophyItems.map((item, index) => (
          <article
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-7 w-full ${
              item.imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
            } text-center md:text-left`}
          >
            <div className="flex flex-col flex-1 items-center md:items-start gap-4 md:gap-[27px]">
              <h3 className="w-full [font-family:'Montserrat',Helvetica] font-semibold text-[#2a24a3] text-2xl md:text-[38px] tracking-[0] leading-tight md:leading-[normal]">
                {item.title}
              </h3>

              <p className="w-full [font-family:'Montserrat',Helvetica] font-medium text-[#6f797b] text-lg md:text-3xl tracking-[0] leading-normal">
                {item.description}
              </p>
            </div>

            <img
              className="w-full md:flex-1 max-w-[661px] h-auto object-cover rounded-2xl"
              alt={item.title}
              src={item.image}
            />
          </article>
        ))}
      </div>
    </section>
  );
};
