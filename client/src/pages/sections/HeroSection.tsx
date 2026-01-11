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
    <section className="w-full relative overflow-hidden">
      <nav className="flex items-center justify-between gap-4 py-4 px-4 md:py-6 md:px-12">
        <img
          className="w-[100px] h-auto md:w-[150.12px] md:h-[55.62px]"
          alt="Logo removebg"
          src="/figmaAssets/logo-removebg-preview-1-1.png"
        />

        <div className="hidden md:flex items-center justify-between pl-1.5 pr-[35px] py-1.5 bg-[#ffffff] rounded-[100000px] shadow-[0px_0px_2px_#00000040] gap-4">
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

        <div className="flex items-center gap-2 md:gap-6">
          <div className="[font-family:'Montserrat',Helvetica] font-medium text-[#2a24a3] text-sm md:text-[21px] [direction:rtl]">
            العربية
          </div>

          <Button className="bg-[#2a24a3] hover:bg-[#2a24a3]/90 text-[#ffffff] rounded-[110px] h-10 md:h-[55px] px-3 md:px-4 [font-family:'Montserrat',Helvetica] font-medium text-sm md:text-[21px] gap-1 md:gap-2">
            Contact us
            <img
              className="w-5 h-5 md:w-[29px] md:h-[29px]"
              alt="Iconoir arrow up"
              src="/figmaAssets/iconoir-arrow-up-circle.svg"
            />
          </Button>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row gap-8 md:gap-11 px-6 md:px-12 py-12 md:py-16 items-center md:items-start text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-11 w-full md:w-[603px]">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-[39px] w-full">
            <h1 className="w-full max-w-[582px] [font-family:'Montserrat',Helvetica] text-3xl md:text-[57px] leading-tight md:leading-normal">
              <span className="font-semibold text-[#2a24a3]">Integrated </span>
              <span className="font-extrabold text-[#2a24a3]">
                Business Solutions
              </span>
            </h1>

            <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#000000] text-lg md:text-[31px] leading-normal">
              Bridging the gap between ambitious vision and technical reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[25px]">
            <Button className="w-full sm:w-auto bg-[#2a24a3] hover:bg-[#2a24a3]/90 text-[#ffffff] rounded-[110px] h-12 md:h-[55px] px-6 md:px-4 [font-family:'Montserrat',Helvetica] font-medium text-lg md:text-[21px] gap-2">
              Get Started
              <img
                className="w-6 h-6 md:w-[29px] md:h-[29px]"
                alt="Iconoir arrow up"
                src="/figmaAssets/iconoir-arrow-up-circle.svg"
              />
            </Button>

            <Button className="w-full sm:w-auto bg-[#1babc6] hover:bg-[#1babc6]/90 text-[#ffffff] rounded-[110px] h-12 md:h-[55px] px-6 md:px-4 [font-family:'Montserrat',Helvetica] font-medium text-lg md:text-[21px] gap-2">
              Our Services
              <img
                className="w-6 h-6 md:w-[29px] md:h-[29px]"
                alt="Iconoir arrow up"
                src="/figmaAssets/iconoir-arrow-up-circle.svg"
              />
            </Button>
          </div>
        </div>

        <img
          className="w-full max-w-[714px] h-auto"
          alt="Chatgpt image jan"
          src="/figmaAssets/chatgpt-image-jan-2--2026--12-05-35-am-1.png"
        />
      </div>
    </section>
  );
};
