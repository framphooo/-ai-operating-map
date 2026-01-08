export interface TimelineNode {
  period: string;
  title: string;
  whatChanged: string;
  whatCompaniesShouldDo: string;
  whatNotToChase: string;
}

export const MATURITY_TIMELINE: TimelineNode[] = [
  {
    period: "2020-2022",
    title: "Foundation: Large Language Models",
    whatChanged: "GPT-3 and early LLMs demonstrated that AI could understand and generate human-like text at scale. This changed the interface between humans and machines—no more rigid forms or commands.",
    whatCompaniesShouldDo: "Start experimenting with LLMs for internal use cases: documentation, summarization, code generation. Build data foundations and governance frameworks. Train teams on prompt engineering basics.",
    whatNotToChase: "Don't try to build your own LLM. Don't replace existing systems prematurely. Don't ignore data quality—it becomes critical now.",
  },
  {
    period: "2023-2024",
    title: "Copilots and Early Agents",
    whatChanged: "Copilots (GitHub Copilot, Microsoft Copilot) showed AI could assist in real workflows. Early agents demonstrated autonomous task execution. Vector databases made company-specific knowledge accessible to LLMs.",
    whatCompaniesShouldDo: "Deploy copilots for developer productivity and knowledge workers. Build vector databases with company documentation and knowledge bases. Start vertical AI pilots in one domain. Establish AI governance and risk frameworks.",
    whatNotToChase: "Don't build generic 'AI assistants' that try to do everything. Don't skip vector databases and rely only on model fine-tuning. Don't automate everything—start with high-value, low-risk tasks.",
  },
  {
    period: "2025-2026",
    title: "Vertical Systems and Production Agents",
    whatChanged: "Vertical AI systems built for specific industries and functions become the norm. Agents operate autonomously in production environments with proper guardrails. Multi-agent systems coordinate complex workflows.",
    whatCompaniesShouldDo: "Scale successful vertical AI pilots to full production. Deploy agents for routine operations with human oversight. Build multi-agent orchestration for complex processes. Measure real operational impact, not just AI metrics.",
    whatNotToChase: "Don't over-automate—some decisions need human judgment. Don't skip monitoring and observability. Don't chase the latest model releases—focus on system reliability and integration.",
  },
  {
    period: "Next",
    title: "Constrained Autonomy and Physical AI",
    whatChanged: "AI systems operate with increasing autonomy within well-defined constraints. Physical AI (robots, autonomous vehicles, IoT) integrates with digital AI. AI becomes infrastructure—invisible, reliable, and essential.",
    whatCompaniesShouldDo: "Plan for AI as core infrastructure, not a separate initiative. Build AI-native processes and products. Invest in AI safety, explainability, and governance. Prepare for regulatory requirements.",
    whatNotToChase: "Don't chase full autonomy—constrained autonomy is more valuable. Don't ignore the physical layer if you're in manufacturing, logistics, or operations. Don't build AI in isolation—it must integrate with everything.",
  },
];

