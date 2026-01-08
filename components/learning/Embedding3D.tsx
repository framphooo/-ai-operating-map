"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Embedding3DProps {
  phase: "abstract" | "concrete" | "zoomed" | "clustering";
}

export default function Embedding3D({ phase }: Embedding3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, phase === "zoomed" ? 2 : 1.2]);

  // Word embeddings with fixed positions
  const words = [
    { word: "car", x: 30, y: 40, z: 20, color: "bg-blue-500", cluster: "transport" },
    { word: "automobile", x: 32, y: 42, z: 22, color: "bg-blue-500", cluster: "transport" },
    { word: "vehicle", x: 28, y: 38, z: 18, color: "bg-blue-400", cluster: "transport" },
    { word: "philosophy", x: 80, y: 20, z: 60, color: "bg-purple-500", cluster: "abstract" },
    { word: "thinking", x: 78, y: 22, z: 58, color: "bg-purple-400", cluster: "abstract" },
    { word: "idea", x: 82, y: 18, z: 62, color: "bg-purple-400", cluster: "abstract" },
    { word: "dog", x: 20, y: 70, z: 30, color: "bg-green-500", cluster: "animals" },
    { word: "cat", x: 22, y: 72, z: 32, color: "bg-green-500", cluster: "animals" },
    { word: "animal", x: 18, y: 68, z: 28, color: "bg-green-400", cluster: "animals" },
  ];

  if (!mounted) {
    return (
      <div ref={containerRef} className="relative h-96 w-full my-16 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-2xl border border-black/5" />
    );
  }

  return (
    <div ref={containerRef} className="relative h-96 w-full my-16 perspective-1000">
      <motion.div
        style={{
          rotateY,
          rotateX,
          scale,
        }}
        className="relative w-full h-full bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-2xl border border-black/5 overflow-hidden preserve-3d"
      >
        {/* 3D Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid3d" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid3d)" />
          </svg>
        </div>

        {/* Word points in 3D space */}
        {words.map((item, index) => {
          const zOffset = phase === "zoomed" ? item.z * 0.5 : item.z * 0.3;
          const scale3d = phase === "zoomed" ? 1.5 : 1;

          return (
            <motion.div
              key={index}
              className={`absolute ${item.color} rounded-full shadow-lg transition-all duration-500`}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                width: phase === "zoomed" ? "24px" : "16px",
                height: phase === "zoomed" ? "24px" : "16px",
                transform: `translateZ(${zOffset}px) scale(${scale3d})`,
              }}
              whileHover={{
                scale: 1.5,
                zIndex: 10,
              }}
            >
              {phase === "zoomed" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-foreground whitespace-nowrap bg-white/95 px-2 py-1 rounded shadow-md z-20"
                >
                  {item.word}
                </motion.div>
              )}
            </motion.div>
          );
        })}

        {/* Connection lines for clustering */}
        {phase === "clustering" && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {words
              .filter((w) => w.cluster === "transport")
              .map((item, i, arr) =>
                i < arr.length - 1 ? (
                  <motion.line
                    key={`line-transport-${i}`}
                    x1={`${item.x}%`}
                    y1={`${item.y}%`}
                    x2={`${arr[i + 1].x}%`}
                    y2={`${arr[i + 1].y}%`}
                    stroke="rgba(59, 130, 246, 0.4)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                ) : null
              )}
          </svg>
        )}
      </motion.div>

      {/* Text transformation for zoomed phase */}
      {phase === "zoomed" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-4 text-lg text-foreground">
            <span className="font-semibold">&quot;car&quot;</span>
            <span className="text-secondary">→</span>
            <code className="bg-black/10 text-foreground px-3 py-1 rounded text-sm font-mono">
              [0.23, -0.45, 0.12, ...]
            </code>
          </div>
        </motion.div>
      )}
    </div>
  );
}

