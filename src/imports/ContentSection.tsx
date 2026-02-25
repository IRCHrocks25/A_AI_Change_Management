import imgKane from "../assets/c30511ef0c221800b1cbb3424dddbadd7bee2ab4.png";
import imgJeff from "../assets/71389237e1e07cd893b8939905c28896608797aa.png";

function LeadershipTitle() {
  return (
    <div
      className="flex flex-col gap-[4.832px] items-center text-center w-full"
      data-name="Leadership Title"
    >
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-normal text-[#c28a4f] text-[14px] md:text-[16.567px] tracking-[1.4911px] uppercase w-full">
        {"WHO'S LEADING THIS"}
      </p>
      <p className="font-['Plus_Jakarta_Sans:Bold_Italic',sans-serif] font-bold italic leading-[0] text-[#0d1353] tracking-[-1px] md:tracking-[-1.5463px] w-full">
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] leading-[1.15] text-[22px] sm:text-[28px] md:text-[38.657px]">
          Your Hosts:
        </span>
        <span className="leading-[1.15] text-[22px] sm:text-[28px] md:text-[38.657px]">{" "}</span>
        <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold leading-[1.15] text-[24px] sm:text-[30px] md:text-[42.799px]">
          {"Kane Minkus & Jeff Slater"}
        </span>
      </p>
    </div>
  );
}

const kaneItems = [
  "Inc 5000 #1048 Fastest-Growing Company",
  "$18M+ in annual revenue from training programs",
  "4+ million students trained globally across multiple industries",
  "Built and scaled Industry Rockstar into the leading AI certification platform for professionals who want to stay ahead of disruption",
];

const jeffItems = [
  "Leading change initiatives for companies navigating technology adoption",
  "Executive-level strategic clarity combined with people-centered change management",
  "Helping consultants and internal leaders build frameworks that work with human psychology, not against it",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex-1 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold list-disc pl-5 space-y-2 text-[#0d1353] text-[14px] md:text-[16.567px] tracking-[-0.3034px]">
      {items.map((item, i) => (
        <li key={i} className="leading-[1.5]">
          {item}
        </li>
      ))}
    </ul>
  );
}

function KaneRow() {
  return (
    <div
      className="flex flex-col md:flex-row gap-6 md:gap-[28.993px] items-center w-full"
      data-name="TextContainer1"
    >
      {/* Photo */}
      <div className="w-full md:flex-1 shrink-0">
        <img
          alt="Kane Minkus"
          src={imgKane}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      {/* Bullets */}
      <BulletList items={kaneItems} />
    </div>
  );
}

function JeffRow() {
  return (
    <div
      className="flex flex-col md:flex-row gap-6 md:gap-[31.754px] items-center w-full"
      data-name="TextContainer2"
    >
      {/* Photo — above bullets on mobile, right on desktop */}
      <div className="order-1 md:order-2 w-full md:flex-1 shrink-0">
        <img
          alt="Jeff Slayter"
          src={imgJeff}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      {/* Bullets */}
      <div className="order-2 md:order-1 flex-1">
        <BulletList items={jeffItems} />
      </div>
    </div>
  );
}

function HostsContent() {
  return (
    <div
      className="flex flex-col gap-8 md:gap-[26.232px] items-center w-full"
      data-name="TextContainer"
    >
      <KaneRow />
      <JeffRow />
    </div>
  );
}

function ClosingText() {
  return (
    <div
      className="flex flex-col gap-[11.735px] items-center text-center w-full text-[#0d1353]"
      data-name="TextContainer4"
    >
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.5] text-[14px] md:text-[16.567px] tracking-[-0.1657px] w-full">
        {`Together, they've distilled everything they know about AI adoption, enterprise resistance, and consulting positioning into this workshop.`}
      </p>
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] text-[14px] md:text-[17.948px] tracking-[-0.1795px] w-full">
        <span className="text-[#e84592]">
          {`This isn't a product demo. It's not a tech tutorial. It's your introduction`}
        </span>
        <span>
          {` to the consulting specialty that enterprises are paying premium rates for right now, and how to position yourself to capture it.`}
        </span>
      </p>
    </div>
  );
}

function RegisterButton() {
  return (
    <div
      className="flex h-[53.154px] items-center justify-center px-4 py-[11.045px] rounded-[27.612px] w-full max-w-[472.172px] cursor-pointer"
      data-name="ButtonContainer"
      style={{
        backgroundImage:
          "linear-gradient(162.437deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%), linear-gradient(90deg, rgb(255, 0, 246) 0%, rgb(255, 0, 246) 100%)",
      }}
    >
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20.709px] text-[13px] md:text-[16.567px] text-center text-white uppercase">
        REGISTER FOR THE NEXT AVAILABLE SESSION
      </p>
    </div>
  );
}

function ClosingSection() {
  return (
    <div
      className="flex flex-col gap-[22.09px] items-center w-full"
      data-name="TextContainer3"
    >
      <ClosingText />
      <RegisterButton />
    </div>
  );
}

export default function ContentSection() {
  return (
    <div
      className="bg-white w-full"
      data-name="Content Section"
    >
      <div className="flex flex-col gap-8 md:gap-[54px] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[200px] py-10 md:py-[88px] w-full">
        <LeadershipTitle />
        <HostsContent />
        <ClosingSection />
      </div>
    </div>
  );
}
