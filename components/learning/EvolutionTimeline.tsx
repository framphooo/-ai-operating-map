"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  era: string;
  description: string;
  year?: string;
}

interface EvolutionTimelineProps {
  items: TimelineItem[];
}

export default function EvolutionTimeline({ items }: EvolutionTimelineProps) {
  return (
    <div className="my-20 relative">
      <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-black/10" />
      <div className="space-y-16">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-24"
          >
            <div className="absolute left-8 w-5 h-5 rounded-full bg-accent border-4 border-background shadow-sm" />
            {item.year && (
              <div className="text-base font-semibold text-accent mb-3">{item.year}</div>
            )}
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              {item.era}
            </h3>
            <p className="text-lg text-secondary leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

