import { BackToTop } from "@/components/ui/back-to-top-button";
import { AboutSection } from "./sections/AboutSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ChatWithUs } from "@/components/ui/chat-with-us";

export const Pulvent = (): JSX.Element => {
  
  return (
    <div className="bg-[#fbf9fb] overflow-hidden w-full relative pt-[72px] md:pt-[100px] ">
      <div id="home"><HeroSection /></div>
      <div id="services"><ContactSection /></div>
      <div id="about"><FeaturesSection /></div>
      <div id="portfolio"><ServicesSection /></div>
      <div id="why-us"><ContactFormSection /></div>
      <div id="contact"><AboutSection /></div>
      <FooterSection />
      <ChatWithUs/>
      <BackToTop/>
    </div>
  );
};
