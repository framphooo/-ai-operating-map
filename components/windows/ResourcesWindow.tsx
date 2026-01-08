"use client";

export default function ResourcesWindow() {
  const categories = [
    {
      title: "Big Enterprise Reports",
      items: [
        "BCG: The State of AI in 2024 (placeholder)",
        "EY: AI Transformation Roadmap (placeholder)",
        "McKinsey: The Economic Potential of Generative AI (placeholder)",
      ],
    },
    {
      title: "Data and Governance",
      items: [
        "Data Contracts: Building Trust in Data (placeholder)",
        "AI Governance Framework: Practical Guide (placeholder)",
        "Vector Database Best Practices (placeholder)",
      ],
    },
    {
      title: "Agentic Systems",
      items: [
        "Building Production-Ready Agents (placeholder)",
        "Multi-Agent Orchestration Patterns (placeholder)",
        "Safety and Guardrails for Autonomous Systems (placeholder)",
      ],
    },
    {
      title: "UX for Decision Making",
      items: [
        "Designing AI Interfaces for Executives (placeholder)",
        "Embedding AI in Existing Workflows (placeholder)",
        "Building Trust Through Transparency (placeholder)",
      ],
    },
  ];

  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Resources
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Curated resources on AI systems, data, governance, and practical implementation. This list focuses on resources that hold up in practice.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
          <p className="text-sm text-secondary leading-relaxed">
            <strong className="text-foreground">Note:</strong> This list will evolve. Only include what holds up in practice.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category, index) => (
            <section key={index}>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-black/5 hover:bg-white/80 transition-colors"
                  >
                    <span className="text-accent mt-1">•</span>
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* TODO Comment for future Supabase integration */}
        {/* 
          TODO: Future Supabase integration
          - Store resources in Supabase database
          - Add filtering and search
          - Track resource usage/views
          - Allow users to bookmark resources
          - Add categories and tags
        */}
      </div>
    </div>
  );
}




