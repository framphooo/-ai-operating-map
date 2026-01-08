"use client";

import { useState, useCallback, useEffect } from "react";
import MenuBar from "./MenuBar";
import Dock from "./Dock";
import WindowManager from "./WindowManager";
import { WindowId, WindowState, WINDOW_INFO } from "@/types/window";

export default function DesktopShell() {
  const [windows, setWindows] = useState<Map<WindowId, WindowState>>(new Map());
  const [focusedWindowId, setFocusedWindowId] = useState<WindowId | null>(null);
  const [nextZIndex, setNextZIndex] = useState(100);

  // Initialize home window as open by default
  useEffect(() => {
    const homeWindow = WINDOW_INFO.home;
    setWindows(
      new Map([
        [
          "home",
          {
            id: "home",
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
            zIndex: 100,
            position: { x: 0, y: 0 },
            size: homeWindow.defaultSize,
          },
        ],
      ])
    );
    setFocusedWindowId("home");
  }, []);

  const openWindow = useCallback((windowId: WindowId) => {
    setWindows((prev) => {
      const newWindows = new Map(prev);
      const windowInfo = WINDOW_INFO[windowId];

      if (newWindows.has(windowId)) {
        // Window exists, restore it
        const existing = newWindows.get(windowId)!;
        newWindows.set(windowId, {
          ...existing,
          isOpen: true,
          isMinimized: false,
        });
      } else {
        // Create new window
        newWindows.set(windowId, {
          id: windowId,
          isOpen: true,
          isMinimized: false,
          isMaximized: false,
          zIndex: nextZIndex,
          position: { x: 0, y: 0 },
          size: windowInfo.defaultSize,
        });
      }

      return newWindows;
    });

    setFocusedWindowId(windowId);
    setNextZIndex((prev) => prev + 1);
  }, [nextZIndex]);

  const closeWindow = useCallback((windowId: WindowId) => {
    setWindows((prev) => {
      const newWindows = new Map(prev);
      const window = newWindows.get(windowId);
      if (window) {
        newWindows.set(windowId, { ...window, isOpen: false });
      }
      return newWindows;
    });

    if (focusedWindowId === windowId) {
      // Focus next window or null
      const openWindows = Array.from(windows.values()).filter(
        (w) => w.isOpen && !w.isMinimized && w.id !== windowId
      );
      if (openWindows.length > 0) {
        const topWindow = openWindows.sort((a, b) => b.zIndex - a.zIndex)[0];
        setFocusedWindowId(topWindow.id);
      } else {
        setFocusedWindowId(null);
      }
    }
  }, [focusedWindowId, windows]);

  const minimizeWindow = useCallback((windowId: WindowId) => {
    setWindows((prev) => {
      const newWindows = new Map(prev);
      const window = newWindows.get(windowId);
      if (window) {
        newWindows.set(windowId, { ...window, isMinimized: true });
      }
      return newWindows;
    });

    if (focusedWindowId === windowId) {
      const openWindows = Array.from(windows.values()).filter(
        (w) => w.isOpen && !w.isMinimized && w.id !== windowId
      );
      if (openWindows.length > 0) {
        const topWindow = openWindows.sort((a, b) => b.zIndex - a.zIndex)[0];
        setFocusedWindowId(topWindow.id);
      } else {
        setFocusedWindowId(null);
      }
    }
  }, [focusedWindowId, windows]);

  const focusWindow = useCallback((windowId: WindowId) => {
    setFocusedWindowId(windowId);
    setWindows((prev) => {
      const newWindows = new Map(prev);
      const window = newWindows.get(windowId);
      if (window) {
        newWindows.set(windowId, { ...window, zIndex: nextZIndex });
      }
      return newWindows;
    });
    setNextZIndex((prev) => prev + 1);
  }, [nextZIndex]);

  const updateWindowPosition = useCallback((windowId: WindowId, position: { x: number; y: number }) => {
    setWindows((prev) => {
      const newWindows = new Map(prev);
      const window = newWindows.get(windowId);
      if (window) {
        newWindows.set(windowId, { ...window, position });
      }
      return newWindows;
    });
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col desktop-bg overflow-hidden">
        <MenuBar focusedWindowTitle={focusedWindowId ? WINDOW_INFO[focusedWindowId].title : ""} />
        
        <div className="flex-1 relative overflow-hidden">
          <WindowManager
            windows={windows}
            focusedWindowId={focusedWindowId}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onFocus={focusWindow}
            onUpdatePosition={updateWindowPosition}
            openWindow={openWindow}
          />
        </div>

        <Dock
          windows={windows}
          onOpenWindow={openWindow}
          focusedWindowId={focusedWindowId}
        />
    </div>
  );
}

