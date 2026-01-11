import { ArrowUpCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: "/figmaAssets/email.png",
    text: "example@teamwebflow.com",
    iconClass: "w-[33.14px] h-[27.48px]",
  },
  {
    icon: "/figmaAssets/property-location.png",
    text: "4074 Ebert Summit Suite 375",
    iconClass: "w-[33.14px] h-[31.72px]",
  },
  {
    icon: "/figmaAssets/mobile-chat.png",
    text: "+44 123 654 7890",
    iconClass: "w-[31.72px] h-[33.14px]",
  },
];

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[78px] py-12">
      <div className="w-full flex justify-center">
        <h2 className="[font-family:'Roboto',Helvetica] font-semibold text-[#1babc6] text-[37px] text-center tracking-[0] leading-normal whitespace-nowrap">
          Contact Us
        </h2>
      </div>

      <div className="flex flex-col items-start gap-[7px] w-full max-w-[1297px] px-4">
        <div className="flex items-start justify-center gap-[65px] w-full flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-[574px] gap-[42px] flex flex-col items-start">
            <h3 className="self-stretch [font-family:'Roboto',Helvetica] font-bold text-[#2a24a3] text-[42px] tracking-[0] leading-normal">
              Lets Contact together
            </h3>

            <p className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#6f797b] text-3xl tracking-[0] leading-normal">
              We are committed to processing the information in order to contact
              you and talk about your project.
            </p>

            <div className="flex flex-col w-full max-w-[349px] items-start gap-[33px]">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[19px] w-full"
                >
                  <img
                    className={`${item.iconClass} flex-shrink-0`}
                    alt={`Contact ${index}`}
                    src={item.icon}
                  />
                  <span className="[font-family:'Montserrat',Helvetica] font-normal text-black text-[23px] tracking-[0] leading-[33.4px]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <img
              className="w-full max-w-[348px]"
              alt="Social media icons"
              src="/figmaAssets/frame-1171275949.svg"
            />
          </div>

          <div className="w-full lg:w-[658px] flex flex-col items-start gap-2.5 p-2.5">
            <div className="flex flex-col items-end gap-1.5 w-full">
              <div className="flex flex-col w-full max-w-[622.89px] items-start gap-4">
                <div className="relative w-full">
                  <Input
                    placeholder="Name"
                    className="w-full h-[67px] bg-white rounded-lg border border-solid border-[#d7d7d7] px-[27px] [font-family:'Roboto',Helvetica] font-normal text-text-color text-[21px]"
                  />
                  <span className="absolute top-[21px] left-[95px] [font-family:'Montserrat',Helvetica] font-normal text-red text-lg">
                    *
                  </span>
                </div>

                <div className="relative w-full">
                  <Input
                    placeholder="Email"
                    type="email"
                    className="w-full h-[67px] bg-white rounded-lg border border-solid border-[#d7d7d7] px-[27px] [font-family:'Roboto',Helvetica] font-normal text-text-color text-[21px]"
                  />
                  <span className="absolute top-[15px] left-[91px] [font-family:'Montserrat',Helvetica] font-normal text-red text-lg">
                    *
                  </span>
                </div>

                <div className="relative w-full">
                  <Textarea
                    placeholder="Message"
                    className="w-full h-[209px] bg-white rounded-lg border border-solid border-[#d7d7d7] px-[27px] py-[21px] [font-family:'Roboto',Helvetica] font-normal text-text-color text-[21px] resize-none"
                  />
                </div>

                <Button className="w-full h-[68px] bg-[#2a24a3] hover:bg-[#2a24a3]/90 rounded-[110px] flex items-center justify-center gap-2.5 [font-family:'Montserrat',Helvetica] font-medium text-[#ffffff] text-[21px]">
                  Submit
                  <ArrowUpCircleIcon className="w-[29px] h-[29px]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
