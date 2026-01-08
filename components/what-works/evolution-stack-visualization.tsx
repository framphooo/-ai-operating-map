"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ChevronDown } from "lucide-react";
import SectionReveal from "../learning/SectionReveal";

type LayerId = "llms" | "agents" | "systems";

interface LayerData {
  id: LayerId;
  title: string;
  yearRange: string;
  scrollTargetId: string;
  color: string;
  description: string;
}

const layers: LayerData[] = [
  {
    id: "llms",
    title: "Large Language Models",
    yearRange: "2022–present",
    scrollTargetId: "llms-section",
    color: "#4F46E5", // indigo-600
    description:
      "LLMs are probabilistic language engines. They reason in text, excel at synthesis, translation, and classification, but do not execute actions inside enterprise systems. This is the LLM ceiling: high demo value, low operational leverage without execution plumbing.",
  },
  {
    id: "agents",
    title: "Agents",
    yearRange: "2023–present",
    scrollTargetId: "agents-section",
    color: "#7C3AED", // purple-600
    description:
      "Agents wire the LLM to memory and tools. They translate intent into structured calls (schemas, JSON) and invoke APIs to act. Agents are architecture, not a new model: they add goals, constraints, memory, and tool-use to the same core reasoning engine.",
  },
  {
    id: "systems",
    title: "Agentic Systems",
    yearRange: "2024–present",
    scrollTargetId: "agentic-workforce-section",
    color: "#A855F7", // violet-500
    description:
      "Agentic systems decompose work across multiple agents, coordinate delegation, and reduce errors via specialization. This is how AI becomes a scalable workforce: governed orchestration, observability, and predictable execution over many narrow agents.",
  },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = Math.abs(endAngle - startAngle) <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

// Filled band between outer and inner radius for a semicircle
function describeBandPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number
) {
  const outer = describeArc(cx, cy, outerR, startAngle, endAngle);
  const inner = describeArc(cx, cy, innerR, endAngle, startAngle);
  const innerStart = polarToCartesian(cx, cy, innerR, startAngle);
  const outerEnd = polarToCartesian(cx, cy, outerR, endAngle);
  return `${outer} L ${innerStart.x} ${innerStart.y} ${inner} L ${outerEnd.x} ${outerEnd.y} Z`;
}

