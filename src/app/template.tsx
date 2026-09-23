"use client";

import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Templates remount on navigation, giving every route the same quiet entrance.
export default function PageTemplate({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: reduceMotion ? 1 : 0.85 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.25 }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
