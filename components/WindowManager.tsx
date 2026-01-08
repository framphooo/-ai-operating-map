"use client";

import { WindowId, WindowState } from "@/types/window";
import Window from "./Window";
import HomeWindow from "./windows/HomeWindow";
import AIMapWindow from "./windows/AIMapWindow";
import VerticalAIWindow from "./windows/VerticalAIWindow";
import WhyPilotsFailWindow from "./windows/WhyPilotsFailWindow";
import MaturityTimelineWindow from "./windows/MaturityTimelineWindow";
import ExamplesLibraryWindow from "./windows/ExamplesLibraryWindow";
import ResourcesWindow from "./windows/ResourcesWindow";
import AboutWindow from "./windows/AboutWindow";
import ContactWindow from "./windows/ContactWindow";
import { WINDOW_INFO } from "@/types/window";
import { WindowActionsProvider } from "@/hooks/useWindowActions";

interface WindowManagerProps {
  windows: Map<WindowId, WindowState>;
  focusedWindowId: WindowId | null;
  onClose: (windowId: WindowId) => void;
  onMinimize: (windowId: WindowId) => void;
  onFocus: (windowId: WindowId) => void;
  onUpdatePosition: (windowId: WindowId, position: { x: number; y: number }) => void;
  openWindow: (windowId: WindowId) => void;
}

const windowComponents: Record<WindowId, React.ComponentType> = {
  home: HomeWindow,
  "ai-map": AIMapWindow,
  "vertical-ai": VerticalAIWindow,
  "why-pilots-fail": WhyPilotsFailWindow,
  "maturity-timeline": MaturityTimelineWindow,
  "examples-library": ExamplesLibraryWindow,
  resources: ResourcesWindow,
  about: AboutWindow,
  contact: ContactWindow,
};

export default function WindowManager({
  windows,
  focusedWindowId,
  onClose,
  onMinimize,
  onFocus,
  onUpdatePosition,
  openWindow,
}: WindowManagerProps) {
  return (
    <WindowActionsProvider openWindow={openWindow}>
      {Array.from(windows.entries()).map(([windowId, windowState]) => {
        if (!windowState.isOpen) return null;

        const WindowComponent = windowComponents[windowId];
        const windowInfo = WINDOW_INFO[windowId];

        return (
          <Window
            key={windowId}
            windowState={windowState}
            title={windowInfo.title}
            onClose={() => onClose(windowId)}
            onMinimize={() => onMinimize(windowId)}
            onFocus={() => onFocus(windowId)}
            onUpdatePosition={(position) => onUpdatePosition(windowId, position)}
          >
            <WindowComponent />
          </Window>
        );
      })}
    </WindowActionsProvider>
  );
}

