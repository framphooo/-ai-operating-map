"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SQLvsVector() {
  const [revealed, setRevealed] = useState<"none" | "sql" | "vector">("none");

  return (
    <div className="my-16">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* SQL Database */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/60 p-8 rounded-2xl border border-black/5 cursor-pointer"
          onClick={() => setRevealed(revealed === "sql" ? "none" : "sql")}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-heading font-semibold text-foreground">
              Traditional SQL Database
            </h3>
            <motion.div
              animate={{ rotate: revealed === "sql" ? 180 : 0 }}
              className="text-2xl"
            >
              ▼
            </motion.div>
          </div>

          <AnimatePresence>
            {revealed === "sql" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-2 mb-6">
                  <div className="text-xs text-secondary mb-2 font-mono">System of Record</div>
                  <div className="border border-black/10 rounded overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-black/5">
                        <tr>
                          <th className="p-2 text-left">ID</th>
                          <th className="p-2 text-left">Product</th>
                          <th className="p-2 text-left">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-black/10">
                          <td className="p-2">1</td>
                          <td className="p-2">Widget A</td>
                          <td className="p-2">$29.99</td>
                        </tr>
                        <tr className="border-t border-black/10">
                          <td className="p-2">2</td>
                          <td className="p-2">Widget B</td>
                          <td className="p-2">$39.99</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-secondary mt-4">
                    Exact matches only. Structured data. Reliable for transactions.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {revealed !== "sql" && (
            <p className="text-sm text-secondary">Click to reveal structure</p>
          )}
        </motion.div>

        {/* Vector Database */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/60 p-8 rounded-2xl border border-black/5 cursor-pointer"
          onClick={() => setRevealed(revealed === "vector" ? "none" : "vector")}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-heading font-semibold text-foreground">
              Vector Database
            </h3>
            <motion.div
              animate={{ rotate: revealed === "vector" ? 180 : 0 }}
              className="text-2xl"
            >
              ▼
            </motion.div>
          </div>

          <AnimatePresence>
            {revealed === "vector" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-2 mb-6">
                  <div className="text-xs text-secondary mb-2 font-mono">Semantic Retrieval Layer</div>
                  <div className="relative h-48 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded border border-black/10 overflow-hidden">
                    {/* Vector space visualization */}
                    <div className="absolute inset-0 p-4">
                      {[
                        { x: 20, y: 30, label: "Doc 1", cluster: "blue" },
                        { x: 25, y: 32, label: "Doc 2", cluster: "blue" },
                        { x: 70, y: 20, label: "Doc 3", cluster: "purple" },
                        { x: 75, y: 22, label: "Doc 4", cluster: "purple" },
                      ].map((doc, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-3 h-3 rounded-full ${
                            doc.cluster === "blue" ? "bg-blue-500" : "bg-purple-500"
                          }`}
                          style={{
                            left: `${doc.x}%`,
                            top: `${doc.y}%`,
                          }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-foreground whitespace-nowrap bg-white/90 px-1.5 py-0.5 rounded shadow-sm">
                            {doc.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-secondary mt-4">
                    Semantic similarity. Unstructured data. Enables meaning-based retrieval.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {revealed !== "vector" && (
            <p className="text-sm text-secondary">Click to reveal structure</p>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 max-w-3xl mx-auto text-center"
      >
        <p className="text-lg text-secondary">
          SQL remains the system of record. Vector databases act as a semantic retrieval layer on top—not a replacement.
        </p>
      </motion.div>
    </div>
  );
}
