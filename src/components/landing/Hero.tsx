"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MICROCOPY } from "@/lib/constants";

export function LandingHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden bg-white px-4 py-32 dark:bg-slate-950 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Main hero text */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
        >
          Hi, I'm{" "}
          <span className="text-blue-500 dark:text-emerald-400">Andy</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-xl text-slate-600 dark:text-slate-400 sm:text-2xl"
        >
          {MICROCOPY.landing.subtitle}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-500"
        >
          {MICROCOPY.landing.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col gap-4 sm:flex-row justify-center sm:gap-6"
        >
          <Link
            href="/build"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg active:scale-95"
          >
            Explore BUILD
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/break"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-200 bg-transparent px-8 py-3 font-semibold text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"
          >
            Explore BREAK
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-sm text-slate-500 dark:text-slate-500">
            ↓ Scroll to learn more
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function LandingAbout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="bg-slate-50 px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-slate-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="mt-8 grid gap-8 md:grid-cols-2"
        >
          <div>
            <h3 className="text-lg font-semibold text-blue-500 dark:text-emerald-400">
              I Build
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              I'm passionate about creating clean, performant, and user-focused
              web applications. I use modern technologies and best practices to
              turn ideas into reality.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-500 dark:text-emerald-400">
              I Understand
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              I study cybersecurity and security testing to understand how
              systems can be attacked, tested, and secured. This makes me a more
              thoughtful engineer.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-500 dark:text-emerald-400">
              I'm Learning
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Currently deepening my knowledge in security fundamentals,
              penetration testing, and secure application architecture.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-500 dark:text-emerald-400">
              I Care About
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Engineering excellence, security-first thinking, clean code, and
              continuous learning. I believe in building systems that are both
              powerful and secure.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function BuildBreakSelector() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { y: -10, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="px-4 py-20 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={cardVariants}
          className="text-center text-4xl font-bold text-slate-900 dark:text-white"
        >
          Choose Your Path
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {/* BUILD Card */}
          <Link href="/build">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 dark:from-blue-950 dark:to-slate-900 border-2 border-blue-200 dark:border-blue-900 cursor-pointer transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-5xl font-bold text-blue-600 dark:text-blue-400">
                    BUILD
                  </h3>
                  <p className="mt-4 text-lg font-semibold text-slate-700 dark:text-slate-300">
                    Create. Engineer. Ship.
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Explore my projects, experience, and the technologies I use to
                  build modern web applications.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* BREAK Card */}
          <Link href="/break">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-900 p-8 border-2 border-emerald-700 cursor-pointer transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-5xl font-bold text-emerald-400">BREAK</h3>
                  <p className="mt-4 text-lg font-semibold text-slate-300">
                    Analyze. Exploit. Secure.
                  </p>
                </div>
                <p className="text-slate-400">
                  Discover my cybersecurity knowledge, labs, tools, and security
                  research.
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
