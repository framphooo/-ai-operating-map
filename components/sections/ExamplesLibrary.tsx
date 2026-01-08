"use client";

import { motion } from "framer-motion";
import { EXAMPLE_CASES } from "@/data/examples";

export default function ExamplesLibrary() {
  return (
    <section id="examples" className="py-32 px-6 lg:px-8 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Examples Library
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Real-world vertical AI systems across different domains. Each example shows the problem, why current tools fail, the system design, and the human owner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {EXAMPLE_CASES.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-black/5 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                    {example.title}
                  </h3>
                  <span className="inline-block text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {example.domain}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Problem</h4>
                  <p className="text-base text-secondary leading-relaxed">{example.problem}</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Why current tools fail</h4>
                  <p className="text-base text-secondary leading-relaxed">{example.whyCurrentToolsFail}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">System design</h4>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {example.systemDesign.layers.map((layer, i) => (
                        <span
                          key={i}
                          className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium"
                        >
                          {layer}
                        </span>
                      ))}
                    </div>
                    <p className="text-base text-secondary leading-relaxed italic">
                      {example.systemDesign.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-black/10 pt-4">
                  <p className="text-sm text-secondary">
                    <span className="font-semibold text-foreground">Human owner:</span> {example.humanOwner}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




