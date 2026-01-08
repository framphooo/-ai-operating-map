"use client";

import SectionReveal from "../learning/SectionReveal";
import Callout from "../learning/Callout";

export default function LLMsSection() {
  return (
    <section id="llms-section" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div id="llms" className="h-0" aria-hidden />
        {/* Header */}
        <SectionReveal>
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 leading-tight">
            Large Language Models: What Finally Worked
          </h2>
        </SectionReveal>

        {/* Main Content */}
        <div className="space-y-12 text-lg text-foreground leading-[1.8] font-light">
          {/* Visual Anchor */}
          <SectionReveal>
            <div className="bg-white/70 border border-black/5 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="uppercase text-xs tracking-[0.2em] text-secondary font-semibold">
                  LLM as a reasoning engine
                </div>
                <div className="flex items-center gap-3 flex-wrap text-sm md:text-base font-medium text-foreground">
                  <span className="px-3 py-2 rounded-xl bg-foreground/5 border border-black/5">
                    Input Text
                  </span>
                  <span className="text-secondary">→</span>
                  <span className="px-3 py-2 rounded-xl bg-foreground/5 border border-black/5">
                    Tokenization
                  </span>
                  <span className="text-secondary">→</span>
                  <span className="px-3 py-2 rounded-xl bg-foreground/5 border border-black/5">
                    Embeddings / Vectors
                  </span>
                  <span className="text-secondary">→</span>
                  <span className="px-3 py-2 rounded-xl bg-foreground/5 border border-black/5">
                    Probability Engine
                  </span>
                  <span className="text-secondary">→</span>
                  <span className="px-3 py-2 rounded-xl bg-foreground/5 border border-black/5">
                    Generated Output
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-secondary">
                LLMs optimize for plausibility, not truth.
              </p>
            </div>
          </SectionReveal>

          {/* Block 1: What an LLM Actually Is */}
          <SectionReveal delay={0.1}>
            <div className="bg-white/60 p-10 rounded-2xl border border-black/5 space-y-5">
              <div className="uppercase text-xs tracking-[0.2em] text-secondary font-semibold">
                What an LLM actually is
              </div>
              <div className="space-y-3">
                <p>
                  A Large Language Model is not a database and not a knowledge engine. It is a probabilistic sequence model trained to predict the next token given the context of prior tokens. It represents language as embeddings (vector representations) and samples from probability distributions to generate the most plausible continuation of a sequence.
                </p>
                <p className="text-secondary">
                  Meaning emerges from embeddings, probability distributions, and pattern generalization across massive text corpora. LLMs optimize for plausibility, not truth. They do not look things up; they generate what is statistically likely given the surrounding context.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 bg-foreground/5 p-5 space-y-2">
                <div className="uppercase text-[11px] tracking-[0.2em] text-secondary font-semibold">
                  Why transformers mattered
                </div>
                <p className="text-secondary leading-relaxed">
                  Transformers process entire context in parallel. Through attention, tokens “look at” each other, capturing long-range relationships in language. This architectural shift unlocked fluent, generalizable language modeling at scale.
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Block 2: Strengths */}
          <SectionReveal delay={0.2}>
            <div className="bg-white/70 p-10 rounded-2xl border border-black/5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  What LLMs Excel At
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
                  Strengths: Language &amp; Reasoning Tasks
                </span>
              </div>
              <ul className="space-y-3 text-lg text-secondary leading-relaxed">
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">•</span>
                  <span>Summarization and synthesis of text</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">•</span>
                  <span>Translation between languages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">•</span>
                  <span>Classification and categorization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">•</span>
                  <span>Semantic search and retrieval</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">•</span>
                  <span>Conversational interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">•</span>
                  <span>Code generation and explanation</span>
                </li>
              </ul>
            </div>
          </SectionReveal>

          {/* Why LLMs Finally Worked (Contrast) */}
          <SectionReveal delay={0.25}>
            <div className="bg-white/70 p-8 rounded-2xl border border-black/5 shadow-sm space-y-4">
              <div className="uppercase text-xs tracking-[0.2em] text-secondary font-semibold">
                Why LLMs finally worked
              </div>
              <p className="text-secondary leading-relaxed">
                Prior approaches were brittle or narrow: rule-based systems broke outside predefined scripts; classical ML models were accurate but task-specific. LLMs brought generalizable language reasoning—language became the interface, not hand-coded rules.
              </p>
            </div>
          </SectionReveal>

          {/* Role of LLMs inside systems */}
          <SectionReveal delay={0.28}>
            <div className="bg-white/70 p-10 rounded-2xl border border-black/5 shadow-sm space-y-5">
              <div className="uppercase text-xs tracking-[0.2em] text-secondary font-semibold">
                Where LLMs belong in a system
              </div>
              <p className="text-secondary leading-relaxed">
                LLMs are stateless reasoning components. They are invoked, not autonomous. Their job is to interpret inputs, synthesize context, propose actions or plans, and explain reasoning.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-black/5 bg-foreground/5 p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">
                    Responsible for
                  </div>
                  <ul className="space-y-2 text-secondary text-sm leading-relaxed">
                    <li>Interpreting natural-language inputs</li>
                    <li>Synthesizing context from provided data</li>
                    <li>Proposing actions, plans, or options</li>
                    <li>Explaining reasoning and tradeoffs</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-black/5 bg-white p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">
                    Never responsible for
                  </div>
                  <ul className="space-y-2 text-secondary text-sm leading-relaxed">
                    <li>Owning execution or triggering irreversible actions</li>
                    <li>Maintaining source-of-truth state</li>
                    <li>Enforcing business rules or controls</li>
                    <li>Holding accountability for outcomes</li>
                  </ul>
                </div>
              </div>
              <p className="text-secondary leading-relaxed">
                LLMs create value when embedded inside governed workflows. They support decision-making, but the system owns execution, state, and accountability. This boundary is structural, not a flaw.
              </p>
            </div>
          </SectionReveal>

          {/* Block 3: LLM Ceiling */}
          <SectionReveal delay={0.3}>
            <div className="border border-foreground/10 bg-white/70 rounded-2xl p-10 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-foreground/5 border border-black/5 flex items-center justify-center text-sm font-semibold text-secondary">
                  ↑
                </div>
                <div>
                  <div className="uppercase text-xs tracking-[0.2em] text-secondary font-semibold">
                    LLM Ceiling
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground">
                    Reasoning stops where execution begins
                  </h3>
                </div>
              </div>
              <p className="text-secondary leading-relaxed">
                LLMs reason, but they do not execute. They generate answers, explanations, and suggestions, yet they do not interact with enterprise systems, enforce constraints, or complete workflows.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-black/5 bg-foreground/5 p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">
                    What LLMs cannot own
                  </div>
                  <ul className="space-y-2 text-secondary text-sm leading-relaxed">
                    <li>Execute transactions</li>
                    <li>Enforce business rules</li>
                    <li>Maintain system state</li>
                    <li>Guarantee determinism</li>
                    <li>Own accountability</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-black/5 bg-white p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">
                    What enterprises run on
                  </div>
                  <ul className="space-y-2 text-secondary text-sm leading-relaxed">
                    <li>Processes and approvals</li>
                    <li>Systems and data flows</li>
                    <li>Auditability and controls</li>
                  </ul>
                </div>
              </div>
              <p className="text-secondary leading-relaxed">
                This is the <strong className="text-foreground">LLM ceiling</strong>: extraordinary demo value, limited operational leverage. Organizations run on governed execution, not on conversations alone.
              </p>
            </div>
          </SectionReveal>

          {/* Operational Reality Bridge */}
          <SectionReveal delay={0.4}>
            <Callout variant="warning" title="The Operational Reality">
              An LLM can explain how to process a purchase order, but it cannot execute that purchase order. It can suggest which supplier to use, but it cannot interact with your ERP system to place the order. It can answer questions about your company policies, but it cannot enforce approval workflows or maintain audit trails. Reasoning alone does not create operational value.
            </Callout>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}



