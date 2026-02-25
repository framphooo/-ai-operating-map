"use client";

import Image from "next/image";
import SectionReveal from "../learning/SectionReveal";

export default function EvolutionStackVisualization() {
  return (
    <div className="w-full">
      <SectionReveal>
        <div className="mb-10 md:mb-14 text-center max-w-4xl mx-auto px-6">
          <h2 className="mb-4 text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            What Works Today
          </h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed max-w-3xl mx-auto">
            Updated to the exact image you shared—no overlays, just the clean visual in the white frame.
          </p>
        </div>
      </SectionReveal>

      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl border border-black/5 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="relative w-full pt-4 pb-2">
            <Image
              src="/what-works/evolution-arc.png"
              alt="AI evolution arc"
              width={1212}
              height={615}
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 80vw, 1400px"
              quality={95}
              priority
              className="w-full h-auto object-contain"
              style={{ objectPosition: "55% center" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
