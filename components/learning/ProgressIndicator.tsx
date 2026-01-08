"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  sections: string[];
  currentSection: number;
}

export default function ProgressIndicator({ sections, currentSection }: ProgressIndicatorProps) {
  return (
    <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-sm border-b border-black/10 py-4 mb-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {sections.map((section, index) => (
            <div key={index} className="flex items-center gap-2 flex-shrink-0">
              <motion.div
                initial={false}
                animate={{
                  scale: currentSection >= index ? 1.1 : 1,
                  opacity: currentSection >= index ? 1 : 0.4,
                }}
                className={`w-2 h-2 rounded-full ${
                  currentSection >= index ? "bg-accent" : "bg-black/20"
                }`}
              />
              {index < sections.length - 1 && (
                <div
                  className={`h-px w-8 ${
                    currentSection > index ? "bg-accent" : "bg-black/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



