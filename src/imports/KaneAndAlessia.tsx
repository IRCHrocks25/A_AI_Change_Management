import imgKaneAndAlessia from "../assets/dfe395181a102ff44587039a4243ebffd502e2e3.png";
import imgKaneAlessia from "../assets/a7eff2d64e72477d4bd64ebb652bfdf676ddfe00.png";

const gradientText =
  "linear-gradient(154.786deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(90deg, rgb(13, 19, 83) 0%, rgb(13, 19, 83) 100%)";

const gradientBtn =
  "linear-gradient(155.701deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(90deg, rgb(255, 0, 246) 0%, rgb(255, 0, 246) 100%)";

const gradientStat1 =
  "linear-gradient(139.172deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(-8.84734deg, rgb(249, 5, 242) 1.3768%, rgb(0, 87, 239) 158.37%)";
const gradientStat2 =
  "linear-gradient(118.954deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(-18.0354deg, rgb(249, 5, 242) 1.3768%, rgb(0, 87, 239) 158.37%)";
const gradientStat3 =
  "linear-gradient(131.188deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(-11.6327deg, rgb(249, 5, 242) 1.3768%, rgb(0, 87, 239) 158.37%)";
const gradientStat4 =
  "linear-gradient(117.447deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(-19.1285deg, rgb(249, 5, 242) 1.3768%, rgb(0, 87, 239) 158.37%)";

const stats = [
  { value: "50,000+", gradient: gradientStat1, label: "Business Owners\nTrained Monthly" },
  { value: "5M+",     gradient: gradientStat2, label: "Professionals\nImpacted" },
  { value: "5500+",   gradient: gradientStat3, label: "Presentations in 80\nCountries" },
  { value: "20+",     gradient: gradientStat4, label: "Portfolio\nCompanies" },
  { value: "30+",     gradient: gradientStat4, label: "Company Portfolio\nValued at $500M" },
];

function TextBlock() {
  return (
    <div className="flex flex-col gap-[20px] md:gap-[27px] items-center md:items-start w-full md:w-[412px]">
      {/* Name */}
      <p className="capitalize font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[0] text-[#020054] tracking-[-1px] md:tracking-[-1.4911px] w-full text-center md:text-left whitespace-pre-wrap">
        <span className="leading-[1.112] text-[24px] sm:text-[30px] md:text-[37.277px]">
          {"Kane & Alessia "}
        </span>
        <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] italic leading-[1.112] text-[25px] sm:text-[31px] md:text-[38.657px]">
          Minkus
        </span>
      </p>

      {/* Tagline */}
      <p
        className="bg-clip-text font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-normal text-[14px] sm:text-[16px] md:text-[17.95px] tracking-[-0.359px] w-full text-center md:text-left"
        style={{ backgroundImage: gradientText, WebkitTextFillColor: "transparent" }}
      >
        Award-winning serial entrepreneurs, International bestselling authors, and world-renowned business mentors.
      </p>

      {/* CTA button */}
      <button
        className="flex items-center justify-center w-full sm:w-auto px-[28px] md:px-[43px] py-[11px] rounded-[27.612px] cursor-pointer border-0"
        style={{ backgroundImage: gradientBtn }}
      >
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[13px] sm:text-[15px] md:text-[16.567px] leading-[20.709px] text-white uppercase">
          {"VISIT KANE & ALESSIA MINKUS"}
        </span>
      </button>
    </div>
  );
}

function StatsBar() {
  return (
    <div className="bg-[#f5f4fc] w-full" data-name="Stats container">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-6 md:gap-x-[44.286px] items-start justify-items-center px-6 sm:px-10 md:px-[167.116px] py-8 md:py-[36.765px]">
        {stats.map((stat) => (
          <div key={stat.value + stat.label} className="flex flex-col items-center">
            <p
              className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-normal text-[36px] sm:text-[42px] md:text-[49.7px] text-center tracking-[-1.988px]"
              style={{ backgroundImage: stat.gradient, WebkitTextFillColor: "transparent" }}
            >
              {stat.value}
            </p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] text-[#0d1353] text-[13px] md:text-[16.57px] text-center tracking-[-0.3314px] whitespace-pre-wrap mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function KaneAndAlessia() {
  return (
    <div className="relative w-full flex flex-col" data-name="kane and alessia">
      {/* Background image */}
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={imgKaneAndAlessia}
      />

      {/* Hero content: photo + text */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-[95.256px] px-6 sm:px-10 md:px-[60px] pt-10 md:pt-[42px] pb-0">
        <img
          alt="Kane and Alessia"
          src={imgKaneAlessia}
          className="order-2 md:order-1 w-[200px] sm:w-[280px] md:w-[378px] md:h-[331.5px] object-cover shrink-0"
        />
        <div className="order-1 md:order-2 w-full md:w-auto">
          <TextBlock />
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10">
        <StatsBar />
      </div>
    </div>
  );
}