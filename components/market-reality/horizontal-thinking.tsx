"use client";

import SectionReveal from "../learning/SectionReveal";

export default function HorizontalThinking() {
  return (
    <section id="root-cause-2" className="py-32 px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          {/* One Strong Headline */}
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-16 text-center leading-tight">
            Horizontal vs Vertical AI
          </h2>
        </SectionReveal>

        {/* Primary Visual - Side-by-Side Comparison */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Horizontal Focus */}
          <SectionReveal delay={0.1}>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-heading font-bold text-red-600 mb-6 leading-none">
                →
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
                Horizontal
              </h3>
              <p className="text-lg text-secondary">
                Spread thin across functions
              </p>
            </div>
          </SectionReveal>

          {/* Vertical Focus */}
          <SectionReveal delay={0.2}>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-heading font-bold text-accent mb-6 leading-none">
                ↓
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
                Vertical
              </h3>
              <p className="text-lg text-secondary">
                Deep integration within workflows
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* Minimal Caption */}
        <SectionReveal delay={0.3}>
          <p className="text-xl text-foreground text-center max-w-2xl mx-auto">
            People adopt AI because it fits how they work
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
