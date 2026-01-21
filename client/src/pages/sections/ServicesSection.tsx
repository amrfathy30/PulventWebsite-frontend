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
    <section className="flex flex-col w-full items-center gap-6 md:gap-6 lg:gap-6 py-8 px-4 md:px-0 overflow-hidden">
      <div className="inline-flex flex-col items-center gap-6 md:gap-8 w-full">
        <div className="flex justify-center">
          <h2 className="font-semibold text-[#1babc6] text-xl md:text-2xl lg:text-3xl text-center whitespace-nowrap tracking-[0] leading-[normal]">
            {t("work.title")}
          </h2>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:max-w-[700px]">
  
            <TabsList className={`w-full h-auto md:h-11 lg:h-12 bg-[#ffffff] rounded-xl md:rounded-[100000px] shadow-0 md:shadow-[0px_0px_2px_#00000040] p-1 flex md:flex-wrap justify-start md:justify-between gap-2 md:gap-1 overflow-auto ${isRTL ? "md:flex-row-reverse" : ""}`}>
              {filterTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`w-fit md:min-w-[80px] md:bg-transparent h-8 md:h-9 lg:h-10 px-3 md:px-4 rounded-[110px] text-xs md:text-sm lg:text-base tracking-[0] leading-[normal] data-[state=active]:bg-[#2a24a3] data-[state=active]:text-[#ffffff] data-[state=active]:font-semibold data-[state=active]:text-sm md:data-[state=active]:text-base lg:data-[state=active]:text-base data-[state=inactive]:bg-[#E8F0F2] md:data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#2a24a3] data-[state=inactive]:font-medium transition-all`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 w-full max-w-[1200px]">
        {projectImages.map((project, index) => (
          <div key={index} className="relative w-full aspect-square group overflow-hidden rounded-[17px]">
            <img
              className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${project.className}`}
              alt={project.alt}
              src={project.src}
            />
          </div>
        ))}
           {projectImages2.map((project, index) => (
          <div key={index} className="relative w-full aspect-square group overflow-hidden rounded-[17px]">
            <img
              className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${project.className}`}
              alt={project.alt}
              src={project.src}
            />
          </div>
        ))}
      </div>
    </section>
  );
};