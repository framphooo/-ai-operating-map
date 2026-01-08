"use client";

import { motion } from "framer-motion";

export default function VerticalAI() {
  return (
    <section id="vertical-ai" className="py-32 px-6 lg:px-8">
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
              Vertical AI
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Vertical AI systems are purpose-built for specific domains, workflows, and use cases. Unlike generic copilots, they understand the full context of a domain and integrate deeply with existing tools and processes.
            </p>
          </div>

          {/* Examples */}
          <div className="space-y-8">
            {[
              {
                title: "Operations Dashboard AI",
                description: "An AI system that understands manufacturing KPIs, production schedules, quality metrics, and supply chain dependencies. It doesn't just answer questions—it proactively alerts operators to anomalies, suggests optimization actions, and integrates with ERP systems to execute changes.",
                keyPoint: "Key difference: It knows manufacturing workflows, not just general knowledge.",
              },
              {
                title: "Supply Chain Optimization Agent",
                description: "An AI agent that monitors inventory levels, predicts demand using company-specific patterns, adjusts purchase orders automatically within defined rules, and coordinates with suppliers through APIs. It understands lead times, minimum order quantities, and business rules specific to supply chain operations.",
                keyPoint: "Key difference: It executes actions within supply chain systems, not just provides advice.",
              },
              {
                title: "Customer Support Vertical System",
                description: "An AI system that has access to product documentation, historical tickets, customer purchase history, and warranty information. It can diagnose issues, suggest solutions, process returns, and escalate to human agents when needed—all within the existing support ticket system.",
                keyPoint: "Key difference: It knows your products, policies, and processes, not just general customer service.",
              },
            ].map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-black/5 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {example.title}
                </h3>
                <p className="text-lg text-secondary leading-relaxed mb-4">
                  {example.description}
                </p>
                <p className="text-base text-secondary italic">{example.keyPoint}</p>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-black/5 overflow-hidden"
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground p-8 pb-0">
              Copilot vs Vertical System
            </h3>
            <div className="p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-4 pr-8 font-semibold text-foreground">Aspect</th>
                    <th className="text-left py-4 pr-8 font-semibold text-foreground">Generic Copilot</th>
                    <th className="text-left py-4 font-semibold text-foreground">Vertical AI System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {[
                    { aspect: "Knowledge", copilot: "General knowledge, public internet", vertical: "Domain-specific, company-specific data" },
                    { aspect: "Workflow Integration", copilot: "Standalone, new interface", vertical: "Embedded in existing tools and workflows" },
                    { aspect: "Actions", copilot: "Provides suggestions", vertical: "Executes actions within defined boundaries" },
                    { aspect: "Context Understanding", copilot: "Generic prompts", vertical: "Deep understanding of domain processes" },
                    { aspect: "Adoption", copilot: "Low—requires learning new tool", vertical: "High—fits existing workflows" },
                    { aspect: "Impact", copilot: "Marginal—nice to have", vertical: "Transformational—changes operations" },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-black/2">
                      <td className="py-4 pr-8 font-medium text-foreground">{row.aspect}</td>
                      <td className="py-4 pr-8 text-secondary">{row.copilot}</td>
                      <td className="py-4 text-secondary">{row.vertical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-accent/10 border-l-4 border-accent p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              The Bottom Line
            </h3>
            <p className="text-lg text-secondary leading-relaxed font-medium">
              Vertical AI wins because it solves real problems in specific domains. It doesn&apos;t try to be everything to everyone—it does one thing exceptionally well. For executives, this means clearer ROI, higher adoption, and actual operational impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

