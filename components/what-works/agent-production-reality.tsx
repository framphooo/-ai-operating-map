"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "../learning/SectionReveal";

type NodeId =
  | "user"
  | "agent"
  | "context"
  | "memory"
  | "vector"
  | "library"
  | "schema"
  | "tools"
  | "api"
  | "external"
  | "output"
  | "embeddings";

type Node = {
  id: NodeId;
  title: string;
  subtitle?: string;
  x: number;
  y: number;
  accent: string;
};

type Edge = {
  from: NodeId;
  to: NodeId;
  label?: string;
  curve?: number;
};

type HoverDetail = {
  title: string;
  whatItDoes: string[];
  whatItIsNot: string[];
  whyItMatters: string[];
};

const hoverDetails: Partial<Record<NodeId, HoverDetail>> = {
  agent: {
    title: "Agent / Brain (LLM)",
    whatItDoes: [
      "Interprets natural language instructions",
      "Reasons about next steps",
      "Selects tools based on schemas",
      "Interprets structured results",
    ],
    whatItIsNot: [
      "Not autonomous",
      "Not executing actions directly",
      "Not a source of truth",
    ],
    whyItMatters: [
      "The agent is an orchestrator, not a worker",
      "Intelligence emerges from coordination, not the model alone",
    ],
  },
  context: {
    title: "Context Window",
    whatItDoes: [
      "Maintains conversational continuity",
      "Holds the current interaction state",
      "Enables short-term reasoning",
    ],
    whatItIsNot: ["Not long-term memory", "Not persistent storage"],
    whyItMatters: [
      "Without context, the agent cannot reason coherently across steps",
    ],
  },
  memory: {
    title: "Memory System",
    whatItDoes: [
      "Stores task state across steps",
      "Enables multi-step workflows",
      "Allows iteration and recovery",
    ],
    whatItIsNot: ["Not autonomous", "Not a database of truth"],
    whyItMatters: [
      "Memory is required for real task completion, not just answers",
    ],
  },
  vector: {
    title: "Vector Database",
    whatItDoes: ["Stores semantic embeddings", "Enables similarity-based retrieval"],
    whatItIsNot: ["Not a relational database", "Not human-readable storage"],
    whyItMatters: ["Enables scalable, semantic memory for agents"],
  },
  library: {
    title: "Knowledge Library (RAG)",
    whatItDoes: [
      "Stores company-specific knowledge",
      "Feeds relevant context into reasoning",
    ],
    whatItIsNot: ["Not model training", "Not static documentation"],
    whyItMatters: ["Allows agents to operate on real business data"],
  },
  schema: {
    title: "Schema",
    whatItDoes: ["Defines tool inputs and outputs", "Constrains what actions are possible"],
    whatItIsNot: ["Not business logic", "Not execution"],
    whyItMatters: [
      "Schemas prevent hallucinated actions and enforce structure",
    ],
  },
  api: {
    title: "API Interface",
    whatItDoes: [
      "Sends structured JSON requests",
      "Receives machine-readable responses",
    ],
    whatItIsNot: ["Not reasoning", "Not decision-making"],
    whyItMatters: ["APIs are how agents actually act in the real world"],
  },
  external: {
    title: "External Applications",
    whatItDoes: ["Execute real actions", "Store system-of-record data"],
    whatItIsNot: ["Not intelligent", "Not autonomous"],
    whyItMatters: ["Real value lives outside the agent"],
  },
};

