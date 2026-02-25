import svgPaths from "./svg-x0sxij5v6";
import Hero from "./Hero";
import imgRecognitionItem11 from "../assets/7ec0de8a8abdc498a15aadceb83ba4791beff1b3.png";
import imgRecognitionItem21 from "../assets/3ff4e580ddef3f92a5044bdd3bd162ff9f3ad2c5.png";
import imgRecognitionItem31 from "../assets/e47fbbaa0b5f9e3f81a1e223712e2cef7b46b31c.png";
import imgRecognitionItem41 from "../assets/182af471c7ae5b209ad318a19229732aa59bb85b.png";
import imgRecognitionItem1 from "../assets/e720cddf2c83cba268d09bd9a0a81e1f0e6333a8.png";
import imgGroup11712758051 from "../assets/f74c1db3a2639a115da1d8db3bbb59ad57be5630.png";
import imgImage from "../assets/d9b3637157cba1fd79b58284c1d883c8cc853703.png";
import imgDigitalArtStylePortraitAdultWoman1 from "../assets/0629ee0ea992b555b5775965c0e9f40378e2f44f.png";
import imgConferenceGroup from "../assets/a0d4390c2945003b874154c82cdac36add966b14.png";
import imgGroup117127580511 from "../assets/856fe10761a35a1937e3b85afbfc13e008c10861.png";
import imgGermany2 from "../assets/a8a7021ef47bab13dfef0a7e9938ae5fb5f60437.png";
import imgGermany3 from "../assets/8f8d723587e5609c167c931b390461da015d8daa.png";
import imgGermany4 from "../assets/daaad4d2a93ec7635f8a2f8ae52cb4c9bd526441.png";
import imgHumanCentered from "../assets/b235cbe45040abbf4791fdb71709e2bae7d8d18e.png";
import imgGermany5 from "../assets/e2e5f5e54c1265fef4d001ca7b4e262cb35f5f99.png";
import imgGermany6 from "../assets/7f8e3bb079110f6c3793e66481b8ef8475cce6e7.png";
import imgKane12 from "../assets/c30511ef0c221800b1cbb3424dddbadd7bee2ab4.png";
import imgGroup11712758081 from "../assets/71389237e1e07cd893b8939905c28896608797aa.png";
import imgImage1 from "../assets/3d9586cda062a702018c2e417df861234fbf3f1d.png";
import imgKane2 from "../assets/020b5506db23b15144229a85f26085cc4972bfaa.png";
import imgFaq from "../assets/0ca98d62cef38cf31052ca6af2f311e5a993b238.png";
import imgImage2 from "../assets/ed9e3ebabc64555f9e291f2b80d137e269613998.png";
import FeaturedOn from "./FeaturedOn";
import AwardsSection from "./AwardsSection-45-701";
import TrustpilotSection from "./TrustpilotSection";
import Frame1707482421 from "./Frame1707482421";
import StatsStrip from "./StatsContainer";
import ContentSection from "./ContentSection";
import NavBar from "./NavBar";

function HeadlineContainer1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Headline Container">
      <p className="capitalize font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#020054] text-[0px] text-center tracking-[-1.4911px] w-full whitespace-pre-wrap">
        <span className="leading-[1.112] text-[37.277px]">{`Recognized by `}</span>
        <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] italic leading-[1.112] text-[38.657px]">industry rockstars</span>
      </p>
    </div>
  );
}

function RecognitionItems() {
  const images = [
    { src: imgRecognitionItem11, name: "Recognition Item 1" },
    { src: imgRecognitionItem21, name: "Recognition Item 2" },
    { src: imgRecognitionItem31, name: "Recognition Item 3" },
    { src: imgRecognitionItem41, name: "Recognition Item 4" },
    { src: imgRecognitionItem1,  name: "Recognition Item 5" },
  ];
  return (
    <div className="flex flex-nowrap items-center justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 w-full" data-name="Recognition Items">
      {images.map((item, i) => (
        <div
          key={i}
          className="flex-1 min-w-0 relative"
          style={{ aspectRatio: "176 / 169" }}
          data-name={item.name}
        >
          <img
            alt={item.name}
            className="absolute inset-0 size-full object-contain cursor-pointer transition-all duration-300 ease-out hover:scale-[1.07] hover:drop-shadow-lg hover:brightness-[1.04]"
            src={item.src}
          />
        </div>
      ))}
    </div>
  );
}

function RecognitionSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Recognition Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[35.206px] items-center px-4 sm:px-8 md:px-12 lg:px-[120px] xl:px-[200px] py-[39.348px] relative w-full">
          <HeadlineContainer1 />
          <RecognitionItems />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 tracking-[-1px] md:tracking-[-1.5463px] w-full">
        <span className="leading-[1.15] text-[24px] sm:text-[30px] md:text-[38.657px]">The</span>
        <span className="font-['Playfair_Display:Bold_Italic',sans-serif] italic leading-[1.15] text-[25px] sm:text-[32px] md:text-[38.657px]">{` $50 Billion Problem `}</span>
        <span className="leading-[1.15] text-[24px] sm:text-[30px] md:text-[38.657px]">{`Nobody's Talking About`}</span>
      </p>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[15px] md:text-[17.948px] tracking-[-0.1795px] w-full">Right now, Fortune 500 companies and mid-market enterprises are hemorrhaging money on AI initiatives that look brilliant on paper but die silent deaths in execution.</p>
      <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] md:text-[16.567px] tracking-[-0.1657px] w-full">
        <p className="mb-2">The technology works. The strategy is sound. The ROI projections are real.</p>
        <p>But six months after launch, usage is at 12%. Teams have found workarounds. Middle management is quietly sabotaging adoption. And the C-suite is wondering what the hell went wrong.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex w-full md:flex-1 min-w-0 flex-col gap-[27px] items-start relative text-[#0d1353]">
      <Frame1 />
      <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[15px] md:text-[17.948px] tracking-[-0.1795px] w-full">
        <p className="mb-2">{`This isn't a technology problem.`}</p>
        <p className="mb-2">{`It's a people problem.`}</p>
        <p>{`And that's exactly where the opportunity is.`}</p>
      </div>
    </div>
  );
}

function StatTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[6.213px] items-start relative w-full" data-name="Stat Text Container">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[38px] md:text-[49.702px] tracking-[-1.9881px]" style={{ backgroundImage: "linear-gradient(120.419deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)", WebkitTextFillColor: "transparent" }}>
        95%
      </p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0d1353] text-[13px] md:text-[16.567px] tracking-[-0.6627px] w-full">of generative AI pilots fail to deliver measurable business impact</p>
    </div>
  );
}

function StatTextContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[9.664px] items-start relative w-full" data-name="Stat Text Container">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[38px] md:text-[49.702px] tracking-[-1.9881px]" style={{ backgroundImage: "linear-gradient(120.659deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)", WebkitTextFillColor: "transparent" }}>
        45%
      </p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0d1353] text-[13px] md:text-[16.567px] tracking-[-0.6627px] w-full">of CEOs report their employees are openly resistant or hostile to AI adoption</p>
    </div>
  );
}

function StatTextContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[9.664px] items-start relative w-full" data-name="Stat Text Container">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[38px] md:text-[49.702px] tracking-[-1.9881px]" style={{ backgroundImage: "linear-gradient(118.706deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)", WebkitTextFillColor: "transparent" }}>
        74%
      </p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0d1353] text-[13px] md:text-[16.567px] tracking-[-0.6627px] w-full">{`of organizations can't scale even after multiple successful pilots`}</p>
    </div>
  );
}

function StatTextContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[6.213px] items-start relative w-full" data-name="Stat Text Container">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[38px] md:text-[49.702px] tracking-[-1.9881px]" style={{ backgroundImage: "linear-gradient(117.447deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)", WebkitTextFillColor: "transparent" }}>
        41%
      </p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0d1353] text-[13px] md:text-[16.567px] tracking-[-0.6627px] w-full">of younger workers admit to actively undermining AI efforts they view as threatening</p>
    </div>
  );
}

function StatsContainer() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:gap-x-8 w-full" data-name="Stats Container">
      <StatTextContainer />
      <StatTextContainer1 />
      <StatTextContainer2 />
      <StatTextContainer3 />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="flex w-full md:flex-1 min-w-0 flex-col gap-[17.948px] items-start justify-center relative" data-name="Text Container">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#0d1353] text-[15px] md:text-[17.948px] tracking-[-0.1795px] w-full">{`Here's what they're discovering:`}</p>
      <StatsContainer />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white flex flex-col md:flex-row gap-8 md:gap-[69px] items-start md:items-end px-4 sm:px-8 md:px-16 lg:px-[270px] py-10 md:py-[68px] relative shrink-0 w-full">
      <Frame2 />
      <TextContainer1 />
    </div>
  );
}

function AuthorInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Author Info">
      <p className="bg-clip-text font-['Manrope:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-[14.97px] text-white w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(60, 128, 255) 0%, rgb(117, 34, 189) 100%), linear-gradient(-4.53062deg, rgb(249, 5, 242) 16.982%, rgb(0, 0, 0) 86.805%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)", WebkitTextFillColor: "transparent" }}>
        <span className="bg-clip-text font-['Plus_Jakarta_Sans:Bold',sans-serif] leading-[20.316px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(60, 128, 255) 0%, rgb(117, 34, 189) 100%), linear-gradient(-4.53062deg, rgb(249, 5, 242) 16.982%, rgb(0, 0, 0) 86.805%), linear-gradient(90deg, rgb(13, 19, 83) 0%, rgb(13, 19, 83) 100%)", WebkitTextFillColor: "transparent" }}>
          ROBERT
        </span>
        <span className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[20.316px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(60, 128, 255) 0%, rgb(117, 34, 189) 100%), linear-gradient(-4.53062deg, rgb(249, 5, 242) 16.982%, rgb(0, 0, 0) 86.805%), linear-gradient(90deg, rgb(13, 19, 83) 0%, rgb(13, 19, 83) 100%)", WebkitTextFillColor: "transparent" }}>
          KIYOSAKI
        </span>
      </p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16.039px] relative shrink-0 text-[10.693px] w-full">{`American businessman and author, known for the Rich Dad Poor Dad series `}</p>
    </div>
  );
}

function TestimonialContent() {
  return (
    <div className="relative content-stretch flex flex-col gap-[16.574px] items-start text-[#0d1353] w-full whitespace-pre-wrap" data-name="Testimonial Content">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[23.471px] relative shrink-0 text-[17.948px] tracking-[-0.1795px] w-full">We invested in Industry Rockstar years ago, and toured the world together speaking and teaching. They are the top of the Mentors.</p>
      <AuthorInfo />
    </div>
  );
}

function TestimonialContainer() {
  return (
    <div className="relative shrink-0 w-full max-w-[439.727px]" data-name="Testimonial Container">
      <TestimonialContent />
    </div>
  );
}

function ContentSection1() {
  return (
    <div className="bg-[#f5f4fc] relative shrink-0 w-full" data-name="Content Section">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-center flex flex-wrap gap-[11.735px] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[180px] py-[17.258px] relative w-full">
          <TestimonialContainer />
          <div className="h-[274.398px] relative shrink-0 w-[239.538px]" data-name="Group 1171275805 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup11712758051} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[17.689px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6892 17.6892">
        <g id="Icon">
          <path d={svgPaths.p2cb24e60} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.21115" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[4.142px] shadow-[0px_8.845px_13.267px_0px_rgba(0,0,0,0.1),0px_3.538px_5.307px_0px_rgba(0,0,0,0.1)] shrink-0 size-[28.303px]" data-name="Container">
      <Icon />
    </div>
  );
}

function StatTextContainer4() {
  return (
    <div className="flex gap-[13.116px] items-center px-[20px] py-[20px] w-full" data-name="Stat Text Container">
      <Container />
      <p className="flex-1 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] text-[#0d1353] text-[16.567px] whitespace-pre-wrap">AI implementation specialists who can build the systems</p>
    </div>
  );
}

