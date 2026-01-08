"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SectionReveal from "../learning/SectionReveal";

const diagram = `
graph TD
  %% STYLES
  classDef brain fill:#fff7ed,stroke:#f97316,stroke-width:3px,color:#9a3412
  classDef memory fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e40af
  classDef tool fill:#f0fdf4,stroke:#22c55e,stroke-width:2px,color:#166534
  classDef trigger fill:#f3e8ff,stroke:#a855f7,stroke-width:2px,color:#6b21a8

  %% NODES
  User(["User / Trigger"]):::trigger
  Agent_Core{{"The Agent / Brain"}}:::brain

  subgraph Memory_System ["Memory System"]
      ShortTerm["Context Window<br/>(Current Chat)"]:::memory
      LongTerm[("Vector DB<br/>Long Term Memory")]:::memory
  end

  subgraph Knowledge_System ["The Library"]
      Docs["PDFs / Text Files"]:::memory
      Embeddings["Embeddings Model"]:::memory
  end

  subgraph Tool_System ["The Hands"]
      Schema["Schema<br/>(Instruction Manual)"]:::tool
      API_Layer["API Interface<br/>(The Waiter)"]:::tool
      External_App["External App<br/>(CRM, Jira, Excel)"]:::tool
  end

  %% CONNECTIONS
  User -->|"1. Input (Text/Webhook)"| Agent_Core

  Agent_Core <-->|"2. Read/Write"| ShortTerm
  Agent_Core <-->|"3. Semantic Search"| LongTerm

  Docs -.->|"Chunk & Embed"| Embeddings
  Embeddings -.->|"Store Vectors"| LongTerm

  Agent_Core --"4. Select Tool via Schema"--> Schema
  Schema -.-> API_Layer
  Agent_Core --"5. API Call (JSON)"--> API_Layer
  API_Layer --"6. POST Request"--> External_App
  External_App --"7. Return Response"--> API_Layer
  API_Layer --"8. Parse Data"--> Agent_Core

  Agent_Core -->|"9. Final Output"| User
`;

type Overlay = {
  id: string;
  top: string;
  left: string;
  width?: string;
  height?: string;
  title: string;
  what: string;
  not: string;
  matters: string;
};

const overlays: Overlay[] = [
  {
    id: "user",
    title: "User / Trigger",
    top: "14%",
    left: "50%",
    width: "12%",
    height: "7%",
    what: "Starts the workflow with a prompt or event (text, form, webhook).",
    not: "Not the agent. Not an automatic decision maker.",
    matters: "Defines intent and provides the initial input the system can act on.",
  },
  {
    id: "agent",
    title: "The Agent / Brain (LLM)",
    top: "30%",
    left: "48%",
    width: "18%",
    height: "10%",
    what: "Interprets instructions, plans steps, and translates results into human language.",
    not: "Not a database. Not a source of truth. Does not execute actions by itself.",
    matters: "Provides reasoning that selects what to do next inside constraints.",
  },
  {
    id: "context",
    title: "Context Window (Current Chat)",
    top: "60%",
    left: "60%",
    width: "18%",
    height: "10%",
    what: "Holds short-term conversation context for coherence in this session.",
    not: "Not long-term memory. Not guaranteed to persist.",
    matters: "Prevents the agent from resetting on every message.",
  },
  {
    id: "vector",
    title: "Vector DB (Long Term Memory)",
    top: "56%",
    left: "82%",
    width: "18%",
    height: "10%",
    what: "Stores embeddings for semantic retrieval of past knowledge and context.",
    not: "Not a factual system of record. Not perfect recall.",
    matters: "Enables recall across time and improves relevance during multi-step work.",
  },
  {
    id: "library",
    title: "The Library (PDFs / Text Files)",
    top: "18%",
    left: "84%",
    width: "14%",
    height: "9%",
    what: "Source documents for business knowledge the agent can retrieve from.",
    not: "Not model training. Not automatically understood unless processed.",
    matters: "Keeps answers grounded in company-specific material.",
  },
  {
    id: "chunk-embed",
    title: "Chunk & Embed",
    top: "26%",
    left: "84%",
    width: "12%",
    height: "3%",
    what: "Splits documents and converts them into embeddings for retrieval.",
    not: "Not summarization. Not upload-and-done.",
    matters: "Makes large document sets searchable by meaning.",
  },
  {
    id: "embeddings-model",
    title: "Embeddings Model",
    top: "34%",
    left: "84%",
    width: "12%",
    height: "3%",
    what: "Converts text chunks into vector representations (numbers).",
    not: "Not the LLM brain. Not a reasoning engine.",
    matters: "Powers semantic search that feeds relevant context into the agent.",
  },
  {
    id: "schema",
    title: "Schema (Instruction Manual)",
    top: "50%",
    left: "24%",
    width: "16%",
    height: "9%",
    what: "Defines tool purpose, required inputs, allowed values, and outputs.",
    not: "Not the tool itself. Not optional for reliable execution.",
    matters: "Constrains the agent so tool calls are valid and predictable.",
  },
  {
    id: "api",
    title: "API Interface (The Waiter)",
    top: "70%",
    left: "36%",
    width: "18%",
    height: "10%",
    what: "Sends requests (GET/POST) to external systems and returns responses, usually JSON.",
    not: "Not the external system. Not human language by default.",
    matters: "Bridges reasoning with real system execution.",
  },
  {
    id: "external",
    title: "External App (CRM, Jira, Excel)",
    top: "86%",
    left: "32%",
    width: "18%",
    height: "10%",
    what: "The real system where actions happen and state changes.",
    not: "Not controlled by the LLM directly. Not always reversible.",
    matters: "This is where operational work is completed and recorded.",
  },
  {
    id: "select-tool",
    title: "Select Tool via Schema",
    top: "44%",
    left: "22%",
    width: "12%",
    height: "3%",
    what: "Chooses the correct tool by reading schemas and matching intent.",
    not: "Not guessing. Not free-form execution.",
    matters: "Prevents the agent from calling the wrong tool.",
  },
  {
    id: "api-call",
    title: "API Call (JSON)",
    top: "58%",
    left: "38%",
    width: "12%",
    height: "3%",
    what: "Sends structured, typed data to a tool.",
    not: "Not natural language. Not a chat action.",
    matters: "Reliable execution requires structured inputs.",
  },
  {
    id: "post-request",
    title: "POST Request",
    top: "82%",
    left: "30%",
    width: "12%",
    height: "3%",
    what: "Creates or updates something (send email, create ticket, write row).",
    not: "Not read-only.",
    matters: "This is how the agent changes system state.",
  },
  {
    id: "return-response",
    title: "Return Response",
    top: "82%",
    left: "44%",
    width: "12%",
    height: "3%",
    what: "Returns machine output such as status codes, IDs, or payloads.",
    not: "Not user-ready explanation.",
    matters: "Confirms what actually happened.",
  },
  {
    id: "parse-data",
    title: "Parse Data",
    top: "56%",
    left: "50%",
    width: "12%",
    height: "3%",
    what: "Extracts key fields from responses such as IDs, statuses, or values.",
    not: "Not understanding by itself.",
    matters: "Turns raw outputs into traceable results.",
  },
  {
    id: "final-output",
    title: "Final Output",
    top: "12%",
    left: "72%",
    width: "12%",
    height: "3%",
    what: "Presents the final answer and summarizes actions taken.",
    not: "Not the execution itself.",
    matters: "Makes outcomes clear, visible, and verifiable.",
  },
];

