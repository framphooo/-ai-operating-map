"use client";

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "./Navigation";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const mapSections = [
  { title: "AI Origins", desc: "Where the technology comes from." },
  { title: "Market Reality", desc: "Why hype dominates and pilots stall." },
  { title: "What Works", desc: "Patterns that scale beyond demos." },
  { title: "AI Mindset", desc: "How to see AI as a system you own." },
  { title: "Execution Checklist", desc: "How to act responsibly with clarity." },
];

const failurePoints = [
  "Confusing products with systems.",
  "Confusing demos with operating reality.",
  "Ignoring data, ownership, and orchestration.",
];

const realityPoints = [
  "LLMs act as reasoning layers.",
  "Agents are orchestration patterns, not magic.",
  "Systems connect data, tools, and interfaces.",
];

const mindsetPoints = [
  "AI is an enabler inside systems, not a capability you outsource.",
  "Leadership must know where AI sits; otherwise vendors set direction.",
  "Without system ownership, pilots fragment and leverage never compounds.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-24">
          {/* Hero */}
          <section>
            <motion.div {...fadeIn} className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-white via-slate-50 to-emerald-50/50 shadow-sm">
              <div className="absolute inset-0 opacity-70" aria-hidden />
              <div className="relative px-8 py-12 lg:px-12 lg:py-16 space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary border border-black/5 shadow-sm">
                  AI Operating Map
                </div>
                <div className="space-y-4 max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                    AI is not a product. It is the reasoning layer inside your system.
                  </h1>
                  <p className="text-lg text-secondary leading-relaxed">
                    Decades of AI led here. The 2022 jump was about compute and interfaces,
                    not new intent. LLMs collapsed the cost of turning intent into software,
                    fueling a surge of demos and pilots. This map keeps leaders anchored in
                    what actually matters: systems, ownership, and leverage.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/ai-mindset"
                    className="inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-sm transition hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                  >
                    Start with the AI Mindset
                  </Link>
                  <Link
                    href="/execution-checklist"
                    className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                  >
                    Go to the Execution Checklist
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {[
                    "System-first, not tool-first.",
                    "Ownership before orchestration.",
                    "Judgment before spend.",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3 text-sm text-secondary">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Why pilots fail */}
          <section>
            <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  Why AI pilots fail
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
                  Most pilots stall. The failure is rarely technical.
                </h2>
                <p className="text-base text-secondary leading-relaxed">
                  Pilots die when leaders treat AI as a product, not a system. Demos are
                  mistaken for operating reality. Data, ownership, and orchestration go
                  undefined. Without a system map, fragmentation spreads and reliability
                  never arrives. AI does not fail. Mental models fail.
                </p>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-black/5 bg-emerald-50/80 px-5 py-4 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    Reality check
                  </div>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    Over 95% of AI pilots fail to reach scale.
                  </p>
                  <p className="mt-1 text-sm text-secondary leading-relaxed">
                    Not because models are weak, but because systems, ownership, and
                    integration are missing.
                  </p>
                </div>
                {failurePoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm">
                    <p className="text-sm text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Market reality */}
          <section>
            <motion.div {...fadeIn} className="rounded-3xl border border-black/5 bg-gradient-to-r from-white to-slate-50 p-10 shadow-sm space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  Market reality
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
                  Modern AI is a reasoning layer plus orchestration over data, tools, and interfaces.
                </h2>
              </div>
              <p className="text-base text-secondary leading-relaxed max-w-4xl">
                Most AI products wrap the same architecture. Packaging shifts, leverage does
                not. LLMs reason, agents orchestrate, systems connect data, tools, and
                interfaces. If you do not understand the system, you cannot judge the
                product.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {realityPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm">
                    <p className="text-sm text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Mindset shift */}
          <section>
            <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  Mindset shift
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
                  AI lives inside systems. Leadership must place it deliberately.
                </h2>
                <p className="text-base text-secondary leading-relaxed">
                  AI is an enabler you own, not a capability you outsource. Without a clear
                  system view, vendors set direction, pilots fragment, and leverage never
                  compounds. This site is a map to build independent judgment so you place
                  AI where it creates durable operating leverage.
                </p>
              </div>
              <div className="space-y-3">
                {mindsetPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm">
                    <p className="text-sm text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* The map */}
          <section>
            <motion.div {...fadeIn} className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  The map
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
                  A concise path to build judgment before you execute.
                </h2>
              </div>
              <p className="text-base text-secondary leading-relaxed max-w-3xl">
                Move through the sections in order. Each one equips you to see past
                packaging and decide where AI belongs in your stack.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mapSections.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm"
                  >
                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                    <p className="mt-2 text-sm text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <section>
            <motion.div {...fadeIn} className="rounded-3xl border border-black/5 bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 p-10 shadow-sm space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
                Understanding comes before execution.
              </h2>
              <p className="text-base text-secondary leading-relaxed max-w-3xl">
                Acting without a system view creates fragility. Acting with one creates
                leverage. Use this map to decide how far to go before you commit teams and
                budgets.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/ai-mindset"
                  className="inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-sm transition hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                >
                  Start with the AI Mindset
                </Link>
                <Link
                  href="/execution-checklist"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                >
                  Go to the Execution Checklist
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}