function StatContainer() {
  return (
    <div className="w-full backdrop-blur-[7.102px] bg-white rounded-[6.903px] shadow-[0px_7.102px_21.307px_0px_rgba(12,60,84,0.2)]" data-name="Stat Container">
      <StatTextContainer4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[17.689px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6892 17.6892">
        <g id="Icon">
          <path d={svgPaths.p19c05f40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.21115" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[4.142px] shadow-[0px_8.845px_13.267px_0px_rgba(0,0,0,0.1),0px_3.538px_5.307px_0px_rgba(0,0,0,0.1)] shrink-0 size-[28.303px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function StatTextContainer5() {
  return (
    <div className="flex gap-[13.116px] items-center px-[20px] py-[20px] w-full" data-name="Stat Text Container">
      <Container1 />
      <p className="flex-1 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] text-[#0d1353] text-[16.567px] whitespace-pre-wrap">Strategy consultants who can design the roadmap</p>
    </div>
  );
}

function StatContainer1() {
  return (
    <div className="w-full backdrop-blur-[7.102px] bg-white rounded-[6.903px] shadow-[0px_7.102px_21.307px_0px_rgba(12,60,84,0.2)]" data-name="Stat Container">
      <StatTextContainer5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[17.689px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6892 17.6892">
        <g id="Icon">
          <path d={svgPaths.p3c104980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.21115" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[4.142px] shadow-[0px_8.845px_13.267px_0px_rgba(0,0,0,0.1),0px_3.538px_5.307px_0px_rgba(0,0,0,0.1)] shrink-0 size-[28.303px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function StatTextContainer6() {
  return (
    <div className="flex gap-[13.116px] items-center px-[20px] py-[20px] w-full" data-name="Stat Text Container">
      <Container2 />
      <p className="flex-1 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] text-[#0d1353] text-[16.567px] whitespace-pre-wrap">Technology vendors who can sell them the tools</p>
    </div>
  );
}

function StatContainer2() {
  return (
    <div className="w-full backdrop-blur-[7.102px] bg-white rounded-[6.903px] shadow-[0px_7.102px_21.307px_0px_rgba(12,60,84,0.2)]" data-name="Stat Container">
      <StatTextContainer6 />
    </div>
  );
}

function StatsContainer1() {
  return (
    <div className="flex flex-col gap-[13.806px] items-start justify-center leading-[0] relative w-full" data-name="Stats Container">
      <StatContainer />
      <StatContainer1 />
      <StatContainer2 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[21.4px] items-start relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22.09px] relative shrink-0 text-[#0d1353] text-[17.948px] tracking-[-0.1795px] w-full whitespace-pre-wrap">Every enterprise has access to:</p>
      <StatsContainer1 />
    </div>
  );
}

function IntroContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[14.497px] items-start justify-center relative shrink-0 text-[#0d1353] w-full whitespace-pre-wrap" data-name="Intro Container">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22.09px] relative shrink-0 text-[22.09px] tracking-[-0.2209px] w-full" style={{ backgroundImage: "linear-gradient(176.376deg, rgb(232, 69, 146) 1.1176%, rgb(106, 38, 213) 99.084%), linear-gradient(90deg, rgb(13, 19, 83) 0%, rgb(13, 19, 83) 100%)", WebkitTextFillColor: "transparent" }}>{`What they DON'T have?`}</p>
      <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.78px] relative shrink-0 text-[16.567px] tracking-[-0.1657px] w-full">
        <p className="mb-[8.28372859954834px]">Someone who can actually get their people to USE what was built.</p>
        <p className="mb-[8.28372859954834px]">{`Someone who understands that AI adoption isn't a technical challenge. It's a cultural transformation that requires psychology, change management, and human-centered leadership.`}</p>
        <p className="mb-[8.28372859954834px]">{`This is the invisible friction that's costing enterprises billions.`}</p>
        <p>{`And it's creating an unprecedented opportunity for consultants who understand what's really happening:`}</p>
      </div>
      <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[15.877px] relative shrink-0 text-[17.948px] tracking-[-0.1795px] w-full">
        <p className="mb-[8.28372859954834px]">{`The technology is ready. The people aren't.`}</p>
        <p>{`That gap? That's your market.`}</p>
      </div>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">
      <IntroContainer />
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="h-[53.154px] relative rounded-[27.612px] shrink-0 w-full" data-name="Button Container" style={{ backgroundImage: "linear-gradient(161.473deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(90deg, rgb(255, 0, 246) 0%, rgb(255, 0, 246) 100%)" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13.806px] py-[11.045px] relative size-full">
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20.709px] relative shrink-0 text-[16.567px] text-center text-white uppercase">REGISTER FOR THE NEXT AVAILABLE SESSION</p>
        </div>
      </div>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[29.683px] items-start justify-end relative shrink-0 w-full" data-name="Text Container">
      <TextContainer4 />
      <ButtonContainer2 />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[40px] items-center relative w-full" data-name="Content Container">
      <TextContainer2 />
      <TextContainer3 />
    </div>
  );
}

function ContentSection2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content Section">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="content-stretch flex flex-col gap-[37.967px] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[235px] py-[37.967px] relative w-full">
          <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0d1353] text-[38.657px] text-center tracking-[-1.5463px] w-full whitespace-pre-wrap">
            <p className="mb-0">{`Why Technical Consultants Can't Solve This `}</p>
            <p className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold italic">(But You Can)</p>
          </div>
          <ContentContainer1 />
        </div>
      </div>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold gap-[6.213px] items-start relative shrink-0 text-center text-white w-full" data-name="Text Container">
      <p className="leading-tight relative shrink-0 text-[26px] sm:text-[32px] md:text-[38.657px] tracking-[-1px] md:tracking-[-1.5463px] w-full">
        <span className="leading-[normal]">{`It's Not Resistance. `}</span>
        <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold italic leading-[normal]">{`It's Fear.`}</span>
      </p>
      <p className="leading-[22.09px] relative shrink-0 text-[15px] md:text-[17.948px] tracking-[-0.1795px] w-full">When employees push back on AI, leadership interprets it as:</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[17.689px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6892 17.6892">
        <g id="Icon">
          <path d={svgPaths.p20ea1200} fill="var(--stroke-0, white)" id="Arrow 1" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[4.142px] shadow-[0px_8.845px_13.267px_0px_rgba(0,0,0,0.1),0px_3.538px_5.307px_0px_rgba(0,0,0,0.1)] shrink-0 size-[28.303px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex gap-[8px] lg:gap-[17.258px] items-center relative" data-name="Text Container">
      <Container3 />
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22.09px] relative text-[13px] lg:text-[17.948px] text-white tracking-[-0.1795px] whitespace-nowrap">Resistance to change</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[17.689px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6892 17.6892">
        <g id="Icon">
          <path d={svgPaths.p3c769080} fill="var(--stroke-0, white)" id="Arrow 1" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[4.142px] shadow-[0px_8.845px_13.267px_0px_rgba(0,0,0,0.1),0px_3.538px_5.307px_0px_rgba(0,0,0,0.1)] shrink-0 size-[28.303px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="content-stretch flex gap-[8px] lg:gap-[17.258px] items-center relative" data-name="Text Container">
      <Container4 />
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22.09px] relative text-[13px] lg:text-[17.948px] text-white tracking-[-0.1795px] whitespace-nowrap">Lack of Vision</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[17.689px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6892 17.6892">
        <g id="Icon">
          <path d={svgPaths.p36d6d180} fill="var(--stroke-0, white)" id="Arrow 1" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[4.142px] shadow-[0px_8.845px_13.267px_0px_rgba(0,0,0,0.1),0px_3.538px_5.307px_0px_rgba(0,0,0,0.1)] shrink-0 size-[28.303px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function TextContainer10() {
  return (
    <div className="content-stretch flex gap-[8px] lg:gap-[17.258px] items-center relative" data-name="Text Container">
      <Container5 />
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22.09px] relative text-[13px] lg:text-[17.948px] text-white tracking-[-0.1795px] whitespace-nowrap">Generational Friction</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[17.689px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6892 17.6892">
        <g id="Icon">
          <path d={svgPaths.p322edb00} fill="var(--stroke-0, white)" id="Arrow 1" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[4.142px] shadow-[0px_8.845px_13.267px_0px_rgba(0,0,0,0.1),0px_3.538px_5.307px_0px_rgba(0,0,0,0.1)] shrink-0 size-[28.303px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="content-stretch flex gap-[8px] lg:gap-[17.258px] items-center relative" data-name="Text Container">
      <Container6 />
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22.09px] relative text-[13px] lg:text-[17.948px] text-white tracking-[-0.1795px] whitespace-nowrap">Fear of job loss</p>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3 lg:gap-x-[36.586px] items-center justify-center relative shrink-0 w-full" data-name="Text Container">
      <TextContainer8 />
      <TextContainer9 />
      <TextContainer10 />
      <TextContainer11 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[35.206px] items-center relative shrink-0 w-full" data-name="Text Container">
      <TextContainer6 />
      <TextContainer7 />
    </div>
  );
}

function TextContainer12() {
  return (
    <div className="w-full md:flex-[1_0_0] flex flex-col gap-[15.877px] items-start relative text-white" data-name="Text Container">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22.09px] relative shrink-0 text-[22.09px] tracking-[-0.2209px] w-full">{`But here's what's actually happening:`}</p>
      <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.78px] relative shrink-0 text-[16.567px] tracking-[-0.1657px] w-full">
        <p className="mb-[8.28372859954834px]">{`People aren't afraid of AI. They're afraid of being made irrelevant.`}</p>
        <p className="mb-[8.28372859954834px]">{`They're afraid their judgment won't matter anymore. That their expertise will be devalued. That their role will shrink until there's nothing left worth doing.`}</p>
        <p className="mb-[8.28372859954834px]">And when companies roll out AI initiatives without addressing this fear directly?</p>
        <p className="mb-[8.28372859954834px]">Adoption dies. Not through confrontation, through silent rejection.</p>
        <p>Non-use. Workarounds. Passive sabotage. Cultural disengagement.</p>
      </div>
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-[60.057px] items-center justify-center relative shrink-0 w-full" data-name="Content Container">
      <TextContainer12 />
      <div className="w-full md:flex-[1_0_0] h-[260px] md:h-[324.785px] relative rounded-[11.045px] overflow-hidden shrink-0" data-name="digital-art-style-portrait-adult-woman 1">
        <img alt="Conference group celebrating with hands raised" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgConferenceGroup} />
      </div>
    </div>
  );
}

function TextContainer14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Text Container">
      <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[25.541px] relative shrink-0 text-[0px] text-center text-white tracking-[-0.1657px] w-full whitespace-pre-wrap">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold mb-[8.28372859954834px] text-[22.09px]">{`This is the problem you'll learn to solve.`}</p>
        <p className="text-[16.567px]">{`Because once you understand the psychology of AI resistance, you become the consultant that enterprises can't implement successfully without.`}</p>
      </div>
    </div>
  );
}

function ButtonContainer3() {
  return (
    <div className="bg-white content-stretch flex h-[53.154px] items-center justify-center px-[13.806px] py-[11.045px] relative rounded-[27.612px] shrink-0 w-full max-w-[441.799px]" data-name="Button Container">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20.709px] relative shrink-0 text-[#0d1353] text-[16.567px] text-center uppercase">REGISTER FOR THE NEXT AVAILABLE SESSION</p>
    </div>
  );
}

function TextContainer13() {
  return (
    <div className="content-stretch flex flex-col gap-[25.541px] items-center relative shrink-0 w-full" data-name="Text Container">
      <TextContainer14 />
      <ButtonContainer3 />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col gap-[55.915px] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[270px] py-[80px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <TextContainer5 />
      <ContentContainer2 />
      <TextContainer13 />
    </div>
  );
}

function AuthorInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Author Info">
      <p className="bg-clip-text font-['Manrope:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-[14.97px] text-white w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(60, 128, 255) 0%, rgb(117, 34, 189) 100%), linear-gradient(-5.1157deg, rgb(249, 5, 242) 16.982%, rgb(0, 0, 0) 86.805%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)", WebkitTextFillColor: "transparent" }}>
        <span className="bg-clip-text font-['Inter:Bold',sans-serif] leading-[20.316px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(60, 128, 255) 0%, rgb(117, 34, 189) 100%), linear-gradient(-5.1157deg, rgb(249, 5, 242) 16.982%, rgb(0, 0, 0) 86.805%), linear-gradient(90deg, rgb(13, 19, 83) 0%, rgb(13, 19, 83) 100%)", WebkitTextFillColor: "transparent" }}>
          RICHARD
        </span>
        <span className="bg-clip-text font-['Inter:Light',sans-serif] font-light leading-[20.316px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(60, 128, 255) 0%, rgb(117, 34, 189) 100%), linear-gradient(-5.1157deg, rgb(249, 5, 242) 16.982%, rgb(0, 0, 0) 86.805%), linear-gradient(90deg, rgb(13, 19, 83) 0%, rgb(13, 19, 83) 100%)", WebkitTextFillColor: "transparent" }}>
          BRANSON
        </span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.039px] relative shrink-0 text-[10.693px] w-full">Businessman, Investor and Founder of Virgin Group</p>
    </div>
  );
}

