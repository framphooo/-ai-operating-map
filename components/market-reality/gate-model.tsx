"use client";

import SectionReveal from "../learning/SectionReveal";

export default function GateModel() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-white/30">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          {/* One Strong Headline */}
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-16 text-center leading-tight">
            The GATE Model
          </h2>
        </SectionReveal>

        {/* Big Number - Primary Visual */}
        <SectionReveal delay={0.1}>
          <div className="text-center mb-20">
            <div className="text-[10rem] md:text-[12rem] font-heading font-bold text-foreground leading-none mb-6 tracking-tighter">
              GATE
            </div>
            <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
              AI capability is gated by data maturity
            </p>
          </div>
        </SectionReveal>

        {/* Simplified Gate Sequence */}
        <SectionReveal delay={0.2}>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="space-y-4">
              {[
                { letter: "G", title: "Governance & Data" },
                { letter: "A", title: "Agility & Scale" },
                { letter: "T", title: "Talent & Support" },
                { letter: "E", title: "Evaluation & Trust" },
              ].map((gate, index) => (
                <div key={gate.letter} className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl font-bold text-white">{gate.letter}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold text-foreground">
                      {gate.title}
                    </h3>
                  </div>
                  {index < 3 && (
                    <div className="text-3xl text-accent/40">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Minimal Caption */}
        <SectionReveal delay={0.3}>
          <p className="text-xl text-foreground text-center max-w-2xl mx-auto">
            You cannot skip stages
          </p>
          <p className="text-sm text-secondary/70 text-center mt-4">Source: Snowflake</p>
        </SectionReveal>
      </div>
    </section>
  );
}
