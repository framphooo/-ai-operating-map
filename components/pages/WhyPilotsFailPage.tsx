"use client";

import { motion } from "framer-motion";
import Navigation from "../Navigation";

export default function WhyPilotsFailPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-24">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Why Pilots Fail
            </h1>
            <p className="text-xl text-secondary max-w-2xl">
              Two root causes and how to avoid them.
            </p>
          </div>

          {/* Root Causes */}
          <div className="mb-24 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Weak Data Foundations
              </h2>
              <p className="text-secondary leading-relaxed">
                Companies rush to build AI on messy, siloed data. Result: systems that hallucinate or require constant correction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Horizontal Thinking
              </h2>
              <p className="text-secondary leading-relaxed">
                Generic assistants that try to do everything. Result: doesn&apos;t fit how people work, low adoption.
              </p>
            </div>
          </div>

          {/* Failure Patterns */}
          <div className="mb-24">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-12">
              Common Failure Patterns
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Starting with the model, not the data",
                  description: "Spending months on models while data is messy. Start with data cleaning and governance.",
                },
                {
                  title: "Building generic copilots",
                  description: "Assistants that try to do everything. Focus on one domain and do it well.",
                },
                {
                  title: "Ignoring existing workflows",
                  description: "Requiring users to learn new interfaces. Embed AI into existing tools.",
                },
                {
                  title: "Skipping governance",
                  description: "No testing, monitoring, or guardrails. Build audit trails and human oversight from day one.",
                },
                {
                  title: "Underestimating integration",
                  description: "Demo works in isolation, fails in production. Plan integration early—it takes 3x longer than AI development.",
                },
              ].map((pattern, index) => (
                <div key={index} className="border-b border-black/10 pb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{pattern.title}</h3>
                  <p className="text-secondary">{pattern.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-12">
              What to Do Instead
            </h2>
            <div className="space-y-4">
              {[
                "Start with data: Clean, structure, document",
                "Build vertical, not horizontal: Focus on one domain",
                "Integrate with existing tools: Don&apos;t build new interfaces",
                "Start small: Constrained agents with clear boundaries",
                "Measure what matters: Adoption, accuracy, impact",
                "Plan governance from day one: Audit trails, error handling",
              ].map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-secondary text-sm mt-1">{index + 1}.</span>
                  <p className="text-lg text-secondary">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