function TestimonialContent1() {
  return (
    <div className="relative content-stretch flex flex-col gap-[16.574px] items-start text-[#0d1353] w-full whitespace-pre-wrap" data-name="Testimonial Content">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24.161px] relative shrink-0 text-[17.948px] tracking-[-0.1795px] w-full">Kane and his team taught AI technologies at my private home in Necker island while I took lots of notes! The crowd was fascinated!</p>
      <AuthorInfo1 />
    </div>
  );
}

function TestimonialContainer1() {
  return (
    <div className="relative shrink-0 w-full max-w-[389.212px]" data-name="Testimonial Container">
      <TestimonialContent1 />
    </div>
  );
}

function ContentSection3() {
  return (
    <div className="bg-[#f5f5fc] relative shrink-0 w-full" data-name="Content Section">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-center flex flex-wrap gap-[11.762px] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[180px] py-[17.258px] relative w-full">
          <div className="h-[274.398px] relative shrink-0 w-[239.538px]" data-name="Group 1171275805-1 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup117127580511} />
          </div>
          <TestimonialContainer1 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[11.735px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#c28a4f] text-[15.187px] tracking-[1.6706px] uppercase w-[min-content]">{`WHAT YOU'RE GETTING `}</p>
      <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[90.59500122070312%] relative shrink-0 text-[#0d1353] text-[38.657px] tracking-[-1.5463px] w-full">
        <p className="mb-0">{`What You'll Walk Away With in This `}</p>
        <p className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold italic">2-Hour Workshop</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[10.355px] items-center relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Container">
      <Container9 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.78px] relative shrink-0 text-[#0d1353] text-[16.567px] tracking-[0.1657px] w-full">{`This isn't a theory. This isn't AI hype. This is the strategic positioning, language, and frameworks you need to position yourself as the AI adoption specialist that enterprises are actively seeking right now.`}</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

// ── Shared helpers for "What You're Getting" cards ───────────────────────────
function WygCardText({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col gap-3 justify-center flex-1 px-8 py-8 md:px-10 md:py-10 text-[#0d1353]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.15] text-[22.09px] tracking-[-0.4418px]">{title}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.42] text-[16.567px] tracking-[-0.1657px]">{body}</p>
    </div>
  );
}
function WygCardImage({ src }: { src: string }) {
  return (
    <div className="w-full h-[240px] shrink-0 md:w-[42%] md:h-full overflow-hidden">
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

function ContentContainer3() {
  return (
    <div className="bg-[#f5f5fc] rounded-[14px] w-full overflow-hidden flex flex-col md:flex-row md:h-[280px]" data-name="Content Container">
      <WygCardText
        title="The Enterprise AI Adoption Framework"
        body="Why AI initiatives fail at the cultural level (not the technical level) and how to diagnose resistance before it kills adoption. You'll understand the problem better than the CTOs who hired you."
      />
      <WygCardImage src={imgGermany2} />
    </div>
  );
}

function Container12() { return null; }
function ContentContainer4() {
  return (
    <div className="bg-[#f5f5fc] rounded-[14px] w-full overflow-hidden flex flex-col md:flex-row md:h-[280px]" data-name="Content Container">
      <WygCardImage src={imgGermany3} />
      <WygCardText
        title="The Psychology of AI Resistance"
        body="The real fears driving pushback (it's not what leadership thinks), how to surface them without creating defensiveness, and the reframing techniques that turn resistors into champions."
      />
    </div>
  );
}

function Container13() { return null; }
function ContentContainer5() {
  return (
    <div className="bg-[#f5f5fc] rounded-[14px] w-full overflow-hidden flex flex-col md:flex-row md:h-[280px]" data-name="Content Container">
      <WygCardText
        title="The Human-Centered AI Implementation Model"
        body="How to design AI systems that preserve human judgment, expertise, and value so adoption feels like elevation, not replacement. This is what separates $5K consultants from $50K consultants."
      />
      <WygCardImage src={imgHumanCentered} />
    </div>
  );
}

function Container14() { return null; }
function ContentContainer6() {
  return (
    <div className="bg-[#f5f5fc] rounded-[14px] w-full overflow-hidden flex flex-col md:flex-row md:h-[280px]" data-name="Content Container">
      <WygCardImage src={imgGermany5} />
      <WygCardText
        title="How to Position Yourself for Premium Consulting Fees"
        body="The language, credentials, and strategic positioning that gets you in the room with decision-makers and justifies rates that reflect the value you're creating (not the hours you're billing)."
      />
    </div>
  );
}

function Container15() { return null; }
function ContentContainer7() {
  return (
    <div className="bg-[#f5f5fc] rounded-[14px] w-full overflow-hidden flex flex-col md:flex-row md:h-[280px]" data-name="Content Container">
      <WygCardText
        title="Your Path to Certification (If You Want It)"
        body="An introduction to the Industry Rockstar AI Change Management Certification Program: the credentials, frameworks, and ongoing support that lets you serve enterprise clients with confidence and authority."
      />
      <WygCardImage src={imgGermany6} />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <ContentContainer3 />
      <ContentContainer4 />
      <ContentContainer5 />
      <ContentContainer6 />
      <ContentContainer7 />
    </div>
  );
}

function ContentSection4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[46.251px] items-center px-4 sm:px-8 md:px-16 lg:px-[270px] py-[75.934px] relative w-full">
          <Container7 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[4.832px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#c28a4f] text-[15.187px] tracking-[1.6706px] uppercase w-[min-content]">{`WHO THIS IS FOR `}</p>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#0d1353] text-[0px] tracking-[-1.5463px] w-full">
        <span className="leading-[normal] text-[38.657px]">{`This Workshop Is  `}</span>
        <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold italic leading-[normal] text-[42.799px]">For You</span>
        <span className="leading-[normal] text-[38.657px]">{`  If:`}</span>
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[10.355px] items-center relative shrink-0 text-center w-full max-w-[642.679px] whitespace-pre-wrap" data-name="Container">
      <Container17 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20.709px] relative shrink-0 text-[#0d1353] text-[16.567px] w-full">{`You're watching the AI wave and thinking: "There's an opportunity here, but I don't know how to position myself."`}</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[28.454px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28.454px] relative shrink-0 text-[23.711px] text-white">{`Maybe you're:`}</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p80e1300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#10b981] items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px] to-[#059669]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[12.426px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.119px] min-h-px min-w-px relative text-[14.227px] text-white whitespace-pre-wrap">A consultant or coach who wants to add a high-demand, high-value specialty to your practice (and tired of competing on price in a commoditized market)</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p28f6a000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#10b981] items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px] to-[#059669]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[12.426px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.119px] min-h-px min-w-px relative text-[14.227px] text-white whitespace-pre-wrap">{`An AI implementer or automation specialist who's great at building systems but keeps running into adoption problems you can't solve with better technology`}</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p2d21c200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#10b981] items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px] to-[#059669]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[12.426px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.119px] min-h-px min-w-px relative text-[14.227px] text-white whitespace-pre-wrap">A business owner or executive who needs to lead AI transformation in your own company and wants frameworks that actually work with humans, not just spreadsheets</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p6947a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#10b981] items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px] to-[#059669]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[12.426px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.119px] min-h-px min-w-px relative text-[14.227px] text-white whitespace-pre-wrap">{`An internal change agent who's been tasked with "making AI work" and realizing you need more than enthusiasm and a Slack channel`}</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative rounded-[18.969px] shadow-[0px_7.904px_11.856px_0px_rgba(0,0,0,0.1),0px_3.162px_4.742px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(-63.3345deg, rgb(232, 69, 146) 39.051%, rgb(117, 34, 189) 99.754%), linear-gradient(90deg, rgb(2, 6, 35) 0%, rgb(2, 6, 35) 100%)" }}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[17.258px] items-center justify-center px-[33.196px] py-[24px] relative w-full">
          <Heading />
          <Container19 />
          <Container21 />
          <Container23 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p392b5b16} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#10b981] items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px] to-[#059669]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[17px] items-start relative shrink-0 w-full" data-name="Text">
      <Container28 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.119px] min-w-0 relative text-[#0d1353] text-[14.227px] tracking-[-0.3473px]">
        You see enterprises investing heavily in AI but struggling with adoption
      </p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p1b3a66a0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#10b981] items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px] to-[#059669]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[17px] items-start relative shrink-0 w-full" data-name="Text">
      <Container29 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.119px] min-w-0 relative text-[#0d1353] text-[14.227px] tracking-[-0.3473px]">
        You want to command premium fees for solving high-value problems
      </p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p29d0d300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#10b981] items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px] to-[#059669]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[17px] items-start relative shrink-0 w-full" data-name="Text">
      <Container30 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.119px] min-w-0 relative text-[#0d1353] text-[14.227px] tracking-[-0.3473px]">
        You're looking for a specialty with explosive demand and limited competition
      </p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.pf29700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#10b981] items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px] to-[#059669]" data-name="Container">
      <Icon14 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[17px] items-start relative shrink-0 w-full" data-name="Text">
      <Container31 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.119px] min-w-0 relative text-[#0d1353] text-[14.227px] tracking-[-0.3473px]">{`You'd rather be indispensable than interchangeable`}</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] w-full md:flex-[1_0_0] relative rounded-[18.969px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.581px] border-solid inset-0 pointer-events-none rounded-[18.969px] shadow-[0px_7.904px_11.856px_0px_rgba(0,0,0,0.1),0px_3.162px_4.742px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[17.258px] items-start pb-[33.196px] pt-[33.196px] px-6 md:px-[33.196px] relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#0d1353] text-[20px] md:text-[23.711px] w-full">{`You'll get the most value if:`}</p>
        <Text />
        <Text1 />
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p29ff2490} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
          <path d={svgPaths.pd205380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#ef4444] content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[19px] items-start relative shrink-0 w-full" data-name="Text">
      <Container33 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.119px] min-w-0 relative text-[#0d1353] text-[14.227px] tracking-[-0.3473px]">
        You're looking for technical AI training (prompt engineering, model fine-tuning, etc.)
      </p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p17be9780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
          <path d={svgPaths.p1321a600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#ef4444] content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[19px] items-start relative shrink-0 w-full" data-name="Text">
      <Container34 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.119px] min-w-0 relative text-[#0d1353] text-[14.227px] tracking-[-0.3473px]">You want to learn how to build AI agents or automation workflows</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p19d75200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
          <path d={svgPaths.p3c1de300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#ef4444] content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex gap-[19px] items-start relative shrink-0 w-full" data-name="Text">
      <Container35 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.119px] min-w-0 relative text-[#0d1353] text-[14.227px] tracking-[-0.3473px]">{`You're expecting a certification at the end of this workshop (this is an introduction; certification comes after if you want it)`}</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p3758080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
          <path d={svgPaths.p334e8880} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#ef4444] content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex gap-[19px] items-start relative shrink-0 w-full" data-name="Text">
      <Container36 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.119px] min-w-0 relative text-[#0d1353] text-[14.227px] tracking-[-0.3473px]">{`You're just curious about AI but not interested in consulting or leadership`}</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] w-full md:flex-[1_0_0] relative rounded-[18.969px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.581px] border-solid inset-0 pointer-events-none rounded-[18.969px] shadow-[0px_7.904px_11.856px_0px_rgba(0,0,0,0.1),0px_3.162px_4.742px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[18.638px] items-start pb-[33.2px] pt-[33.196px] px-6 md:px-[33.196px] relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#0d1353] text-[20px] md:text-[23.711px] w-full">This is NOT for:</p>
        <Text4 />
        <Text5 />
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function TextContainer16() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[37.277px] items-stretch justify-center relative shrink-0 w-full" data-name="Text Container">
      <Container27 />
      <Container32 />
    </div>
  );
}

function TextContainer15() {
  return (
    <div className="content-stretch flex flex-col gap-[37.277px] items-center relative shrink-0 w-full" data-name="Text Container">
      <Container18 />
      <TextContainer16 />
    </div>
  );
}

function ContentSection5() {
  return (
    <div className="bg-[#f5f5fc] relative shrink-0 w-full" data-name="Content Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[44.18px] items-center px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[270px] py-[69px] relative w-full">
          <Container16 />
          <TextContainer15 />
        </div>
      </div>
    </div>
  );
}

function LeadershipTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[4.832px] items-start relative shrink-0 text-center w-full" data-name="Leadership Title">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c28a4f] text-[16.567px] tracking-[1.4911px] w-full">{`WHO'S LEADING THIS`}</p>
      <p className="font-['Plus_Jakarta_Sans:Bold_Italic',sans-serif] font-bold italic leading-[0] relative shrink-0 text-[#0d1353] text-[0px] tracking-[-1.5463px] w-full">
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] leading-[normal] text-[38.657px]">Your Hosts:</span>
        <span className="leading-[normal] text-[38.657px]">{` `}</span>
        <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold leading-[normal] text-[42.799px]">{`Kane Minkus & Jeff Slater`}</span>
      </p>
    </div>
  );
}

function TextContainer20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold gap-[9.664px] items-start leading-[0] min-h-px min-w-px relative text-[#0d1353] text-[16.567px] tracking-[-0.3034px]" data-name="Text Container">
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[24.8505px] whitespace-pre-wrap">
          <span className="leading-[21.4px]">Inc 5000 #1048 Fastest-Growing Company</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[24.8505px] whitespace-pre-wrap">
          <span className="leading-[21.4px]">$18M+ in annual revenue from training programs</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[24.8505px] whitespace-pre-wrap">
          <span className="leading-[21.4px]">4+ million students trained globally across multiple industries</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[24.8505px] whitespace-pre-wrap">
          <span className="leading-[21.4px]">Built and scaled Industry Rockstar into the leading AI certification platform for professionals who want to stay ahead of disruption</span>
        </li>
      </ul>
    </div>
  );
}

function TextContainer19() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[28.993px] items-center md:items-end justify-center relative shrink-0 w-full" data-name="Text Container">
      <div className="h-[200px] md:h-[237.233px] relative shrink-0 w-full md:w-[360px]" data-name="kane 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgKane12} />
      </div>
      <TextContainer20 />
    </div>
  );
}

function TextContainer22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold gap-[11.045px] items-start leading-[0] min-h-px min-w-px relative text-[#0d1353] text-[16.567px] tracking-[-0.3034px]" data-name="Text Container">
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[24.8505px] whitespace-pre-wrap">
          <span className="leading-[21.4px]">Leading change initiatives for companies navigating technology adoption</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[24.8505px] whitespace-pre-wrap">
          <span className="leading-[21.4px]">Executive-level strategic clarity combined with people-centered change management</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="list-disc ms-[24.8505px] whitespace-pre-wrap">
          <span className="leading-[21.4px]">Helping consultants and internal leaders build frameworks that work with human psychology, not against it</span>
        </li>
      </ul>
    </div>
  );
}

