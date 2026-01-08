"use client";

import { motion } from "framer-motion";

export default function WhyPilotsFail() {
  return (
    <section id="why-pilots-fail" className="py-32 px-6 lg:px-8 bg-white/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
              Why Pilots Fail
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Most AI initiatives fail not because the technology is wrong, but because they skip fundamentals and chase the wrong approach.
            </p>
          </div>

          {/* Two Root Causes */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-red-50 border-l-4 border-red-500 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Weak Data Foundations
              </h3>
              <p className="text-lg text-secondary leading-relaxed">
                Companies rush to build AI on top of messy, siloed, or incomplete data. They skip data cleaning, governance, and structure. The result: AI systems that hallucinate, make bad decisions, or require constant manual correction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-orange-50 border-l-4 border-orange-500 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Horizontal Thinking
              </h3>
              <p className="text-lg text-secondary leading-relaxed">
                Companies build generic &apos;AI assistants&apos; that try to do everything. They ignore domain-specific workflows, existing tools, and operational reality. The result: AI that doesn&apos;t fit how people actually work, leading to low adoption and minimal impact.
              </p>
            </motion.div>
          </div>

          {/* Failure Patterns */}
          <div>
            <h3 className="text-3xl font-heading font-semibold text-foreground mb-8">
              5 Common Failure Patterns
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Starting with the model, not the data",
                  description: "Teams spend months fine-tuning models on incomplete or dirty data. By the time they realize the data is the problem, budgets are exhausted.",
                },
                {
                  title: "Building generic copilots instead of vertical solutions",
                  description: "A 'universal AI assistant' sounds impressive but solves no specific problem well. Users abandon it because it's not better than existing tools for their actual work.",
                },
                {
                  title: "Ignoring existing workflows and tools",
                  description: "AI is built as a separate system requiring users to learn new interfaces. Adoption stays low because it doesn't integrate with how people already work.",
                },
                {
                  title: "Skipping validation and governance",
                  description: "AI systems are deployed without proper testing, monitoring, or guardrails. When they make mistakes (and they will), there's no recovery process and trust is destroyed.",
                },
                {
                  title: "Underestimating integration complexity",
                  description: "The AI demo works in isolation, but fails when integrated with real systems, APIs, and data sources. Integration takes 3x longer than the AI development itself.",
                },
              ].map((pattern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-black/5 hover:shadow-md transition-shadow"
                >
                  <h4 className="text-xl font-semibold text-foreground mb-2">{pattern.title}</h4>
                  <p className="text-lg text-secondary leading-relaxed">{pattern.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What to Do Instead */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 border-l-4 border-green-500 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-heading font-semibold text-foreground mb-6">
              What to Do Instead
            </h3>
            <ul className="space-y-4">
              {[
                "Start with data: Clean, structure, and document your core operational data before building any AI. This is unglamorous but non-negotiable.",
                "Build vertical, not horizontal: Focus on one domain (supply chain, customer support, operations) and build a solution that deeply understands that domain's workflows.",
                "Integrate with existing tools: Don't build new interfaces. Embed AI into Slack, Teams, dashboards, and existing software people already use.",
                "Start small and constrained: Build agents and systems with clear boundaries, human oversight, and gradual autonomy. Prove value before expanding.",
                "Measure what matters: Track adoption (are people using it?), accuracy (does it work?), and impact (does it change outcomes?). Vanity metrics like 'AI queries processed' mean nothing.",
                "Plan for governance from day one: Build in audit trails, error handling, bias testing, and human review processes. Don't retrofit after deployment.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-lg text-secondary leading-relaxed">
                  <span className="text-green-600 font-bold mt-1">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}




