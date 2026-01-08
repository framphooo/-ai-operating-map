"use client";

import SectionReveal from "../learning/SectionReveal";

export default function MaturityTimeline() {
  const stages = [
    { period: "2020-2023", name: "LLMs" },
    { period: "2024-2025", name: "Agentic AI" },
    { period: "Emerging", name: "LQMs" },
    { period: "Future", name: "Physical AI" },
  ];

  const detailedStages = [
    {
      period: "2020-2023",
      name: "LLMs",
      whatChanged:
        "GPT-3 and early LLMs proved machines could understand and generate human-like text, changing how people interact with software.",
      doThis:
        "Pilot LLMs for summarization, documentation and code. Build data foundations and governance. Train teams on prompts and evaluation.",
      dontChase:
        "Don’t build your own LLM or rip out systems too soon. Don’t ignore data quality—it becomes the bottleneck.",
    },
    {
      period: "2024-2025",
      name: "Agentic AI",
      whatChanged:
        "Copilots and early agents showed AI can operate inside workflows with memory and tools. Vector databases made company knowledge usable.",
      doThis:
        "Deploy copilots for developers and knowledge workers. Stand up vector search on your docs. Pilot vertical agents with guardrails and governance.",
      dontChase:
        "Don’t launch one assistant to do everything. Don’t skip monitoring and human-in-the-loop. Don’t rely only on fine-tuning without retrieval.",
    },
    {
      period: "Emerging",
      name: "LQMs",
      whatChanged:
        "Lightweight/quantized models now deliver strong quality while running locally or on modest hardware, shifting costs, latency, and privacy expectations.",
      doThis:
        "Use smaller models for latency-sensitive or private flows with LLM fallbacks. Build eval harnesses to choose the right model per task. Optimize infra for mixed small+large model stacks.",
      dontChase:
        "Don’t assume the tiniest model is always cheaper or better. Don’t retrain from scratch without a clear need. Don’t skip safety and licensing checks for local models.",
    },
    {
      period: "Future",
      name: "Physical AI",
      whatChanged:
        "AI moves into the physical world—robots, autonomous systems, and IoT—operating with constrained autonomy and tight links to digital agents.",
      doThis:
        "Plan AI as infrastructure across digital and physical operations. Run controlled pilots with human override. Invest in safety, observability, and regulatory readiness.",
      dontChase:
        "Don’t chase full autonomy everywhere. Don’t ignore the physical layer if you run logistics, manufacturing, or operations. Don’t build AI in isolation from existing systems.",
    },
  ];

  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-16 text-center leading-tight">
            AI Maturity Timeline
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative mb-16">
            <div className="absolute top-16 left-0 right-0 h-1 bg-accent" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
              {stages.map((stage) => (
                <div key={stage.name} className="relative text-center">
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-accent rounded-full border-4 border-background" />
                  </div>

                  <div className="mt-20">
                    <div className="text-sm text-secondary mb-2">{stage.period}</div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                      {stage.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="text-xl text-foreground text-center max-w-2xl mx-auto">
            Market evolution from language to reasoning to physical
          </p>
          <p className="text-sm text-secondary/70 text-center mt-4">Source: EY, Sandbox, Ocado</p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {detailedStages.map((stage) => (
              <div
                key={stage.name}
                className="bg-muted/40 border border-black/5 rounded-2xl p-6 flex flex-col gap-4 h-full"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-secondary font-semibold">
                    {stage.period}
                  </div>
                  <div className="text-2xl font-heading font-semibold text-foreground">{stage.name}</div>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-secondary">
                  <div>
                    <div className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                      What changed
                    </div>
                    <p>{stage.whatChanged}</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Do this</div>
                    <p>{stage.doThis}</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                      Don&apos;t chase
                    </div>
                    <p>{stage.dontChase}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

