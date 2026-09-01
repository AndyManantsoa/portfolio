"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Code2 } from "lucide-react";
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
      className="relative min-h-screen overflow-hidden bg-white px-4 py-20 dark:bg-slate-950 sm:px-6 lg:px-8"
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
              <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-emerald-400">
                ABOUT ME
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-6xl"
            >
              Hi, I'm Andy Manantsoa.
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

export function BuildBreakSelector() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const paths = [
    {
      id: "build",
      label: "BUILD",
      tagline: "Design - Develop - Deploy",
      description:
        "Explore my projects, experience, and the technologies I use to build modern web or mobile applications.",
      icon: Code2,
      isImage: false,
      href: "/build",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-slate-900",
      textColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-900",
    },
    {
      id: "break",
      label: "BREAK",
      tagline: "Analyze. Exploit. Secure.",
      description:
        "Discover my cybersecurity experience, labs, tools, and security research.",
      isImage: true,
      imageSrc: "/incognito.png",
      href: "/break",
      color: "from-emerald-500 to-emerald-600",
      bgColor:
        "from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-slate-900",
      textColor: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-200 dark:border-emerald-900",
    },
  ];

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="relative mx-auto h-full min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid h-full gap-8 lg:grid-cols-2 lg:gap-12">
          {paths.map((path) => {
            const PathIcon = path.icon;
            return (
              <motion.div
                key={path.id}
                variants={itemVariants}
                className="group flex flex-col items-center justify-center space-y-8 rounded-3xl border-2 border-slate-200 bg-white/50 p-8 backdrop-blur-sm transition-all hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900/50 dark:hover:border-slate-600 lg:p-12"
              >
                <Link href={path.href} className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full flex-col items-center justify-center space-y-8 focus:outline-none"
                  >
                    {/* Icon or Image */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-full bg-gradient-to-br ${path.color} p-8 shadow-xl flex items-center justify-center`}
                    >
                      {path.isImage ? (
                        <Image
                          src={path.imageSrc || "/incognito.png"}
                          alt={path.label}
                          width={80}
                          height={80}
                          className="h-20 w-20"
                        />
                      ) : path.icon ? (
                        React.createElement(path.icon, {
                          className: "h-20 w-20 text-white",
                        })
                      ) : null}
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-4 text-center">
                      <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                        {path.label}
                      </h2>
                      <p className={`text-lg font-semibold ${path.textColor}`}>
                        {path.tagline}
                      </p>
                      <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                        {path.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-6 rounded-full bg-gradient-to-r ${path.color} px-10 py-3 font-semibold text-white shadow-lg transition-shadow hover:shadow-xl`}
                    >
                      Explore
                    </motion.div>
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
