"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Copy, Check } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiInstagram } from "react-icons/si";
import { useState } from "react";

export function ContactHero() {
  const [copied, setCopied] = useState(false);

  const email = "andymanantsoa@myyahoo.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const contacts = [
    {
      name: "Email",
      description: "For opportunities, collaborations, or just saying hello.",
      href: `mailto:${email}`,
      icon: Mail,
      external: false,
    },
    {
      name: "GitHub",
      description: "Explore the things I build.",
      href: "https://github.com/AndyManantsoa",
      icon: SiGithub,
      external: true,
    },
    {
      name: "LinkedIn",
      description: "Connect with me professionally.",
      href: "https://www.linkedin.com/in/AndyManantsoa",
      icon: FaLinkedin,
      external: true,
    },
    {
      name: "Instagram",
      description: "Follow me on Instagram.",
      href: "https://www.instagram.com/AndyManantsoa",
      icon: SiInstagram,
      external: true,
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden px-6 pb-32 pt-32 sm:px-10 lg:px-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neutral-500/5 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-neutral-500">
            CONTACT / LET&apos;S CONNECT
          </p>

          <h1 className="text-6xl font-medium tracking-[-0.04em] text-neutral-900 dark:text-white sm:text-7xl md:text-8xl">
            Let&apos;s make
            <br />
            something <span className="text-neutral-400">interesting.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-500 dark:text-neutral-400 sm:text-lg">
            Whether you have a project in mind, an opportunity to discuss, or
            simply want to connect, I&apos;d be happy to hear from you.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-16"
        >
          <div className="group relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 p-8 dark:border-neutral-800 dark:bg-neutral-900 sm:p-10">
            <div className="relative z-10">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                Prefer email?
              </p>

              <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <a
                  href={`mailto:${email}`}
                  className="text-xl font-medium tracking-tight transition-opacity hover:opacity-60 sm:text-2xl"
                >
                  {email}
                </a>

                <button
                  onClick={copyEmail}
                  className="flex w-fit items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm transition-all hover:bg-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy email
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-neutral-300/50 transition-transform duration-700 group-hover:scale-110 dark:border-neutral-700/50" />

            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-neutral-300/30 dark:border-neutral-700/30" />
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 border-t border-neutral-200 dark:border-neutral-800"
        >
          {contacts.slice(1).map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 border-b border-neutral-200 py-7 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 transition-all group-hover:scale-105 group-hover:border-neutral-400 dark:border-neutral-800 dark:group-hover:border-neutral-600">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-medium">{contact.name}</h2>

                  <p className="mt-1 text-sm text-neutral-500">
                    {contact.description}
                  </p>
                </div>

                <ArrowUpRight className="h-5 w-5 text-neutral-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-900 dark:group-hover:text-white" />
              </a>
            );
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-28 border-t border-neutral-200 pt-10 dark:border-neutral-800"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
              Build it. Break it. Understand it.
            </p>

            <p className="text-sm text-neutral-400">
              Thanks for making it this far.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
