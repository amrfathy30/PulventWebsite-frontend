"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ChatWithUs = () => {

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-[bounce_4s_linear_infinite] ">
      <span className="relative flex size-[68px]">
        <span className="absolute inline-flex h-full w-full animate-[ping_2s_linear_infinite] rounded-full bg-[#25d366] opacity-75"></span>
        <span className="relative inline-flex size-[68px] rounded-full bg-[#25d366]">
          <a
            href="https://wa.me/+201550009295"
            target="_blank"
          >
            <img
              className="w-[68px] aspect-[1/1]"
              alt="Social media icons"
              src="/figmaAssets/whatsapp.svg"
            />
          </a>
        </span>
      </span>

    </div>
  );
};         