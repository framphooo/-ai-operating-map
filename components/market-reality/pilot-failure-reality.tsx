"use client";

import SectionReveal from "../learning/SectionReveal";

export default function PilotFailureReality() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-white/40">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          {/* One Strong Headline */}
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-16 text-center leading-tight">
            The gap between &quot;can&quot; and &quot;does&quot;
          </h2>
        </SectionReveal>

        {/* Primary Visual - Split Comparison */}
        <SectionReveal delay={0.1}>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Demo Side */}
            <div className="text-center">
              <div className="text-7xl md:text-8xl font-heading font-bold text-blue-600 mb-4 leading-none">
                CAN
              </div>
              <p className="text-lg text-secondary">
                Proves it works
              </p>
            </div>

            {/* Production Side */}
            <div className="text-center">
              <div className="text-7xl md:text-8xl font-heading font-bold text-orange-600 mb-4 leading-none">
                DOES
              </div>
              <p className="text-lg text-secondary">
                Requires it works
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Minimal Caption */}
        <SectionReveal delay={0.2}>
          <p className="text-xl text-foreground text-center max-w-2xl mx-auto">
            This is where most initiatives die
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
