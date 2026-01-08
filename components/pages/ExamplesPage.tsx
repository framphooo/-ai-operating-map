"use client";

import { motion } from "framer-motion";
import Navigation from "../Navigation";
import { EXAMPLE_CASES } from "@/data/examples";

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-24">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Examples
            </h1>
            <p className="text-xl text-secondary max-w-2xl">
              Vertical AI systems across operations, supply chain, and customer support.
            </p>
          </div>

          {/* Examples */}
          <div className="space-y-20">
            {EXAMPLE_CASES.map((example, index) => (
              <div key={example.id} className="border-b border-black/10 pb-16">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-3xl font-heading font-semibold text-foreground">
                    {example.title}
                  </h2>
                  <span className="text-sm text-secondary">{example.domain}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Problem
                    </h3>
                    <p className="text-secondary leading-relaxed">{example.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Why current tools fail
                    </h3>
                    <p className="text-secondary leading-relaxed">{example.whyCurrentToolsFail}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                    System design
                  </h3>
                  <p className="text-secondary leading-relaxed text-sm max-w-3xl">
                    {example.systemDesign.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
