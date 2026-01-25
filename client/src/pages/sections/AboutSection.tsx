import { ArrowUpCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from "react-google-recaptcha";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';



export const AboutSection = (): JSX.Element => {
  const MINCHARNAME = 10;
  const MINCHARMESSAGE = 25;


  const { isRTL, t } = useLanguage();
  const contactInfo = [
    {
      icon: "/figmaAssets/email.png",
      text: "contact@pulvent.com",
      iconClass: "w-[33.14px] h-[27.48px]",
      href: "mailto:contact@pulvent.com"
    },
    {
      icon: "/figmaAssets/property-location.png",
      text: isRTL ? '129 عثمان ابن عفان , النزهه - القاهرة - مصر' : "129 Othman Ibn Affan St., Al Nozha – Cairo",
      iconClass: "w-[33.14px] h-[31.72px]",
      href: "https://www.google.com/maps/place/129+Othman+Ibn+Affan,+Al+Matar,+El+Nozha,+Cairo+Governorate+4470180/@30.1024541,31.3482122,119m/data=!3m1!1e3!4m6!3m5!1s0x145815e6ac1513f1:0x8e0063e67d99c96d!8m2!3d30.1027718!4d31.3481997!16s%2Fg%2F11gw2y33nd?entry=tts&g_ep=EgoyMDI2MDExMy4wIPu8ASoASAFQAw%3D%3D&skid=00648d36-8149-4796-81a9-1d7551c742cd"
    },
    {
      icon: "/figmaAssets/mobile-chat.png",
      text: "+20 15 50009295",
      iconClass: "w-[31.72px] h-[33.14px]",
      href: "tel:+20 15 50009295"
    },
  ];
  const [captchToken, setCaptchToken] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e: any) => {
    if (e.target.name == 'name') {
      const cleanValue = e.target.value.replace(/[^a-zA-Z]/g, '');
      setFormData({ ...formData, [e.target.name]: cleanValue });
    }
    else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

  };
  const onChange = (value: any) => {
    setCaptchToken(value)
  }
  const handleSubmit = async (e: any) => {
    const cleanValue = formData?.name.replace(/[^a-zA-Z]/g, '');
    const cleanValueMessage = formData?.message.replace(/[^a-zA-Z]/g, '');
    e.preventDefault();
    if (cleanValue?.length < MINCHARNAME) {
      toast.error(isRTL ? "يجب أن يحتوي الاسم على 10 أحرف على الأقل" : 'Name must be at least 10 letters.');
      return
    }
    if (cleanValueMessage?.length < MINCHARMESSAGE) {
      toast.error(isRTL ? "يجب أن تحتوي الرساله على ٢٥ حرف على الأقل" : 'Message must be at least 25 letters.');
      return
    }
    setStatus('loading');

    try {
      const response = await axios.post('https://default3542a03d5db84a18b59660029739b2.55.environment.api.powerplatform.com/powerautomate/automations/direct/workflows/03ca626e2c3e4f4594da6af4c9ef545c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vm6on4oIxWRf4FB_SSJtFMp2OxitSr1xNgM4CMPnXik', formData);

      if (response.status === 200 || response.status === 201 || response.status === 202) {
        setStatus('success');
        toast.success(t('contact.success'));
        setFormData({ name: '', email: '', message: '', phone: '',utm_source: '',
          utm_medium: '',
          utm_campaign: '',
          utm_content: '' });
      }
    } catch (err: any) {
      toast.success(t('contact.error'));
      console.error("Axios Error:", err.response?.data || err.message);
      setStatus('error');
    }
  };
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    
    setFormData(prev => ({
      ...prev,
      utm_source: queryParams.get('utm_source') || '',
      utm_medium: queryParams.get('utm_medium') || '',
      utm_campaign: queryParams.get('utm_campaign') || '',
      utm_content: queryParams.get('utm_content') || ''
    }));
  }, []);
  return (
    <section id="contact-us" className="flex flex-col w-full max-w-[1200px] m-auto items-center gap-6 md:gap-8 py-8 px-6 md:px-0 overflow-hidden">
      <Toaster position="bottom-right" reverseOrder={false}
        toastOptions={{
          duration: 10000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 10000,
            iconTheme: {
              primary: 'green',
              secondary: 'white',
            },
          },
        }}
      />
      <div className="w-full flex justify-center">
        <h2 className="font-semibold text-[#1babc6] text-2xl md:text-[37px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          {t("contact.title")}
        </h2>
      </div>

      <div className="flex flex-col items-start gap-8 md:gap-[7px] w-full max-w-[1297px]">
        <div className={`flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-[65px] w-full`}>
          <div className={`w-full md:w-[50%] gap-8 md:gap-8 flex flex-col items-center lg:items-start text-center lg:text-left ${isRTL ? "lg:items-end lg:text-right" : ""}`}>
            <h3 className="self-stretch font-bold text-[#2a24a3] text-3xl md:text-[42px] tracking-[0] leading-tight md:leading-[normal]">
              {t("contact.together")}
            </h3>

            <p className="self-stretch font-medium text-[#6f797b] text-lg md:text-2xl tracking-[0] leading-normal">
              {t("contact.description")}
            </p>

            <div className={`flex flex-col w-full items-center lg:items-start gap-6 md:gap-6 ${isRTL ? "lg:items-end" : ""}`}>
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 md:gap-[19px] w-full `}
                >
                  <img
                    className={`${item.iconClass} flex-shrink-0 w-8 md:w-auto h-auto`}
                    alt={`Contact ${index}`}
                    src={item.icon}
                  />
                  <a
                    href={item?.href}
                    target="_blank"
                    className={`text-start font-normal text-black text-base md:text-[20px] tracking-[0] leading-snug md:leading-[33.4px] `}
                    style={{
                      direction: index == 2 ? 'ltr' : "rtl"
                    }}
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>

            <div className="w-full flex gap-x-4" >
              <a
                href="https://www.facebook.com/pulvent/"
                target="_blank"
              >
                <img
                  className="w-[68px] aspect-[1/1]"
                  alt="Social media icons"
                  src="/figmaAssets/faceBookLG.svg"
                />
              </a>
              <a
                href="https://www.instagram.com/pulvent_technologies"
                target="_blank"
              >
                <img
                  className="w-[68px] aspect-[1/1]"
                  alt="Social media icons"
                  src="/figmaAssets/instagram.svg"
                />
              </a>
              <a
                href="https://www.tiktok.com/@pulvent"
                target="_blank"
              >
                <img
                  className="w-[68px] aspect-[1/1]"
                  alt="Social media icons"
                  src="/figmaAssets/tiktok.svg"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/pulvent/"
                target="_blank"
              >
                <img
                  className="w-[68px] aspect-[1/1]"
                  alt="Social media icons"
                  src="/figmaAssets/linkedIn.svg"
                />
              </a>
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
            </div>
          </div>

          <div className="w-full lg:w-[658px] flex flex-col items-start gap-4 p-0">
            <div className="flex flex-col items-end gap-1.5 w-full">
              <div id="contact_pulvent_form" className="flex flex-col w-full items-start gap-4">
                <div className="flex flex-col md:flex-row gap-3 w-full">
                  <div className="relative w-full">
                    <Input
                      placeholder={t("contact.name")}
                      className={`w-full h-14 md:h-[46px] bg-white rounded-lg border border-solid border-[#d7d7d7]  font-normal text-text-color text-sm md:text-md placeholder:text-sm  ${isRTL ? "text-right" : ""}`}
                      dir={isRTL ? "rtl" : "ltr"}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {formData.name ? "" :
                      <div className={`absolute h-2 w-2 top-2  ${isRTL ? "left-2" : "right-2"} rounded-full font-normal bg-red rounded-lg text-white text-xs flex items-center justify-center`}></div>
                    }
                  </div>

                  <div className="relative w-full  ">
                    <Input
                      placeholder={t("contact.email")}
                      type="email"
                      className={`w-full h-14 md:h-[46px] bg-white rounded-lg border border-solid border-[#d7d7d7] font-normal text-text-color text-sm md:text-md placeholder:text-sm  ${isRTL ? "text-right" : ""}`}
                      dir={isRTL ? "rtl" : "ltr"}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {formData.email ? "" :
                      <div className={`absolute h-2 w-2 top-2  ${isRTL ? "left-2" : "right-2"} rounded-full font-normal bg-red rounded-lg text-white text-xs flex items-center justify-center`}></div>
                    }
                  </div>
                </div>
                <div className="relative w-full shadow-sm rounded-lg border border-solid border-[#d7d7d7] bg-white">
                  {formData.phone.replace(/\s/g, '').length > 7 ? "" :
                    <div className={`absolute h-2 w-2 top-2  ${isRTL ? "left-2" : "right-2"} rounded-full font-normal bg-red rounded-lg text-white text-xs flex items-center justify-center`}></div>
                  }

                  <PhoneInput
                    className="h-[46px]"
                    defaultCountry="eg"
                    value={formData.phone}
                    onChange={(phoneValue) => setFormData({ ...formData, phone: phoneValue })}
                    name="phone" 
                    required/>

                </div>
                <div className="relative w-full">
                  <Textarea
                    placeholder={t("contact.message")}
                    className={`w-full h-40 md:h-[150px] bg-white rounded-lg border border-solid border-[#d7d7d7] font-normal text-text-color text-sm md:text-md placeholder:text-sm  resize-y ${isRTL ? "text-right" : ""}`}
                    dir={isRTL ? "rtl" : "ltr"}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required

                  />
                  {formData.message ? "" :
                    <div className={`absolute h-2 w-2 top-2  ${isRTL ? "left-2" : "right-2"} rounded-full font-normal bg-red rounded-lg text-white text-xs flex items-center justify-center`}></div>
                  }
                </div>

                <div className="flex items-start justify-between w-full">
                  <div className="flex items-center gap-2 w-full">
                    <span className="text-sm text-red">{isRTL ? "جميع الحقول المطلوبة مشار إليها بـ" : "All required felids marked with"} </span>
                    <div className={` h-2 w-2  rounded-full font-normal bg-red rounded-lg text-white text-xs flex items-center justify-center`}></div>

                  </div>
                  <ReCAPTCHA
                    sitekey="6Lce41UsAAAAAOYpv7PZkAlFjgKSyC_yfXpopfsv"
                    onChange={onChange}
                    className="w-full"
                  />
                </div>
                <Button className={`w-full h-14 md:h-[68px] bg-[#2a24a3] hover:bg-[#2a24a3]/90 rounded-[110px] flex items-center justify-center gap-2.5 font-medium text-[#ffffff] text-lg md:text-[21px]`}
                  disabled={!(formData.message && formData.name && formData.email && formData.phone.replace(/\s/g, '').length > 7 && captchToken)}
                  onClick={handleSubmit}
                >
                  {status == 'loading' ?
                    t("contact.loading")
                    :
                    <>
                      {t("contact.submit")}
                      <img
                        className={`w-6 h-6 md:w-[29px] md:h-[29px] ${isRTL ? "rotate-180" : ""}`}
                        alt="Iconoir arrow up"
                        src="/figmaAssets/iconoir-arrow-up-circle.svg"

                      />
                    </>
                  }

                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
