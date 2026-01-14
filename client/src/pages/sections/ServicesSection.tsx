"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

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
    hasTaxik: true,
  },
];

export const ServicesSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("all");
  const { isRTL, t } = useLanguage();

  const filterTabs = [
    { id: "all", label: t("work.all") },
    { id: "mobile", label: t("work.mobile") },
    { id: "web", label: t("work.web") },
    { id: "desktop", label: t("work.desktop") },
    { id: "marketing", label: t("work.marketing") },
    { id: "ai", label: t("work.ai") },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-10 md:gap-16 lg:gap-[86px] py-12 px-4 overflow-hidden">
      <div className="inline-flex flex-col items-center gap-6 md:gap-[30px] w-full">
        <div className="flex justify-center">
          <h2 className="[font-family:'Roboto',Helvetica] font-semibold text-[#1babc6] text-xl md:text-2xl lg:text-[37px] text-center whitespace-nowrap tracking-[0] leading-[normal]">
            {t("work.title")}
          </h2>
        </div>

        <nav className={`flex w-full max-w-[652px] items-center justify-center md:justify-between flex-wrap gap-2 px-2 py-2 md:pl-1.5 md:pr-[35px] md:py-1.5 bg-[#ffffff] rounded-xl md:rounded-[100000px] shadow-[0px_0px_2px_#00000040] ${isRTL ? "md:flex-row-reverse md:pr-1.5 md:pl-[35px]" : ""}`}>
          {filterTabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant="ghost"
              className={`h-8 md:h-9 lg:h-auto ${
                activeTab === tab.id
                  ? "bg-[#2a24a3] rounded-[110px] hover:bg-[#2a24a3]"
                  : ""
              } px-3 md:px-4 py-1 lg:p-2.5`}
            >
              <span
                className={`[font-family:'Montserrat',Helvetica] ${
                  activeTab === tab.id
                    ? "font-semibold text-[#ffffff] text-xs md:text-sm lg:text-[19px]"
                    : "font-medium text-[#2a24a3] text-xs md:text-sm lg:text-lg"
                } tracking-[0] leading-[normal]`}
              >
                {tab.label}
              </span>
            </Button>
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[9px] w-full max-w-[1316px]">
        {projectImages.map((project, index) => (
          <div key={index} className="relative w-full aspect-square group overflow-hidden rounded-[17px]">
            <img
              className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${project.className}`}
              alt={project.alt}
              src={project.src}
            />
            {project.hasTaxik && (
              <div className="absolute bottom-4 md:bottom-8 lg:bottom-[91px] left-1/2 -translate-x-1/2 [font-family:'Roboto',Helvetica] font-semibold text-[#ffffff] text-lg md:text-2xl lg:text-[39px] text-center tracking-[0] leading-tight md:leading-relaxed lg:leading-[55px] whitespace-nowrap bg-black/40 md:bg-black/20 lg:bg-transparent px-4 py-2 rounded-lg backdrop-blur-sm md:backdrop-blur-none">
                {t("work.taxik")}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