export default function UnifiedAgentTheory() {
  const [active, setActive] = useState<string | null>(null);
  const content = useMemo(() => overlays.find((o) => o.id === active), [active]);
  const diagramRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const mermaid = (await import("mermaid")).default;
      if (cancelled) return;
      mermaid.initialize({ startOnLoad: false, theme: "base", securityLevel: "loose" });
      if (!diagramRef.current) return;
      try {
        const { svg } = await mermaid.render("unified-agent-diagram", diagram);
        if (cancelled) return;
        diagramRef.current.innerHTML = svg;
      } catch (err) {
        console.error("Mermaid render failed", err);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <SectionReveal>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
          The &quot;Unified Theory&quot; of an Agent
        </h2>
        <p className="text-lg md:text-xl text-secondary text-center max-w-3xl mx-auto mb-10">
          The AI (Brain) is not magic; it is an orchestrator that sits between Memory (Context), Knowledge (Data), and Tools (Action).
        </p>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-black/5 shadow-lg p-6 md:p-10 relative">
          <div
            ref={diagramRef}
            className="pointer-events-none select-none [&_svg]:w-full [&_svg]:h-auto"
            aria-label="Unified agent diagram"
          />

          <div className="pointer-events-none absolute inset-0">
            {overlays.map((item) => (
              <div
                key={item.id}
                className="absolute"
                style={{
                  top: item.top,
                  left: item.left,
                  transform: "translate(-50%, -50%)",
                  width: item.width ?? "18%",
                  height: item.height ?? "10%",
                }}
              >
                <div
                  className="w-full h-full rounded-lg border border-transparent transition shadow-[0_0_0_0_rgba(0,0,0,0)] pointer-events-auto cursor-pointer hover:shadow-[0_0_0_3px_rgba(99,102,241,0.3)]"
                  onMouseEnter={() => setActive(item.id)}
                  onMouseLeave={() => setActive((prev) => (prev === item.id ? null : prev))}
                  onFocus={() => setActive(item.id)}
                  onBlur={() => setActive((prev) => (prev === item.id ? null : prev))}
                />
              </div>
            ))}
          </div>

          {content && (
            <div className="absolute z-20 right-4 top-4 w-80 max-w-full rounded-2xl border border-black/10 bg-white shadow-xl p-4">
              <div className="text-sm font-semibold text-foreground mb-3">{content.title}</div>
              <div className="space-y-3 text-sm text-secondary leading-relaxed">
                <div>
                  <div className="font-semibold text-foreground mb-1">What it does</div>
                  <p>{content.what}</p>
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">What it is not</div>
                  <p>{content.not}</p>
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Why it matters</div>
                  <p>{content.matters}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </SectionReveal>
    </div>
  );
}
