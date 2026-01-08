"use client";

import FGMark from "./FGMark";

interface MenuBarProps {
  focusedWindowTitle: string;
}

export default function MenuBar({ focusedWindowTitle }: MenuBarProps) {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="h-8 bg-white/80 backdrop-blur-md border-b border-black/5 flex items-center justify-between px-4 z-50 relative">
      {/* Left: Logo and app name */}
      <div className="flex items-center gap-2">
        <FGMark size={16} />
        <span className="text-xs font-medium text-foreground">AI Operating Map</span>
      </div>

      {/* Center: Current window title */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <span className="text-xs text-secondary font-medium">{focusedWindowTitle || ""}</span>
      </div>

      {/* Right: System widgets */}
      <div className="flex items-center gap-3">
        {/* Theme toggle placeholder */}
        <button className="w-4 h-4 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors" />
        
        {/* WiFi mock */}
        <div className="w-4 h-4 flex items-center justify-center">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-foreground">
            <path d="M7 0L0 7h2l5-5 5 5h2L7 0z" fill="currentColor" />
          </svg>
        </div>
        
        {/* Battery mock */}
        <div className="w-5 h-3 border border-foreground/30 rounded-sm flex items-center justify-start px-0.5">
          <div className="w-3 h-2 bg-foreground/60 rounded-sm" />
        </div>
        
        {/* Time */}
        <span className="text-xs text-foreground font-medium">{currentTime}</span>
      </div>
    </div>
  );
}




