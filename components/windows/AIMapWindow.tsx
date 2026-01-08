"use client";

import { useState } from "react";
import { AI_LAYERS, Layer } from "@/data/layers";
import { motion, AnimatePresence } from "framer-motion";

export default function AIMapWindow() {
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(AI_LAYERS[0]);

  return (
    <div className="h-full flex overflow-hidden">
      {/* Left Panel: Layer Stack */}
      <div className="w-64 border-r border-black/5 bg-white/30 backdrop-blur-sm overflow-y-auto">
        <div className="p-4 space-y-2">
          <h2 className="text-sm font-semibold text-foreground mb-4">The AI System Stack</h2>
          {AI_LAYERS.map((layer, index) => (
            <button
              key={layer.id}
              onClick={() => setSelectedLayer(layer)}
              className={`w-full text-left p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
                selectedLayer?.id === layer.id
                  ? "bg-accent text-white shadow-md"
                  : "bg-white/60 hover:bg-white/80 text-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium opacity-60">{index + 1}</span>
                <div className="flex-1">
                  <div className="font-medium text-sm">{layer.name}</div>
                  <div className={`text-xs mt-0.5 ${
                    selectedLayer?.id === layer.id ? "opacity-80" : "opacity-60"
                  }`}>
                    {layer.description}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel: Layer Details */}
      <div className="flex-1 overflow-y-auto bg-white/20">
        <AnimatePresence mode="wait">
          {selectedLayer && (
            <motion.div
              key={selectedLayer.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="p-8 max-w-4xl"
            >
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                    {selectedLayer.name}
                  </h1>
                  <p className="text-lg text-secondary">{selectedLayer.description}</p>
                </div>

                <div className="space-y-6">
                  <section>
                    <h2 className="text-lg font-heading font-semibold text-foreground mb-2">
                      What it is
                    </h2>
                    <p className="text-secondary leading-relaxed">{selectedLayer.whatItIs}</p>
                  </section>

                  <section>
                    <h2 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Why it matters
                    </h2>
                    <p className="text-secondary leading-relaxed">{selectedLayer.whyItMatters}</p>
                  </section>

                  <section className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <h2 className="text-lg font-heading font-semibold text-foreground mb-2">
                      What fails without it
                    </h2>
                    <p className="text-secondary leading-relaxed">{selectedLayer.whatFails}</p>
                  </section>

                  <section>
                    <h2 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Enterprise example
                    </h2>
                    <p className="text-secondary leading-relaxed italic">{selectedLayer.enterpriseExample}</p>
                  </section>

                  <section className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <h2 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Practical build
                    </h2>
                    <p className="text-secondary leading-relaxed">{selectedLayer.practicalBuild}</p>
                  </section>

                  <section className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                    <h2 className="text-lg font-heading font-semibold text-foreground mb-2">
                      Mental model
                    </h2>
                    <p className="text-secondary leading-relaxed font-medium">{selectedLayer.mentalModel}</p>
                  </section>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}




