"use client";

import { motion } from "framer-motion";
import { MATURITY_TIMELINE } from "@/data/timeline";

export default function MaturityTimeline() {
  return (
    <section id="maturity-timeline" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            AI Maturity Timeline
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Understanding where we are, where we&apos;re going, and what to focus on at each stage.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden lg:block" />

          <div className="space-y-16">
            {MATURITY_TIMELINE.map((node, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 lg:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-6 top-2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-md" />

                {/* Content */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-black/5 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full">
                      {node.period}
                    </span>
                    <h3 className="text-3xl font-heading font-semibold text-foreground">
                      {node.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">What changed</h4>
                      <p className="text-lg text-secondary leading-relaxed">{node.whatChanged}</p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">What companies should do</h4>
                      <p className="text-lg text-secondary leading-relaxed">{node.whatCompaniesShouldDo}</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">What not to chase</h4>
                      <p className="text-lg text-secondary leading-relaxed">{node.whatNotToChase}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




