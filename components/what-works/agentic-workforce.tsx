"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "../learning/SectionReveal";

export default function AgenticWorkforce() {
  return (
    <div>
      {/* Header */}
      <SectionReveal>
        <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight text-center">
          Agentic Workforce: Where Value Compounds
        </h2>
        <p className="text-xl text-secondary text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Multiple specialized agents working together under coordination. This is where AI stops being a tool and starts becoming a team.
        </p>
      </SectionReveal>

      {/* Example 1 */}
      <SectionReveal delay={0.1}>
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
              Example 1: Sequential Orchestration
            </h3>
            <p className="text-sm text-secondary">
              Coordinator agent (MRP Manager) orchestrates specialized AI assistants
            </p>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white shadow-lg shadow-blue-100/40 p-4">
            <div className="rounded-2xl overflow-hidden border border-blue-100 bg-blue-50/50">
              <Image
                src="/what-works/project-ai-workforce.png"
                alt="Example project AI system for projects"
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Why it works (Example 1) */}
      <SectionReveal delay={0.2}>
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Why This Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {[
              {
                title: "Narrow Scope",
                description: "Each agent has a specific role and narrow expertise. This reduces hallucination risk and makes outputs more predictable.",
                icon: "🎯",
              },
              {
                title: "Reusable Assets",
                description: "Prompts become reusable assets. Knowledge becomes structured instead of implicit. Outputs become predictable and auditable.",
                icon: "♻️",
              },
              {
                title: "Organizational Mirror",
                description: "Agentic systems do not replace organizations; they mirror them. The difference is speed, cost, and scalability.",
                icon: "🪞",
              },
              {
                title: "Managed Complexity",
                description: "A coordinating agent can oversee execution without being overloaded. Specialization enables depth without sacrificing coordination.",
                icon: "⚖️",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/60 p-6 rounded-xl border border-black/5"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-secondary leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Example 2 */}
      <SectionReveal delay={0.3}>
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
              Example 2: Parallel Agent Evaluation
            </h3>
            <p className="text-sm text-secondary">
              Simultaneous model outputs with human-in-the-loop selection
            </p>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white shadow-lg shadow-blue-100/40 p-4">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-blue-100 bg-blue-50/50">
              <iframe
                src="https://drive.google.com/file/d/10hkXeBh50w9J3wlAYSvZ0KmIbe1YNAJI/preview"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Why it works (Example 2) */}
      <SectionReveal delay={0.4}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Why This Works (Parallel Evaluation)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {[
              {
                title: "Orchestrated Fan-Out",
                description: "A single prompt is broadcast to multiple top-tier models in parallel, turning one request into a set of diverse, high-quality options.",
                icon: "🛰️",
              },
              {
                title: "Schema-Governed Quality",
                description: "The orchestrator enforces a custom schema and can iterate with each model, keeping outputs aligned to the required format and rigor.",
                icon: "📐",
              },
              {
                title: "Rapid Best-Pick",
                description: "Multiple outputs arrive at once; the user simply selects the strongest result, trading a bit of compute for a big cut in review time.",
                icon: "⚡",
              },
              {
                title: "Beyond Images",
                description: "Teams apply the same pattern to code generation and review—parallel outputs to accelerate shipping and reduce human iteration.",
                icon: "💻",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/60 p-6 rounded-xl border border-black/5"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-secondary leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}

