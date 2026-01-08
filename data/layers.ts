import { WindowId } from "@/types/window";

export interface Layer {
  id: string;
  name: string;
  description: string;
  whatItIs: string;
  whyItMatters: string;
  whatFails: string;
  enterpriseExample: string;
  practicalBuild: string;
  mentalModel: string;
}

export const AI_LAYERS: Layer[] = [
  {
    id: "data",
    name: "Data",
    description: "The foundation layer",
    whatItIs: "Structured, clean, and accessible data sources that fuel AI systems. This includes transactional databases, historical records, and real-time streams.",
    whyItMatters: "Executives need to understand that AI quality is directly tied to data quality. Without clean, well-structured data, everything downstream fails. This is the most common failure point in AI initiatives.",
    whatFails: "Companies that skip proper data governance end up with AI systems that hallucinate, make bad decisions, or require constant manual correction. Data silos and poor documentation lead to months of cleanup before any AI can be useful.",
    enterpriseExample: "A Fortune 500 retailer tried to build a demand forecasting AI on top of 15 years of messy inventory data. After 6 months, they realized their data had inconsistent naming conventions, missing timestamps, and duplicate entries. The project was scrapped and restarted with a data-first approach.",
    practicalBuild: "Start with your core operational systems: ERP data (SAP, Oracle), CRM data (Salesforce), and transaction logs. Use tools like Snowflake or Postgres for structured storage. Build data contracts early: define schemas, validation rules, and update cadences. This is unglamorous but non-negotiable.",
    mentalModel: "Think of data as the fuel. High-quality fuel makes the engine run smoothly. Low-quality fuel causes breakdowns no matter how good the engine is."
  },
  {
    id: "vector",
    name: "Vector",
    description: "Semantic search and retrieval",
    whatItIs: "Vector embeddings convert text, images, or other unstructured data into numerical representations that capture meaning. Vector databases store and search these embeddings to find semantically similar content.",
    whyItMatters: "This is how AI systems 'remember' context and find relevant information. Without vectors, LLMs can't access company-specific knowledge or historical context. It's the bridge between your data and the model.",
    whatFails: "Companies that rely only on LLMs without vector storage end up with generic answers that don't know company history, product details, or internal processes. They have to retrain models constantly instead of updating a vector database.",
    enterpriseExample: "A manufacturing company built a customer support bot that answered general questions but failed on product-specific issues. After adding a vector database with product manuals, support tickets, and engineering notes, the bot's accuracy on company-specific questions jumped from 30% to 85%.",
    practicalBuild: "Use pgvector (PostgreSQL extension) for simple setups, or dedicated services like Pinecone or Weaviate for scale. Embed your documentation, knowledge base articles, historical tickets, and product catalogs. Update embeddings when content changes—this is much faster than retraining models.",
    mentalModel: "Vectors are like an indexed library. Instead of reading every book to find information, you search by topic similarity. It's fast, scalable, and updatable."
  },
  {
    id: "model",
    name: "Model",
    description: "The reasoning engine",
    whatItIs: "Large Language Models (LLMs) like GPT-4, Claude, or open-source alternatives that process language, reason, and generate responses. These can be hosted (OpenAI, Anthropic) or self-hosted (Llama, Mistral).",
    whyItMatters: "The model is the 'brain' but it's not enough alone. Executives often focus here first, but without proper data and vectors, even the best model will produce poor results. The model choice affects cost, latency, and capabilities.",
    whatFails: "Choosing the wrong model for the task (too expensive, too slow, or too limited) kills ROI. Companies that switch models constantly waste engineering time. Others try to build custom models when off-the-shelf ones would work fine.",
    enterpriseExample: "A financial services firm used GPT-4 for all tasks, including simple classification, spending $50k/month. After analyzing use cases, they moved 70% of tasks to GPT-3.5-turbo and saved $35k/month with no quality loss.",
    practicalBuild: "Start with hosted models (OpenAI, Anthropic) for speed. Use GPT-4 for complex reasoning, GPT-3.5-turbo for simple tasks, and Claude for long context. Consider self-hosted models (Llama 3, Mistral) if you have scale, data privacy requirements, or cost constraints. Use Cursor or similar tools for building the UI layer.",
    mentalModel: "The model is like a car engine. You need it to run, but it works best with good fuel (data) and a navigation system (vectors). Don't buy a Formula 1 engine for city driving."
  },
  {
    id: "agent",
    name: "Agent",
    description: "Autonomous decision-making",
    whatItIs: "AI agents are systems that can make decisions, take actions, and operate semi-autonomously within defined boundaries. They use tools, access APIs, and can chain multiple operations together.",
    whyItMatters: "Agents move beyond chat to actual work execution. They can handle multi-step processes, make judgment calls, and operate 24/7. This is where AI starts to transform operations, not just support them.",
    whatFails: "Agents without proper guardrails make bad decisions at scale. Companies that skip validation layers and error handling end up with agents that break processes or make costly mistakes. Over-automation without human oversight creates trust issues.",
    enterpriseExample: "A logistics company built an agent to optimize delivery routes. Initially, it saved costs but started making risky route decisions in bad weather. After adding safety constraints and human review for edge cases, it became reliable and saved 15% on fuel costs.",
    practicalBuild: "Start with constrained agents: single-purpose, well-defined boundaries, human approval for critical actions. Use frameworks like LangChain or AutoGPT for orchestration. Build in logging, monitoring, and rollback capabilities. Gradually expand autonomy as trust builds.",
    mentalModel: "Agents are like junior employees. They can handle routine work well, but need clear instructions, boundaries, and oversight. Start with simple tasks and expand responsibility over time."
  },
  {
    id: "orchestration",
    name: "Orchestration",
    description: "Coordinating the system",
    whatItIs: "Orchestration tools manage workflows, coordinate between different AI components, handle retries, and manage state. This includes workflow engines, API gateways, and process automation platforms.",
    whyItMatters: "Real AI systems aren't single models—they're complex workflows. Orchestration ensures reliability, handles failures gracefully, and manages dependencies between components. This is where production systems separate from demos.",
    whatFails: "Without orchestration, systems become brittle. A single API failure breaks everything. Companies that hardcode workflows end up with unmaintainable systems. Manual coordination doesn't scale and creates bottlenecks.",
    enterpriseExample: "A healthcare company built separate AI systems for appointment scheduling, patient records, and billing. They worked individually but failed when integrated. Adding an orchestration layer (n8n) allowed them to coordinate workflows, handle failures, and maintain audit trails.",
    practicalBuild: "Use tools like n8n, Zapier (for simple cases), or Temporal for complex workflows. Build retry logic, error handling, and state management. Design workflows as modular components that can be tested independently. Monitor workflow health and execution times.",
    mentalModel: "Orchestration is the conductor of an orchestra. Each musician (component) can play well, but without coordination, you get noise. The conductor ensures timing, handles mistakes, and keeps everything in sync."
  },
  {
    id: "interface",
    name: "Interface",
    description: "How humans interact",
    whatItIs: "The UI layer where humans interact with AI systems. This includes chat interfaces, dashboards, APIs, voice interfaces, and embedded AI features in existing tools.",
    whyItMatters: "The best AI system is useless if people can't use it effectively. Interface design determines adoption, trust, and actual value delivery. Executives need to invest here, not just in the AI backend.",
    whatFails: "Complex interfaces confuse users and reduce adoption. Companies that build AI-first UIs ignore existing workflows and tools, forcing users to learn new systems. Poor error messages and lack of transparency destroy trust.",
    enterpriseExample: "A company built a powerful AI analytics tool but wrapped it in a complex interface. Usage was 10%. After redesigning it as a simple Slack bot and dashboard widgets, usage jumped to 80% and actually changed decision-making.",
    practicalBuild: "Integrate AI into existing tools (Slack, Teams, existing dashboards) rather than building separate interfaces. Use Cursor or similar tools for rapid UI prototyping. Design for clarity: show confidence scores, source citations, and clear actions. Test with real users early.",
    mentalModel: "The interface is the front door. If it's hard to enter, people won't come in, no matter how nice the house (AI system) is inside. Make it familiar, clear, and frictionless."
  },
  {
    id: "governance",
    name: "Governance",
    description: "Rules, ethics, and compliance",
    whatItIs: "Policies, monitoring, and controls that ensure AI systems operate safely, ethically, and in compliance with regulations. This includes data privacy, bias detection, audit trails, and human oversight processes.",
    whyItMatters: "Governance isn't optional—it's a requirement for enterprise AI. Without it, companies face legal, reputational, and operational risks. Early governance prevents costly fixes later and builds trust with stakeholders.",
    whatFails: "Companies that skip governance face regulatory issues, bias lawsuits, and trust breakdowns. AI systems that make decisions without audit trails create legal risks. Lack of human oversight leads to catastrophic failures.",
    enterpriseExample: "A financial services firm deployed an AI lending system without proper bias testing. After 6 months, regulators found it discriminated against certain demographics. The fix cost $2M and required rebuilding the entire system with governance baked in.",
    practicalBuild: "Start with basics: data privacy compliance (GDPR, CCPA), audit logging for all AI decisions, human review processes for sensitive actions, bias testing before deployment. Use tools like Weights & Biases for model monitoring. Document everything. Build governance into the system from day one, not as an afterthought.",
    mentalModel: "Governance is the guardrails on a highway. You hope you never need them, but they prevent disasters. Build them early—retrofitting is expensive and sometimes too late."
  },
];

