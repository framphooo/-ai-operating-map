"use client";

import SectionReveal from "../learning/SectionReveal";

export default function RootCausesOverview() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-white/40">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          {/* One Strong Headline */}
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-16 text-center leading-tight">
            Root Causes
          </h2>
        </SectionReveal>

        {/* Big Number - Primary Visual */}
        <SectionReveal delay={0.1}>
          <div className="text-center mb-20">
            <div className="text-[10rem] md:text-[12rem] font-heading font-bold text-foreground leading-none mb-6">
              2
            </div>
            <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
              root causes explain the failure
            </p>
          </div>
        </SectionReveal>

        {/* Two Causes - Minimal Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Root Cause #1 */}
          <SectionReveal delay={0.2}>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-heading font-bold text-accent mb-4 leading-none">
                #1
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                Weak Data Foundations
              </h3>
              <p className="text-lg text-secondary">
                60–70% fail at the data layer
              </p>
            </div>
          </SectionReveal>

          {/* Root Cause #2 */}
          <SectionReveal delay={0.3}>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-heading font-bold text-accent mb-4 leading-none">
                #2
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                Horizontal Thinking
              </h3>
              <p className="text-lg text-secondary">
                AI spread thin across functions
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
