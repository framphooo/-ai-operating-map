"use client";

import Navigation from "../Navigation";
import AgentProductionReality from "../what-works/agent-production-reality";

export default function AgentArchitecturePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section className="py-32 px-6 lg:px-8 bg-white/40">
          <div className="max-w-6xl mx-auto">
            <AgentProductionReality />
          </div>
        </section>
      </main>
    </div>
  );
}



