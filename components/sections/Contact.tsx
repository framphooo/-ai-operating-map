"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
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
    <section id="contact" className="py-32 px-6 lg:px-8 bg-white/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
              Contact
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Get in touch about AI systems, vertical AI, or collaboration opportunities.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 border border-black/5 space-y-10">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 text-lg text-secondary">
                <div className="flex items-center gap-4">
                  <span className="text-accent text-2xl">✉️</span>
                  <span>Email: [placeholder@example.com]</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-accent text-2xl">💼</span>
                  <span>LinkedIn: [placeholder LinkedIn URL]</span>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10 pt-10">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white border-2 border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white border-2 border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-white border-2 border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none text-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-white rounded-full font-medium text-lg hover:bg-accent/90 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




