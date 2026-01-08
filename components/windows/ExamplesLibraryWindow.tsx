"use client";

import { EXAMPLE_CASES } from "@/data/examples";
import { motion } from "framer-motion";

export default function ExamplesLibraryWindow() {
  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Examples Library
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Real-world vertical AI systems across different domains. Each example shows the problem, why current tools fail, the system design, and the human owner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {EXAMPLE_CASES.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-black/5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {example.title}
                  </h2>
                  <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                    {example.domain}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Problem</h3>
                  <p className="text-sm text-secondary leading-relaxed">{example.problem}</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                  <h3 className="text-sm font-semibold text-foreground mb-1">Why current tools fail</h3>
                  <p className="text-sm text-secondary leading-relaxed">{example.whyCurrentToolsFail}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">System design</h3>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {example.systemDesign.layers.map((layer, i) => (
                        <span
                          key={i}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                        >
                          {layer}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-secondary leading-relaxed italic">
                      {example.systemDesign.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-black/10 pt-3">
                  <p className="text-xs text-secondary">
                    <span className="font-semibold text-foreground">Human owner:</span> {example.humanOwner}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}




