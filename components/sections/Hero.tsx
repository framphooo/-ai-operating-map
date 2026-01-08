"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tight">
            I build intuitive systems for how people work, helping teams use AI where it actually makes sense.
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-3xl mx-auto">
            Executive grade clarity on AI, data, agents, and operating systems. Built as an interactive map, not a slide deck.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("ai-map")}
            className="px-8 py-4 bg-accent text-white rounded-full font-medium text-base hover:bg-accent/90 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Open the AI Map
          </button>
          <button
            onClick={() => scrollToSection("why-pilots-fail")}
            className="px-8 py-4 bg-white border-2 border-black/10 text-foreground rounded-full font-medium text-base hover:bg-black/5 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Why Pilots Fail
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12"
        >
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-black/5 text-left max-w-2xl">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
              What you will learn here
            </h2>
            <ul className="space-y-4 text-lg text-secondary">
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span>How LLMs changed the interface between humans and systems</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span>Why most AI pilots fail and what actually works</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span>The real AI system stack: from data to governance</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span>Vertical AI: why it wins and how to build it</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span>Practical examples from operations, supply chain, and customer support</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




