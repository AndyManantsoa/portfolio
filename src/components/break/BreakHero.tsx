"use client";

import { motion } from "framer-motion";
import { MICROCOPY } from "@/lib/constants";

export function BreakHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="relative min-h-[40vh] overflow-hidden px-4 py-45 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, .05) 25%, rgba(16, 185, 129, .05) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, .05) 75%, rgba(16, 185, 129, .05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight text-emerald-400 sm:text-6xl"
        >
          Let's{" "}
          <span className="bg-gradient-to-r from-yellow-500 via-cyan-300 to-yellow-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_3s_linear_infinite] dark:from-yellow-400 dark:via-cyan-200 dark:to-yellow-400">
            break
          </span>{" "}
          applications and networks together
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-2xl font-semibold text-slate-400"
        >
          {MICROCOPY.break.tagline}
        </motion.p>
      </div>
    </motion.section>
  );
}
