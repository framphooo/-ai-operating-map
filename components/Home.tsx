"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import SystemViewCard from "./ui/system-view-card";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const mapSections = [
  { title: "The Tech", desc: "Where the technology comes from." },
  { title: "Market Reality", desc: "Why hype dominates and pilots stall." },
  { title: "What Works", desc: "Patterns that scale beyond demos." },
  { title: "AI Mindset", desc: "How to see AI as a system you own." },
  { title: "Execution Checklist", desc: "How to act responsibly with clarity." },
];

const marketRealityReasons = [
  {
    id: "1",
    title: "Expectations",
    body:
      "Unrealistic assumptions about what AI can deliver without proper data foundations and integration.",
  },
  {
    id: "2",
    title: "Data",
    body:
      "Weak data foundations: messy, siloed, or incomplete data that cannot support reliable AI systems. 60-70% of AI use cases fail at the data layer.",
  },
  {
    id: "3",
    title: "Wrong mindset",
    body:
      "Horizontal thinking: building generic AI that tries to do everything instead of vertical, domain-specific solutions.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-28">
          {/* Hero */}
          <section>
            <motion.div
              initial={{ opacity: 1, y: 12 }}
              animate={fadeIn.animate}
              transition={fadeIn.transition}
              className="relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                aria-hidden
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.06) 1px, transparent 0), radial-gradient(circle at 19px 19px, rgba(15,23,42,0.04) 1px, transparent 0)",
                  backgroundSize: "36px 36px",
                  backgroundPosition: "0 0, 18px 18px",
                }}
              />
              <div className="relative px-8 py-12 lg:px-12 lg:py-16 space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary border border-black/5 shadow-sm">
                  AI Operating Map
                </div>
                <div className="space-y-6 max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                    AI is not a product. It is the reasoning layer inside your system.
                  </h1>
                  <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white/80 shadow-sm divide-y divide-emerald-100">
                    {[ 
                      "AI has slashed the cost of building software, so isolated demos are now trivial.",
                      "Working software isn’t a full system—prototypes skip failure modes, recovery, and ownership that production must handle.",
                      "This operating map adds the architectural discipline to turn scattered pilots into an enterprise system that compounds value.",
                    ].map((item, idx) => (
                      <div key={item} className="flex items-start gap-3 p-4 sm:p-5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700">
                          {`0${idx + 1}`}
                        </div>
                        <p className="text-base text-secondary leading-[1.7]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/ai-mindset"
                    className="inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-sm transition hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                  >
                    Start with the AI Mindset
                  </Link>
                  <Link
                    href="/execution-checklist"
                    className="text-sm font-semibold text-foreground/80 hover:text-foreground"
                  >
                    Or jump to the Execution Checklist →
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "System-first, not tool-first",
                    "Ownership before orchestration",
                    "Prevention before execution",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* The Tech summary */}
          <section>
            <motion.div
              {...fadeIn}
              className="rounded-3xl border border-black/5 bg-gradient-to-br from-white via-slate-50 to-emerald-50/40 p-10 shadow-sm"
            >
              <div className="flex h-full flex-col gap-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary border border-black/5 shadow-sm w-fit">
                  The Tech
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
                    The Tech: Evolution, Not Magic.
                  </h2>
                  <p className="text-base text-secondary leading-[1.7] max-w-3xl">
                    Modern AI is not a sudden invention. It is the result of parallel software
                    (Transformers) meeting massive parallel compute (GPUs) and semantic memory (Vector
                    Databases).
                  </p>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/origins"
                    className="inline-flex w-fit items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-sm transition hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                  >
                    The Tech →
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Market reality */}
          <section>
            <motion.div
              {...fadeIn}
              className="rounded-3xl border border-black/5 bg-gradient-to-br from-white via-emerald-50/40 to-white p-10 shadow-sm space-y-8 text-left"
            >
              <div className="flex h-full flex-col gap-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary border border-black/5 shadow-sm w-fit">
                  Market Reality
                </div>
                <div className="space-y-2 max-w-4xl">
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
                    95% of GenAI pilots fail to scale.
                  </h2>
                  <p className="text-base text-secondary leading-[1.7]">
                    The gap between &quot;demo&quot; and &quot;production&quot; is structural, not technical.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                  {marketRealityReasons.map((reason) => (
                    <div
                      key={reason.title}
                      className="flex flex-col items-start gap-3 px-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 border border-emerald-200 text-xs font-medium text-emerald-800">
                        {reason.id}
                      </div>
                      <p className="text-base font-semibold text-foreground">{reason.title}</p>
                      <p className="text-sm text-secondary leading-[1.7]">{reason.body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    href="/market-reality"
                    className="inline-flex w-fit items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-sm transition hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                  >
                    Market Reality →
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>

          {/* What Works summary */}
          <section>
            <motion.div
              {...fadeIn}
              className="rounded-3xl border border-black/5 bg-gradient-to-br from-white to-emerald-50/40 p-10 shadow-sm space-y-6"
            >
              <div className="flex h-full flex-col gap-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary border border-black/5 shadow-sm w-fit">
                  What Works
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
                    LLMs are AI. The system around them makes them compound.
                  </h2>
                  <p className="text-base text-secondary leading-[1.7] max-w-4xl">
                    LLMs are the reasoning layer—our job is to wire them into our knowledge, tools,
                    and flows so they execute real work. Connect them to your data, APIs, and schemas
                    to get enterprise-grade outcomes instead of isolated demos.
                  </p>
                </div>
                <div className="relative rounded-2xl border border-black/5 bg-white shadow-md overflow-hidden">
                  <div className="relative w-full">
                    <Image
                      src="/what-works/evolution-arc.png"
                      alt="AI evolution arc"
                      width={1212}
                      height={615}
                      sizes="(max-width: 768px) 100vw, (max-width: 1440px) 80vw, 1400px"
                      quality={95}
                      priority
                      className="w-full h-auto object-contain"
                      style={{ objectPosition: "65% center" }}
                    />
                  </div>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/what-works"
                    className="inline-flex w-fit items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-sm transition hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                  >
                    What Works →
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>

          {/* AI Mindset / System View */}
          <section>
            <motion.div
              {...fadeIn}
              className="rounded-3xl border border-black/5 bg-gradient-to-br from-white via-emerald-50/40 to-white p-10 shadow-sm space-y-6"
            >
              <div className="flex h-full flex-col gap-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary border border-black/5 shadow-sm w-fit">
                  AI Mindset
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
                    AI Must Be Viewed As a System.
                  </h2>
                  <p className="text-base text-secondary leading-[1.7] max-w-4xl">
                    AI should sit cleanly inside your operating system. Any AI tool should be able to
                    drop into this model so you can govern it, connect it to real data and APIs, and
                    compound gains instead of running isolated pilots.
                  </p>
                </div>
                <SystemViewCard
                  layoutId="home-system-view"
                  variant="expanded"
                  showDetailPanel={true}
                  showCaption={true}
                  showSubtitles={true}
                />
                <div className="mt-auto">
                  <Link
                    href="/ai-mindset"
                    className="inline-flex w-fit items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-sm transition hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                  >
                    AI Mindset →
                  </Link>
                </div>
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <section>
            <motion.div {...fadeIn} className="rounded-3xl border border-black/5 bg-white p-10 shadow-sm space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
                Understanding comes before execution.
              </h2>
              <p className="text-base text-secondary leading-[1.7] max-w-3xl">
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
