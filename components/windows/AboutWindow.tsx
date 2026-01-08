"use client";

import FGMark from "../FGMark";

export default function AboutWindow() {
  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <FGMark size={64} />
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Francisco Guevara</h1>
            <p className="text-lg text-secondary mt-1">Business Architect for the AI Era</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-secondary leading-relaxed">
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
      </div>
    </div>
  );
}




