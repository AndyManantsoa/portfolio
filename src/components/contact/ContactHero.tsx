"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/m";
import { Mail, Code, Briefcase, ExternalLink } from "lucide-react";

export function ContactHero() {
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

  const contactMethods = [
    {
      name: "Email",
      href: "mailto:andymanantsoa@myyahoo.com",
      icon: Mail,
    },
    {
      name: "GitHub",
      href: "https://github.com/AndyManantsoa",
      icon: Code,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/AndyManantsoa",
      icon: Briefcase,
    },
  ];

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden px-4 py-32 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background gradient - neutral, inviting */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />

      <div className="relative mx-auto max-w-4xl">
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
        >
          Let's get in touch!
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400"
        >
          I'm always interested in discussing web development, cybersecurity,
          new technologies, or potential opportunities. Feel free to reach out!
        </motion.p>

        {/* Contact Methods */}
        <motion.div variants={itemVariants} className="mt-12 space-y-4">
          {/* Email */}
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border-2 border-blue-200 bg-white p-6 transition-all hover:border-blue-400 hover:shadow-lg dark:border-slate-700 dark:bg-slate-950 dark:hover:border-blue-500"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {method.name}
                    </h3>
                  </div>
                  <ExternalLink className="ml-auto h-4 w-4 text-slate-400" />
                </div>
              </a>
            );
          })}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900"
        >
          <p className="text-center text-slate-600 dark:text-slate-400">
            <span className="block font-semibold text-slate-900 dark:text-white">
              BUILD • BREAK • UNDERSTAND
            </span>
            <span className="mt-2 block">
              Whatever the system, I'm curious enough to understand it.
            </span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
