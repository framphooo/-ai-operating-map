"use client";

export default function WhyPilotsFailWindow() {
  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Why Pilots Fail
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Most AI initiatives fail not because the technology is wrong, but because they skip fundamentals and chase the wrong approach.
          </p>
        </div>

        {/* Two Root Causes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Weak Data Foundations
            </h2>
            <p className="text-secondary leading-relaxed">
              Companies rush to build AI on top of messy, siloed, or incomplete data. They skip data cleaning, governance, and structure. The result: AI systems that hallucinate, make bad decisions, or require constant manual correction.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
              Horizontal Thinking
            </h2>
            <p className="text-secondary leading-relaxed">
              Companies build generic &apos;AI assistants&apos; that try to do everything. They ignore domain-specific workflows, existing tools, and operational reality. The result: AI that doesn&apos;t fit how people actually work, leading to low adoption and minimal impact.
            </p>
          </div>
        </div>

        {/* Common Failure Patterns */}
        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
            5 Common Failure Patterns
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Starting with the model, not the data",
                description: "Teams spend months fine-tuning models on incomplete or dirty data. By the time they realize the data is the problem, budgets are exhausted.",
              },
              {
                title: "Building generic copilots instead of vertical solutions",
                description: "A 'universal AI assistant' sounds impressive but solves no specific problem well. Users abandon it because it's not better than existing tools for their actual work.",
              },
              {
                title: "Ignoring existing workflows and tools",
                description: "AI is built as a separate system requiring users to learn new interfaces. Adoption stays low because it doesn't integrate with how people already work.",
              },
              {
                title: "Skipping validation and governance",
                description: "AI systems are deployed without proper testing, monitoring, or guardrails. When they make mistakes (and they will), there's no recovery process and trust is destroyed.",
              },
              {
                title: "Underestimating integration complexity",
                description: "The AI demo works in isolation, but fails when integrated with real systems, APIs, and data sources. Integration takes 3x longer than the AI development itself.",
              },
            ].map((pattern, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-black/5">
                <h3 className="font-semibold text-foreground mb-2">{pattern.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{pattern.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What to Do Instead */}
        <section className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
            What to Do Instead
          </h2>
          <ul className="space-y-3">
            {[
              "Start with data: Clean, structure, and document your core operational data before building any AI. This is unglamorous but non-negotiable.",
              "Build vertical, not horizontal: Focus on one domain (supply chain, customer support, operations) and build a solution that deeply understands that domain's workflows.",
              "Integrate with existing tools: Don't build new interfaces. Embed AI into Slack, Teams, dashboards, and existing software people already use.",
              "Start small and constrained: Build agents and systems with clear boundaries, human oversight, and gradual autonomy. Prove value before expanding.",
              "Measure what matters: Track adoption (are people using it?), accuracy (does it work?), and impact (does it change outcomes?). Vanity metrics like 'AI queries processed' mean nothing.",
              "Plan for governance from day one: Build in audit trails, error handling, bias testing, and human review processes. Don't retrofit after deployment.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-secondary leading-relaxed">
                <span className="text-green-600 font-bold mt-1">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

