"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../Navigation";
import { AI_LAYERS, Layer } from "@/data/layers";

export default function AIMapPage() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>(null);

  const toggleLayer = (layerId: string) => {
    setExpandedLayer(expandedLayer === layerId ? null : layerId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              The AI System Stack
            </h1>
            <p className="text-xl text-secondary max-w-2xl">
              Seven layers that form production AI systems. Click to expand and learn.
            </p>
          </div>

          {/* Accordion Layers List */}
          <div className="space-y-0">
            {AI_LAYERS.map((layer, index) => {
              const isExpanded = expandedLayer === layer.id;
              return (
                <div key={layer.id} className="border-b border-black/10 last:border-b-0">
                  {/* Layer Header Button */}
                  <button
                    onClick={() => toggleLayer(layer.id)}
                    className={`w-full text-left p-6 transition-colors ${
                      isExpanded
                        ? "bg-accent text-white"
                        : "hover:bg-black/5"
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`text-2xl font-bold w-8 ${isExpanded ? "opacity-90" : "text-accent"}`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className={`text-xl font-semibold mb-1 ${isExpanded ? "text-white" : "text-foreground"}`}>
                          {layer.name}
                        </div>
                        <div className={`text-sm ${isExpanded ? "opacity-90" : "text-secondary"}`}>
                          {layer.description}
                        </div>
                      </div>
                      <div className={`text-2xl transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                        ▼
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 pt-4 bg-white/50 space-y-6">
                          {/* Lesson 1: Understanding */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                                1
                              </div>
                              <h3 className="text-xl font-heading font-semibold text-foreground">
                                What It Is
                              </h3>
                            </div>
                            <div className="ml-11">
                              <p className="text-secondary leading-relaxed">
                                {layer.whatItIs}
                              </p>
                            </div>
                          </div>

                          {/* Lesson 2: Importance */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                                2
                              </div>
                              <h3 className="text-xl font-heading font-semibold text-foreground">
                                Why It Matters
                              </h3>
                            </div>
                            <div className="ml-11">
                              <p className="text-secondary leading-relaxed">
                                {layer.whyItMatters}
                              </p>
                            </div>
                          </div>

                          {/* Lesson 3: Warning */}
                          <div className="space-y-3 bg-red-50/50 border-l-4 border-red-400 p-5 rounded-r-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
                                3
                              </div>
                              <h3 className="text-xl font-heading font-semibold text-foreground">
                                What Fails Without It
                              </h3>
                            </div>
                            <div className="ml-11">
                              <p className="text-secondary leading-relaxed">
                                {layer.whatFails}
                              </p>
                            </div>
                          </div>

                          {/* Lesson 4: Real Example */}
                          <div className="space-y-3 bg-blue-50/50 border-l-4 border-blue-400 p-5 rounded-r-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                4
                              </div>
                              <h3 className="text-xl font-heading font-semibold text-foreground">
                                Real-World Example
                              </h3>
                            </div>
                            <div className="ml-11">
                              <p className="text-secondary leading-relaxed italic">
                                {layer.enterpriseExample}
                              </p>
                            </div>
                          </div>

                          {/* Lesson 5: How to Build */}
                          <div className="space-y-3 bg-green-50/50 border-l-4 border-green-500 p-5 rounded-r-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                                5
                              </div>
                              <h3 className="text-xl font-heading font-semibold text-foreground">
                                How to Build It
                              </h3>
                            </div>
                            <div className="ml-11">
                              <p className="text-secondary leading-relaxed">
                                {layer.practicalBuild}
                              </p>
                            </div>
                          </div>

                          {/* Lesson 6: Mental Model */}
                          <div className="space-y-3 bg-purple-50/50 border-l-4 border-purple-500 p-5 rounded-r-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                                6
                              </div>
                              <h3 className="text-xl font-heading font-semibold text-foreground">
                                Mental Model
                              </h3>
                            </div>
                            <div className="ml-11">
                              <p className="text-secondary leading-relaxed font-medium">
                                {layer.mentalModel}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
