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
