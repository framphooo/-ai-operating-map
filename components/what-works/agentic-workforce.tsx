"use client";

import { motion } from "framer-motion";
import SectionReveal from "../learning/SectionReveal";

interface AgentRole {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  reportsTo?: string;
}

export default function AgenticWorkforce() {
  // Real-world example: MRP Manager orchestrating platform-specific agents
  const managerAgent: AgentRole = {
    id: "mrp-manager",
    title: "MRP Manager",
    description: "Central orchestrator that coordinates across G-Suite, Webflow, Salesforce, Linear, HubSpot, Gamma, and more",
    responsibilities: [
      "Receives user messages and triggers",
      "Delegates to platform-specific assistants",
      "Coordinates multi-platform workflows",
      "Routes outputs between specialized agents",
    ],
  };

  const platformAgents: AgentRole[] = [
    {
      id: "notion",
      title: "Notion Assistant",
      description: "Does anything in Notion",
      responsibilities: [
        "Create and update Notion pages",
        "Manage databases and views",
        "Format content and structure",
      ],
      reportsTo: "mrp-manager",
    },
    {
      id: "webflow",
      title: "Webflow Assistant",
      description: "Does anything in Webflow",
      responsibilities: [
        "Update website content",
        "Manage CMS collections",
        "Modify design elements",
      ],
      reportsTo: "mrp-manager",
    },
    {
      id: "hubspot",
      title: "HubSpot Assistant",
      description: "Helps you work with your HubSpot CRM",
      responsibilities: [
        "Manage contacts and companies",
        "Update deal pipelines",
        "Create and send emails",
      ],
      reportsTo: "mrp-manager",
    },
    {
      id: "linear",
      title: "Linear Assistant",
      description: "Does anything in Linear",
      responsibilities: [
        "Create and update issues",
        "Manage project workflows",
        "Track progress and milestones",
      ],
      reportsTo: "mrp-manager",
    },
  ];

  const googleSuiteAgents: AgentRole[] = [
    {
      id: "docs",
      title: "Google Docs Assistant",
      description: "Does anything in Google Docs",
      responsibilities: ["Create documents", "Edit content", "Format text"],
      reportsTo: "mrp-manager",
    },
    {
      id: "sheets",
      title: "Google Sheets Assistant",
      description: "Does anything in Google Sheets",
      responsibilities: ["Update spreadsheets", "Perform calculations", "Manage data"],
      reportsTo: "mrp-manager",
    },
    {
      id: "slides",
      title: "Google Slides Assistant",
      description: "Does anything in Google Slides",
      responsibilities: ["Create presentations", "Update slides", "Format content"],
      reportsTo: "mrp-manager",
    },
    {
      id: "gmail",
      title: "Gmail Assistant",
      description: "Does anything in Gmail",
      responsibilities: ["Send emails", "Manage inbox", "Create drafts"],
      reportsTo: "mrp-manager",
    },
  ];

  const utilityAgents: AgentRole[] = [
    {
      id: "research",
      title: "Research Assistant",
      description: "Researches and scrapes internet content",
      responsibilities: [
        "Search the web",
        "Extract information",
        "Summarize findings",
      ],
      reportsTo: "mrp-manager",
    },
    {
      id: "image-gen",
      title: "Generate Image Tool",
      description: "Text to image generation using reference images",
      responsibilities: [
        "Create images from text",
        "Apply style references",
        "Generate visual assets",
      ],
      reportsTo: "mrp-manager",
    },
  ];

  return (
    <div>
      {/* Header */}
      <SectionReveal>
        <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight text-center">
          Agentic Workforce: Where Value Compounds
        </h2>
        <p className="text-xl text-secondary text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Multiple specialized agents working together under coordination. This is where AI stops being a tool and starts becoming a team.
        </p>
      </SectionReveal>

      {/* Explanation */}
      <SectionReveal delay={0.1}>
        <div className="max-w-4xl mx-auto mb-16 space-y-6 text-lg text-foreground leading-[1.8] font-light">
          <p>
            Once the reader understands a single agent, the narrative scales outward. An agentic workforce consists of multiple specialized agents working together under coordination. This should be compared explicitly to a human organization. A single employee does not do everything themselves; they delegate to specialists. An agentic workforce follows the same pattern, but with software agents that are faster, narrower in scope, and more consistent.
          </p>
        </div>
      </SectionReveal>

      {/* Real-World Example: Multi-Platform Workforce */}
      <SectionReveal delay={0.2}>
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
              Real-World Example: Multi-Platform Workforce
            </h3>
            <p className="text-sm text-secondary">
              A coordinator agent (MRP Manager) orchestrates specialized platform assistants
            </p>
          </div>

          {/* Manager Level */}
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-accent/90 text-white rounded-xl p-6 shadow-xl max-w-lg w-full"
            >
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  {managerAgent.title}
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  {managerAgent.description}
                </p>
                <div className="text-xs text-white/80 text-left space-y-1">
                  {managerAgent.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connection Indicator */}
          <div className="relative h-12 flex justify-center items-center mb-8">
            <div className="w-px h-full bg-accent/30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
              <div className="text-xs text-secondary font-medium">Delegates to specialized agents</div>
            </div>
          </div>

          {/* Platform Agents */}
          <div className="mb-8">
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4 text-center">
              Platform-Specific Assistants
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {platformAgents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm border-2 border-blue-300 rounded-xl p-4 shadow-lg"
                >
                  <div className="text-center mb-3">
                    <div className="text-2xl mb-2">🔧</div>
                    <h5 className="font-heading font-semibold text-foreground mb-1 text-sm">
                      {agent.title}
                    </h5>
                    <p className="text-xs text-secondary mb-2">
                      {agent.description}
                    </p>
                  </div>
                  <div className="text-xs text-secondary space-y-1">
                    {agent.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-1.5 font-bold">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Google Suite Agents */}
          <div className="mb-8">
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4 text-center">
              Google Suite Assistants
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {googleSuiteAgents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm border-2 border-green-300 rounded-xl p-4 shadow-lg"
                >
                  <div className="text-center mb-3">
                    <div className="text-2xl mb-2">📄</div>
                    <h5 className="font-heading font-semibold text-foreground mb-1 text-sm">
                      {agent.title}
                    </h5>
                    <p className="text-xs text-secondary mb-2">
                      {agent.description}
                    </p>
                  </div>
                  <div className="text-xs text-secondary space-y-1">
                    {agent.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-green-500 mr-1.5 font-bold">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Utility Agents & Tools */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4 text-center">
              Utility Agents & Tools
            </h4>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {utilityAgents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm border-2 border-purple-300 rounded-xl p-4 shadow-lg"
                >
                  <div className="text-center mb-3">
                    <div className="text-2xl mb-2">🔍</div>
                    <h5 className="font-heading font-semibold text-foreground mb-1 text-sm">
                      {agent.title}
                    </h5>
                    <p className="text-xs text-secondary mb-2">
                      {agent.description}
                    </p>
                  </div>
                  <div className="text-xs text-secondary space-y-1">
                    {agent.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-purple-500 mr-1.5 font-bold">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Flow Explanation */}
          <div className="mt-12 bg-white/60 p-6 rounded-xl border border-black/5">
            <p className="text-sm text-secondary text-center leading-relaxed">
              <strong className="text-foreground">How it works:</strong> User sends a message → MRP Manager receives trigger → 
              Delegates to appropriate platform assistant (e.g., Notion Assistant) → Platform assistant can invoke 
              Google Suite assistants or utility tools → Results flow back through MRP Manager → Final output to user.
            </p>
          </div>
        </div>
      </SectionReveal>

      {/* Benefits Section */}
      <SectionReveal delay={0.3}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Why This Structure Works
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Narrow Scope",
                description: "Each agent has a specific role and narrow expertise. This reduces hallucination risk and makes outputs more predictable.",
                icon: "🎯",
              },
              {
                title: "Reusable Assets",
                description: "Prompts become reusable assets. Knowledge becomes structured instead of implicit. Outputs become predictable and auditable.",
                icon: "♻️",
              },
              {
                title: "Organizational Mirror",
                description: "Agentic systems do not replace organizations; they mirror them. The difference is speed, cost, and scalability.",
                icon: "🪞",
              },
              {
                title: "Managed Complexity",
                description: "A coordinating agent can oversee execution without being overloaded. Specialization enables depth without sacrificing coordination.",
                icon: "⚖️",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/60 p-6 rounded-xl border border-black/5"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-secondary leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}

