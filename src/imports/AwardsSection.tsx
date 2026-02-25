import imgAwardsBannerTransparent11 from "../assets/0dc9badc2821c4f3eb71b382e2f90b8c82f36aec.png";
import imgInc5000ColorMedallionLogo1 from "../assets/83dc785b40b51eb86369ee4a9be6558cb4098db4.png";

function AwardsHeaderContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6.903px] relative shrink-0" data-name="Awards Header Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#404040] text-[11px] md:text-[12.426px] text-center tracking-[2.9821px] uppercase">
        INDUSTRY ROCKSTAR TEAM AWARDS
      </p>
    </div>
  );
}

function AwardsHeaderContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Awards Header Container">
      <AwardsHeaderContainer1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[53.154px] relative shrink-0 w-[116.662px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[53.177px] left-[calc(50%+0.15px)] top-[calc(50%+0.01px)] w-[98.277px]" data-name="AWARDS BANNER TRANSPARENT (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[539.29%] left-[-56.16%] max-w-none top-[-220.5%] w-[1120.55%]" src={imgAwardsBannerTransparent11} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[53.154px] relative shrink-0 w-[120.114px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[53.177px] left-[calc(50%+1.12px)] top-[calc(50%+0.01px)] w-[108.498px]" data-name="AWARDS BANNER TRANSPARENT (1) 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[539.29%] left-[-188.21%] max-w-none top-[-220.5%] w-[1014.99%]" src={imgAwardsBannerTransparent11} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[53.177px] relative shrink-0 w-[178.38px]">
      <div className="-translate-x-1/2 absolute h-[53.177px] left-1/2 top-0 w-[178.38px]" data-name="AWARDS BANNER TRANSPARENT (1) 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[539.29%] left-[-200.75%] max-w-none top-[-220.5%] w-[617.36%]" src={imgAwardsBannerTransparent11} />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[53.177px] relative shrink-0 w-[178.38px]">
      <div className="-translate-x-1/2 absolute h-[53.177px] left-[calc(50%-0.34px)] top-0 w-[173.668px]" data-name="AWARDS BANNER TRANSPARENT (1) 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[539.29%] left-[-332.56%] max-w-none top-[-220.5%] w-[634.11%]" src={imgAwardsBannerTransparent11} />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[53.177px] relative shrink-0 w-[178.38px]">
      <div className="-translate-x-1/2 absolute h-[53.177px] left-1/2 top-0 w-[146.07px]" data-name="AWARDS BANNER TRANSPARENT (1) 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[539.29%] left-[-544.7%] max-w-none top-[-220.5%] w-[753.92%]" src={imgAwardsBannerTransparent11} />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[53.154px] relative shrink-0 w-[129.778px]">
      <div className="-translate-x-1/2 absolute h-[53.177px] left-[calc(50%-0.2px)] top-0 w-[61.928px]" data-name="AWARDS BANNER TRANSPARENT (1) 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[539.29%] left-[-1590.22%] max-w-none top-[-220.5%] w-[1778.26%]" src={imgAwardsBannerTransparent11} />
        </div>
      </div>
    </div>
  );
}

function LogosRow() {
  return (
    /* Horizontal scroll on mobile preserves all sprite-crop positions;
       centered flex on md+ fits within the padded container */
    <div className="w-full overflow-x-auto md:overflow-visible" data-name="Frame6">
      <div className="flex gap-[12px] md:gap-[17.258px] items-center justify-start md:justify-center min-w-max md:min-w-0 px-2 md:px-0 relative">
        <Frame />
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Frame5 />
        <div className="relative shrink-0 size-[56.64px]" data-name="Inc.-5000-Color-Medallion-Logo 1">
          <img
            alt="Inc 5000"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgInc5000ColorMedallionLogo1}
          />
        </div>
      </div>
    </div>
  );
}

export default function AwardsSection() {
  return (
    <div
      className="bg-[#fafafa] w-full flex flex-col gap-[17.948px] items-center justify-center py-6 md:py-8 px-4 sm:px-8 md:px-[200px]"
      data-name="Awards Section"
    >
      <AwardsHeaderContainer />
      <LogosRow />
    </div>
  );
}
