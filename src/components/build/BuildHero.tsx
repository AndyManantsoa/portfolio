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
      className="relative min-h-[60vh] overflow-hidden bg-white px-4 py-20 dark:bg-slate-950 sm:px-6 lg:px-8"
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
          BUILD
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-2xl font-semibold text-blue-600 dark:text-blue-400"
        >
          {MICROCOPY.build.tagline}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400"
        >
          I create modern web applications with clean code, thoughtful design,
          and a focus on user experience. Here you'll find projects that
          showcase my skills in full-stack development, frontend design, and
          software engineering best practices.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          <div className="rounded-lg bg-white/50 p-6 backdrop-blur dark:bg-slate-950/50">
            <div className="text-3xl font-bold text-blue-500 dark:text-blue-400">
              10+
            </div>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Projects Built
            </p>
          </div>
          <div className="rounded-lg bg-white/50 p-6 backdrop-blur dark:bg-slate-950/50">
            <div className="text-3xl font-bold text-blue-500 dark:text-blue-400">
              5+
            </div>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Years Learning
            </p>
          </div>
          <div className="rounded-lg bg-white/50 p-6 backdrop-blur dark:bg-slate-950/50">
            <div className="text-3xl font-bold text-blue-500 dark:text-blue-400">
              15+
            </div>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Technologies
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
