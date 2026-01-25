import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
export const HeroSection = (): JSX.Element => {
  const { language, setLanguage, isRTL, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTap, setActiveTap] = useState('home');
  const [openDrawer, setOpenDrawer] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: t("nav.home"),  id: "home" },
    { label: t("nav.service"), id: "services" },
    { label: t("nav.aboutUs"),  id: "about" },
    { label: t("nav.portfolio"),  id: "portfolio" },
    { label: t("nav.whyUs"), id: "why-us" }, 
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };
  useEffect(() => {
    // 1. Handle the background blur logic (your existing code)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
  
    // 2. Intersection Observer Logic for Scroll Spy
    const observerOptions = {
      root: null, // use the viewport
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the top-ish part of the screen
      threshold: 0
    };
  
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTap(entry.target.id);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Start observing each section ID from navigationItems
    navigationItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [navigationItems]); // Re-run if navigation items change

  return (
    <section className="w-full relative overflow-hidden max-w-[1200px] m-auto">
      <nav className={`fixed h-[100px] top-0 left-0 right-0 z-[40]  py-4 px-4 md:py-6 md:px-0 bg-[#fbf9fb]/80 backdrop-blur-md transition-all duration-300 ${isScrolled ? "border-b border-[#2a24a3]/10" : "border-b border-transparent"}`}>
      <div className="max-w-[1200px] m-auto flex items-center justify-between gap-4  ">
        <button onClick={()=> scrollToSection('home')}>
        <img
          className="w-[100px] h-auto md:w-[150.12px] md:h-[55.62px]"
          alt="Pulvent_Logo"
          src="/figmaAssets/logo.svg"
        />
        </button>


        <div className={`hidden md:flex items-center justify-between p-1.5 bg-[#ffffff] rounded-[100000px] shadow-[0px_0px_2px_#00000040] gap-4`}>

          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant={item.id == activeTap ? "default" : "ghost"}
              className={`${item.id === activeTap ? "bg-[#2a24a3] text-[#ffffff] " : "bg-transparent text-[#2a24a3]"} hover:bg-[#2a24a3]/90 hover:text-white rounded-[110px] h-auto px-4 py-2.5 font-bold text-[19px]`}
              onClick={() => {
                setActiveTap(item.id)
                scrollToSection(item.id)
              }}
            >
              {item.label}
              {/* {item.hasDropdown && <ChevronDownIcon className={`w-6 h-6`} />} */}
            </Button>
          ))}

        </div>

        <div className={`hidden md:flex items-center gap-2 md:gap-6`}>
          <button
            onClick={toggleLanguage}
            className="font-medium text-[#2a24a3] text-sm md:text-[21px] cursor-pointer hover:opacity-80 transition-opacity"
            data-testid="button-language-toggle"
          >
            {t("nav.langSwitch")}
          </button>

          <Button
            className={` bg-[#2a24a3] hover:bg-[#2a24a3]/90 text-[#ffffff] rounded-[110px] h-10 md:h-[55px] px-3 md:px-4 font-medium text-sm md:text-[21px] gap-1 md:gap-2 `}
            onClick={() => scrollToSection("contact-us")}
          >
            {t("nav.contactUs")}
            <img
              className={`w-5 h-5 md:w-[29px] md:h-[29px] ${isRTL ? "rotate-180" : ""}`}
              alt="Iconoir arrow up"
              src="/figmaAssets/iconoir-arrow-up-circle.svg"
            />
          </Button>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">

          <Sheet open={openDrawer} onOpenChange={setOpenDrawer}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <img src="/figmaAssets/drower.svg" />
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "left" : "right"} className="px-2 t-6 w-[70%] sm:max-w-2xl overflow-y-auto flex flex-col justify-between">
              <div className={`flex w-full mt-3 flex-col items-start justify-between p-1.5 gap-4`}>
                {navigationItems.map((item, index) => (
                  <Button
                    key={index}
                    variant={item.id == activeTap ? "default" : "ghost"}
                    className={`${item.id === activeTap ? "bg-[#2a24a3] text-[#ffffff]" : "bg-[#E8F0F2] text-[#2A24A3]"} w-full justify-start hover:bg-[#2a24a3]/90 hover:text-white rounded-[110px] h-auto px-4 py-2.5 font-bold text-[19px]`}
                    onClick={() => {
                      setActiveTap(item.id)
                      scrollToSection(item.id)
                      setOpenDrawer(false)
                    }}
                  >
                    {item.label}
                    {/* {item.hasDropdown && <ChevronDownIcon className={`w-6 h-6`} />} */}
                  </Button>
                ))}

              </div>
              <div className={`flex  p-1.5  flex-col w-full items-center gap-2 md:gap-6 mt-auto`}>

                <Button
                  className={`w-full bg-[#2a24a3] hover:bg-[#2a24a3]/90 text-[#ffffff] rounded-[110px] h-10 md:h-[55px] px-3 md:px-4 font-medium text-sm md:text-[21px] gap-1 md:gap-2 `}
                  onClick={() => {
                    scrollToSection("contact-us")
                    setOpenDrawer(false)
                  }}
                >
                  {t("nav.contactUs")}
                  <img
                    className={`w-5 h-5 md:w-[29px] md:h-[29px] ${isRTL ? "rotate-180" : ""}`}
                    alt="Iconoir arrow up"
                    src="/figmaAssets/iconoir-arrow-up-circle.svg"
                  />
                </Button>
                <button
                  onClick={toggleLanguage}
                  className="w-full justify-start font-medium text-[#2a24a3] text-sm md:text-[21px] cursor-pointer hover:opacity-80 transition-opacity"
                  data-testid="button-language-toggle"
                >
                  {t("nav.langSwitch")}
                </button>

              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </nav>


      <div className={`flex flex-col-reverse md:flex-row gap-8 md:gap-2 px-6 md:px-0 py-6 items-center xs:items-start text-center md:text-left h-[calc(100vh-100px)] `}>
        <AnimatedBackground/>
        <div className={`z-30 flex flex-col items-center md:items-start gap-6 md:gap-11 w-full md:w-[50%] ${isRTL ? "md:items-end" : ""}`}>
          <div className={`flex flex-col items-center md:items-start gap-4 md:gap-[39px] w-full ${isRTL ? "md:items-end" : ""}`}>
            <h1 className="text-start w-full max-w-[582px] text-2xl md:text-3xl lg:text-[57px] leading-tight md:leading-normal">
              <span className="font-normal text-[#2a24a3]">{t("hero.integrated")}</span>

              <br/>
              <span className="font-extrabold text-[#2a24a3]">
                {t("hero.businessSolutions")}
              </span>
              <span className={`${isRTL ? "font-500" : "font-extrabold"}  text-[#2a24a3]`}>
                {t("hero.businessSolutions2")}
              </span>
            </h1>

            <p className="text-start w-full font-medium text-[#000000] text-lg md:text-xl lg:text-3xl md:max-w-[90%]">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className={`w-full flex items-center justify-start gap-4 md:gap-[25px] `}>
            <Button
              className={`z-40 w-full sm:w-auto bg-[#2a24a3] hover:bg-[#2a24a3]/90 text-[#ffffff] rounded-[110px] h-11 md:h-12 lg:h-[55px] px-6 md:px-4 font-medium text-base md:text-lg lg:text-[21px] gap-2`}
              onClick={() => scrollToSection("contact")}
            >
              {t("hero.getStarted")}
              <img
                className={`w-5 h-5 md:w-6 md:h-6 lg:w-[29px] lg:h-[29px] ${isRTL ? "rotate-180" : ""}`}
                alt="Iconoir arrow up"
                src="/figmaAssets/iconoir-arrow-up-circle.svg"
              />
            </Button>

            <Button
              className={`z-40 w-full sm:w-auto bg-[#1babc6] hover:bg-[#1babc6]/90 text-[#ffffff] rounded-[110px] h-11 md:h-12 lg:h-[55px] px-6 md:px-4 font-medium text-base md:text-lg lg:text-[21px] gap-2`}
              onClick={() => scrollToSection("services")}
            >
              {t("hero.ourServices")}
              <img
                className={`w-5 h-5 md:w-6 md:h-6 lg:w-[29px] lg:h-[29px] ${isRTL ? "rotate-180" : ""}`}
                alt="Iconoir arrow up"
                src="/figmaAssets/iconoir-arrow-up-circle.svg"
              />
            </Button>
          </div>
        </div>

        <img
          className=" z-30 w-full md:w-[50%] h-full"
          alt="hero image"
          src="/figmaAssets/hero.svg"
        />
      </div>
    </section>
  );
};
const AnimatedBackground = () => {
  // Create an array of 10 items to map through for the squares
  const squares = Array.from({ length: 10 });

  return (
    <div className="absolute inset-0">

        <div className="squares-wrapper">
          {squares.map((_, index) => (
            <div key={index} className="square-item"></div>
          ))}
        </div>

      <div className="grey-bottom"></div>
    </div>
  );
};