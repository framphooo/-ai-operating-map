"use client";

import { motion } from "framer-motion";

export default function SystemDiagram() {
  const components = [
    { id: 1, label: "Hardware", sublabel: "Parallel Computation", icon: "⚡", color: "bg-blue-500" },
    { id: 2, label: "Models", sublabel: "Probabilistic Reasoning", icon: "🧠", color: "bg-purple-500" },
    { id: 3, label: "Embeddings", sublabel: "Meaning Translation", icon: "🔢", color: "bg-green-500" },
    { id: 4, label: "Memory", sublabel: "Vector Databases", icon: "🗄️", color: "bg-orange-500" },
  ];

  return (
    <div className="my-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ height: "200px" }}>
            {components.slice(0, -1).map((_, i) => (
              <motion.line
                key={i}
                x1={`${(i + 1) * 25}%`}
                y1="50%"
                x2={`${(i + 2) * 25}%`}
                y2="50%"
                stroke="rgba(77, 157, 251, 0.3)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              />
            ))}
          </svg>

          {/* Components */}
          <div className="grid grid-cols-4 gap-4 relative z-10">
            {components.map((comp, index) => (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className={`${comp.color} w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl shadow-lg`}>
                  {comp.icon}
                </div>
                <div className="font-heading font-semibold text-foreground mb-1">
                  {comp.label}
                </div>
                <div className="text-xs text-secondary">{comp.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            AI is software that learns behavior, enabled by parallel computation, probabilistic by nature, and only reliable when grounded.
          </p>
        </motion.div>
      </div>
    </div>
  );
}



