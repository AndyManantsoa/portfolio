"use client";

import { motion } from "framer-motion";
import { MICROCOPY } from "@/lib/constants";

export function BuildHero() {
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
      className="relative min-h-[40vh] overflow-hidden bg-white px-4 py-45 dark:bg-slate-950 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background gradient - BUILD aesthetic (clean, structured) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />

      <div className="relative mx-auto max-w-4xl">
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
        >
          Let's build something{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_3s_linear_infinite] dark:from-blue-400 dark:via-cyan-200 dark:to-blue-400">
            amazing
          </span>{" "}
          together!
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-2xl font-semibold text-slate-600 dark:text-slate-400"
        >
          {MICROCOPY.build.tagline}
        </motion.p>
      </div>
    </motion.section>
  );
}
