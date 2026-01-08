"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface TimelineEra {
  id: string;
  era: string;
  period: string;
  description: string;
  visual?: "symbolic" | "pattern" | "acceleration";
}

interface ContinuousTimelineProps {
  eras: TimelineEra[];
}

interface TimelineEraItemProps {
  era: TimelineEra;
  index: number;
  totalEras: number;
  scrollYProgress: MotionValue<number>;
}

function TimelineEraItem({ era, index, totalEras, scrollYProgress }: TimelineEraItemProps) {
  const eraStart = index / totalEras;
  const eraEnd = (index + 1) / totalEras;
  const eraCenter = (eraStart + eraEnd) / 2;

  const opacity = useTransform(
    scrollYProgress,
    [eraStart - 0.2, eraStart, eraEnd, eraEnd + 0.2],
    [0.3, 1, 1, 0.3]
  );

  const yOffset = useTransform(
    scrollYProgress,
    [eraStart, eraCenter, eraEnd],
    [50, 0, -50]
  );

  return (
    <motion.div
      style={{
        opacity,
        y: yOffset,
      }}
      className="relative"
    >
              {/* Timeline Marker */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />

              <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Visual */}
                  <div className="relative h-64 bg-white/60 rounded-2xl border border-black/5 flex items-center justify-center overflow-hidden">
                    {era.visual === "symbolic" && (
                      <div className="text-center">
                        <div className="text-6xl mb-4">♟️</div>
                        <div className="text-sm text-secondary">Deep Blue vs Kasparov, 1997</div>
                        <motion.div
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="absolute inset-0 border-2 border-accent/30 rounded-2xl"
                        />
                      </div>
                    )}
                    {era.visual === "pattern" && (
                      <div className="text-center">
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-12 h-12 bg-accent/20 rounded"
                              animate={{
                                opacity: [0.3, 0.7, 0.3],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-secondary">Pattern Recognition</div>
                      </div>
                    )}
                    {era.visual === "acceleration" && (
                      <div className="text-center w-full">
                        <div className="text-4xl mb-4">⚡</div>
                        <div className="text-sm text-secondary mb-4">2012: GPU Acceleration</div>
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                          }}
                          className="w-24 h-24 mx-auto bg-gradient-to-br from-accent to-purple-500 rounded-full"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-sm font-semibold text-accent mb-3">{era.period}</div>
                    <h3 className="text-3xl font-heading font-semibold text-foreground mb-4">
                      {era.era}
                    </h3>
                    <p className="text-lg text-secondary leading-relaxed">{era.description}</p>
                  </div>
                </div>
              </div>
    </motion.div>
  );
}

export default function ContinuousTimeline({ eras }: ContinuousTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <div ref={containerRef} className="relative py-32">
      {/* Continuous Timeline Line */}
      <div className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-full max-h-[80vh] bg-gradient-to-b from-accent/20 via-accent to-accent/20 z-0" />

      <div className="space-y-32">
        {eras.map((era, index) => (
          <TimelineEraItem
            key={era.id}
            era={era}
            index={index}
            totalEras={eras.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}
