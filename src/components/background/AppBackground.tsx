"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

const Lightfall = dynamic(() => import("./Lightfall"), { ssr: false });
const colors = ["#8080e5", "#27ff6c", "#0a5d8b"];
const motionQuery = "(prefers-reduced-motion: reduce)";
const subscribe = (callback: () => void) => {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};

export function AppBackground() {
  const reducedMotion = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );

  return (
    <div className="app-background" aria-hidden="true">
      {!reducedMotion && (
        <Lightfall
          colors={colors}
          backgroundColor="#0A29FF"
          speed={0.5}
          streakCount={2}
          streakWidth={0.9}
          streakLength={1}
          density={0.4}
          twinkle={1}
          glow={1}
          backgroundGlow={0.5}
          zoom={3}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={1}
          dpr={1}
        />
      )}
      <div className="app-background-scrim" />
    </div>
  );
}
