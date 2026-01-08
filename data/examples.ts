export interface ExampleCase {
  id: string;
  title: string;
  problem: string;
  whyCurrentToolsFail: string;
  systemDesign: {
    layers: string[];
    description: string;
  };
  humanOwner: string;
  domain: string;
}

export const EXAMPLE_CASES: ExampleCase[] = [
  {
    id: "supply-chain-dashboard",
    title: "Supply Chain Operations Dashboard",
    problem: "Operations teams need real-time visibility into inventory levels, supplier performance, and demand forecasts. Current dashboards are static, require manual data pulls, and don't provide actionable insights.",
    whyCurrentToolsFail: "Traditional BI tools show historical data but can't predict issues or suggest actions. Teams spend hours pulling data from multiple systems (ERP, WMS, supplier portals) and still miss critical signals.",
    systemDesign: {
      layers: ["Data (ERP, WMS)", "Vector (product catalogs, supplier docs)", "Model (GPT-4 for reasoning)", "Agent (automated purchase orders)", "Orchestration (n8n workflows)", "Interface (embedded in Slack + dashboard)", "Governance (approval workflows)"],
      description: "A vertical AI system that aggregates data from multiple sources, uses vector search to find relevant supplier information, employs an agent to make purchase recommendations, and surfaces insights in existing tools."
    },
    humanOwner: "Supply Chain Operations Manager",
    domain: "Operations & Supply Chain",
  },
  {
    id: "customer-support",
    title: "Customer Support Vertical System",
    problem: "Support teams handle thousands of tickets daily. Many are repetitive, but current chatbots provide generic answers and can't access order history or process returns.",
    whyCurrentToolsFail: "Generic chatbots don't know specific products, policies, or customer history. They escalate everything to humans, creating bottlenecks. Support agents waste time on routine tasks.",
    systemDesign: {
      layers: ["Data (tickets, orders, products)", "Vector (documentation, FAQs)", "Model (Claude for long context)", "Agent (process returns, update orders)", "Orchestration (ticket routing)", "Interface (embedded in support portal)", "Governance (human review for refunds)"],
      description: "An AI system integrated into the support ticket system that can access customer history, product docs, and policies to resolve common issues autonomously, escalating only when needed."
    },
    humanOwner: "Customer Support Director",
    domain: "Customer Support",
  },
  {
    id: "quality-control",
    title: "Manufacturing Quality Control AI",
    problem: "Quality teams manually review production data to identify defects and root causes. By the time issues are detected, large batches may be affected.",
    whyCurrentToolsFail: "Current systems flag anomalies but don't explain why or suggest corrective actions. Teams rely on tribal knowledge and manual analysis, leading to delays and inconsistent responses.",
    systemDesign: {
      layers: ["Data (sensors, production logs)", "Vector (quality manuals, historical issues)", "Model (GPT-4 for analysis)", "Agent (alert operators, suggest actions)", "Orchestration (workflow automation)", "Interface (production floor tablets)", "Governance (approval for production stops)"],
      description: "Real-time quality monitoring that uses sensor data and historical patterns to predict defects, explain root causes using knowledge bases, and recommend actions to operators on the floor."
    },
    humanOwner: "Quality Engineering Manager",
    domain: "Manufacturing",
  },
  {
    id: "sales-operations",
    title: "Sales Operations Forecasting Agent",
    problem: "Sales teams manually update forecasts, leading to inaccurate predictions. Finance struggles to plan because forecasts change constantly without clear explanations.",
    whyCurrentToolsFail: "Spreadsheet-based forecasting is manual, error-prone, and doesn't incorporate deal signals (email activity, meeting notes, stage changes). Forecasts are always optimistic and lack context.",
    systemDesign: {
      layers: ["Data (CRM, email, calendar)", "Vector (deal history, win/loss patterns)", "Model (GPT-4 for narrative analysis)", "Agent (update forecasts, flag risks)", "Orchestration (sync with CRM)", "Interface (Salesforce dashboard widgets)", "Governance (manager approval for changes)"],
      description: "An agent that analyzes deal signals from multiple sources, updates forecasts automatically, explains changes, and flags deals that need attention—all within the existing CRM."
    },
    humanOwner: "VP of Sales Operations",
    domain: "Sales",
  },
  {
    id: "hr-recruiting",
    title: "Talent Acquisition Vertical System",
    problem: "Recruiting teams spend hours screening resumes and scheduling interviews. Good candidates slip through because screening criteria are inconsistently applied.",
    whyCurrentToolsFail: "Generic ATS systems use keyword matching and miss qualified candidates. Recruiters manually screen hundreds of resumes, leading to bias and inconsistency. Scheduling is time-consuming.",
    systemDesign: {
      layers: ["Data (resumes, job descriptions, interview notes)", "Vector (role requirements, team culture docs)", "Model (Claude for nuanced evaluation)", "Agent (schedule interviews, send follow-ups)", "Orchestration (calendar coordination)", "Interface (ATS integration)", "Governance (human review for final decisions)"],
      description: "An AI system that understands role requirements deeply, screens candidates consistently, schedules interviews automatically, and surfaces the best matches—while ensuring human oversight for final hiring decisions."
    },
    humanOwner: "Head of Talent Acquisition",
    domain: "Human Resources",
  },
  {
    id: "finance-reporting",
    title: "Financial Reporting Automation",
    problem: "Finance teams spend days each month compiling reports from multiple systems. Executives get reports late, and variance explanations are shallow.",
    whyCurrentToolsFail: "Current reporting tools require manual data pulls and Excel manipulation. Variance analysis is time-consuming and often misses important drivers. Reports are static snapshots without narrative.",
    systemDesign: {
      layers: ["Data (ERP, GL, planning systems)", "Vector (historical reports, commentary)", "Model (GPT-4 for narrative generation)", "Agent (pull data, generate insights)", "Orchestration (monthly workflow)", "Interface (Power BI embedded AI)", "Governance (CFO review before distribution)"],
      description: "Automated financial reporting that pulls data from multiple sources, generates narrative explanations for variances, highlights key insights, and delivers executive-ready reports on schedule."
    },
    humanOwner: "CFO",
    domain: "Finance",
  },
  {
    id: "it-operations",
    title: "IT Operations Incident Response",
    problem: "IT teams are overwhelmed by alerts. Critical incidents get missed, and resolution takes too long because teams lack context about system dependencies and historical patterns.",
    whyCurrentToolsFail: "Monitoring tools generate thousands of alerts. Teams rely on runbooks and tribal knowledge. Incident response is reactive and slow. Root cause analysis happens after the fact.",
    systemDesign: {
      layers: ["Data (logs, metrics, incidents)", "Vector (runbooks, architecture docs)", "Model (GPT-4 for diagnosis)", "Agent (run remediation scripts, page on-call)", "Orchestration (incident workflows)", "Interface (PagerDuty + Slack)", "Governance (approval for production changes)"],
      description: "An AI system that correlates alerts, diagnoses issues using knowledge bases, suggests remediation steps, and can execute safe fixes automatically—while escalating critical issues to humans."
    },
    humanOwner: "IT Operations Manager",
    domain: "IT Operations",
  },
  {
    id: "compliance-monitoring",
    title: "Regulatory Compliance Monitoring",
    problem: "Compliance teams manually review contracts, policies, and communications for regulatory violations. The process is slow, inconsistent, and risks missing critical issues.",
    whyCurrentToolsFail: "Current tools use simple keyword matching and miss nuanced violations. Manual review doesn't scale. Teams can't keep up with regulatory changes or review everything that needs checking.",
    systemDesign: {
      layers: ["Data (contracts, emails, policies)", "Vector (regulations, compliance guides)", "Model (GPT-4 for interpretation)", "Agent (flag violations, generate reports)", "Orchestration (review workflows)", "Interface (compliance dashboard)", "Governance (legal review for flagged items)"],
      description: "Continuous compliance monitoring that understands regulatory requirements, reviews documents at scale, flags potential violations with explanations, and generates audit-ready reports—with legal review for final decisions."
    },
    humanOwner: "Chief Compliance Officer",
    domain: "Legal & Compliance",
  },
];




