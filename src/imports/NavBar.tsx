import svgPaths from "./svg-8ht6v7hrau";

function NavItem() {
  return (
    <div className="h-[20px] sm:h-[24px] relative shrink-0 w-[200px] sm:w-[240px] md:w-[289px]" data-name="Nav Item">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 289.363 23.9978">
        <g id="Nav Item">
          <g clipPath="url(#clip0_56_480)" id="Frame">
            <g id="Vector">
              <path d={svgPaths.p2fc3300} fill="var(--fill-0, #0D1353)" />
              <path d={svgPaths.p2fc3300} fill="url(#paint0_linear_56_480)" />
            </g>
          </g>
          <g id="MONKSWIZARD">
            <path d={svgPaths.p226ea480} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p226ea480} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p3e49fc80} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p3e49fc80} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p5de8780} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p5de8780} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p31831e00} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p31831e00} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p278ed00} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p278ed00} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p1b150880} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p1b150880} fill="var(--fill-1, #0D1353)" />
          </g>
          <g id="MONKSWIZARD_2">
            <path d={svgPaths.p20554840} fill="var(--fill-0, #AA45E8)" />
            <path d={svgPaths.p1039cf00} fill="var(--fill-0, #AA45E8)" />
          </g>
          <g id="MONKSWIZARD_3">
            <path d={svgPaths.p9dda300} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p9dda300} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p3de44580} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p3de44580} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p162ab800} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p162ab800} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p3516f400} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p3516f400} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p23e77700} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p23e77700} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p32a10180} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p32a10180} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p3f9dd300} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p3f9dd300} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p229e5d00} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p229e5d00} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.pb243c00} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.pb243c00} fill="var(--fill-1, #0D1353)" />
            <path d={svgPaths.p31fe6d00} fill="var(--fill-0, #0D1353)" />
            <path d={svgPaths.p31fe6d00} fill="var(--fill-1, #0D1353)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_56_480" x1="116.099" x2="133.614" y1="23.9978" y2="30.2272">
            <stop stopColor="#AA45E8" />
            <stop offset="1" stopColor="#E84592" />
          </linearGradient>
          <clipPath id="clip0_56_480">
            <rect fill="white" height="23.9978" transform="translate(116.099)" width="23.9978" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div
      className="flex items-center justify-center px-4 sm:px-[11.195px] py-[8px] sm:py-[8.956px] rounded-[22.389px] shrink-0 h-[36px] sm:h-[40px] md:h-[43.1px] w-auto sm:w-[150px] md:w-[181px] cursor-pointer"
      data-name="Button Container"
      style={{ backgroundImage: "linear-gradient(146.25deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}
    >
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[11px] sm:text-[12px] md:text-[13.434px] text-center text-white uppercase whitespace-nowrap">
        Watch the vıdeo
      </p>
    </div>
  );
}

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm" data-name="NAV BAR">
      <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-[60px] h-[56px] sm:h-[64px] md:h-[72px]">
        <NavItem />
        <ButtonContainer />
      </div>
    </nav>
  );
}