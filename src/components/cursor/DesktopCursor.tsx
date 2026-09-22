"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./DesktopCursor.module.css";

const interactive = 'a[href], button:not(:disabled), [role="button"], summary';
const native = 'input, textarea, select, [contenteditable]:not([contenteditable="false"]), iframe, [data-cursor="native"], [disabled], [aria-disabled="true"]';

export function DesktopCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const ripple = rippleRef.current;
    if (!root || !dot || !ring || !ripple) return;

    const media = window.matchMedia(
      "(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let enabled = media.matches;
    let visible = false;
    let frame = 0;
    let lastTime = 0;
    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let pulse: Animation | undefined;

    const hide = () => {
      visible = false;
      root.dataset.visible = "false";
      document.documentElement.removeAttribute("data-custom-cursor");
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      pulse?.cancel();
    };

    const classify = (target: Element | null) => {
      if (!target || target.closest(native)) {
        hide();
        return false;
      }
      // Navbar takes precedence over every child, icon, and destination.
      root.dataset.mode = target.closest('[data-cursor="navbar"]')
        ? "navbar"
        : target.closest('[data-cursor="build"]')
          ? "build"
          : target.closest('[data-cursor="break"]')
            ? "break"
            : "default";
      root.dataset.interactive = String(Boolean(target.closest(interactive)));
      return true;
    };

    const render = (time: number) => {
      frame = 0;
      if (!visible) return;
      const dt = lastTime ? Math.min(time - lastTime, 64) : 16;
      lastTime = time;
      const follow = 1 - Math.exp(-dt / 65);
      ringX += (x - ringX) * follow;
      ringY += (y - ringY) * follow;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      if (Math.abs(x - ringX) + Math.abs(y - ringY) > 0.1) {
        frame = requestAnimationFrame(render);
      } else {
        lastTime = 0;
      }
    };

    const move = (event: PointerEvent) => {
      if (!enabled || event.pointerType !== "mouse") {
        hide();
        return;
      }
      x = event.clientX;
      y = event.clientY;
      if (!classify(event.target instanceof Element ? event.target : null)) return;
      if (!visible) {
        ringX = x;
        ringY = y;
        dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      visible = true;
      root.dataset.visible = "true";
      document.documentElement.setAttribute("data-custom-cursor", "active");
      if (!frame) frame = requestAnimationFrame(render);
    };

    const click = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        hide();
        return;
      }
      if (!visible || event.button !== 0) return;
      pulse?.cancel();
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      pulse = ripple.animate(
        [
          { transform: "translate(-50%, -50%) scale(0.5)", opacity: 0.6 },
          { transform: "translate(-50%, -50%) scale(1.65)", opacity: 0 },
        ],
        { duration: 320, easing: "ease-out" },
      );
    };

    const leave = (event: PointerEvent) => {
      if (!event.relatedTarget) hide();
    };
    const visibility = () => { if (document.hidden) hide(); };
    const preference = () => { enabled = media.matches; hide(); };
    const keyboard = (event: KeyboardEvent) => { if (event.key === "Tab") hide(); };
    const scroll = () => {
      if (visible) classify(document.elementFromPoint(x, y));
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", click, { passive: true });
    window.addEventListener("pointerout", leave);
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", keyboard);
    window.addEventListener("scroll", scroll, true);
    document.addEventListener("visibilitychange", visibility);
    media.addEventListener("change", preference);
    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", click);
      window.removeEventListener("pointerout", leave);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", keyboard);
      window.removeEventListener("scroll", scroll, true);
      document.removeEventListener("visibilitychange", visibility);
      media.removeEventListener("change", preference);
    };
  }, [pathname]);

  return (
    <div ref={rootRef} className={styles.cursor} aria-hidden="true" data-visible="false">
      <div ref={dotRef} className={styles.position}><span className={styles.dot} /></div>
      <div ref={ringRef} className={styles.position}>
        <span className={styles.ring} />
        <span className={styles.crosshair}><i /><i /><i /><i /></span>
      </div>
      <div ref={rippleRef} className={styles.ripple} />
    </div>
  );
}
