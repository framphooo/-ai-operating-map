"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { WindowId, WindowState } from "@/types/window";
import { cn } from "@/lib/utils";

interface WindowProps {
  windowState: WindowState;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  onUpdatePosition: (position: { x: number; y: number }) => void;
  children: ReactNode;
  title: string;
}

export default function Window({
  windowState,
  onClose,
  onMinimize,
  onFocus,
  onUpdatePosition,
  children,
  title,
}: WindowProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const dragHandleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Center window on mount
    if (windowState.position.x === 0 && windowState.position.y === 0 && !isMobile && windowRef.current) {
      const x = (window.innerWidth - windowState.size.width) / 2;
      const y = (window.innerHeight - windowState.size.height - 100) / 2;
      onUpdatePosition({ x: Math.max(0, x), y: Math.max(32, y) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (windowState.isMinimized) {
    return null;
  }

  const isFocused = true; // Focus state handled by z-index

  // For mobile, use full screen
  if (isMobile) {
    return (
      <motion.div
        ref={windowRef}
        className="fixed inset-0 z-50 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="h-12 flex items-center justify-between px-4 border-b border-black/5">
          <button
            onClick={onClose}
            className="text-sm text-accent font-medium focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            Back
          </button>
          <h2 className="text-sm font-medium text-foreground">{title}</h2>
          <div className="w-12" />
        </div>
        <div className="flex-1 overflow-y-auto h-[calc(100vh-3rem)]">{children}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={windowRef}
      className={cn(
        "fixed bg-card backdrop-blur-sm rounded-lg shadow-2xl border border-black/10 overflow-hidden",
        isFocused && "ring-2 ring-accent/20"
      )}
      style={{
        width: windowState.size.width,
        height: windowState.size.height,
        left: windowState.position.x,
        top: windowState.position.y,
        zIndex: windowState.zIndex,
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      onClick={onFocus}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{
        left: 0,
        top: 32,
        right: typeof window !== 'undefined' ? window.innerWidth - windowState.size.width : 0,
        bottom: typeof window !== 'undefined' ? window.innerHeight - windowState.size.height - 64 : 0,
      }}
      onDragEnd={(event, info) => {
        const newX = Math.max(0, Math.min(windowState.position.x + info.offset.x, (typeof window !== 'undefined' ? window.innerWidth : 1920) - windowState.size.width));
        const newY = Math.max(32, Math.min(windowState.position.y + info.offset.y, (typeof window !== 'undefined' ? window.innerHeight : 1080) - windowState.size.height - 64));
        onUpdatePosition({ x: newX, y: newY });
      }}
    >
      {/* Window chrome */}
      <div
        ref={dragHandleRef}
        className="h-8 bg-white/50 backdrop-blur-sm border-b border-black/5 flex items-center justify-between px-3 cursor-move"
      >
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Close window"
          />
          <button
            onClick={onMinimize}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Minimize window"
          />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <h2 className="text-xs font-medium text-foreground flex-1 text-center">{title}</h2>
        <div className="w-20" />
      </div>

      {/* Window content */}
      <div className="flex-1 overflow-y-auto h-[calc(100%-2rem)]">{children}</div>
    </motion.div>
  );
}

