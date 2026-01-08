"use client";

import SectionReveal from "../learning/SectionReveal";
import Callout from "../learning/Callout";

export default function VerticalAISection() {
  return (
    <section
      id="vertical-ai"
      className="py-32 px-6 lg:px-8 scroll-mt-24 bg-gradient-to-b from-purple-50/40 to-transparent"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <SectionReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary text-center mb-6">
            Horizontal vs Vertical AI
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight text-center">
            Vertical AI is the Real Endgame
          </h2>
          <p className="text-xl text-secondary text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            AI only feels indispensable when it is embedded in your workflows, understands your data models, and executes work with you. That is vertical AI—systems that move beyond generic chat and become operational teammates.
          </p>
        </SectionReveal>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12 text-lg text-foreground leading-[1.8] font-light">
          <SectionReveal>
            <p>
              Horizontal, one-size-fits-all assistants rarely stick because they
              live outside how teams actually work. Vertical AI emerges when
              agents are deeply embedded into workflows, tools, and domain logic.
              At this point, AI stops being an assistant and starts becoming a
              teammate—it doesn&apos;t just answer questions about your business; it
              operates within your business.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/60 p-8 rounded-2xl border border-black/5">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  Generic AI Assistant
                </h3>
                <ul className="space-y-3 text-secondary leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">×</span>
                    <span>General knowledge only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">×</span>
                    <span>Separate interface</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">×</span>
                    <span>Provides suggestions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">×</span>
                    <span>Requires human to execute</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">×</span>
                    <span>Low adoption and impact</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/60 p-8 rounded-2xl border-2 border-accent">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  Vertical AI System
                </h3>
                <ul className="space-y-3 text-secondary leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 font-bold">✓</span>
                    <span>Domain-specific knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 font-bold">✓</span>
                    <span>Embedded in workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 font-bold">✓</span>
                    <span>Executes actions autonomously</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 font-bold">✓</span>
                    <span>Integrates with existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 font-bold">✓</span>
                    <span>High adoption and operational impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="bg-white/60 p-10 rounded-2xl border border-black/5">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                The Shift in Perspective
              </h3>
              <div className="space-y-4 text-lg text-secondary leading-relaxed">
                <p>
                  Agentic systems are not about novelty—they are about rebuilding
                  parts of organizations with software-native intelligence. A
                  vertical AI system for supply chain operations doesn&apos;t just
                  suggest better inventory levels—it monitors inventory, predicts
                  demand, adjusts purchase orders, and triggers alerts. It
                  operates within the constraints, workflows, and data models of
                  the supply chain domain.
                </p>
                <p>
                  Similarly, a vertical AI system for customer support doesn&apos;t
                  just answer questions—it accesses product documentation, queries
                  order history, processes returns, and escalates complex issues.
                  It understands the domain, operates within it, and becomes a
                  reliable part of the operational stack.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <Callout variant="insight" title="The Operational Reality">
              Vertical AI is not about building better chatbots. It is about
              identifying high-leverage processes, workflows, and decision points
              within your organization, then embedding AI agents that can operate
              autonomously within those contexts. The narrower the scope, the
              deeper the integration, the higher the value.
            </Callout>
          </SectionReveal>

          <SectionReveal delay={0.4}>
            <div className="text-center pt-8">
              <p className="text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
                Understanding this shift is the crux of market reality: real
                value shows up when AI is vertical, operational, and trusted by
                the teams it serves.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

