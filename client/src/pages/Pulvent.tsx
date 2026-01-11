import { AboutSection } from "./sections/AboutSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";

export const Pulvent = (): JSX.Element => {
  return (
    <div className="bg-[#fbf9fb] overflow-hidden w-full relative">
      <div className="absolute top-[3830px] left-[688px] w-[126px] h-[1991px] bg-[#fbfbfb] rotate-[54.37deg] shadow-[0px_20px_12px_#e6e5e52b] opacity-[0.34]" />

      <div className="absolute top-[4066px] left-[684px] w-[126px] h-[2033px] bg-[#fbfbfb] rotate-[54.37deg] shadow-[0px_20px_12px_#e6e5e52b] opacity-[0.34]" />

      <HeroSection />
      <ContactSection />
      <FeaturesSection />
      <ServicesSection />
      <ContactFormSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};
