"use client";

import Link from "next/link";
import Navigation from "../Navigation";
import SectionReveal from "../learning/SectionReveal";
import EvolutionStackVisualization from "../what-works/evolution-stack-visualization";
import LLMsSection from "../what-works/llms-section";
import AgentsSection from "../what-works/agents-section";
import AgenticWorkforce from "../what-works/agentic-workforce";

export default function WhatWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Section 1: Evolution Stack Visualization */}
        <section className="py-32 px-6 lg:px-8 bg-white/40">
          <div className="max-w-7xl mx-auto">
            <EvolutionStackVisualization />
          </div>
        </section>

        {/* Section 1.5: Vertical AI teaser */}
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="rounded-3xl border border-black/5 bg-gradient-to-r from-purple-50/70 via-white to-white/60 p-10 lg:p-12 shadow-sm">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3 lg:max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                      What actually makes AI land
                    </p>
                    <h3 className="text-3xl md:text-4xl font-heading font-semibold text-foreground leading-tight">
                      Vertical AI systems that understand your company become true teammates.
                    </h3>
                    <p className="text-lg text-secondary leading-relaxed">
                      The real step-change happens when AI is built around your data, tools,
                      and workflows—so it can think and act with you, not just beside you.
                    </p>
                  </div>

                  <Link
                    href="/market-reality#vertical-ai"
                    className="inline-flex items-center gap-2 text-accent font-semibold text-lg underline decoration-2 underline-offset-8"
                  >
                    Learn more about Vertical AI →
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Section 2: Large Language Models - What Finally Worked */}
        <LLMsSection />

        {/* Section 3: Agents - Where Reasoning Meets Execution */}
        <AgentsSection />

        {/* Section 4: Agentic Workforce - Where Value Compounds */}
        <section id="agentic-workforce-section" className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div id="agentic-systems" className="h-0" aria-hidden />
            <AgenticWorkforce />
          </div>
        </section>
      </main>
    </div>
  );
}

