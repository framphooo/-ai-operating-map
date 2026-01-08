"use client";

import SectionReveal from "../learning/SectionReveal";
import Iceberg from "../blocks/iceberg";

export default function WeakDataFoundations() {
  return (
    <section
      id="root-cause-1"
      className="py-32 px-6 lg:px-8 scroll-mt-20 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 text-center leading-tight">
            Weak Data Foundations
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto text-center mb-16 leading-relaxed">
            The real blocker lives below the surface—poor data foundations prevent enterprises from pursuing the AI use cases they need.
          </p>
        </SectionReveal>

        {/* Iceberg Component */}
        <SectionReveal delay={0.1}>
          <div className="mb-12">
            <Iceberg />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
