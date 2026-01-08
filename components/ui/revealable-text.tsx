'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RevealableTextProps {
  children: React.ReactNode;
  className?: string;
  spotlightSize?: number;
}

export function RevealableText({ children, className, spotlightSize = 200 }: RevealableTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0.1);
  const [scale, setScale] = useState(1);
  
  const mouseX = useSpring(0, { bounce: 0 });
  const mouseY = useSpring(0, { bounce: 0 });

  useEffect(() => {
    if (!textRef.current) return;
    const parent = textRef.current.closest('section');
    if (!parent) return;

    const move = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      
      // Only update if mouse is within section bounds
      if (
        e.clientX >= rect.left && 
        e.clientX <= rect.right && 
        e.clientY >= rect.top && 
        e.clientY <= rect.bottom
      ) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    const updateReveal = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      const textCenterX = rect.left + rect.width / 2 - parentRect.left;
      const textCenterY = rect.top + rect.height / 2 - parentRect.top;
      
      const mx = mouseX.get();
      const my = mouseY.get();
      
      const dx = mx - textCenterX;
      const dy = my - textCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const newOpacity = Math.max(0.1, Math.min(1, 1 - (distance / spotlightSize)));
      const newScale = Math.max(1, Math.min(1.05, 1 + (0.05 * (1 - distance / spotlightSize))));
      
      setOpacity(newOpacity);
      setScale(newScale);
    };

    // Use capture phase to catch events even on child elements
    window.addEventListener('mousemove', move, true);
    const unsubscribeX = mouseX.on('change', updateReveal);
    const unsubscribeY = mouseY.on('change', updateReveal);
    
    return () => {
      window.removeEventListener('mousemove', move, true);
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, spotlightSize]);

  return (
    <motion.div
      ref={textRef}
      className={cn('transition-all duration-300', className)}
      style={{ opacity, scale }}
    >
      {children}
    </motion.div>
  );
}

