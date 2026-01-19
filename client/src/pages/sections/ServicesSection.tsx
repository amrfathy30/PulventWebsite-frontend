"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const Images1 = [
  {
    src: "/figmaAssets/rectangle-2027.png",
    alt: "Rectangle",
    className: "rounded-[17px] object-cover",
    hasTaxik: false,
  },
  {
    src: "/figmaAssets/rectangle-2028.png",
    alt: "Rectangle",
    className: "",
    hasTaxik: false,
  },
  {
    src: "/figmaAssets/rectangle-2029.png",
    alt: "Rectangle",
    className: "",
    hasTaxik: false,
  },

];
const Images2 = [
  {
    src: "/figmaAssets/rectangle-2030.png",
    alt: "Rectangle",
    className: "",
    hasTaxik: false,
  },
  {
    src: "/figmaAssets/rectangle-2031.png",
    alt: "Rectangle",
    className: "",
    hasTaxik: false,
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
  const projectImages = isRTL ?[...Images1].reverse():Images1
  const projectImages2 = isRTL ?[...Images2].reverse():Images2
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
          <h2 className="font-semibold text-[#1babc6] text-xl md:text-2xl lg:text-[37px] text-center whitespace-nowrap tracking-[0] leading-[normal]">
            {t("work.title")}
          </h2>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:max-w-[759px]">
            <TabsList className={`w-full h-auto md:h-12 lg:h-[63px] bg-[#ffffff] rounded-xl md:rounded-[100000px] shadow-0 md:shadow-[0px_0px_2px_#00000040] p-1.5 flex md:flex-wrap justify-start md:justify-between gap-3 md:gap-1 overflow-auto ${isRTL ? "md:flex-row-reverse" : ""}`}>
              {filterTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`w-fit md:bg-transparent h-9 md:h-10 lg:h-[51px] px-2.5 md:px-3 lg:px-2.5 rounded-[110px] text-xs md:text-sm lg:text-lg tracking-[0] leading-[normal] data-[state=active]:bg-[#2a24a3] data-[state=active]:text-[#ffffff] data-[state=active]:font-semibold data-[state=active]:text-sm md:data-[state=active]:text-base lg:data-[state=active]:text-[19px]  data-[state=inactive]:bg-[#E8F0F2] md:data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#2a24a3] data-[state=inactive]:font-medium`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[9px] w-full max-w-[1316px]">
        {projectImages.map((project, index) => (
          <div key={index} className="relative w-full aspect-square group overflow-hidden rounded-[17px]">
            <img
              className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${project.className}`}
              alt={project.alt}
              src={project.src}
            />
            {project.hasTaxik && (
              <div className="absolute bottom-4 md:bottom-8 lg:bottom-[91px] left-1/2 -translate-x-1/2 font-semibold text-[#ffffff] text-lg md:text-2xl lg:text-[39px] text-center tracking-[0] leading-tight md:leading-relaxed lg:leading-[55px] whitespace-nowrap bg-black/40 md:bg-black/20 lg:bg-transparent px-4 py-2 rounded-lg backdrop-blur-sm md:backdrop-blur-none">
                {t("work.taxik")}
              </div>
            )}
            
            
          </div>
        ))}
           {projectImages2.map((project, index) => (
          <div key={index} className="relative w-full aspect-square group overflow-hidden rounded-[17px]">
            <img
              className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${project.className}`}
              alt={project.alt}
              src={project.src}
            />
            {project.hasTaxik && (
              <div className="absolute bottom-4 md:bottom-8 lg:bottom-[91px] left-1/2 -translate-x-1/2 font-semibold text-[#ffffff] text-lg md:text-2xl lg:text-[39px] text-center tracking-[0] leading-tight md:leading-relaxed lg:leading-[55px] whitespace-nowrap bg-black/40 md:bg-black/20 lg:bg-transparent px-4 py-2 rounded-lg backdrop-blur-sm md:backdrop-blur-none">
                {t("work.taxik")}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
