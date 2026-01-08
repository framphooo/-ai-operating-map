"use client";

import { motion } from "framer-motion";
import Navigation from "../Navigation";

export default function VerticalAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-24">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Vertical AI
            </h1>
            <p className="text-xl text-secondary max-w-2xl">
              Purpose-built systems that understand your domain, not generic assistants.
            </p>
          </div>

          {/* Comparison */}
          <div className="mb-24 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Generic Copilot
              </h2>
              <ul className="space-y-4 text-secondary">
                <li>General knowledge only</li>
                <li>Separate interface</li>
                <li>Provides suggestions</li>
                <li>Low adoption</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Vertical AI System
              </h2>
              <ul className="space-y-4 text-secondary">
                <li>Domain-specific knowledge</li>
                <li>Embedded in workflows</li>
                <li>Executes actions</li>
                <li>High adoption and impact</li>
              </ul>
            </div>
          </div>

          {/* Examples */}
          <div className="space-y-16">
            <h2 className="text-3xl font-heading font-semibold text-foreground">
              Examples
            </h2>
            
            {[
              {
                title: "Operations Dashboard",
                domain: "Manufacturing",
                description: "Knows KPIs, production schedules, and supply chain dependencies. Proactively alerts operators and integrates with ERP systems.",
              },
              {
                title: "Supply Chain Agent",
                domain: "Logistics",
                description: "Monitors inventory, predicts demand, adjusts purchase orders automatically within defined rules.",
              },
              {
                title: "Customer Support System",
                domain: "Support",
                description: "Accesses product docs, order history, processes returns. Resolves common issues autonomously, escalates when needed.",
              },
            ].map((example, index) => (
              <div key={index} className="border-b border-black/10 pb-12">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-heading font-semibold text-foreground">
                    {example.title}
                  </h3>
                  <span className="text-sm text-secondary">{example.domain}</span>
                </div>
                <p className="text-lg text-secondary max-w-3xl">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
