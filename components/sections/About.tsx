"use client";

import { motion } from "framer-motion";
import FGMark from "../FGMark";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="flex items-start gap-8">
            <FGMark size={80} />
            <div className="flex-1 pt-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-3">
                Francisco Guevara
              </h2>
              <p className="text-xl text-secondary">Business Architect for the AI Era</p>
            </div>
          </div>

          <div className="space-y-6 text-lg text-secondary leading-relaxed">
            <p>
              Francisco Guevara is a Business Architect for the AI Era. At a young age, he already has experience working with global teams and senior leaders in a complex international company environment. He grew up across Europe, the United States, and Bolivia, which gives him a wide view of how diverse people think, work, and make decisions.
            </p>

            <p>
              Through his roles, Francisco has been the person who steps into complexity and makes it workable. As an ex-event manager, he learned to operate under pressure, manage stakeholders, and deliver results in fast-changing environments. He later moved into corporate communications for global operations at Logitech, supporting different regions and teams in telling their story through KPIs, dashboards, and executive-level storytelling. This work strengthened his ability to transform operational information into clear, usable insights for leadership.
            </p>

            <p>
              In a moment where AI is rapidly reshaping how companies work, Francisco has positioned himself as an AI Champion. He understands business reality, human behavior, and the practical possibilities of new tools. He speaks the language of executives but keeps the curiosity and energy of someone who continues to build, test, and iterate. His work aims at one thing: clear systems that help people do better work with less noise and more intention.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




