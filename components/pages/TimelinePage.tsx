"use client";

import { motion } from "framer-motion";
import Navigation from "../Navigation";
import { MATURITY_TIMELINE } from "@/data/timeline";

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-24">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Maturity Timeline
            </h1>
            <p className="text-xl text-secondary max-w-2xl">
              From 2020 to today: what changed, what works, what to focus on.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-20">
            {MATURITY_TIMELINE.map((node, index) => (
              <div key={index} className="border-b border-black/10 pb-20">
                <div className="flex items-start gap-6 mb-8">
                  <span className="text-sm text-secondary font-medium">{node.period}</span>
                  <h2 className="text-3xl font-heading font-semibold text-foreground">
                    {node.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 ml-20">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                      What changed
                    </h3>
                    <p className="text-secondary leading-relaxed">{node.whatChanged}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                      Do this
                    </h3>
                    <p className="text-secondary leading-relaxed text-sm">{node.whatCompaniesShouldDo}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                      Don&apos;t chase
                    </h3>
                    <p className="text-secondary leading-relaxed text-sm">{node.whatNotToChase}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
