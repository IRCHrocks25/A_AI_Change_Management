import imgBackground from "../assets/dfe395181a102ff44587039a4243ebffd502e2e3.png";
import imgPhoto from "../assets/bb8157914accc822330f72551364cb7ff8474af8.png";

const gradientText =
  "linear-gradient(154.786deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(90deg, rgb(13, 19, 83) 0%, rgb(13, 19, 83) 100%)";

const gradientBtn =
  "linear-gradient(155.701deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(90deg, rgb(255, 0, 246) 0%, rgb(255, 0, 246) 100%)";

export default function Frame1707482421() {
  const handleVisit = () => {
    window.open('https://kaneandalessia.com', '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="relative w-full overflow-hidden flex flex-col" data-name="Frame1707482421">
      {/* Background */}
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={imgBackground}
      />

      {/* Content row */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-center gap-8 md:gap-[95.256px] px-6 sm:px-10 md:px-[60px] lg:px-[120px] pt-10 md:pt-[60px]">

        {/* Text + button */}
        <div className="order-1 flex flex-col gap-[11px] md:gap-[16px] items-center md:items-start w-full md:w-[412px] pb-8 md:pb-10">
          <p className="capitalize font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[0] text-[#020054] tracking-[-1px] md:tracking-[-1.4911px] w-full text-center md:text-left whitespace-pre-wrap">
            <span className="leading-[1.112] text-[24px] sm:text-[30px] md:text-[37.277px]">
              {"Kane & Alessia "}
            </span>
            <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] italic leading-[1.112] text-[26px] sm:text-[32px] md:text-[38.657px]">
              Minkus
            </span>
          </p>

          <p
            className="bg-clip-text font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-normal text-[14px] sm:text-[16px] md:text-[17.95px] tracking-[-0.359px] w-full text-center md:text-left"
            style={{ backgroundImage: gradientText, WebkitTextFillColor: "transparent" }}
          >
            Award-winning serial entrepreneurs, International bestselling authors, and world-renowned business mentors.
          </p>

          <button
            onClick={handleVisit}
            className="flex items-center justify-center w-full sm:w-auto px-[28px] md:px-[43px] py-[11px] rounded-[27.612px] cursor-pointer border-0 hover:opacity-90 transition-opacity"
            style={{ backgroundImage: gradientBtn }}
          >
            <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[13px] sm:text-[15px] md:text-[16.567px] leading-[20.709px] text-white uppercase">
              {"MEET KANE & ALESSIA MINKUS"}
            </span>
          </button>
        </div>

        {/* Photo */}
        <div className="order-2 shrink-0 self-center md:self-auto flex items-end">
          <img
            alt="Kane and Alessia Minkus"
            src={imgPhoto}
            className="w-[200px] sm:w-[260px] md:w-[378px] md:h-[331.5px] object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}