"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "../learning/SectionReveal";

interface EvolutionStage {
  period: string;
  title: string;
  description: string;
  transition: string;
  category: "reasoning" | "execution";
}

const stages: EvolutionStage[] = [
  {
    period: "2017-2022",
    title: "Large Language Models",
    description: "Transformer architectures enabled understanding of relationships across entire contexts. Models generate outputs probabilistically based on learned patterns, creating unprecedented language fluency and reasoning capability.",
    transition: "From narrow intelligence to general reasoning",
    category: "reasoning",
  },
  {
    period: "2023-2024",
    title: "Agents",
    description: "LLMs combined with memory, goals, constraints, and tool-use capabilities. This marks the transition from reasoning systems to execution systems—from answering to doing.",
    transition: "From reasoning to execution",
    category: "execution",
  },
  {
    period: "2024-Present",
    title: "Agentic Systems",
    description: "Multiple specialized agents working together under coordination, mirroring organizational structures. Narrow scope, reusable prompts, structured knowledge, and predictable outputs enable real operational leverage.",
    transition: "From single agents to coordinated systems",
    category: "execution",
  },
];

export default function AISystemEvolutionTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSectionFullyVisible, setIsSectionFullyVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSectionFullyVisible(entry.isIntersecting && entry.intersectionRatio >= 0.8);
        });
      },
      {
        threshold: [0, 0.5, 0.8, 1],
        rootMargin: "-5% 0px -5% 0px",
      }
    );

    observer.observe(section);

    const handleWheel = (e: WheelEvent) => {
      if (!isSectionFullyVisible) return;

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      const isAtEnd = scrollLeft >= maxScroll - 5;
      const isAtStart = scrollLeft <= 5;

      if (e.deltaY > 0) {
        if (isAtEnd) return;
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          e.stopPropagation();
          container.scrollLeft += e.deltaY * 0.8;
        }
      } else if (e.deltaY < 0) {
        if (isAtStart) return;
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          e.stopPropagation();
          container.scrollLeft += e.deltaY * 0.8;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleWheel, { capture: true });
    };
  }, [isSectionFullyVisible]);

  // Find the transition point (first execution stage)
  const transitionIndex = stages.findIndex((stage) => stage.category === "execution");

  return (
    <div className="w-full" ref={sectionRef}>
      {/* Title Section */}
      <SectionReveal>
        <div className="mb-16 md:mb-20 text-center max-w-4xl mx-auto px-6">
          <h2 className="mb-6 text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            What Works Today
          </h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed">
            Modern AI that delivers real value follows a clear progression: from language models that reason, to agents that execute, to agentic systems that operate at scale.
          </p>
        </div>
      </SectionReveal>

      {/* Timeline Container */}
      <div className="relative">
        {/* Category Divider Line */}
        <div className="absolute top-[120px] md:top-[140px] left-6 md:left-12 right-6 md:right-12 h-0.5 bg-accent/20 z-0" />
        
        {/* Transition Indicator */}
        {transitionIndex > 0 && (
          <div 
            className="absolute top-[120px] md:top-[140px] z-20"
            style={{ 
              left: `calc(${(transitionIndex / stages.length) * 100}% + ${transitionIndex === 0 ? 0 : transitionIndex * (85 / stages.length)}vw - 1px)`,
            }}
          >
            <div className="relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-2 border-accent rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-accent rounded-full" />
              </div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-semibold text-accent whitespace-nowrap">
                Transition Point
              </div>
            </div>
          </div>
        )}

        {/* Horizontal Scroll Timeline */}
        <div
          ref={containerRef}
          className="overflow-x-auto overflow-y-hidden pb-16 md:pb-20 scrollbar-hide relative"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="inline-flex gap-8 md:gap-12 px-6 md:px-12" style={{ minWidth: "max-content" }}>
            {stages.map((stage, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[600px] scroll-snap-align-start relative"
              >
                {/* Timeline Marker */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-white/40 shadow-lg ${
                    stage.category === "execution" ? "bg-accent" : "bg-purple-500"
                  }`} />
                </div>

                {/* Category Label */}
                {index === 0 && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs font-semibold text-purple-600 uppercase tracking-wide">
                    Reasoning
                  </div>
                )}
                {index === transitionIndex && transitionIndex > 0 && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs font-semibold text-accent uppercase tracking-wide">
                    Execution
                  </div>
                )}

                {/* Card */}
                <motion.div
                  className={`mt-8 rounded-2xl border border-black/5 bg-white/90 backdrop-blur-sm shadow-xl p-6 md:p-8 lg:p-10 ${
                    stage.category === "execution" ? "border-l-4 border-l-accent" : "border-l-4 border-l-purple-500"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Period Label */}
                  <div className="text-sm font-semibold text-accent mb-3 tracking-wide uppercase">
                    {stage.period}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4 leading-tight">
                    {stage.title}
                  </h3>

                  {/* Transition Label */}
                  <div className="text-xs font-medium text-secondary mb-4 italic">
                    {stage.transition}
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-secondary leading-relaxed">
                    {stage.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

