"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SplitLayoutProps {
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean;
}

export default function SplitLayout({ left, right, reverse = false }: SplitLayoutProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center my-16 ${reverse ? "md:flex-row-reverse" : ""}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={reverse ? "md:order-2" : ""}
      >
        {left}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={reverse ? "md:order-1" : ""}
      >
        {right}
      </motion.div>
    </div>
  );
}

