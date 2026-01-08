"use client";

import { WindowId, WindowState, WINDOW_INFO } from "@/types/window";
import { motion } from "framer-motion";

interface DockProps {
  windows: Map<WindowId, WindowState>;
  onOpenWindow: (windowId: WindowId) => void;
  focusedWindowId: WindowId | null;
}

export default function Dock({ windows, onOpenWindow, focusedWindowId }: DockProps) {
  const dockItems: WindowId[] = [
    "home",
    "ai-map",
    "vertical-ai",
    "why-pilots-fail",
    "maturity-timeline",
    "examples-library",
    "resources",
    "about",
    "contact",
  ];

  const isWindowOpen = (windowId: WindowId) => {
    const window = windows.get(windowId);
    return window?.isOpen && !window?.isMinimized;
  };

  return (
    <div className="h-16 flex items-center justify-center pb-2 z-40">
      <motion.div
        className="h-14 bg-white/60 backdrop-blur-lg rounded-2xl px-3 border border-black/5 shadow-lg flex items-end gap-2"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {dockItems.map((windowId) => {
          const info = WINDOW_INFO[windowId];
          const isOpen = isWindowOpen(windowId);
          const isFocused = focusedWindowId === windowId;

          return (
            <motion.button
              key={windowId}
              onClick={() => onOpenWindow(windowId)}
              className="relative w-12 h-12 flex items-center justify-center rounded-xl hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              whileHover={{ scale: 1.2, y: -8 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Open ${info.title}`}
            >
              <span className="text-2xl">{info.icon}</span>
              {isOpen && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-foreground rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}




