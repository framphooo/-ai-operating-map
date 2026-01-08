"use client";

import Navigation from "../Navigation";
import SectionReveal from "../learning/SectionReveal";
import VideoBackground from "../learning/VideoBackground";
import CPUvsGPU from "../learning/CPUvsGPU";
import Embedding3D from "../learning/Embedding3D";
import { Embeddings3DVisualization } from "../ui/embeddings-3d-visualization";
import SQLvsVector from "../learning/SQLvsVector";
import SystemDiagram from "../learning/SystemDiagram";
import Callout from "../learning/Callout";
import AIOriginsHero from "../ai-origins/ai-origins-hero";
import HistoricalArc from "../ai-origins/historical-arc";

export default function OriginsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Section 1: Opening — Framing the Shift (Hero Section) */}
        <AIOriginsHero />

        {/* Section 2: What We Mean by "Artificial Intelligence" */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <div className="bg-white/60 p-10 rounded-2xl border border-black/5">
                <h2 className="text-3xl font-heading font-semibold text-foreground mb-6">
                  What We Mean by &quot;Artificial Intelligence&quot;
                </h2>
                <p className="text-lg text-secondary leading-relaxed">
                  Throughout this experience, we use &quot;AI&quot; to describe systems that learn behavior from data rather than execute fixed rules. This definition matters because &quot;AI&quot; has meant different things across decades. When we discuss &quot;AI&quot; in the 1950s, we are referring to rule-based systems. When we discuss &quot;AI&quot; today, we are referring to systems trained on data. The shift from rules to training is the story this section tells.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Section 2.5: Conceptual Grounding - What Computers Do */}
        <section className="py-24 px-6 lg:px-8 bg-white/30">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <div className="bg-white/60 p-10 rounded-2xl border border-black/5">
                <h2 className="text-3xl font-heading font-semibold text-foreground mb-6">
                  What Computers Fundamentally Do
                </h2>
                <p className="text-lg text-secondary leading-relaxed mb-4">
                  Before diving into AI history, it helps to understand what computers fundamentally do. At their core, computers process numbers. They perform calculations—addition, multiplication, comparisons—at extraordinary speed and scale. A modern computer can perform billions of calculations per second. This computational capacity is what makes everything possible: from simple arithmetic to complex simulations, from storing data to processing images, from running applications to training AI models.
                </p>
                <p className="text-lg text-secondary leading-relaxed">
                  The key insight is scale. What humans can do slowly and laboriously, computers can do millions of times faster. This scale difference is not just about speed—it enables entirely new capabilities. When you can perform billions of calculations, you can detect patterns in data that would be invisible to human analysis. You can process information in ways that would be impossible manually. This computational foundation—numbers, speed, and scale—is what makes modern AI possible. Without it, even the best algorithms would be impractical.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Section 3: Historical Arc — Horizontal Scroll Timeline */}
        <section className="relative py-32 px-6 lg:px-8 bg-white/40">
          <div className="max-w-7xl mx-auto">
            <HistoricalArc />
          </div>
        </section>

        {/* Section 4: 2012 — Hardware Changes Everything */}
        <section className="py-32 px-6 lg:px-8 bg-white/30">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 leading-tight">
                Hardware Changes Everything
              </h2>
            </SectionReveal>

            <div className="space-y-8 text-lg md:text-xl text-foreground leading-[1.8] font-light mb-12">
              <SectionReveal>
                <p>
                  CPUs work sequentially, processing one instruction after another. GPUs work in parallel, executing thousands of operations simultaneously. Learning in neural networks requires millions or billions of simultaneous calculations—each connection between neurons needs to be adjusted based on how well the network performed. A CPU might handle a few dozen of these calculations at once. A GPU can handle thousands. This is not a footnote; this is the enabling condition of modern AI. Without parallel computation, training a neural network on millions of examples would take years instead of days. This hardware shift is why AI progress accelerated dramatically after 2012, and why executives who believe AI progress is &quot;just better algorithms&quot; misunderstand the foundation.
                </p>
              </SectionReveal>
            </div>

            <CPUvsGPU />
          </div>
        </section>

        {/* Section 5: The Modern Era — Transformers, Probability, and Language */}
        <VideoBackground fallbackType="relationships">
          <section className="py-32 px-6 lg:px-8 relative min-h-screen">
            <div className="relative z-10 max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 leading-tight">
                  The Modern Era: Transformers and Language
                </h2>
              </SectionReveal>

              <div className="space-y-8 text-lg md:text-xl text-foreground leading-[1.8] font-light">
                <SectionReveal>
                  <p>
                    The introduction of transformer architectures allowed models to understand relationships across entire contexts at once, rather than processing information linearly. This is what enables language understanding, code generation, reasoning chains, and synthesis. When you ask a language model a question, it doesn&apos;t read your words one at a time and forget the beginning by the time it reaches the end. It processes the entire context simultaneously, understanding how each word relates to every other word in the prompt.
                  </p>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                  <p>
                    This architectural shift, combined with training on massive text corpora, produced large language models. These systems do not retrieve answers from a database of facts; they generate outputs probabilistically based on learned patterns. When you ask &quot;What is the capital of France?&quot;, the model doesn&apos;t look up a fact table. It generates the most likely sequence of words given the patterns it learned from training data. This distinction is critical, because it explains both the power of these systems and their fundamental limitation: they optimize for plausibility, not truth.
                  </p>
                </SectionReveal>
              </div>
            </div>
          </section>
        </VideoBackground>

        {/* Section 6: What Large Language Models Actually Are */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <SectionReveal>
                  <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 leading-tight">
                    What Large Language Models Actually Are
                  </h2>
                </SectionReveal>

                <div className="space-y-8 text-lg text-foreground leading-[1.8] font-light">
                  <SectionReveal>
                    <p>
                      Large language models should be understood as extremely advanced prediction engines, not thinking entities and not truth machines. They are probabilistic systems that generate the most likely next token—a word or piece of a word—based on the context they&apos;ve seen. This is why they can write coherent paragraphs, translate languages, and write code: they&apos;ve learned the statistical patterns of how language is structured and used.
                    </p>
                  </SectionReveal>

                  <SectionReveal delay={0.2}>
                    <p>
                      As you read about &quot;next-token prediction&quot;, the visualization shows probability paths forming between points in the embedding space. This visually reinforces that outputs are chosen based on likelihood, not truth. The system doesn&apos;t &quot;know&quot; that Paris is the capital of France; it has learned that in contexts similar to &quot;What is the capital of&quot;, the word &quot;Paris&quot; frequently follows &quot;France&quot;. This is pattern matching at an extraordinary scale, not knowledge retrieval.
                    </p>
                  </SectionReveal>
                </div>
              </div>

              {/* 3D Embedding Visualization - Concrete Phase */}
              <div>
                <Embedding3D phase="concrete" />
              </div>
            </div>

            <SectionReveal delay={0.3}>
              <div className="mt-16 max-w-4xl">
                <Callout variant="warning" title="The Hallucination Problem">
                  Because these models generate language rather than retrieve facts, they can produce outputs that sound confident but are incorrect. This is not a bug; it is a design characteristic. The model optimizes for plausibility, not correctness. Without grounding in real data or constraints, it will generate text that follows the patterns it learned, even if those patterns lead to false statements. Understanding this is critical for executive risk framing: these systems are powerful reasoning tools, but they are not authoritative sources of truth. They require validation, grounding, and architectural constraints to be reliable in operational contexts.
                </Callout>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Section 7: Embeddings — The Bridge */}
        <section className="py-32 px-6 lg:px-8 bg-white/30">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 leading-tight">
                Embeddings: The Bridge Between Language and Computation
              </h2>
            </SectionReveal>

            <div className="space-y-8 text-lg md:text-xl text-foreground leading-[1.8] font-light mb-12">
              <SectionReveal>
                <p>
                  Embeddings are the translation mechanism between human language and machine computation. They convert words, sentences, and documents into numerical vectors—arrays of numbers—that capture semantic meaning. Words that are conceptually similar are placed closer together in this mathematical space. &quot;Car&quot; and &quot;automobile&quot; would be near each other; &quot;car&quot; and &quot;philosophy&quot; would be far apart. This allows machines to reason about meaning, not keywords.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <p>
                  This is why modern AI feels &quot;intelligent&quot; compared to earlier systems. A traditional search engine matches keywords. If you search for &quot;automotive vehicle,&quot; it might not find documents that only say &quot;car,&quot; even though they mean the same thing. An embedding-based system understands the semantic similarity and retrieves relevant content regardless of exact word matching. This operational difference is why embeddings matter: they enable systems to work with human language as humans use it—messy, varied, and context-dependent.
                </p>
              </SectionReveal>
            </div>

            {/* 3D Embedding Visualization - Interactive Similarity Search */}
            <Embeddings3DVisualization
              mainColor="#4D9DFB"
              secondaryColor="#00FDCF"
            />
          </div>
        </section>

        {/* Section 8: Vector Databases — Memory, Not Magic */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 leading-tight">
                Vector Databases: The Memory Layer
              </h2>
            </SectionReveal>

            <div className="space-y-8 text-lg md:text-xl text-foreground leading-[1.8] font-light mb-12">
              <SectionReveal>
                <p>
                  Vector databases must be understood as the memory layer of modern AI systems, not as a technical novelty. They store embeddings rather than rows and columns, and they enable retrieval based on semantic similarity rather than exact matches. When an AI system needs to answer a question about your company&apos;s policies, it doesn&apos;t search for keywords in a traditional database. It converts the question into an embedding, finds the most semantically similar content in the vector database, and uses that context to generate an answer.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="bg-accent/10 border-l-4 border-accent p-8 rounded-r-lg my-12">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                    Why This Matters for Enterprise
                  </h3>
                  <p className="text-lg text-secondary leading-relaxed">
                    Vector databases are what make AI usable inside companies without hallucinating or leaking trust. They enable grounding AI systems in real, authoritative data—your company&apos;s documents, your customer data, your proprietary knowledge. Without this grounding layer, AI systems rely solely on their training data, which is generic, potentially outdated, and not specific to your business. With vector databases, you can build AI systems that reason over your actual data, answer questions about your actual products, and operate within your actual constraints. This connection is not about technical elegance; it is about business risk. Ungrounded AI systems will hallucinate, leak information, and make decisions based on patterns that don&apos;t reflect your reality. Grounded systems, properly architected, can be reliable, secure, and operationally useful.
                  </p>
                </div>
              </SectionReveal>
            </div>

            <SQLvsVector />
          </div>
        </section>

        {/* Section 9: Synthesis — Locking the Mental Model */}
        <section className="py-40 px-6 lg:px-8 bg-gradient-to-b from-purple-50/30 to-transparent">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-12 leading-tight text-center">
                The Synthesis
              </h2>
            </SectionReveal>

            <SystemDiagram />

            <div className="space-y-6 text-lg text-foreground leading-[1.8] font-light mt-16">
              <SectionReveal>
                <p>
                  Modern AI is best understood as &quot;software that writes software,&quot; enabled by parallel computation, trained on massive data, probabilistic by nature, and only reliable when properly grounded and architected. The shift from programming rules to training behavior is not incremental—it is structural. It changes what software is, how it scales, and how it fails.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <p>
                  The systems we have today are powerful reasoning engines that can understand context, generate language, and synthesize information. But they are not truth machines, they are not thinking entities, and they are not ready for deployment without careful architecture. They require grounding in real data, validation of outputs, and clear constraints on their behavior.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <p>
                  The next evolution is not better chatbots. It is systems that can act, orchestrate, and interact with other systems autonomously. But that evolution depends on understanding the foundation: what AI actually is, how it works, and why it works now in ways it never could before. That foundation is what makes everything else possible—or impossible—depending on whether it is built correctly.
                </p>
              </SectionReveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
