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
      className="relative min-h-[60vh] overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
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
          BREAK
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-2xl font-semibold text-emerald-400"
        >
          {MICROCOPY.break.tagline}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg text-slate-300"
        >
          I study cybersecurity and security testing to understand how systems
          work, where they fail, and how to secure them. This section contains
          my labs, writeups, security research, and practical security
          knowledge.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          <div className="rounded-lg border border-emerald-700/50 bg-slate-950/50 p-6 backdrop-blur">
            <div className="text-3xl font-bold text-emerald-400">5+</div>
            <p className="mt-2 text-slate-400">Security Areas Studied</p>
          </div>
          <div className="rounded-lg border border-emerald-700/50 bg-slate-950/50 p-6 backdrop-blur">
            <div className="text-3xl font-bold text-emerald-400">10+</div>
            <p className="mt-2 text-slate-400">Tools & Platforms</p>
          </div>
          <div className="rounded-lg border border-emerald-700/50 bg-slate-950/50 p-6 backdrop-blur">
            <div className="text-3xl font-bold text-emerald-400">20+</div>
            <p className="mt-2 text-slate-400">Labs Completed</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
