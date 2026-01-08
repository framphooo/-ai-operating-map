"use client";

export default function VerticalAIWindow() {
  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Vertical AI
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Vertical AI systems are purpose-built for specific domains, workflows, and use cases. Unlike generic copilots, they understand the full context of a domain and integrate deeply with existing tools and processes.
          </p>
        </div>

        {/* Definition */}
        <section className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-black/5">
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
            What is Vertical AI?
          </h2>
          <p className="text-secondary leading-relaxed">
            Vertical AI is AI that&apos;s built specifically for one industry or function. It combines domain knowledge, specialized workflows, and AI capabilities into a cohesive system. Instead of trying to be a general assistant, it solves specific problems in operations, supply chain, customer support, or other domains.
          </p>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
            3 Examples
          </h2>
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-black/5">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Operations Dashboard AI
              </h3>
              <p className="text-secondary leading-relaxed mb-3">
                An AI system that understands manufacturing KPIs, production schedules, quality metrics, and supply chain dependencies. It doesn&apos;t just answer questions—it proactively alerts operators to anomalies, suggests optimization actions, and integrates with ERP systems to execute changes.
              </p>
              <p className="text-sm text-secondary italic">
                Key difference: It knows manufacturing workflows, not just general knowledge.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-black/5">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Supply Chain Optimization Agent
              </h3>
              <p className="text-secondary leading-relaxed mb-3">
                An AI agent that monitors inventory levels, predicts demand using company-specific patterns, adjusts purchase orders automatically within defined rules, and coordinates with suppliers through APIs. It understands lead times, minimum order quantities, and business rules specific to supply chain operations.
              </p>
              <p className="text-sm text-secondary italic">
                Key difference: It executes actions within supply chain systems, not just provides advice.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-black/5">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Customer Support Vertical System
              </h3>
              <p className="text-secondary leading-relaxed mb-3">
                An AI system that has access to product documentation, historical tickets, customer purchase history, and warranty information. It can diagnose issues, suggest solutions, process returns, and escalate to human agents when needed—all within the existing support ticket system.
              </p>
              <p className="text-sm text-secondary italic">
                Key difference: It knows your products, policies, and processes, not just general customer service.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
            Copilot vs Vertical System
          </h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg border border-black/5 overflow-hidden">
            <table className="w-full">
              <thead className="bg-black/5">
                <tr>
                  <th className="text-left p-4 font-semibold text-foreground">Aspect</th>
                  <th className="text-left p-4 font-semibold text-foreground">Generic Copilot</th>
                  <th className="text-left p-4 font-semibold text-foreground">Vertical AI System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  {
                    aspect: "Knowledge",
                    copilot: "General knowledge, public internet",
                    vertical: "Domain-specific, company-specific data",
                  },
                  {
                    aspect: "Workflow Integration",
                    copilot: "Standalone, new interface",
                    vertical: "Embedded in existing tools and workflows",
                  },
                  {
                    aspect: "Actions",
                    copilot: "Provides suggestions",
                    vertical: "Executes actions within defined boundaries",
                  },
                  {
                    aspect: "Context Understanding",
                    copilot: "Generic prompts",
                    vertical: "Deep understanding of domain processes",
                  },
                  {
                    aspect: "Adoption",
                    copilot: "Low—requires learning new tool",
                    vertical: "High—fits existing workflows",
                  },
                  {
                    aspect: "Impact",
                    copilot: "Marginal—nice to have",
                    vertical: "Transformational—changes operations",
                  },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-black/2">
                    <td className="p-4 font-medium text-foreground">{row.aspect}</td>
                    <td className="p-4 text-secondary">{row.copilot}</td>
                    <td className="p-4 text-secondary">{row.vertical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Takeaway */}
        <section className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
          <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
            The Bottom Line
          </h2>
          <p className="text-secondary leading-relaxed font-medium">
            Vertical AI wins because it solves real problems in specific domains. It doesn&apos;t try to be everything to everyone—it does one thing exceptionally well. For executives, this means clearer ROI, higher adoption, and actual operational impact.
          </p>
        </section>
      </div>
    </div>
  );
}

