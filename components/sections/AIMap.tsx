"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AI_LAYERS, Layer } from "@/data/layers";

export default function AIMap() {
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(AI_LAYERS[0]);

  return (
    <section id="ai-map" className="py-32 px-6 lg:px-8 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            The AI System Stack
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Seven layers that form the foundation of production AI systems. Click to explore each layer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Layer Stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {AI_LAYERS.map((layer, index) => (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  selectedLayer?.id === layer.id
                    ? "bg-accent text-white shadow-lg scale-105"
                    : "bg-white/80 backdrop-blur-sm hover:bg-white border border-black/5 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`text-2xl font-bold ${
                    selectedLayer?.id === layer.id ? "opacity-80" : "text-accent"
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">{layer.name}</div>
                    <div className={`text-sm ${
                      selectedLayer?.id === layer.id ? "opacity-90" : "opacity-60"
                    }`}>
                      {layer.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Layer Details */}
          <AnimatePresence mode="wait">
            {selectedLayer && (
              <motion.div
                key={selectedLayer.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-3">
                    {selectedLayer.name}
                  </h3>
                  <p className="text-lg text-secondary">{selectedLayer.description}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">What it is</h4>
                    <p className="text-secondary leading-relaxed">{selectedLayer.whatItIs}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Why it matters</h4>
                    <p className="text-secondary leading-relaxed">{selectedLayer.whyItMatters}</p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-2">What fails without it</h4>
                    <p className="text-secondary leading-relaxed">{selectedLayer.whatFails}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Enterprise example</h4>
                    <p className="text-secondary leading-relaxed italic">{selectedLayer.enterpriseExample}</p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Practical build</h4>
                    <p className="text-secondary leading-relaxed">{selectedLayer.practicalBuild}</p>
                  </div>

                  <div className="bg-accent/10 border-l-4 border-accent p-5 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Mental model</h4>
                    <p className="text-secondary leading-relaxed font-medium">{selectedLayer.mentalModel}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}




