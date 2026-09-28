"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** A shared bottom-to-top entrance, triggered once when content enters view. */
export function Reveal({ children, delay = 0, className }: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.1 + delay * 1.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
