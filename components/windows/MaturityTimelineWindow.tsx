"use client";

import { MATURITY_TIMELINE } from "@/data/timeline";
import { motion } from "framer-motion";

export default function MaturityTimelineWindow() {
  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            AI Maturity Timeline
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Understanding where we are, where we&apos;re going, and what to focus on at each stage.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30" />

          {/* Timeline nodes */}
          <div className="space-y-12">
            {MATURITY_TIMELINE.map((node, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-md" />

                {/* Content */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-black/5 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {node.period}
                    </span>
                    <h2 className="text-2xl font-heading font-semibold text-foreground">
                      {node.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">What changed</h3>
                      <p className="text-secondary leading-relaxed">{node.whatChanged}</p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <h3 className="font-semibold text-foreground mb-2">What companies should do</h3>
                      <p className="text-secondary leading-relaxed">{node.whatCompaniesShouldDo}</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                      <h3 className="font-semibold text-foreground mb-2">What not to chase</h3>
                      <p className="text-secondary leading-relaxed">{node.whatNotToChase}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

