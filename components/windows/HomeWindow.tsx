"use client";

import { useContext } from "react";
import { WindowActionsContext } from "@/hooks/useWindowActions";

export default function HomeWindow() {
  const context = useContext(WindowActionsContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  const { openWindow } = context;

  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-heading font-bold text-foreground leading-tight">
            I build intuitive systems for how people work, helping teams use AI where it actually makes sense.
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Executive grade clarity on AI, data, agents, and operating systems. Built as an interactive map, not a slide deck.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={() => openWindow("ai-map")}
            className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Open the AI Map
          </button>
          <button
            onClick={() => openWindow("why-pilots-fail")}
            className="px-6 py-3 bg-white border border-black/10 text-foreground rounded-lg font-medium hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Why Pilots Fail
          </button>
          <button
            onClick={() => openWindow("about")}
            className="px-6 py-3 bg-white border border-black/10 text-foreground rounded-lg font-medium hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            About Francisco
          </button>
        </div>

        {/* What You Will Learn */}
        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-black/5 mt-8">
          <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
            What you will learn here
          </h2>
          <ul className="space-y-3 text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>How LLMs changed the interface between humans and systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Why most AI pilots fail and what actually works</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>The real AI system stack: from data to governance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Vertical AI: why it wins and how to build it</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Practical examples from operations, supply chain, and customer support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

