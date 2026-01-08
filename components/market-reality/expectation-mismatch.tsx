"use client";

import SectionReveal from "../learning/SectionReveal";

export default function ExpectationMismatch() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-white/30">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          {/* One Strong Headline */}
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-16 text-center leading-tight">
            Expectation Mismatch
          </h2>
        </SectionReveal>

        <div className="space-y-20">
          {/* Revenue Growth - Primary Visual */}
          <SectionReveal delay={0.1}>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-8">
                Revenue Growth
              </h3>
              
              {/* Big Numbers Comparison */}
              <div className="grid md:grid-cols-2 gap-12 mb-8">
                <div>
                  <div className="text-6xl md:text-7xl font-heading font-bold text-foreground mb-2 leading-none">
                    51%
                  </div>
                  <p className="text-lg text-secondary">Expected</p>
                </div>
                <div>
                  <div className="text-6xl md:text-7xl font-heading font-bold text-accent mb-2 leading-none">
                    19%
                  </div>
                  <p className="text-lg text-secondary">Actual</p>
                </div>
              </div>

              {/* Simple Visual Bar */}
              <div className="max-w-2xl mx-auto mb-4">
                <div className="relative h-16 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-400 rounded-lg" style={{ width: '51%' }}></div>
                  <div className="absolute inset-0 bg-accent rounded-lg" style={{ width: '19%' }}></div>
                </div>
              </div>

              <p className="text-sm text-secondary/70">Source: McKinsey & Company</p>
            </div>
          </SectionReveal>

          {/* Cost Reduction - Primary Visual */}
          <SectionReveal delay={0.2}>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-8">
                Cost Reduction
              </h3>
              
              {/* Big Numbers Comparison */}
              <div className="grid md:grid-cols-2 gap-12 mb-8">
                <div>
                  <div className="text-6xl md:text-7xl font-heading font-bold text-foreground mb-2 leading-none">
                    90%
                  </div>
                  <p className="text-lg text-secondary">Expected</p>
                </div>
                <div>
                  <div className="text-6xl md:text-7xl font-heading font-bold text-accent mb-2 leading-none">
                    &lt;20%
                  </div>
                  <p className="text-lg text-secondary">Actual</p>
                </div>
              </div>

              {/* Simple Visual Bar */}
              <div className="max-w-2xl mx-auto mb-4">
                <div className="relative h-16 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-400 rounded-lg" style={{ width: '90%' }}></div>
                  <div className="absolute inset-0 bg-accent rounded-lg" style={{ width: '20%' }}></div>
                </div>
              </div>

              <p className="text-sm text-secondary/70">Source: Boston Consulting Group</p>
            </div>
          </SectionReveal>
        </div>

        {/* Minimal Caption */}
        <SectionReveal delay={0.3}>
          <p className="text-xl text-foreground text-center max-w-2xl mx-auto mt-16">
            Disappointment is structural, not technical
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