function TextContainer21() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[28.993px] items-center md:items-center justify-center relative w-full" data-name="Text Container">
      <TextContainer22 />
      <div className="relative shrink-0 w-full md:w-[320px] rounded-[12px] overflow-hidden" data-name="Group 1171275808 1">
        <img alt="Jeff Slayter" className="w-full h-auto block" src={imgGroup11712758081} />
      </div>
    </div>
  );
}

function TextContainer18() {
  return (
    <div className="content-stretch flex flex-col gap-[21.4px] items-center justify-center relative shrink-0 w-full" data-name="Text Container">
      <TextContainer19 />
      <TextContainer21 />
    </div>
  );
}

function StatTextContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[6.213px] items-center justify-center relative shrink-0 w-[139.443px]" data-name="Stat Text Container">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[49.702px] tracking-[-1.9881px]" style={{ backgroundImage: "linear-gradient(109.866deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)", WebkitTextFillColor: "transparent" }}>
        20
      </p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.471px] min-w-full relative shrink-0 text-[#0d1353] text-[16.567px] text-center tracking-[-0.6627px] w-[min-content] whitespace-pre-wrap">Years In Business</p>
    </div>
  );
}

function StatTextContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-[6.213px] items-center justify-center relative shrink-0 w-[132.54px]" data-name="Stat Text Container">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[49.702px] tracking-[-1.9881px]" style={{ backgroundImage: "linear-gradient(111.564deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)", WebkitTextFillColor: "transparent" }}>
        5M
      </p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.471px] min-w-full relative shrink-0 text-[#0d1353] text-[16.567px] text-center tracking-[-0.6627px] w-[min-content] whitespace-pre-wrap">Professional</p>
    </div>
  );
}

function StatTextContainer9() {
  return (
    <div className="content-stretch flex flex-col gap-[6.213px] items-center justify-center relative shrink-0 text-center" data-name="Stat Text Container">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[49.702px] tracking-[-1.9881px] w-[min-content] whitespace-pre-wrap" style={{ backgroundImage: "linear-gradient(128.915deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)", WebkitTextFillColor: "transparent" }}>
        80+
      </p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.471px] relative shrink-0 text-[#0d1353] text-[16.567px] tracking-[-0.6627px]">Products / Courses</p>
    </div>
  );
}

