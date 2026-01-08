'use client';
import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpotlightReactiveTextProps {
  children: string;
  className?: string;
  spotlightSize?: number;
  hoverColor?: string;
  defaultColor?: string;
  radius?: number;
}

export function SpotlightReactiveText({ 
  children, 
  className, 
  spotlightSize = 200,
  hoverColor = '#00FDCF',
  defaultColor = 'white',
  radius = 100
}: SpotlightReactiveTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const charRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [charColors, setCharColors] = useState<string[]>([]);
  
  const mouseX = useSpring(0, { bounce: 0 });
  const mouseY = useSpring(0, { bounce: 0 });

  // Split text into characters, preserving spaces
  const characters = useMemo(() => {
    return children.split('');
  }, [children]);

  useEffect(() => {
    charRefs.current = new Array(characters.length).fill(null);
    setCharColors(new Array(characters.length).fill(defaultColor));
  }, [characters.length, defaultColor]);

  const updateColors = useCallback(() => {
    if (!containerRef.current) return;
    const parent = containerRef.current.closest('section') || document.body;
    const parentRect = parent.getBoundingClientRect();
    const mx = mouseX.get();
    const my = mouseY.get();

    const newColors = characters.map((_, index) => {
      const charRef = charRefs.current[index];
      if (!charRef) return defaultColor;

      const charRect = charRef.getBoundingClientRect();
      const charCenterX = charRect.left + charRect.width / 2 - parentRect.left;
      const charCenterY = charRect.top + charRect.height / 2 - parentRect.top;

      const dx = mx - charCenterX;
      const dy = my - charCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Color characters within the radius
      if (distance < radius) {
        return hoverColor;
      }
      return defaultColor;
    });

    setCharColors(newColors);
  }, [characters, radius, hoverColor, defaultColor, mouseX, mouseY]);

  useEffect(() => {
    if (!containerRef.current) return;
    const parent = containerRef.current.closest('section');
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

    // Use capture phase to catch events even on child elements
    window.addEventListener('mousemove', move, true);
    const unsubscribeX = mouseX.on('change', updateColors);
    const unsubscribeY = mouseY.on('change', updateColors);
    
    // Also update on mount and when refs change
    const timeout = setTimeout(updateColors, 100);
    
    return () => {
      window.removeEventListener('mousemove', move, true);
      unsubscribeX();
      unsubscribeY();
      clearTimeout(timeout);
    };
  }, [mouseX, mouseY, updateColors]);

  return (
    <div
      ref={containerRef}
      className={cn('inline-block', className)}
    >
      {characters.map((char, index) => (
        <span
          key={index}
          ref={(el) => {
            charRefs.current[index] = el;
            // Update colors when refs are set
            if (el && charRefs.current.every(ref => ref !== null)) {
              setTimeout(updateColors, 0);
            }
          }}
          className="inline-block transition-colors duration-200"
          style={{ color: charColors[index] || defaultColor }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

