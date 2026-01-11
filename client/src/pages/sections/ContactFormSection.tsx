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
    <section className="flex flex-col w-full items-center gap-[65px] px-4 py-8">
      <h2 className="w-full [font-family:'Roboto',Helvetica] font-semibold text-[#1babc6] text-[37px] text-center tracking-[0] leading-[normal]">
        Our Core Philosophy
      </h2>

      <div className="flex flex-col items-start gap-[52px] w-full max-w-[1365px]">
        {philosophyItems.map((item, index) => (
          <article
            key={index}
            className={`flex items-center gap-7 w-full ${
              item.imagePosition === "left" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="flex flex-col flex-1 items-start gap-[27px]">
              <h3 className="w-full [font-family:'Montserrat',Helvetica] font-semibold text-[#2a24a3] text-[38px] tracking-[0] leading-[normal]">
                {item.title}
              </h3>

              <p className="w-full [font-family:'Montserrat',Helvetica] font-medium text-[#6f797b] text-3xl tracking-[0] leading-[normal]">
                {item.description}
              </p>
            </div>

            <img
              className="flex-1 max-w-[661px] h-auto object-cover"
              alt={item.title}
              src={item.image}
            />
          </article>
        ))}
      </div>
    </section>
  );
};
