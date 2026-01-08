"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroWithMotionProps {
  children: ReactNode;
  motionType?: "computation" | "relationships";
}

export default function HeroWithMotion({ children, motionType = "computation" }: HeroWithMotionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Motion Layer */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-500/5 to-transparent" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: motionType === "computation" 
              ? `radial-gradient(circle at 20% 50%, rgba(77, 157, 251, 0.1) 0%, transparent 50%),
                 radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
              : `radial-gradient(circle at 50% 50%, rgba(77, 157, 251, 0.08) 0%, transparent 70%)`,
            backgroundSize: "200% 200%",
          }}
        />
        {/* Animated network nodes */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-accent/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}



