import imgFrame17074819241 from "../assets/da9a0cf735ee2618a056c17c7f6f4891d8c5a6eb.png";
import imgFrame17074819251 from "../assets/88eea00e55a1122d833bc2514407dff0bfe7f855.png";
import imgFrame17074819271 from "../assets/28504f74cf02ea7b7879202a62296530675d2fb1.png";
import imgFrame17074819261 from "../assets/bb1fb512dd6af38031ea8f8b63fbcae547e164fc.png";
import imgFrame17074819281 from "../assets/864c16a6998b39c53243560493fb9bb5fefcf724.png";
import imgFrame17074819291 from "../assets/de4bca3ce3617fdeb443b6521f1b86042230ceec.png";
import imgInc5000ColorMedallionLogo11 from "../assets/3374bde776446cb60b8e760c0026b6459f5ada4c.png";

const logos = [
  { src: imgFrame17074819241, name: "Sustainable Development Goals" },
  { src: imgFrame17074819251, name: "FT 1000 – 2020" },
  { src: imgFrame17074819271, name: "Technology Fast 50 2020" },
  { src: imgFrame17074819261, name: "Technology Fast 50 2019" },
  { src: imgFrame17074819281, name: "Frost & Sullivan Best Practices" },
  { src: imgFrame17074819291, name: "TechCrunch" },
];

export default function AwardsSection() {
  return (
    <div
      className="bg-[#fafafa] w-full flex flex-col gap-3 md:gap-[17.948px] items-center justify-center py-6 md:py-8 px-4 sm:px-8 md:px-[143px]"
      data-name="Awards Section"
    >
      {/* Label */}
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-normal text-[#404040] text-[10px] sm:text-[11px] md:text-[12.426px] text-center tracking-[2.9821px] uppercase">
        INDUSTRY ROCKSTAR TEAM AWARDS
      </p>

      {/* Logos — wrap to 2 rows on xs/sm, single row on md+ */}
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 md:flex-nowrap md:gap-x-[17.258px] md:gap-y-0 w-full">
        {logos.map((logo) => (
          <img
            key={logo.name}
            alt={logo.name}
            src={logo.src}
            className="h-[36px] sm:h-[44px] md:h-[55.769px] w-auto object-contain shrink-0"
          />
        ))}

        {/* Inc. 5000 medallion (square) */}
        <img
          alt="Inc. 5000"
          src={imgInc5000ColorMedallionLogo11}
          className="h-[36px] w-[36px] sm:h-[44px] sm:w-[44px] md:h-[55.033px] md:w-[55.033px] object-contain shrink-0"
        />
      </div>
    </div>
  );
}
