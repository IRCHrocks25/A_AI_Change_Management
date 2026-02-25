const gradientStyle = {
  backgroundImage:
    "linear-gradient(136.881deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)",
  WebkitTextFillColor: "transparent" as const,
};

const firstGradientStyle = {
  backgroundImage:
    "linear-gradient(141.288deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)",
  WebkitTextFillColor: "transparent" as const,
};

const numberClass =
  "bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-none text-[36px] sm:text-[42px] lg:text-[49.7px] text-center tracking-[-1.988px] w-full";

const labelClass =
  "font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] text-[#0d1353] text-[14px] sm:text-[15px] lg:text-[16.57px] text-center tracking-[-0.3314px] w-full mt-1";

export default function StatsContainer() {
  return (
    <div
      className="bg-[#f5f4fc] w-full px-4 sm:px-8 md:px-12 lg:px-16 py-10 lg:py-[36.765px]"
      data-name="Stats container"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 w-full max-w-[1200px] mx-auto">
        {/* Stat 1 */}
        <div className="flex flex-col items-center" data-name="Stat">
          <p className={numberClass} style={firstGradientStyle}>
            50,000+
          </p>
          <p className={labelClass}>Business Owners Trained Monthly</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center" data-name="Stat">
          <p className={numberClass} style={gradientStyle}>
            5M+
          </p>
          <p className={labelClass}>Professionals Impacted</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center" data-name="Stat">
          <p className={numberClass} style={gradientStyle}>
            5500+
          </p>
          <p className={labelClass}>Presentations in 80 Countries</p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center" data-name="Stat">
          <p className={numberClass} style={gradientStyle}>
            20+
          </p>
          <p className={labelClass}>Portfolio Companies</p>
        </div>

        {/* Stat 5 — spans 2 cols on mobile so it centers in the last row */}
        <div
          className="flex flex-col items-center col-span-2 sm:col-span-1"
          data-name="Stat"
        >
          <p className={numberClass} style={gradientStyle}>
            30+
          </p>
          <p className={labelClass}>Company Portfolio Valued at $500M</p>
        </div>
      </div>
    </div>
  );
}
