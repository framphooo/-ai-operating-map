"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface EmbeddingVisualizationProps {
  phase: "abstract" | "concrete" | "zoomed" | "clustering";
}

export default function EmbeddingVisualization({ phase }: EmbeddingVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, phase === "zoomed" ? 3 : 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  // Simulated word embeddings
  const words = [
    { word: "car", x: 30, y: 40, color: "bg-blue-500" },
    { word: "automobile", x: 35, y: 42, color: "bg-blue-500" },
    { word: "vehicle", x: 32, y: 38, color: "bg-blue-400" },
    { word: "philosophy", x: 80, y: 20, color: "bg-purple-500" },
    { word: "thinking", x: 75, y: 25, color: "bg-purple-400" },
    { word: "idea", x: 78, y: 22, color: "bg-purple-400" },
    { word: "dog", x: 20, y: 70, color: "bg-green-500" },
    { word: "cat", x: 25, y: 72, color: "bg-green-500" },
    { word: "animal", x: 22, y: 68, color: "bg-green-400" },
  ];

  return (
    <div ref={containerRef} className="relative h-96 w-full my-16">
      <motion.div
        style={{ scale, opacity }}
        className="relative w-full h-full bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-2xl border border-black/5 overflow-hidden"
      >
        {/* Vector space grid */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Word points */}
        {words.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} rounded-full w-4 h-4 shadow-lg`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
            animate={
              phase === "clustering"
                ? {
                    x: [
                      Math.random() * 10 - 5,
                      item.word.includes("car") || item.word.includes("auto") || item.word === "vehicle"
                        ? -10
                        : item.word.includes("phil") || item.word.includes("think") || item.word === "idea"
                        ? 10
                        : 0,
                    ],
                    y: [
                      Math.random() * 10 - 5,
                      item.word.includes("car") || item.word.includes("auto") || item.word === "vehicle"
                        ? -5
                        : 0,
                    ],
                  }
                : {}
            }
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            {phase === "zoomed" && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold whitespace-nowrap"
              >
                {item.word}
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Connection lines for clustering phase */}
        {phase === "clustering" && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {words
              .filter((w) => w.word.includes("car") || w.word.includes("auto") || w.word === "vehicle")
              .map((item, i, arr) =>
                i < arr.length - 1 ? (
                  <motion.line
                    key={`line-${i}`}
                    x1={`${(item.x / 100) * 100}%`}
                    y1={`${(item.y / 100) * 100}%`}
                    x2={`${(arr[i + 1].x / 100) * 100}%`}
                    y2={`${(arr[i + 1].y / 100) * 100}%`}
                    stroke="rgba(77, 157, 251, 0.3)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : null
              )}
          </svg>
        )}
      </motion.div>

      {/* Text transformation animation */}
      {phase === "zoomed" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-4 text-lg">
            <span className="font-semibold">&quot;car&quot;</span>
            <span>→</span>
            <code className="bg-black/5 px-3 py-1 rounded text-sm">[0.23, -0.45, 0.12, ...]</code>
          </div>
        </motion.div>
      )}
    </div>
  );
}

