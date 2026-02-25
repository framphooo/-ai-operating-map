"use client";

import SectionReveal from "../learning/SectionReveal";

const ACCENT = "#1bc4a6"; // Oracle green
const NEUTRAL = "#d1d5db"; // soft gray for horizontal pillars

export default function HorizontalThinking() {
  return (
    <section id="root-cause-2" className="py-32 px-6 lg:px-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
              Horizontal vs Vertical AI
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              Why today&apos;s shallow, generic copilots under-deliver—and how a
              vertically integrated AI orchestrator closes the gap.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <SectionReveal delay={0.1}>
            <div className="h-full rounded-3xl border border-foreground/5 bg-white p-8 shadow-sm flex flex-col gap-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-foreground/60">
                  Today - Horizontal Focus
                </p>
                <div
                  className="h-11 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                  style={{ backgroundColor: ACCENT }}
                >
                  Copilots - Digital Assistants
                </div>
              </div>

              <div className="flex items-center justify-center gap-8">
                <div
                  className="text-sm text-foreground/70 leading-tight"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  Shallow, generic use
                </div>
                <div className="flex items-end gap-5">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-32 rounded-xl border border-foreground/10 bg-white shadow-sm flex items-end justify-center pb-3"
                      style={{ backgroundColor: NEUTRAL }}
                    >
                      <span className="text-[11px] uppercase tracking-wide text-foreground/70 font-semibold">
                        Function
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 text-base leading-relaxed text-foreground/80">
                <li>Focused on surface-level tasks and productivity aids.</li>
                <li>Minimal integration with core processes or KPIs.</li>
                <li>Easy to deploy, but hard to measure ROI.</li>
              </ul>

              <div className="text-sm text-foreground/60">
                Source: Oracle{" "}
                <a
                  href="#"
                  className="text-primary underline underline-offset-4 font-medium"
                >
                  Link
                </a>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="h-full rounded-3xl border border-foreground/5 bg-white p-8 shadow-sm flex flex-col gap-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-foreground/60">
                  Tomorrow - Vertical Focus
                </p>
                <div
                  className="h-11 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                  style={{ backgroundColor: ACCENT }}
                >
                  AI Orchestrator
                </div>
              </div>

              <div className="flex items-center justify-center gap-8">
                <div
                  className="text-sm text-foreground/70 leading-tight"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  Deep, function specific integration
                </div>
                <div className="flex items-end gap-5">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-32 rounded-xl border border-foreground/10 shadow-sm flex items-end justify-center pb-3"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <span className="text-[11px] uppercase tracking-wide text-white font-semibold">
                        Function
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 text-base leading-relaxed text-foreground/80">
                <li>Embedded directly into workflows (e.g., supply chain, DP).</li>
                <li>Connected to P&amp;L and operational data.</li>
                <li>
                  Drives measurable efficiency, cost, and decision-making impact.
                </li>
              </ul>

              <div className="text-sm text-foreground/60">
                Source: Oracle{" "}
                <a
                  href="#"
                  className="text-primary underline underline-offset-4 font-medium"
                >
                  Link
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
