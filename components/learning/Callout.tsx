"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
  variant?: "insight" | "warning" | "key-moment";
  title?: string;
}

export default function Callout({ children, variant = "insight", title }: CalloutProps) {
  const variants = {
    insight: "bg-accent/10 border-l-4 border-accent",
    warning: "bg-red-50/50 border-l-4 border-red-400",
    "key-moment": "bg-purple-50/50 border-l-4 border-purple-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`${variants[variant]} p-8 rounded-2xl my-12`}
    >
      {title && (
        <h4 className="text-2xl font-heading font-semibold text-foreground mb-4">{title}</h4>
      )}
      <div className="text-lg text-secondary leading-relaxed">{children}</div>
    </motion.div>
  );
}

