"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Writeup } from "@/data/writeups";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface WriteupCardProps {
  writeup: Writeup;
  index?: number;
}

export function WriteupCard({ writeup, index = 0 }: WriteupCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: (index ?? 0) * 0.1 },
    },
  };

  const hoverVariants = {
    hover: {
      y: -4,
      transition: { duration: 0.3 },
    },
  };

  const difficultyColors = {
    Easy: "bg-green-900/30 text-green-300",
    Medium: "bg-yellow-900/30 text-yellow-300",
    Hard: "bg-orange-900/30 text-orange-300",
    Insane: "bg-red-900/30 text-red-300",
  };

  return (
    <motion.div
      variants={containerVariants}
      whileHover="hover"
      className="group rounded-lg border border-emerald-700/50 bg-slate-950/50 p-6 backdrop-blur transition-all"
    >
      <motion.div variants={hoverVariants}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
              {writeup.title}
            </h3>
            <p className="mt-1 text-sm text-slate-400">{writeup.category}</p>
          </div>
          {writeup.difficulty && (
            <span
              className={`flex-shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                difficultyColors[writeup.difficulty]
              }`}
            >
              {writeup.difficulty}
            </span>
          )}
        </div>

        <p className="mt-3 text-slate-300">{writeup.description}</p>

        {writeup.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {writeup.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-emerald-900/20 px-2 py-1 text-xs text-emerald-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-slate-500">{formatDate(writeup.date)}</p>
          <ArrowRight className="h-4 w-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
        </div>
      </motion.div>
    </motion.div>
  );
}

interface WriteupGridProps {
  writeups: Writeup[];
}

export function WriteupGrid({ writeups }: WriteupGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {writeups.map((writeup, index) => (
        <Link key={writeup.slug} href={`/break/writeups/${writeup.slug}`}>
          <WriteupCard writeup={writeup} index={index} />
        </Link>
      ))}
    </motion.div>
  );
}