export default function EvolutionStackVisualization() {
  const [activeLayer, setActiveLayer] = useState<LayerId>("llms");
  const [expandedLayer, setExpandedLayer] = useState<LayerId | null>(null);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const width = 1400;
  const height = 720;
  const cx = width / 2;
  const cy = height; // flat edge on bottom
  const startAngle = 180;
  const endAngle = 0;

  const radii = {
    llmsInner: 0,
    llmsOuter: 260,
    agentsInner: 260,
    agentsOuter: 360,
    systemsInner: 360,
    systemsOuter: 460,
  };

  const bandPaths = useMemo(() => {
    return {
      llms: describeBandPath(
        cx,
        cy,
        radii.llmsOuter,
        radii.llmsInner,
        startAngle,
        endAngle
      ),
      agents: describeBandPath(
        cx,
        cy,
        radii.agentsOuter,
        radii.agentsInner,
        startAngle,
        endAngle
      ),
      systems: describeBandPath(
        cx,
        cy,
        radii.systemsOuter,
        radii.systemsInner,
        startAngle,
        endAngle
      ),
    };
  }, [
    cx,
    cy,
    radii.llmsOuter,
    radii.llmsInner,
    radii.agentsOuter,
    radii.agentsInner,
    radii.systemsOuter,
    radii.systemsInner,
    startAngle,
    endAngle,
  ]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 90;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const brainYPercent = 63;
  const brainY = (brainYPercent / 100) * height;

  useEffect(() => {
    return () => {
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
      }
    };
  }, []);

  const getOpacity = (id: LayerId) => {
    if (expandedLayer) {
      return expandedLayer === id ? 0.95 : 0.2;
    }
    const isHover = activeLayer === id;
    return isHover ? 0.7 : 0.45;
  };

  const getLabelPos = (id: LayerId) => {
    const mid =
      id === "llms"
        ? (radii.llmsOuter + radii.llmsInner) / 2
        : id === "agents"
        ? (radii.agentsOuter + radii.agentsInner) / 2
        : (radii.systemsOuter + radii.systemsInner) / 2;
    const angle = 120;
    const r = mid;
    const { x, y } = polarToCartesian(cx, cy, r, angle);
    return { x, y };
  };

  const renderOverlay = () => {
    const layer = expandedLayer;
    if (!layer) return null;
    if (layer === "llms") {
      return null;
    }
    if (layer === "agents") {
      return (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          {/* Tools dot */}
          <circle cx={cx + 110} cy={cy - 90} r={8} fill="#111" opacity={0.16} />
          {/* Memory dot */}
          <circle cx={cx - 110} cy={cy - 70} r={8} fill="#111" opacity={0.16} />
          {/* Lines */}
          <line
            x1={cx}
            y1={brainY}
            x2={cx + 110}
            y2={cy - 90}
            stroke="#111"
            strokeWidth={2}
            strokeOpacity={0.18}
          />
          <line
            x1={cx}
            y1={brainY}
            x2={cx - 110}
            y2={cy - 70}
            stroke="#111"
            strokeWidth={2}
            strokeOpacity={0.18}
          />
        </motion.g>
      );
    }
    // systems overlay
    const topNode = { x: cx, y: cy - 120 };
    const childNodes = [
      { x: cx - 80, y: cy - 60 },
      { x: cx, y: cy - 50 },
      { x: cx + 80, y: cy - 60 },
    ];
    return (
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <circle
          cx={topNode.x}
          cy={topNode.y}
          r={10}
          fill="#111"
          opacity={0.16}
        />
        {childNodes.map((n, idx) => (
          <g key={idx}>
            <line
              x1={topNode.x}
              y1={topNode.y}
              x2={n.x}
              y2={n.y}
              stroke="#111"
              strokeWidth={2}
              strokeOpacity={0.18}
            />
            <circle cx={n.x} cy={n.y} r={7} fill="#111" opacity={0.12} />
          </g>
        ))}
      </motion.g>
    );
  };

  return (
    <div className="w-full">
      <SectionReveal>
        <div className="mb-14 md:mb-16 text-center max-w-4xl mx-auto px-6">
          <h2 className="mb-4 text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            What Works Today
          </h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed max-w-3xl mx-auto">
            Modern AI capability is an evolutionary stack: LLMs are the core
            reasoning engine, agents extend them with tools and memory, and
            agentic systems are composed of many agents working together.
          </p>
        </div>
      </SectionReveal>

      {/* Mobile fallback selector */}
      <div className="md:hidden px-6 mb-6">
        <div className="grid grid-cols-3 rounded-full border border-black/10 bg-white/70 backdrop-blur-sm text-sm font-medium overflow-hidden">
          {layers.map((layer) => {
            const isActive = activeLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`py-3 px-2 transition-colors ${
                  isActive ? "bg-foreground text-white" : "text-secondary"
                }`}
              >
                {layer.title.split(" ")[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative w-full max-w-7xl mx-auto"
        style={{ height: 640 }}
        onMouseLeave={() => {
          if (hoverTimer.current) {
            clearTimeout(hoverTimer.current);
            hoverTimer.current = null;
          }
          setActiveLayer("llms");
          setExpandedLayer(null);
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          className="absolute inset-0"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* Arcs */}
          {layers.map((layer) => {
            const activeColor =
              expandedLayer === layer.id
                ? layer.color
                : expandedLayer
                ? layers.find((l) => l.id === expandedLayer)!.color
                : layer.color;
            return (
              <motion.path
                key={layer.id}
                d={bandPaths[layer.id]}
                fill={activeColor}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: getOpacity(layer.id),
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => {
                  setActiveLayer(layer.id);
                  if (hoverTimer.current) {
                    clearTimeout(hoverTimer.current);
                  }
                  hoverTimer.current = setTimeout(() => {
                    setExpandedLayer(layer.id);
                    hoverTimer.current = null;
                  }, 3000);
                }}
                className="cursor-pointer"
              />
            );
          })}

          {/* Overlays */}
          {renderOverlay()}
        </svg>

        {/* Fixed brain icon */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: "50%",
            top: `${brainYPercent}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-14 h-14 rounded-full bg-white border-2 border-foreground/15 flex items-center justify-center shadow-lg">
            <Brain className="w-7 h-7 text-foreground" strokeWidth={2} />
          </div>
        </div>

        {/* Arc labels (subtle) */}
        <div className="absolute inset-0 pointer-events-none">
          {layers.map((layer) => {
            const pos = getLabelPos(layer.id);
            const isActive =
              (expandedLayer && expandedLayer === layer.id) ||
              (!expandedLayer && activeLayer === layer.id);
            return (
              <div
                key={layer.id}
                className="absolute text-sm font-semibold"
                style={{
                  left: `${(pos.x / width) * 100}%`,
                  top: `${(pos.y / height) * 100}%`,
                  transform: "translate(-50%, -50%)",
                  opacity: isActive ? 0.8 : 0.4,
                }}
              >
                <span className="bg-white/80 px-3 py-1 rounded-full border border-black/5 shadow-sm">
                  {layer.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Minimal default legend (muted) */}
        {!expandedLayer && (
          <div className="absolute inset-0 flex items-end justify-center pb-10 pointer-events-none">
            <div className="flex flex-wrap gap-3 justify-center text-sm text-secondary">
              {layers.map((layer) => (
                <span key={layer.id}>
                  {layer.title} · {layer.yearRange}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Inline info within the rainbow when expanded */}
        {expandedLayer && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {(() => {
              const layer = layers.find((l) => l.id === expandedLayer)!;
              return (
                <div
                  className="text-center max-w-2xl px-6 pointer-events-none"
                  style={{ marginTop: "-120px" }}
                >
                  <div className="text-lg font-heading font-semibold text-foreground mb-1">
                    {layer.title}
                  </div>
                  <div className="text-sm font-semibold text-secondary mb-3">
                    {layer.yearRange}
                  </div>
                  <p className="text-base md:text-lg text-secondary leading-relaxed mb-5">
                    {layer.description}
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => scrollToSection(layer.scrollTargetId)}
                      className="pointer-events-auto inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-foreground/15 bg-white/85 hover:bg-white text-foreground font-medium transition-colors shadow-sm"
                    >
                      Learn more
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}

