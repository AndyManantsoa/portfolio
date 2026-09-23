"use client";

import { motion } from "framer-motion";
import { MICROCOPY } from "@/lib/constants";
import { ProfileImage } from "./ProfileImage";

export function LandingHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden bg-transparent px-4 py-20 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 pt-8 lg:px-8 lg:pt-16">
        {/* Two-column layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: Profile Image */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <ProfileImage />
          </motion.div>

          {/* RIGHT: Introduction */}
          <motion.div
            variants={containerVariants}
            className="order-1 lg:order-2 space-y-6"
          >
            <motion.div variants={itemVariants}>
              <p className="text-sm font-mono font-medium tracking-widest text-blue-600 dark:text-emerald-400">
                ABOUT ME
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white lg:text-6xl"
            >
              Hi, I&apos;m Andy Manantsoa.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl font-semibold text-slate-700 dark:text-slate-300"
            >
              {MICROCOPY.landing.subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {MICROCOPY.landing.description}
            </motion.p>

            {/* Technical details as metadata */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {[
                "Full-Stack Development",
                "Web Penetration Testing",
                "Network Security",
                "Web Security",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-100/50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          <div className="text-sm text-slate-500 dark:text-slate-400">
            ↓ Scroll to explore
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export { BuildBreakSelector } from "./BuildBreakSelector";
