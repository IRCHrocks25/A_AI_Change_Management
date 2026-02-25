import review1 from "../assets/ae5667339b3a4109479bf65e0b4a70aacfb4afc0.png";
import review2 from "../assets/c239cb1336224037c7fafbbd4d6c53bfc832cc2c.png";
import review3 from "../assets/f634ab5d877155485295be2154eea74c84536fe4.png";
import review4 from "../assets/709c31d97fa926d04220fb9df8811df62b28f289.png";
import review5 from "../assets/19872ed2e05a3f04c43dcaa27f15545d3d9cc803.png";
import review6 from "../assets/d43240f1f99bf954aa2ec279f1b87b3ec5108e26.png";
import review7 from "../assets/34a3f1cb089feccfd0ce0f337f279ffc4a09084b.png";
import review8 from "../assets/373339a18f0b2567b1a7f8df8e0841051929c2d1.png";
import review9 from "../assets/59f8f50a97c271b39c453168adc07e6a69d51b5a.png";
import { useState } from "react";

const TRUSTPILOT_GREEN = "#00B67A";

// Row 1 – user-specified screenshots (row 1)
const ROW_1 = [review1, review2, review3, review4];
// Row 2 – user-specified screenshots (row 2)
const ROW_2 = [review5, review6, review7, review8, review9];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? TRUSTPILOT_GREEN : "rgba(255,255,255,0.18)"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-[3px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} filled={i <= rating} />
      ))}
    </div>
  );
}

function TrustpilotLogo() {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center justify-center rounded-[3px] size-8 shrink-0"
        style={{ backgroundColor: TRUSTPILOT_GREEN }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[20px] tracking-[-0.3px] leading-none">
        Trustpilot
      </span>
    </div>
  );
}

function RatingBadge() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <TrustpilotLogo />
      <div className="flex items-center gap-3">
        <Stars rating={5} />
        <div className="flex flex-col items-start">
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-white text-[15px] leading-none">
            Excellent
          </span>
          <span
            className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[12px] leading-none mt-[4px]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Based on 379 reviews
          </span>
        </div>
      </div>
    </div>
  );
}

interface MarqueeRowProps {
  images: string[];
  direction: "left" | "right";
  duration?: number;
}

function MarqueeRow({ images, direction, duration = 40 }: MarqueeRowProps) {
  const [paused, setPaused] = useState(false);
  // Duplicate images for seamless loop
  const items = [...images, ...images, ...images];
  const animationName = direction === "left" ? "marquee-scroll-left" : "marquee-scroll-right";

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, #0d1353, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, #0d1353, transparent)" }}
      />

      <div
        className="flex gap-4 items-start w-max"
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((img, i) => (
          <div
            key={i}
            className="shrink-0 w-[300px] sm:w-[340px] rounded-xl overflow-hidden bg-white"
            style={{
              boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
            }}
          >
            <img
              src={img}
              alt={`Trustpilot review ${(i % images.length) + 1}`}
              className="w-full h-auto block"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrustpilotSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d1353 0%, #120f40 55%, #16093a 100%)" }}
      data-name="Trustpilot Section"
    >
      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes marquee-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes marquee-scroll-right {
          0%   { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 size-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(36,69,255,0.13) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-10 size-[380px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(170,69,232,0.14) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col gap-10 items-center py-16 md:py-20 w-full">

        {/* Section header – centred, with horizontal padding */}
        <div className="flex flex-col items-center gap-4 w-full text-center px-4 sm:px-8">
          <p
            className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[11px] tracking-[3px] uppercase"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Verified Reviews
          </p>

          <h2
            className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-tight tracking-[-1.4px] text-white text-[28px] sm:text-[34px] md:text-[38.657px] max-w-3xl whitespace-nowrap"
          >
            {"Professionals Are Talking. "}
            <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold italic">
              Here's What They Say.
            </span>
          </h2>

          <div className="mt-1">
            <RatingBadge />
          </div>
        </div>

        {/* ── Marquee rows ── */}
        <div className="flex flex-col gap-5 w-full">
          {/* Row 1 – scrolls left */}
          <MarqueeRow images={ROW_1} direction="left" duration={45} />
          {/* Row 2 – scrolls right */}
          <MarqueeRow images={ROW_2} direction="right" duration={50} />
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 group mt-2">
          <a
            href="https://www.trustpilot.com/review/industryrockstar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <span
              className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[13px] underline underline-offset-2 group-hover:opacity-100 transition-opacity"
              style={{ color: "rgba(255,255,255,0.45)", textDecorationColor: "rgba(255,255,255,0.2)" }}
            >
              Read all reviews on Trustpilot
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}