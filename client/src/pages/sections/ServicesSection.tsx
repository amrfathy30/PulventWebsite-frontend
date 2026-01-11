"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const filterTabs = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "desktop", label: "Desktop" },
  { id: "marketing", label: "Marketing" },
  { id: "ai", label: "Ai" },
];

const projectImages = [
  {
    src: "/figmaAssets/rectangle-2027.png",
    alt: "Rectangle",
    className: "rounded-[17px] object-cover",
  },
  {
    src: "/figmaAssets/rectangle-2028.png",
    alt: "Rectangle",
    className: "",
  },
  {
    src: "/figmaAssets/rectangle-2029.png",
    alt: "Rectangle",
    className: "",
  },
  {
    src: "/figmaAssets/rectangle-2030.png",
    alt: "Rectangle",
    className: "",
  },
  {
    src: "/figmaAssets/rectangle-2031.png",
    alt: "Rectangle",
    className: "",
  },
  {
    src: "/figmaAssets/rectangle-2032.png",
    alt: "Rectangle",
    className: "",
    title: "Taxik Mobile App",
  },
];

export const ServicesSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="flex flex-col w-full items-center gap-[86px] py-12">
      <div className="inline-flex flex-col items-center gap-[30px]">
        <div className="flex justify-center">
          <h2 className="w-[274px] [font-family:'Roboto',Helvetica] font-semibold text-[#1babc6] text-[37px] text-center whitespace-nowrap tracking-[0] leading-[normal]">
            Our work
          </h2>
        </div>

        <nav className="flex w-[652px] items-center justify-between pl-1.5 pr-[35px] py-1.5 bg-[#ffffff] rounded-[100000px] shadow-[0px_0px_2px_#00000040]">
          {filterTabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant="ghost"
              className={`h-auto ${
                activeTab === tab.id
                  ? "w-[139px] h-[51px] bg-[#2a24a3] rounded-[110px] hover:bg-[#2a24a3]"
                  : ""
              } p-2.5`}
            >
              <span
                className={`[font-family:'Montserrat',Helvetica] ${
                  activeTab === tab.id
                    ? "font-semibold text-[#ffffff] text-[19px]"
                    : "font-medium text-[#2a24a3] text-lg"
                } tracking-[0] leading-[normal]`}
              >
                {tab.label}
              </span>
            </Button>
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-3 gap-[9px] w-full max-w-[1316px]">
        {projectImages.map((project, index) => (
          <div key={index} className="relative w-full aspect-square">
            <img
              className={`w-full h-full ${project.className}`}
              alt={project.alt}
              src={project.src}
            />
            {project.title && (
              <div className="absolute bottom-[91px] left-1/2 -translate-x-1/2 [font-family:'Roboto',Helvetica] font-semibold text-[#ffffff] text-[39px] text-center tracking-[0] leading-[55px] whitespace-nowrap">
                {project.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
