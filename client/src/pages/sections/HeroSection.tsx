import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "Service", hasDropdown: true },
  { label: "About Us", hasDropdown: false },
  { label: "Portfolio", hasDropdown: false },
  { label: "Why Us?", hasDropdown: false },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <nav className="flex items-center justify-between gap-8 py-6 px-12">
        <img
          className="w-[150.12px] h-[55.62px]"
          alt="Logo removebg"
          src="/figmaAssets/logo-removebg-preview-1-1.png"
        />

        <div className="flex items-center justify-between pl-1.5 pr-[35px] py-1.5 bg-[#ffffff] rounded-[100000px] shadow-[0px_0px_2px_#00000040] gap-4">
          <Button className="bg-[#2a24a3] hover:bg-[#2a24a3]/90 text-[#ffffff] rounded-[110px] h-auto px-4 py-2.5 [font-family:'Montserrat',Helvetica] font-bold text-[19px]">
            Home
          </Button>

          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="text-[#2a24a3] hover:text-[#2a24a3] hover:bg-transparent [font-family:'Montserrat',Helvetica] font-medium text-[17px] h-auto px-2 py-0"
            >
              {item.label}
              {item.hasDropdown && <ChevronDownIcon className="w-6 h-6 ml-0" />}
            </Button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="[font-family:'Montserrat',Helvetica] font-medium text-[#2a24a3] text-[21px] [direction:rtl]">
            العربية
          </div>

          <Button className="bg-[#2a24a3] hover:bg-[#2a24a3]/90 text-[#ffffff] rounded-[110px] h-[55px] px-4 [font-family:'Montserrat',Helvetica] font-medium text-[21px] gap-2">
            Contact us
            <img
              className="w-[29px] h-[29px]"
              alt="Iconoir arrow up"
              src="/figmaAssets/iconoir-arrow-up-circle.svg"
            />
          </Button>
        </div>
      </nav>

      <div className="flex gap-11 px-12 py-16 items-start">
        <div className="flex flex-col items-start gap-11 w-[603px] mt-[15px]">
          <div className="flex flex-col items-start gap-[39px] w-full">
            <h1 className="w-[582px] [font-family:'Montserrat',Helvetica] text-[57px] leading-normal">
              <span className="font-semibold text-[#2a24a3]">Integrated </span>
              <span className="font-extrabold text-[#2a24a3]">
                Business Solutions
              </span>
            </h1>

            <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#000000] text-[31px] leading-normal">
              Bridging the gap between ambitious vision and technical reality.
            </p>
          </div>

          <div className="inline-flex items-center gap-[25px]">
            <Button className="bg-[#2a24a3] hover:bg-[#2a24a3]/90 text-[#ffffff] rounded-[110px] h-[55px] px-4 [font-family:'Montserrat',Helvetica] font-medium text-[21px] gap-2">
              Get Started
              <img
                className="w-[29px] h-[29px]"
                alt="Iconoir arrow up"
                src="/figmaAssets/iconoir-arrow-up-circle.svg"
              />
            </Button>

            <Button className="bg-[#1babc6] hover:bg-[#1babc6]/90 text-[#ffffff] rounded-[110px] h-[55px] px-4 [font-family:'Montserrat',Helvetica] font-medium text-[21px] gap-2">
              Our Services
              <img
                className="w-[29px] h-[29px]"
                alt="Iconoir arrow up"
                src="/figmaAssets/iconoir-arrow-up-circle.svg"
              />
            </Button>
          </div>
        </div>

        <img
          className="w-[714px] h-[382px]"
          alt="Chatgpt image jan"
          src="/figmaAssets/chatgpt-image-jan-2--2026--12-05-35-am-1.png"
        />
      </div>
    </section>
  );
};
