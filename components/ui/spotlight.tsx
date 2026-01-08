'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpotlightProps {
  className?: string;
  size?: number;
}

export function Spotlight({ className, size = 200 }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, { bounce: 0 });
  const mouseY = useSpring(0, { bounce: 0 });

  const left = useTransform(mouseX, x => `${x - size / 2}px`);
  const top = useTransform(mouseY, y => `${y - size / 2}px`);

  useEffect(() => {
    if (!containerRef.current) return;
    const parent = containerRef.current.parentElement;
    if (!parent) return;

    parent.style.position = 'relative';
    parent.style.overflow = 'hidden';
    setParentElement(parent);

    const move = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      
      // Only update if mouse is within parent bounds
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

    // Use capture phase to catch events even on child elements (like text)
    window.addEventListener('mousemove', move, true);
    return () => window.removeEventListener('mousemove', move, true);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full blur-xl',
        'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_70%)]',
        className
      )}
      style={{ width: size, height: size, left, top }}
    />
  );
}

