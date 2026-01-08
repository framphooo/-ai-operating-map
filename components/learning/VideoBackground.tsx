"use client";

import { ReactNode } from "react";

interface VideoBackgroundProps {
  children: ReactNode;
  videoSrc?: string;
  fallbackType?: "computation" | "relationships";
}

export default function VideoBackground({ children, videoSrc, fallbackType = "computation" }: VideoBackgroundProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 opacity-30">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          // Fallback: Subtle animated gradient (placeholder until video is provided)
          // This should be replaced with actual video files
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-500/5 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
          </div>
        )}
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}