function StatTextContainer10() {
  return (
    <div className="content-stretch flex flex-col gap-[6.213px] items-center justify-center relative shrink-0 text-center w-[159px] whitespace-pre-wrap" data-name="Stat Text Container">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[49.702px] tracking-[-1.9881px] w-full" style={{ backgroundImage: "linear-gradient(131.913deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)", WebkitTextFillColor: "transparent" }}>
        30+
      </p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.471px] relative shrink-0 text-[#0d1353] text-[16.567px] tracking-[-0.6627px] w-full">Industry Awards</p>
    </div>
  );
}

function StatTextContainer11() {
  return (
    <div className="content-stretch flex flex-col gap-[6.213px] items-center justify-center relative shrink-0 w-[170.507px]" data-name="Stat Text Container">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[49.702px] tracking-[-1.9881px] w-[min-content] whitespace-pre-wrap" style={{ backgroundImage: "linear-gradient(133.909deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)", WebkitTextFillColor: "transparent" }}>
        5,500+
      </p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.471px] relative shrink-0 text-[#0d1353] text-[16.567px] text-center tracking-[-0.6627px]">Presentations</p>
    </div>
  );
}

function StatTextContainer12() {
  return (
    <div className="content-stretch flex flex-col gap-[6.213px] items-center justify-center relative shrink-0 w-[274px]" data-name="Stat Text Container">
      <p className="bg-clip-text font-['Plus_Jakarta_Sans:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[49.702px] tracking-[-1.9881px]" style={{ backgroundImage: "linear-gradient(139.172deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)", WebkitTextFillColor: "transparent" }}>
        50,000+
      </p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.471px] min-w-full relative shrink-0 text-[#0d1353] text-[16.567px] text-center tracking-[-0.6627px] w-[min-content] whitespace-pre-wrap">Business Owners A Month Trained</p>
    </div>
  );
}

function StatsContainer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stats Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-start flex flex-wrap gap-[30.374px] items-start justify-center px-0 sm:px-[40px] md:px-[75px] relative w-full">
          <StatTextContainer7 />
          <StatTextContainer8 />
          <StatTextContainer9 />
          <StatTextContainer10 />
          <StatTextContainer11 />
          <StatTextContainer12 />
        </div>
      </div>
    </div>
  );
}

function TextContainer17() {
  return (
    <div className="content-stretch flex flex-col gap-[26.232px] items-center relative shrink-0 w-full" data-name="Text Container">
      <TextContainer18 />
      <StatsContainer2 />
    </div>
  );
}

function TextContainer24() {
  return (
    <div className="content-stretch flex flex-col gap-[11.735px] items-start relative shrink-0 text-[#0d1353] text-center w-full whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22.78px] relative shrink-0 text-[16.567px] tracking-[-0.1657px] w-full">{`Together, they've distilled everything they know about AI adoption, enterprise resistance, and consulting positioning into this workshop.`}</p>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-[17.948px] tracking-[-0.1795px] w-full">
        <span className="leading-[24.851px] text-[#e84592]">{`This isn't a product demo. It's not a tech tutorial. It's your introduction`}</span>
        <span className="leading-[24.851px]">{` to the consulting specialty that enterprises are paying premium rates for right now, and how to position yourself to capture it.`}</span>
      </p>
    </div>
  );
}

function ButtonContainer4() {
  return (
    <div className="content-stretch flex h-[53.154px] items-center justify-center px-[13.806px] py-[11.045px] relative rounded-[27.612px] shrink-0 w-full max-w-[472.172px]" data-name="Button Container" style={{ backgroundImage: "linear-gradient(162.437deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(90deg, rgb(255, 0, 246) 0%, rgb(255, 0, 246) 100%)" }}>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20.709px] relative shrink-0 text-[16.567px] text-center text-white uppercase">REGISTER FOR THE NEXT AVAILABLE SESSION</p>
    </div>
  );
}

function TextContainer23() {
  return (
    <div className="content-stretch flex flex-col gap-[22.09px] items-center relative shrink-0 w-full" data-name="Text Container">
      <TextContainer24 />
      <ButtonContainer4 />
    </div>
  );
}

function ContentSection6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content Section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[54px] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[270px] py-[88px] relative w-full">
          <LeadershipTitle />
          <TextContainer17 />
          <TextContainer23 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4.832px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#c28a4f] text-[15.187px] tracking-[1.6706px] uppercase w-full">THE INDUSTRY ROCKSTAR PHILOSOPHY</p>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-tight relative shrink-0 text-[#0d1353] tracking-[-1px] md:tracking-[-1.5463px] w-full">
        <span className="text-[26px] sm:text-[32px] md:text-[38.657px] leading-[normal]">{`AI Isn't Here to Replace People. It's Here to Redefine `}</span>
        <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold italic text-[28px] sm:text-[34px] md:text-[42.799px] leading-[normal]">How Value Is Created.</span>
      </p>
    </div>
  );
}

function TextContainer26() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 text-[#0d1353] w-full" data-name="Text Container">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24.851px] relative shrink-0 text-[17.948px] tracking-[-0.1795px] w-full">At Industry Rockstar, we believe AI should elevate human value, not diminish it.</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.78px] relative shrink-0 text-[16.567px] tracking-[0.1657px] w-full">{`When approached correctly, AI eliminates the low-leverage, soul-crushing tasks that drain your team's energy so they can refocus on judgment, creativity, strategy, and human connection.`}</p>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24.851px] relative shrink-0 text-[17.948px] tracking-[0.1795px] w-full">It requires intentional leadership. Cultural transformation. Strategic reframing.</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.78px] relative shrink-0 text-[16.567px] tracking-[0.1657px] w-full">{`As an AI change management specialist, you'll help enterprises shift their perspective:`}</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[26.922px] items-center relative shrink-0 text-center w-full" data-name="Container">
      <Container38 />
      <TextContainer26 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.pa159e6a} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
          <path d={svgPaths.p32655e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#e84592] content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[12.426px] items-center relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[23.119px] min-h-px min-w-px relative text-[#e84592] text-[15.187px] tracking-[-0.3473px] whitespace-pre-wrap">Technical upgrade</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p3d440a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
          <path d={svgPaths.p32c50e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#e84592] content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[12.426px] items-center relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[23.119px] min-h-px min-w-px relative text-[#e84592] text-[15.187px] tracking-[-0.3473px] whitespace-pre-wrap">Threat to jobs</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p33401320} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
          <path d={svgPaths.p19678a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#e84592] content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon21 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[12.426px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[23.119px] min-h-px min-w-px relative text-[#e84592] text-[15.187px] tracking-[-0.3473px] whitespace-pre-wrap">IT responsibility</p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p16f9c2c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
          <path d={svgPaths.pb42b340} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#e84592] content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[12.426px] items-center relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[23.119px] min-h-px min-w-px relative text-[#e84592] text-[15.187px] tracking-[-0.3473px] whitespace-pre-wrap">Replace humans</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] w-full md:flex-[1_0_0] relative rounded-[18.969px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.581px] border-solid inset-0 pointer-events-none rounded-[18.969px] shadow-[0px_7.904px_11.856px_0px_rgba(0,0,0,0.1),0px_3.162px_4.742px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[17.258px] items-start pb-[38px] pt-[33.196px] px-[33.196px] relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28.454px] relative shrink-0 text-[#e84592] text-[23.711px] w-full">From...</p>
        <Container40 />
        <Container42 />
        <Container44 />
        <Container46 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p232a2900} id="Vector" stroke="var(--stroke-0, #EE00FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon23 />
    </div>
  );
}

function TextContainer28() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full" data-name="Text Container">
      <Container49 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[23.119px] min-h-px min-w-px relative text-[15.187px] text-white tracking-[-0.3473px] whitespace-pre-wrap">Cultural evolution</p>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p14dc6600} id="Vector" stroke="var(--stroke-0, #EE00FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon24 />
    </div>
  );
}

function TextContainer29() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full" data-name="Text Container">
      <Container50 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[23.119px] min-h-px min-w-px relative text-[15.187px] text-white tracking-[-0.3473px] whitespace-pre-wrap">Enabler of better work</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p6ef5720} id="Vector" stroke="var(--stroke-0, #EE00FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon25 />
    </div>
  );
}

