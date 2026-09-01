"use client";

import { motion } from "framer-motion";
import type { SecurityTool } from "@/data/security-tools";
import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  tool: SecurityTool;
  index?: number;
}

export function ToolCard({ tool, index = 0 }: ToolCardProps) {
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
      boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      whileHover="hover"
      className="rounded-lg border border-emerald-700/50 bg-slate-950/50 p-6 backdrop-blur transition-all"
    >
      <motion.div variants={hoverVariants}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-emerald-400">
              {tool.name}
            </h3>
            <p className="mt-1 text-sm text-slate-400">{tool.category}</p>
          </div>
          {tool.proficiency && (
            <span className="rounded-full bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-300">
              {tool.proficiency}
            </span>
          )}
        </div>

        <p className="mt-3 text-slate-300">{tool.purpose}</p>

        <p className="mt-2 text-sm text-slate-400">{tool.usage}</p>
      </motion.div>
    </motion.div>
  );
}

interface ToolGridProps {
  tools: SecurityTool[];
}

export function ToolGrid({ tools }: ToolGridProps) {
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
      {tools.map((tool, index) => (
        <ToolCard key={tool.id} tool={tool} index={index} />
      ))}
    </motion.div>
  );
}