const nodes: Node[] = [
  {
    id: "user",
    title: "User / Trigger",
    subtitle: "Text input, webhook, or system event",
    x: 12,
    y: 18,
    accent: "from-purple-300/50 to-purple-100/70",
  },
  {
    id: "output",
    title: "Output",
    subtitle: "Final response or action result",
    x: 50,
    y: 12,
    accent: "from-emerald-200/60 to-white",
  },
  {
    id: "agent",
    title: "Agent / Brain (LLM)",
    subtitle: "Orchestrates reasoning, planning, interpretation",
    x: 45,
    y: 42,
    accent: "from-orange-200/70 to-white",
  },
  {
    id: "context",
    title: "Context Window",
    subtitle: "Short-term interaction state",
    x: 22,
    y: 42,
    accent: "from-blue-200/60 to-white",
  },
  {
    id: "memory",
    title: "Memory System",
    subtitle: "Read/write task state",
    x: 24,
    y: 64,
    accent: "from-indigo-200/60 to-white",
  },
  {
    id: "vector",
    title: "Vector Database",
    subtitle: "Long-term semantic memory",
    x: 46,
    y: 68,
    accent: "from-indigo-300/60 to-white",
  },
  {
    id: "library",
    title: "Knowledge Library (RAG)",
    subtitle: "Chunked PDFs, text, sheets, transcripts",
    x: 74,
    y: 18,
    accent: "from-cyan-100/70 to-white",
  },
  {
    id: "embeddings",
    title: "Embeddings Model",
    subtitle: "Chunks & embeds knowledge",
    x: 63,
    y: 34,
    accent: "from-cyan-200/60 to-white",
  },
  {
    id: "schema",
    title: "Schema",
    subtitle: "Tool definitions & constraints",
    x: 62,
    y: 50,
    accent: "from-amber-200/60 to-white",
  },
  {
    id: "tools",
    title: "Tools",
    subtitle: "Functional capabilities",
    x: 72,
    y: 50,
    accent: "from-rose-200/60 to-white",
  },
  {
    id: "api",
    title: "API Interface",
    subtitle: "Structured JSON calls",
    x: 72,
    y: 68,
    accent: "from-red-100/70 to-white",
  },
  {
    id: "external",
    title: "External Applications",
    subtitle: "CRM, Jira, Excel, databases",
    x: 86,
    y: 68,
    accent: "from-slate-200/70 to-white",
  },
];

const edges: Edge[] = [
  { from: "user", to: "agent", label: "Input" },
  { from: "agent", to: "context", label: "Writes state", curve: -6 },
  { from: "context", to: "agent", label: "Reads state", curve: 6 },
  { from: "agent", to: "memory", label: "Persists task state", curve: -8 },
  { from: "memory", to: "agent", label: "Restores state", curve: 8 },
  { from: "memory", to: "vector", label: "Store vectors", curve: -6 },
  { from: "vector", to: "agent", label: "Semantic search", curve: 6 },
  { from: "library", to: "embeddings", label: "Chunk & embed" },
  { from: "embeddings", to: "vector", label: "Store embeddings" },
  { from: "agent", to: "schema", label: "Select tool via schema", curve: -5 },
  { from: "schema", to: "tools", label: "Constrain actions", curve: 5 },
  { from: "tools", to: "api", label: "Execute" },
  { from: "api", to: "external", label: "Real actions" },
  { from: "external", to: "api", label: "System response" },
  { from: "api", to: "agent", label: "Structured results", curve: -10 },
  { from: "agent", to: "output", label: "Final response" },
  { from: "output", to: "user", label: "Deliver" },
  { from: "agent", to: "agent", label: "Iterate & plan", curve: 18 },
];

function getNode(id: NodeId) {
  return nodes.find((node) => node.id === id)!;
}

function buildPath(from: Node, to: Node, curve = 0) {
  const cpx = (from.x + to.x) / 2 + curve;
  const cpy = (from.y + to.y) / 2 + curve;
  return `M ${from.x} ${from.y} Q ${cpx} ${cpy} ${to.x} ${to.y}`;
}

