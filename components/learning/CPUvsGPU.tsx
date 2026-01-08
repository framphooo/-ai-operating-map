"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Simple image patterns
const CPU_IMAGE = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

const GPU_IMAGE = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

export default function CPUvsGPU() {
  const [mode, setMode] = useState<"cpu" | "gpu">("cpu");
  const [cpuProgress, setCpuProgress] = useState(0);
  const [gpuComplete, setGpuComplete] = useState(false);

  const handleCpuClick = () => {
    if (cpuProgress < CPU_IMAGE.flat().length) {
      setCpuProgress((prev) => prev + 1);
    }
  };

  const handleGpuClick = () => {
    setGpuComplete(true);
  };

  const reset = () => {
    setCpuProgress(0);
    setGpuComplete(false);
  };

  const cpuRendered = Math.floor((cpuProgress / CPU_IMAGE.flat().length) * CPU_IMAGE.flat().length);
  const cpuTotal = CPU_IMAGE.flat().length;
  const gpuTotal = GPU_IMAGE.flat().length;

  return (
    <div className="my-16">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* CPU Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-8 rounded-2xl border-2 transition-all ${
            mode === "cpu"
              ? "border-accent bg-accent/5"
              : "border-black/10 bg-white/60"
          }`}
        >
          <button
            onClick={() => {
              setMode("cpu");
              reset();
            }}
            className="w-full text-left"
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              CPU: Sequential Processing
            </h3>
            <p className="text-sm text-secondary mb-6">
              Click repeatedly to build the image dot by dot
            </p>
            <div className="relative bg-black/5 rounded-lg h-64 mb-4 overflow-hidden flex items-center justify-center">
              {/* CPU Image - Simple pattern */}
              <div className="grid grid-cols-5 gap-1">
                {CPU_IMAGE.flat().map((pixel, i) => (
                  <motion.div
                    key={i}
                    className={`w-8 h-8 rounded ${
                      i < cpuRendered && pixel === 1
                        ? "bg-accent"
                        : i < cpuRendered && pixel === 0
                        ? "bg-transparent"
                        : "bg-black/10"
                    }`}
                    initial={false}
                    animate={{
                      scale: i < cpuRendered && pixel === 1 ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
              {cpuRendered < cpuTotal && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCpuClick();
                    }}
                    className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Compute Next Dot
                  </button>
                </div>
              )}
            </div>
            <div className="text-sm text-secondary">
              Progress: {Math.floor((cpuRendered / cpuTotal) * 100)}% ({cpuRendered}/{cpuTotal} dots)
            </div>
            <div className="mt-4 text-xs text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent/20" />
                <span>4 cores processing sequentially</span>
              </div>
            </div>
          </button>
        </motion.div>

        {/* GPU Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`p-8 rounded-2xl border-2 transition-all ${
            mode === "gpu"
              ? "border-accent bg-accent/5"
              : "border-black/10 bg-white/60"
          }`}
        >
          <button
            onClick={() => {
              setMode("gpu");
              reset();
            }}
            className="w-full text-left"
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              GPU: Parallel Processing
            </h3>
            <p className="text-sm text-secondary mb-6">
              Click once to render the detailed image instantly
            </p>
            <div className="relative bg-black/5 rounded-lg h-64 mb-4 overflow-hidden flex items-center justify-center">
              {/* GPU Image - Detailed pattern */}
              <div className="grid grid-cols-8 gap-0.5">
                {GPU_IMAGE.flat().map((pixel, i) => (
                  <motion.div
                    key={i}
                    className={`w-6 h-6 ${
                      gpuComplete && pixel === 1
                        ? "bg-accent"
                        : gpuComplete && pixel === 0
                        ? "bg-transparent"
                        : "bg-black/10"
                    }`}
                    initial={false}
                    animate={{
                      scale: gpuComplete && pixel === 1 ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 0.05,
                      delay: gpuComplete ? i * 0.01 : 0,
                    }}
                  />
                ))}
              </div>
              {!gpuComplete && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGpuClick();
                    }}
                    className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Compute All at Once
                  </button>
                </div>
              )}
            </div>
            <div className="text-sm text-secondary">
              {gpuComplete ? `Complete instantly (${gpuTotal} dots)` : "Click once to start"}
            </div>
            <div className="mt-4 text-xs text-secondary">
              <div className="flex items-center gap-2">
                <div className="grid grid-cols-4 gap-0.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                  ))}
                </div>
                <span>Thousands of cores processing in parallel</span>
              </div>
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