function TextContainer30() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full" data-name="Text Container">
      <Container51 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[23.119px] min-h-px min-w-px relative text-[15.187px] text-white tracking-[-0.3473px] whitespace-pre-wrap">Executive leadership</p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[12.646px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6461 12.6461">
        <g id="Icon">
          <path d={svgPaths.p6ac9d00} id="Vector" stroke="var(--stroke-0, #EE00FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58076" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[13260397px] shrink-0 size-[18.969px]" data-name="Container">
      <Icon26 />
    </div>
  );
}

function TextContainer31() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full" data-name="Text Container">
      <Container52 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[23.119px] min-h-px min-w-px relative text-[15.187px] text-white tracking-[-0.3473px] whitespace-pre-wrap">Elevate humans</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="w-full md:flex-[1_0_0] relative rounded-[18.969px]" data-name="Container" style={{ backgroundImage: "linear-gradient(-77.225deg, rgb(232, 69, 146) 39.051%, rgb(117, 34, 189) 99.754%), linear-gradient(87.4523deg, rgb(13, 19, 83) 1.6736%, rgb(117, 34, 189) 125.03%), linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.581px] border-solid inset-0 pointer-events-none rounded-[18.969px] shadow-[0px_7.904px_11.856px_0px_rgba(0,0,0,0.1),0px_3.162px_4.742px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[18.638px] items-start pb-[33.2px] pt-[33.196px] px-[33.196px] relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28.454px] relative shrink-0 text-[23.711px] text-white w-full">To...</p>
        <TextContainer28 />
        <TextContainer29 />
        <TextContainer30 />
        <TextContainer31 />
      </div>
    </div>
  );
}

function TextContainer27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col md:flex-row gap-[27.612px] items-stretch px-0 sm:px-8 md:px-[60px] lg:px-[119px] relative w-full">
        <Container39 />
        <Container48 />
      </div>
    </div>
  );
}

function TextContainer25() {
  return (
    <div className="content-stretch flex flex-col gap-[25.541px] items-center justify-center relative shrink-0 w-full" data-name="Text Container">
      <Container37 />
      <TextContainer27 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[13.806px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8062 13.8062">
        <g id="Icon">
          <path d={svgPaths.p25f4ea00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.72578" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[6.903px] shadow-[0px_6.903px_10.355px_0px_rgba(0,0,0,0.1),0px_2.761px_4.142px_0px_rgba(0,0,0,0.1)] shrink-0 size-[22.09px]" data-name="Container">
      <Icon27 />
    </div>
  );
}

function TextContainer35() {
  return (
    <div className="content-stretch flex gap-[13.806px] items-start relative shrink-0 w-full" data-name="Text Container">
      <Container53 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-0 relative text-[15.187px] text-white">
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">{`You'll receive immediate confirmation with your Zoom link`}</span>
        <span>{` and calendar invite`}</span>
      </p>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[13.806px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8062 13.8062">
        <g id="Icon">
          <path d={svgPaths.p18ceccf0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.72578" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[6.903px] shadow-[0px_6.903px_10.355px_0px_rgba(0,0,0,0.1),0px_2.761px_4.142px_0px_rgba(0,0,0,0.1)] shrink-0 size-[22.09px]" data-name="Container">
      <Icon28 />
    </div>
  );
}

function TextContainer36() {
  return (
    <div className="content-stretch flex gap-[13.806px] items-start relative shrink-0 w-full" data-name="Text Container">
      <Container54 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-0 relative text-[15.187px] text-white">
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">{`You'll get a pre-workshop email `}</span>
        <span>with context on what to expect and how to prepare</span>
      </p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[13.806px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8062 13.8062">
        <g id="Icon">
          <path d={svgPaths.p3fa627c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.72578" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[6.903px] shadow-[0px_6.903px_10.355px_0px_rgba(0,0,0,0.1),0px_2.761px_4.142px_0px_rgba(0,0,0,0.1)] shrink-0 size-[22.09px]" data-name="Container">
      <Icon29 />
    </div>
  );
}

function TextContainer37() {
  return (
    <div className="content-stretch flex gap-[13.806px] items-start relative shrink-0 w-full" data-name="Text Container">
      <Container55 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-0 relative text-[15.187px] text-white">
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">{`You'll join us for 90-120 minutes `}</span>
        <span>of strategic positioning, frameworks, and real talk about the AI change management opportunity</span>
      </p>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[13.806px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8062 13.8062">
        <g id="Icon">
          <path d={svgPaths.p23139280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.72578" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[6.903px] shadow-[0px_6.903px_10.355px_0px_rgba(0,0,0,0.1),0px_2.761px_4.142px_0px_rgba(0,0,0,0.1)] shrink-0 size-[22.09px]" data-name="Container">
      <Icon30 />
    </div>
  );
}

function TextContainer38() {
  return (
    <div className="content-stretch flex gap-[13.806px] items-start relative shrink-0 w-full" data-name="Text Container">
      <Container56 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-0 relative text-[15.187px] text-white">
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">{`You'll walk away with clarity `}</span>
        <span>on whether this specialty is right for you and how to start positioning yourself immediately</span>
      </p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[13.806px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8062 13.8062">
        <g id="Icon">
          <path d={svgPaths.p28462ae0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.72578" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[6.903px] shadow-[0px_6.903px_10.355px_0px_rgba(0,0,0,0.1),0px_2.761px_4.142px_0px_rgba(0,0,0,0.1)] shrink-0 size-[22.09px]" data-name="Container">
      <Icon31 />
    </div>
  );
}

function TextContainer39() {
  return (
    <div className="content-stretch flex gap-[13.806px] items-start relative shrink-0 w-full" data-name="Text Container">
      <Container57 />
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-0 relative text-[15.187px] text-white">
        <span>{`If you're interested in certification, `}</span>
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">{`you'll learn about the Industry Rockstar program `}</span>
        <span>and how it can accelerate your positioning</span>
      </p>
    </div>
  );
}

function TextContainer34() {
  return (
    <div className="content-stretch flex flex-col gap-[17.258px] items-start relative shrink-0 w-full" data-name="Text Container">
      <TextContainer35 />
      <TextContainer36 />
      <TextContainer37 />
      <TextContainer38 />
      <TextContainer39 />
    </div>
  );
}

function TextContainer33() {
  return (
    <div className="flex flex-col gap-[26.232px] items-start relative shrink-0 w-full md:w-[404px] px-5 sm:px-7 md:px-8 pt-6 md:pt-0 pb-8 md:pb-12" data-name="Text Container">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[20px] sm:text-[24px] md:text-[28.993px] text-white tracking-[-0.8px] md:tracking-[-1.1597px] w-full">{`Here's What Happens When You Register:`}</p>
      <TextContainer34 />
    </div>
  );
}

function TextContainer32() {
  return (
    <div className="w-full flex flex-col md:flex-row items-end relative" data-name="Text Container">
      <TextContainer33 />
      <div className="hidden md:flex items-center justify-center relative shrink-0 self-end">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[440.863px] relative w-[403.237px]" data-name="kane 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[117.39%] left-[-0.1%] max-w-none top-0 w-[100.21%]" src={imgKane2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="flex flex-col items-end justify-end overflow-clip pt-[53px] relative rounded-[11.045px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.045px] size-full" src={imgImage1} />
      <TextContainer32 />
    </div>
  );
}

function TextContainer41() {
  return (
    <div className="content-stretch flex flex-col gap-[11.735px] items-start relative shrink-0 text-[#0d1353] text-center w-full whitespace-pre-wrap" data-name="Text Container">
      <div className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[18.638px] relative shrink-0 text-[22.09px] tracking-[-0.2209px] w-full">
        <p className="mb-[8.28372859954834px] text-[#e84592]">{`This is completely free. `}</p>
        <p>No credit card. No bait-and-switch. No hard pitch.</p>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22.09px] relative shrink-0 text-[17.948px] tracking-[-0.1795px] w-full">{`We're going to give you real value whether you ever work with us again or not.`}</p>
    </div>
  );
}

function TextContainer42() {
  return (
    <div className="content-stretch flex flex-col gap-[8.284px] items-start leading-[22.09px] relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[22.09px] relative shrink-0 text-[#e84592] text-[22.09px] tracking-[-0.2209px] w-full">Why?</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[44.18px] relative shrink-0 text-[#0d1353] text-[17.948px] tracking-[-0.1795px] w-full">{`Because we believe the market needs more qualified AI change management specialists, and if this workshop helps you become one of them even without our certification we've done our job.`}</p>
    </div>
  );
}

function ButtonContainer5() {
  return (
    <div className="content-stretch flex h-[53.154px] items-center justify-center px-[13.806px] py-[11.045px] relative rounded-[27.612px] shrink-0 w-full max-w-[461.128px]" data-name="Button Container" style={{ backgroundImage: "linear-gradient(162.043deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(90deg, rgb(255, 0, 246) 0%, rgb(255, 0, 246) 100%)" }}>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20.709px] relative shrink-0 text-[16.567px] text-center text-white uppercase">REGISTER FOR THE NEXT AVAILABLE SESSION</p>
    </div>
  );
}

function TextContainer40() {
  return (
    <div className="content-stretch flex flex-col gap-[28.303px] items-center justify-center relative shrink-0 w-full" data-name="Text Container">
      <TextContainer41 />
      <TextContainer42 />
      <ButtonContainer5 />
    </div>
  );
}

function ContentSection7() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[46.251px] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[270px] py-[98px] relative shrink-0 w-full" data-name="Content Section">
      <TextContainer25 />
      <Image1 />
      <TextContainer40 />
    </div>
  );
}

function FaqItem() {
  return (
    <div className="content-stretch flex flex-col gap-[17.948px] items-start relative shrink-0 text-white w-full whitespace-pre-wrap" data-name="FAQ Item">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[19.329px] relative shrink-0 text-[17.948px] w-full">{` Is this really free? What's the catch?`}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.09px] relative shrink-0 text-[15.187px] w-full">{`It's really free. No credit card required. We will introduce our certification program at the end, but there's zero obligation. Our goal is to create more qualified AI change management specialists in the market whether they certify with us or not.`}</p>
    </div>
  );
}

function FaqItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[17.948px] items-start relative shrink-0 text-white w-full whitespace-pre-wrap" data-name="FAQ Item">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[19.329px] relative shrink-0 text-[17.948px] w-full">How technical is this workshop?</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.09px] relative shrink-0 text-[15.187px] w-full">{`Not at all. We're not teaching AI implementation or prompt engineering. We're teaching change management, psychology, and strategic positioning. If you can have a conversation, you can apply what we teach.`}</p>
    </div>
  );
}

function FaqItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[17.948px] items-start relative shrink-0 text-white w-full whitespace-pre-wrap" data-name="FAQ Item">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[19.329px] relative shrink-0 text-[17.948px] w-full">Is the certification program expensive?</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.09px] relative shrink-0 text-[15.187px] w-full">{`The certification program is $2,500-$3,000 depending on timing. But you'll learn all about it in the workshop with zero pressure to join. Many attendees walk away with enough value to implement on their own.`}</p>
    </div>
  );
}

function FaqItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[17.948px] items-start relative shrink-0 text-white w-full whitespace-pre-wrap" data-name="FAQ Item">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[19.329px] relative shrink-0 text-[17.948px] w-full">{`What if I can't make the live session?`}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.09px] relative shrink-0 text-[15.187px] w-full">{`Register anyway. We'll send you the replay within 24 hours. But the live Q&A is where a lot of the value is, so we recommend attending if possible.`}</p>
    </div>
  );
}

