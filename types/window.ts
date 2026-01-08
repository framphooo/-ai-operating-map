export type WindowId =
  | "home"
  | "ai-map"
  | "vertical-ai"
  | "why-pilots-fail"
  | "maturity-timeline"
  | "examples-library"
  | "resources"
  | "about"
  | "contact";

export interface WindowState {
  id: WindowId;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface WindowInfo {
  id: WindowId;
  title: string;
  icon: string;
  defaultSize: { width: number; height: number };
}

export const WINDOW_INFO: Record<WindowId, WindowInfo> = {
  home: {
    id: "home",
    title: "Home",
    icon: "🏠",
    defaultSize: { width: 900, height: 700 },
  },
  "ai-map": {
    id: "ai-map",
    title: "AI Map",
    icon: "🗺️",
    defaultSize: { width: 1100, height: 800 },
  },
  "vertical-ai": {
    id: "vertical-ai",
    title: "Vertical AI",
    icon: "📊",
    defaultSize: { width: 900, height: 700 },
  },
  "why-pilots-fail": {
    id: "why-pilots-fail",
    title: "Why Pilots Fail",
    icon: "⚠️",
    defaultSize: { width: 900, height: 700 },
  },
  "maturity-timeline": {
    id: "maturity-timeline",
    title: "Maturity Timeline",
    icon: "📅",
    defaultSize: { width: 1000, height: 750 },
  },
  "examples-library": {
    id: "examples-library",
    title: "Examples Library",
    icon: "📚",
    defaultSize: { width: 1000, height: 800 },
  },
  resources: {
    id: "resources",
    title: "Resources",
    icon: "🔗",
    defaultSize: { width: 900, height: 700 },
  },
  about: {
    id: "about",
    title: "About Francisco",
    icon: "👤",
    defaultSize: { width: 800, height: 700 },
  },
  contact: {
    id: "contact",
    title: "Contact",
    icon: "✉️",
    defaultSize: { width: 600, height: 500 },
  },
};




