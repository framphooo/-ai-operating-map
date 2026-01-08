"use client";

import { motion } from "framer-motion";

export default function Resources() {
  const categories = [
    {
      title: "Big Enterprise Reports",
      items: [
        "BCG: The State of AI in 2024 (placeholder)",
        "EY: AI Transformation Roadmap (placeholder)",
        "McKinsey: The Economic Potential of Generative AI (placeholder)",
      ],
    },
    {
      title: "Data and Governance",
      items: [
        "Data Contracts: Building Trust in Data (placeholder)",
        "AI Governance Framework: Practical Guide (placeholder)",
        "Vector Database Best Practices (placeholder)",
      ],
    },
    {
      title: "Agentic Systems",
      items: [
        "Building Production-Ready Agents (placeholder)",
        "Multi-Agent Orchestration Patterns (placeholder)",
        "Safety and Guardrails for Autonomous Systems (placeholder)",
      ],
    },
    {
      title: "UX for Decision Making",
      items: [
        "Designing AI Interfaces for Executives (placeholder)",
        "Embedding AI in Existing Workflows (placeholder)",
        "Building Trust Through Transparency (placeholder)",
      ],
    },
  ];

  return (
    <section id="resources" className="py-32 px-6 lg:px-8">
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
              Resources
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Curated resources on AI systems, data, governance, and practical implementation. This list focuses on resources that hold up in practice.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl p-8">
            <p className="text-lg text-secondary leading-relaxed">
              <strong className="text-foreground">Note:</strong> This list will evolve. Only include what holds up in practice.
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-3xl font-heading font-semibold text-foreground mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-black/5 hover:bg-white hover:shadow-md transition-all"
                    >
                      <span className="text-accent mt-1">•</span>
                      <span className="text-lg text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}




