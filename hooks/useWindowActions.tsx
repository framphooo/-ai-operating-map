"use client";

import { createContext, useContext, ReactNode } from "react";
import { WindowId } from "@/types/window";

interface WindowActionsContextType {
  openWindow: (windowId: WindowId) => void;
}

export const WindowActionsContext = createContext<WindowActionsContextType | null>(null);

export function WindowActionsProvider({ 
  children, 
  openWindow 
}: { 
  children: ReactNode; 
  openWindow: (windowId: WindowId) => void;
}) {
  return (
    <WindowActionsContext.Provider value={{ openWindow }}>
      {children}
    </WindowActionsContext.Provider>
  );
}

export function useWindowActions() {
  const context = useContext(WindowActionsContext);
  if (!context) {
    throw new Error("useWindowActions must be used within WindowActionsProvider");
  }
  return context;
}

