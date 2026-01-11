import { ArrowUpCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const pagesLinks = [
  { label: "Home" },
  { label: "About" },
  { label: "Portfolio" },
  { label: "Policies" },
];

const servicesLinks = [
  { label: "IT Solutions & Software" },
  { label: "Marketing & Growth" },
  { label: "UI/UX Design & Branding" },
  { label: "Data & Analytics" },
  { label: "Digital Solutions Development" },
  { label: "Automation & AI Solutions" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-white-background py-[72px] px-4">
      <div className="max-w-[1352px] mx-auto">
        <div className="flex items-start justify-center gap-[121px] flex-wrap">
          <div className="flex flex-col w-full max-w-[467px] items-center justify-center gap-[27px]">
            <img
              className="w-[173.65px] h-[64.34px]"
              alt="Logo removebg"
              src="/figmaAssets/logo-removebg-preview-1.png"
            />

            <p className="self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#1e1d1e] text-xl text-center tracking-[0] leading-[29px]">
              Manage Customers, Automate Tasks, Collaborate With Your Team, And
              Keep All Operations In One Smart Platform.
            </p>
          </div>

          <div className="flex items-start justify-center gap-[85px] flex-wrap">
            <nav className="flex flex-col items-start gap-[17px]">
              <h3 className="[font-family:'Montserrat',Helvetica] font-normal text-[#221c9d] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Pages
              </h3>

              {pagesLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Montserrat',Helvetica] font-normal text-black-fonts-headings text-[19px] tracking-[0] leading-[normal] hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col items-start gap-4">
              <h3 className="[font-family:'Montserrat',Helvetica] font-normal text-[#221c9d] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Services
              </h3>

              {servicesLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Montserrat',Helvetica] font-normal text-black-fonts-headings text-[19px] tracking-[0] leading-[normal] hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col items-start gap-[27px]">
              <h3 className="[font-family:'Montserrat',Helvetica] font-normal text-[#221c9d] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Follow us
              </h3>

              <img
                className="flex-[0_0_auto]"
                alt="Social media icons"
                src="/figmaAssets/frame-343.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-[72px]">
          <Button className="h-[61px] bg-[#1babc6] hover:bg-[#1babc6]/90 flex items-center justify-center gap-2.5 px-4 rounded-[110px]">
            <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#ffffff] text-[21px] tracking-[0] leading-[normal]">
              Get in touch
            </span>

            <ArrowUpCircleIcon className="w-[29px] h-[29px]" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