function FaqItem4() {
  return (
    <div className="content-stretch flex flex-col gap-[17.948px] items-start relative shrink-0 text-white w-full whitespace-pre-wrap" data-name="FAQ Item">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[19.329px] relative shrink-0 text-[17.948px] w-full">{`I'm not a consultant. Is this still relevant?`}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.09px] relative shrink-0 text-[15.187px] w-full">{`Yes. If you're a business owner, executive, or internal change agent who needs to lead AI adoption in your organization, these frameworks apply directly to your situation.`}</p>
    </div>
  );
}

function FaqItem5() {
  return (
    <div className="content-stretch flex flex-col gap-[17.948px] items-start relative shrink-0 text-white w-full whitespace-pre-wrap" data-name="FAQ Item">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[19.329px] relative shrink-0 text-[17.948px] w-full">Will I be certified after this workshop?</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.09px] relative shrink-0 text-[15.187px] w-full">{`No. This is an introduction to the opportunity and the frameworks. Certification requires deeper training and comes through a separate program (which we'll explain in the workshop).`}</p>
    </div>
  );
}

function FaqContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[18.638px] items-center relative shrink-0 w-full" data-name="FAQ Container">
      <FaqItem />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.69px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 949 0.690311">
            <line id="Line 11" stroke="var(--stroke-0, white)" strokeOpacity="0.51" strokeWidth="0.690311" x2="949" y1="0.345155" y2="0.345155" />
          </svg>
        </div>
      </div>
      <FaqItem1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.69px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 949 0.690311">
            <line id="Line 11" stroke="var(--stroke-0, white)" strokeOpacity="0.51" strokeWidth="0.690311" x2="949" y1="0.345155" y2="0.345155" />
          </svg>
        </div>
      </div>
      <FaqItem2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.69px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 949 0.690311">
            <line id="Line 13" stroke="var(--stroke-0, white)" strokeOpacity="0.51" strokeWidth="0.690311" x2="949" y1="0.345155" y2="0.345155" />
          </svg>
        </div>
      </div>
      <FaqItem3 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.69px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 949 0.690311">
            <line id="Line 13" stroke="var(--stroke-0, white)" strokeOpacity="0.51" strokeWidth="0.690311" x2="949" y1="0.345155" y2="0.345155" />
          </svg>
        </div>
      </div>
      <FaqItem4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.69px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 949 0.690311">
            <line id="Line 13" stroke="var(--stroke-0, white)" strokeOpacity="0.51" strokeWidth="0.690311" x2="949" y1="0.345155" y2="0.345155" />
          </svg>
        </div>
      </div>
      <FaqItem5 />
    </div>
  );
}

function Faq() {
  return (
    <div className="content-stretch flex flex-col gap-[49.702px] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[270px] py-[66px] relative shrink-0 w-full" data-name="FAQ">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFaq} />
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-center text-white tracking-[-1.5463px] w-full whitespace-pre-wrap">
        <span className="leading-[normal] text-[38.657px]">{`Frequently Asked `}</span>
        <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold italic leading-[normal] text-[42.799px]">Questions</span>
      </p>
      <FaqContainer />
    </div>
  );
}

function TextContainer43() {
  return (
    <div className="content-stretch flex flex-col gap-[13.116px] items-center relative shrink-0 text-center text-white w-full whitespace-pre-wrap" data-name="Text Container">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-shadow-[0px_0px_8.077px_rgba(255,255,255,0.42)] tracking-[-1.0769px] w-full">
        <span className="leading-[1.2] text-[35.896px]">{`Stop watching the  `}</span>
        <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold italic leading-[1.2] text-[38.657px]">{`AI opportunity `}</span>
        <span className="leading-[1.2] text-[35.896px]">from the sidelines.</span>
      </p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26.232px] relative shrink-0 text-[16.567px] w-full">{`In 90-120 minutes, you'll know exactly how to position yourself as the AI adoption specialist that enterprises are desperately seeking and what it takes to command the fees that reflect the value you're creating.`}</p>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[25.541px] relative shrink-0 text-[22.09px] tracking-[-0.2209px] w-full">{`The technology wave isn't slowing down.`}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[25.541px] relative shrink-0 text-[16.567px] tracking-[-0.1657px] w-full">
        The demand for change management specialists is accelerating.
        <br aria-hidden="true" />
        {`The only question is whether you'll be ready when enterprises come calling.`}
      </p>
    </div>
  );
}

function ButtonContainer6() {
  return (
    <div className="bg-white content-stretch flex h-[53.154px] items-center justify-center px-[13.806px] py-[11.045px] relative rounded-[27.612px] shrink-0 w-full max-w-[441.799px]" data-name="Button Container">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20.709px] relative shrink-0 text-[#0d1353] text-[16.567px] text-center uppercase">REGISTER FOR THE NEXT AVAILABLE SESSION</p>
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[33.135px] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[270px] py-[59px] relative w-full">
          <TextContainer43 />
          <ButtonContainer6 />
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="LANDING PAGE">
      <NavBar />
      <Hero />
      <FeaturedOn />
      <Frame1707482421 />
      <RecognitionSection />
      <Frame3 />
      <ContentSection1 />
      <ContentSection2 />
      <Image />
      <ContentSection3 />
      <ContentSection4 />
      <ContentSection5 />
      <ContentSection />
      <ContentSection7 />
      <StatsStrip />
      <TrustpilotSection />
      <Faq />
      <Image2 />
    </div>
  );
}