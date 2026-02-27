import imgHero from "../assets/91adc766b1205f595aa50f4db3f2b02a40094294.png";
import { useRegistrationFormContext } from "../context/RegistrationFormContext";
import { useRef, useEffect } from "react";

function NavBar({ onVideoClick }: { onVideoClick?: () => void }) {
  const handleVideoClick = () => {
    if (onVideoClick) {
      onVideoClick();
    } else {
      // Fallback: scroll to hero section
      const heroSection = document.getElementById('hero-video-section');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };
  
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="NAV BAR">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg className="shrink-0 w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="url(#logoGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#AA45E8" />
              <stop offset="1" stopColor="#E84592" />
            </linearGradient>
          </defs>
        </svg>
        <span className="font-['Plus_Jakarta_Sans:Light',sans-serif] font-light text-[#0d1353] text-base md:text-lg tracking-wide">
          CHANGE <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">AI</span> MANAGEMENT
        </span>
      </div>
      {/* CTA nav button */}
      <div 
        onClick={handleVideoClick}
        className="bg-[#0d1353] flex items-center justify-center px-4 md:px-6 py-2 rounded-full shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
      >
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-white text-xs md:text-sm uppercase tracking-wide">Watch the video</p>
      </div>
    </div>
  );
}

function HeadlineContainer() {
  return (
    <div className="flex items-center justify-center w-full" data-name="Headline Container">
      <div className="w-full text-center tracking-[-0.03em]">
        <p className="mb-0">
          <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.24] text-[#0d1353] text-[22px] sm:text-[28px] md:text-[34px] lg:text-[37.789px]">
            {"How to Position Yourself as the  "}
          </span>
          <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] italic leading-[1.24] text-[#0d1353] text-[23px] sm:text-[30px] md:text-[36px] lg:text-[40px]">
            {"AI Adoption Specialist "}
          </span>
          <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.24] text-[#0d1353] text-[22px] sm:text-[28px] md:text-[34px] lg:text-[37.789px]">
            {"That Enterprises Are Desperately Seeking "}
          </span>
        </p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.24] text-[#aa45e8] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[37.789px]">
          (And Willing to Pay $15K-$50K Per Engagement)
        </p>
      </div>
    </div>
  );
}

function ButtonContainer() {
  const { openForm } = useRegistrationFormContext();
  
  return (
    <div
      onClick={openForm}
      className="flex items-center justify-center w-full sm:w-auto px-6 md:px-[43px] py-[11px] rounded-[27px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
      data-name="Button Container"
      style={{
        backgroundImage:
          "linear-gradient(161.704deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)",
      }}
    >
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.25] text-[13px] sm:text-[15px] md:text-[16.567px] text-center text-white uppercase tracking-wide whitespace-nowrap">
        REGISTER FOR THE NEXT AVAILABLE SESSION
      </p>
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="flex flex-col gap-6 md:gap-[34.516px] items-start w-full md:flex-[1_0_0]"
      data-name="Text Container"
    >
      <div className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#0d1353] w-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold mb-2 text-[17px] sm:text-[19px] md:text-[22.09px] leading-[1.4]">
          {"Free 2-hour executive workshop reveals why 95% of AI implementations fail,"}
        </p>
        <p className="text-[14px] sm:text-[16px] md:text-[17.948px] leading-[1.6]">
          {"and how YOU can become the consultant who fixes what $500M in technology spending couldn't."}
        </p>
      </div>
      <ButtonContainer />
    </div>
  );
}

function VideoPlaceholder({ shouldAutoplay }: { shouldAutoplay: boolean }) {
  const videoRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    if (shouldAutoplay && videoRef.current) {
      // Update iframe src to include autoplay parameter
      const baseUrl = "https://drive.google.com/file/d/1wBzB2g5TP3kXI11Kw7SMCl9Mhyo4bIrL/preview";
      videoRef.current.src = `${baseUrl}?autoplay=1`;
    }
  }, [shouldAutoplay]);
  
  return (
    <div
      className="w-full md:flex-[1_0_0] h-[220px] sm:h-[280px] md:h-[323.848px] relative rounded-[8.788px] overflow-hidden shrink-0"
      data-name="Image"
    >
      <iframe
        ref={videoRef}
        src="https://drive.google.com/file/d/1wBzB2g5TP3kXI11Kw7SMCl9Mhyo4bIrL/preview"
        className="absolute inset-0 w-full h-full rounded-[8.788px]"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Video"
      />
    </div>
  );
}

function ContentContainer({ shouldAutoplay }: { shouldAutoplay: boolean }) {
  return (
    <div
      className="flex flex-col md:flex-row gap-6 md:gap-[36.586px] items-center justify-center w-full"
      data-name="Content Container"
    >
      <VideoPlaceholder shouldAutoplay={shouldAutoplay} />
      <TextContainer />
    </div>
  );
}

function ContentSection({ shouldAutoplay }: { shouldAutoplay: boolean }) {
  return (
    <div
      className="flex flex-col gap-8 md:gap-[46px] items-center w-full"
      data-name="Content Section"
    >
      <HeadlineContainer />
      <ContentContainer shouldAutoplay={shouldAutoplay} />
    </div>
  );
}

export default function Hero({ shouldAutoplay = false }: { shouldAutoplay?: boolean }) {
  return (
    <div id="hero-video-section" className="relative w-full min-h-[480px] md:min-h-[580px]" data-name="hero">
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={imgHero}
      />
      <div className="relative flex flex-col items-center justify-center w-full h-full pt-12 pb-12 md:pt-20 md:pb-20 px-4 sm:px-8 md:px-16 lg:px-[200px] gap-6 md:gap-10">
        <ContentSection shouldAutoplay={shouldAutoplay} />
      </div>
    </div>
  );
}