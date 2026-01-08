"use client";

import { motion } from "framer-motion";
import Navigation from "../Navigation";

export default function ResourcesPage() {
  const categories = [
    {
      title: "Enterprise Reports",
      items: [
        "BCG: The State of AI in 2024",
        "EY: AI Transformation Roadmap",
        "McKinsey: The Economic Potential of Generative AI",
      ],
    },
    {
      title: "Data and Governance",
      items: [
        "Data Contracts: Building Trust in Data",
        "AI Governance Framework: Practical Guide",
        "Vector Database Best Practices",
      ],
    },
    {
      title: "Agentic Systems",
      items: [
        "Building Production-Ready Agents",
        "Multi-Agent Orchestration Patterns",
        "Safety and Guardrails for Autonomous Systems",
      ],
    },
    {
      title: "UX for Decision Making",
      items: [
        "Designing AI Interfaces for Executives",
        "Embedding AI in Existing Workflows",
        "Building Trust Through Transparency",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-24">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Resources
            </h1>
            <p className="text-xl text-secondary max-w-2xl">
              Curated frameworks and guides that hold up in practice.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-20">
            {categories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">
                  {category.title}
                </h2>
                <div className="space-y-4 ml-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-lg text-secondary">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-black/10">
            <p className="text-sm text-secondary">
              This list evolves. Only resources that hold up in practice are included.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
