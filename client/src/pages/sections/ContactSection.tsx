import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabItems = [
  { id: "software", label: "Software", active: true },
  { id: "it-services", label: "It Services", active: false },
  { id: "marketing", label: "Marketing", active: false },
  { id: "analytics", label: "Analytics", active: false },
  { id: "design", label: "Design", active: false },
  { id: "consulting", label: "Consulting", active: false },
];

const serviceCards = [
  {
    icon: "/figmaAssets/web-development.png",
    title: "Web & Mobile Development",
    description:
      "Full-stack engineering using modern frameworks to deliver responsive web portals and intuitive iOS/Android applications.",
  },
  {
    icon: "/figmaAssets/strategy.png",
    title: "Workflow Automation",
    description:
      "Reducing manual overhead by deploying logic-based triggers via Microsoft Power Automate, Zapier, and n8n",
  },
  {
    icon: "/figmaAssets/success.png",
    title: "Rapid Development (Low-Code)",
    description:
      "Utilizing OutSystems, WeWeb, Xano, and Supabase to bring products to market 3x faster without compromising on security.",
  },
  {
    icon: "/figmaAssets/automation.png",
    title: "Systems Integrations",
    description:
      "Eliminating data silos by connecting your existing tools via custom APIs and middleware",
  },
];

const partnerLogos = [
  {
    src: "/figmaAssets/image-3.png",
    alt: "Image",
    className: "w-[175.19px] h-[52.89px]",
  },
  {
    src: "/figmaAssets/image-4.png",
    alt: "Image",
    className: "w-[166.54px] h-[55.51px] object-cover",
  },
  {
    src: "/figmaAssets/11-1.png",
    alt: "Element",
    className: "w-[127.63px] h-[41.19px] object-cover",
  },
  {
    src: "/figmaAssets/11-2.png",
    alt: "Element",
    className: "w-[169.86px] h-[30.8px]",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="flex bg-[#ffffff] w-full">
      <div className="flex mt-[76px] w-full max-w-[1353px] mx-auto px-4 flex-col items-center gap-[38px]">
        <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-transparent text-[37px] text-center tracking-[0] leading-[normal]">
          <span className="font-medium text-[#1babc6]">Our </span>
          <span className="font-bold text-[#1babc6]">Services</span>
        </h2>

        <div className="flex flex-col items-center gap-[66px] w-full">
          <Tabs defaultValue="software" className="w-full max-w-[759px]">
            <TabsList className="w-full h-[63px] bg-[#ffffff] rounded-[100000px] shadow-[0px_0px_2px_#00000040] p-1.5 justify-between">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`h-[51px] px-2.5 rounded-[110px] [font-family:'Montserrat',Helvetica] text-lg tracking-[0] leading-[normal] data-[state=active]:bg-[#2a24a3] data-[state=active]:text-[#ffffff] data-[state=active]:font-semibold data-[state=active]:text-[19px] data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#2a24a3] data-[state=inactive]:font-medium ${tab.active ? "min-w-[139px]" : ""}`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex flex-col items-start gap-[57px] w-full">
            <div className="flex items-center gap-[49px] w-full">
              <div className="flex flex-col w-full max-w-[666px] items-start gap-5">
                <h3 className="w-full max-w-[444px] [font-family:'Montserrat',Helvetica] font-normal text-[#2a24a3] text-[42px] tracking-[0] leading-[normal]">
                  <span className="font-medium">Custom </span>
                  <span className="font-bold">Software</span>
                  <span className="font-medium"> &amp; </span>
                  <span className="font-bold">Enterprise</span>
                  <span className="font-medium"> Solutions</span>
                </h3>

                <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#6f797b] text-3xl tracking-[0] leading-[normal]">
                  We develop high-performance software designed to scale with
                  your user base and
                  <br />
                  operational complexity.
                </p>
              </div>

              <img
                className="w-full max-w-[617.39px] h-auto"
                alt="Chatgpt image jan"
                src="/figmaAssets/chatgpt-image-jan-3--2026--12-47-23-pm-1.png"
              />
            </div>

            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex items-center gap-[22px] w-full">
                {serviceCards.slice(0, 2).map((card, index) => (
                  <Card
                    key={index}
                    className="flex-1 h-[394px] rounded-[20px] border border-solid border-[#f0e2e2]"
                  >
                    <CardContent className="flex flex-col h-full items-center gap-[37px] pt-[31px] pb-[21px] px-[17px]">
                      <div className="relative flex items-center justify-center">
                        <div className="w-[114px] h-[114px] bg-[#f6f6f6] rounded-[57px]" />
                        <img
                          className="absolute w-[123px] h-[123px] object-cover"
                          alt={card.title}
                          src={card.icon}
                        />
                      </div>

                      <div className="flex flex-col items-center justify-center gap-[21px] w-full">
                        <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#2a24a3] text-[25px] text-center tracking-[0] leading-[normal]">
                          {card.title}
                        </h4>

                        <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#6f7a7c] text-2xl text-center tracking-[0] leading-[normal]">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-center gap-[22px] w-full">
                {serviceCards.slice(2, 4).map((card, index) => (
                  <Card
                    key={index}
                    className="flex-1 h-[394px] rounded-[20px] border border-solid border-[#f0e2e2]"
                  >
                    <CardContent className="flex flex-col h-full items-center gap-[37px] pt-[31px] pb-[21px] px-[17px]">
                      <div className="w-[114px] h-[114px] bg-[#f6f6f6] rounded-[57px] flex items-center justify-center">
                        <img
                          className="w-[100px] h-[100px] object-cover"
                          alt={card.title}
                          src={card.icon}
                        />
                      </div>

                      <div className="flex flex-col items-center justify-center gap-[21px] w-full">
                        <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#2a24a3] text-[25px] text-center tracking-[0] leading-[normal]">
                          {card.title}
                        </h4>

                        <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#6f7a7c] text-2xl text-center tracking-[0] leading-[normal]">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="w-full rounded-[20px] border border-solid border-[#f0e2e2]">
                <CardContent className="flex items-center gap-[41px] px-[41px] py-[31px]">
                  <div className="w-[114px] h-[114px] bg-[#f6f6f6] rounded-[57px] flex items-center justify-center flex-shrink-0">
                    <img
                      className="w-[69.66px] h-[69.66px] object-cover"
                      alt="Crm"
                      src="/figmaAssets/crm.png"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-[41px] flex-1">
                    <div className="flex flex-col items-start justify-center gap-[21px] w-full">
                      <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#2a24a3] text-[27px] tracking-[0] leading-[normal]">
                        Enterprise Resource Planning (ERP) &amp; CRM
                      </h4>

                      <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#6f7a7c] text-2xl tracking-[0] leading-[normal]">
                        Specialized deployment and customization of
                        market-leading platforms to centralize finance, HR, and
                        supply chain operations
                      </p>
                    </div>

                    <div className="flex items-center gap-[43px]">
                      {partnerLogos.map((logo, index) => (
                        <img
                          key={index}
                          className={logo.className}
                          alt={logo.alt}
                          src={logo.src}
                        />
                      ))}
                    </div>
                  </div>

                  <Button className="w-[213px] h-[55px] bg-[#2a24a3] rounded-[110px] flex items-center justify-center gap-2.5 p-2.5 hover:bg-[#2a24a3]/90">
                    <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#ffffff] text-[21px] tracking-[0] leading-[normal]">
                      More Details
                    </span>
                    <img
                      className="w-[29px] h-[29px]"
                      alt="Iconoir arrow up"
                      src="/figmaAssets/iconoir-arrow-up-circle.svg"
                    />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