function InfoBubble({ detail }: { detail: HoverDetail }) {
  return (
    <div className="absolute z-20 w-72 -translate-y-4 translate-x-4 rounded-xl border border-black/5 bg-white/90 p-4 shadow-lg backdrop-blur">
      <div className="text-sm font-semibold text-foreground mb-2">{detail.title}</div>
      <div className="space-y-3 text-xs text-secondary leading-relaxed">
        <div>
          <div className="font-semibold text-foreground mb-1">What it does</div>
          <ul className="space-y-1 list-disc list-inside">
            {detail.whatItDoes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-foreground mb-1">What it is not</div>
          <ul className="space-y-1 list-disc list-inside">
            {detail.whatItIsNot.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-foreground mb-1">Why it matters</div>
          <ul className="space-y-1 list-disc list-inside">
            {detail.whyItMatters.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function AgentProductionReality() {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null);

  const arrows = useMemo(
    () =>
      edges.map((edge, index) => {
        const fromNode = getNode(edge.from);
        const toNode = getNode(edge.to);
        const path = buildPath(fromNode, toNode, edge.curve ?? 0);
        const midX = (fromNode.x + toNode.x) / 2 + (edge.curve ?? 0) * 0.2;
        const midY = (fromNode.y + toNode.y) / 2 + (edge.curve ?? 0) * 0.2;
        return { ...edge, path, midX, midY, key: `${edge.from}-${edge.to}-${index}` };
      }),
    []
  );

  return (
    <div className="space-y-16">
      <SectionReveal>
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">
            Agents · Where reasoning meets execution
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Agents: Where Reasoning Meets Execution
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto">
            An agent is a digital worker: a governed system that uses an LLM to reason but exists to take
            action. Unlike a chatbot that only talks, and unlike brittle automation that breaks outside a
            script, an agent reasons, decides, and safely executes on your behalf.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
              The Blueprint of an AI Agent
            </h2>
            <p className="text-lg text-secondary max-w-4xl mx-auto">
              An agent is not magic and not just a model. Intelligence emerges from the orchestration of
              memory, knowledge, tools, and execution. The model reasons, but capability comes from how
              those parts are wired together.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-white via-white to-slate-50 shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.08),transparent_30%)]" />
            <div className="relative px-6 pt-8 pb-4 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-sm font-semibold text-foreground">Agent flow blueprint</div>
                <p className="text-sm text-secondary">
                  Follows the loop: input → reasoning → memory → retrieval → tools → output → iteration.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-secondary">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Hover or click a node to expand details.
              </div>
            </div>

            <div className="relative h-[720px]">
              <svg viewBox="0 0 100 100" className="absolute inset-0 pointer-events-none">
                <defs>
                  <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#4b5563" />
                  </marker>
                </defs>
                {arrows.map((edge) => (
                  <g key={edge.key}>
                    <path
                      d={edge.path}
                      fill="none"
                      stroke="#4b5563"
                      strokeWidth="0.6"
                      strokeOpacity={0.5}
                      markerEnd="url(#arrow)"
                    />
                    {edge.label && (
                      <text
                        x={edge.midX}
                        y={edge.midY}
                        fill="#111827"
                        fontSize="2.6"
                        textAnchor="middle"
                        opacity={0.7}
                      >
                        {edge.label}
                      </text>
                    )}
                  </g>
                ))}
              </svg>

              {nodes.map((node) => {
                const detail = hoverDetails[node.id];
                return (
                  <div
                    key={node.id}
                    className="absolute"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode((prev) => (prev === node.id ? null : prev))}
                    onClick={() => setActiveNode((prev) => (prev === node.id ? null : node.id))}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <div
                        className={`min-w-[180px] max-w-[220px] rounded-2xl border border-black/5 bg-white/90 backdrop-blur shadow-md p-4 cursor-pointer hover:shadow-xl transition-shadow`}
                      >
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${node.accent} opacity-60 pointer-events-none`}
                        />
                        <div className="relative space-y-2">
                          <div className="text-sm font-semibold text-foreground">{node.title}</div>
                          {node.subtitle && <p className="text-xs text-secondary">{node.subtitle}</p>}
                        </div>
                      </div>
                      {activeNode === node.id && detail && <InfoBubble detail={detail} />}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-3">
            <p className="text-lg text-secondary">
              Flow the loop in plain language: input arrives from a user or system trigger, the agent reasons,
              pulls context and knowledge, selects tools through schemas, executes via APIs, interprets the
              structured results, and delivers a final output—then repeats until the job is done.
            </p>
            <p className="text-sm text-secondary">
              Each arrow is a governed handoff that keeps the agent coherent and safe.
            </p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
              How Reasoning Becomes Real-World Action
            </h2>
            <p className="text-lg text-secondary max-w-4xl mx-auto">
              Reasoning happens in natural language, but the real world runs on structured data. APIs and
              schemas are the bridge between the agent’s thoughts and your systems. Without them, the loop
              collapses back into a chatbot that can only talk.
            </p>
            <div className="max-w-3xl mx-auto rounded-2xl border border-black/5 bg-gradient-to-r from-amber-50 to-white p-4 text-lg font-semibold text-foreground shadow-sm">
              APIs and schemas are the bridge between reasoning and reality.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-foreground">
              <span className="rounded-full border border-black/5 bg-white px-3 py-1 shadow-sm">
                Agents are not chatbots
              </span>
              <span className="rounded-full border border-black/5 bg-white px-3 py-1 shadow-sm">
                Intelligence alone does nothing
              </span>
              <span className="rounded-full border border-black/5 bg-white px-3 py-1 shadow-sm">
                Execution requires structure
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 opacity-70 pointer-events-none" />
              <div className="relative space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold">
                  Waiter analogy
                </div>
                <p className="text-lg font-semibold text-foreground">
                  Agents don’t click buttons—they send structured requests.
                </p>
                <ul className="space-y-2 text-sm text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                    <span>The user or agent is the customer placing an order.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                    <span>The API is the waiter that carries the request and returns the response.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                    <span>The server or system is the kitchen executing the order with deterministic steps.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-slate-900 text-slate-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                  Structured request/response
                </div>
                <span className="rounded-full bg-emerald-200/20 text-emerald-200 px-3 py-1 text-xs font-semibold">
                  No magic in between
                </span>
              </div>
              <div className="space-y-4 text-sm font-mono leading-6">
                <div>
                  <div className="text-slate-300 text-xs mb-1">Request</div>
                  <pre className="bg-slate-800/80 rounded-xl p-3 overflow-x-auto text-emerald-100">
{`{
  "action": "create_ticket",
  "inputs": {
    "title": "Customer cannot log in",
    "severity": "high",
    "assignee": "oncall-app-team"
  }
}`}
                  </pre>
                </div>
                <div>
                  <div className="text-slate-300 text-xs mb-1">Response</div>
                  <pre className="bg-slate-800/80 rounded-xl p-3 overflow-x-auto text-emerald-100">
{`{
  "status": "success",
  "ticketId": "JIRA-4821",
  "next": "notify_channel"
}`}
                  </pre>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-300">
                Inputs go in, outputs come back. The execution path is deterministic, not probabilistic.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-semibold">
                Schemas as instruction manuals
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                A one-page instruction manual that tells the agent how to use a tool.
              </h3>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                  <span>What the tool does</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                  <span>What inputs it expects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                  <span>What outputs it returns</span>
                </li>
              </ul>
              <p className="text-sm text-foreground">
                Without schemas, the agent cannot safely act. Most failures come from bad or missing schemas,
                not weak models.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">API</span>
                  <span className="text-[10px] uppercase tracking-wide text-secondary">Hover / Expand</span>
                </div>
                <div className="space-y-2 text-xs text-secondary">
                  <div>
                    <div className="font-semibold text-foreground mb-1">What it does</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Transmits structured requests</li>
                      <li>Returns machine-readable responses</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">What it is not</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Not reasoning</li>
                      <li>Not decision-making</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Why it matters</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>APIs are how agents interact with real systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Schema</span>
                  <span className="text-[10px] uppercase tracking-wide text-secondary">Hover / Expand</span>
                </div>
                <div className="space-y-2 text-xs text-secondary">
                  <div>
                    <div className="font-semibold text-foreground mb-1">What it does</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Defines tool inputs and outputs</li>
                      <li>Constrains how tools can be used</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">What it is not</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Not business logic</li>
                      <li>Not execution</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Why it matters</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Schemas prevent hallucinated actions and enforce safety</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.22}>
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h3 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
            The Anatomy of a Tool
          </h3>
          <p className="text-lg text-secondary">
            A tool is a function plus an API wrapper: a deterministic action path the agent can call. The agent
            never clicks buttons—it selects a tool through its schema, hands off structured inputs, and receives
            structured outputs.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.3}>
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">Agent Examples</h3>
            <p className="text-lg text-secondary max-w-4xl mx-auto">
              Each example is a direct application of the blueprint above—reasoning plus memory, schemas, and
              APIs delivering real execution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Internal copilot",
                description:
                  "Uses RAG for company knowledge, selects tools to file tickets, and routes updates back to Slack.",
              },
              {
                title: "Background automation agent",
                description:
                  "Listens for system triggers, enriches with memory, and executes workflows through deterministic APIs.",
              },
              {
                title: "Customer-facing agent",
                description:
                  "Understands policies, calls schemas to process returns or refunds, and documents every action.",
              },
            ].map((example) => (
              <div
                key={example.title}
                className="rounded-2xl border border-black/5 bg-white/70 shadow-sm p-6 text-left space-y-2"
              >
                <div className="text-lg font-semibold text-foreground">{example.title}</div>
                <p className="text-sm text-secondary">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
