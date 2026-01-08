"use client";

import { useState } from "react";

export default function ContactWindow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to Supabase or email service
    console.log("Form submission:", formData);
    alert("Message sent! (Currently logs to console - will be wired to backend)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Contact
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Get in touch about AI systems, vertical AI, or collaboration opportunities.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-black/5 space-y-6">
          <div>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
              Contact Information
            </h2>
            <div className="space-y-3 text-secondary">
              <div className="flex items-center gap-3">
                <span className="text-accent">✉️</span>
                <span>Email: [placeholder@example.com]</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent">💼</span>
                <span>LinkedIn: [placeholder LinkedIn URL]</span>
              </div>
            </div>
          </div>

          <div className="border-t border-black/10 pt-6">
            <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-white border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* TODO Comment for future Supabase integration */}
        {/* 
          TODO: Future Supabase integration
          - Store form submissions in Supabase
          - Send email notifications
          - Add spam protection (reCAPTCHA, rate limiting)
          - Track submission analytics
        */}
      </div>
    </div>
  );
}




