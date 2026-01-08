"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConceptCardProps {
  term: string;
  definition: string;
  icon?: string;
}

export default function ConceptCard({ term, definition, icon }: ConceptCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
      className="border border-black/5 rounded-2xl bg-white/60 hover:bg-white/90 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {icon && <span className="text-3xl">{icon}</span>}
            <h3 className="text-2xl font-heading font-semibold text-foreground">{term}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-foreground/40"
          >
            ▼
          </motion.div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-6 text-lg text-secondary leading-relaxed">{definition}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

