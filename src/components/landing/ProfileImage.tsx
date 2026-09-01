"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export function ProfileImage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 10, y: y * 10 });
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      className="relative mx-auto w-full max-w-md lg:max-w-lg"
    >
      {/* Subtle glow background */}
      <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-blue-200/30 to-emerald-200/30 blur-3xl dark:from-blue-900/20 dark:to-emerald-900/20" />

      {/* Image container with organic shape */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        className="relative aspect-square overflow-hidden"
        style={{
          clipPath:
            "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
        }}
      >
        {/* Profile image with organic blob shape */}
        <Image
          src="/profile.jpg"
          alt="Andy's profile picture"
          fill
          className="h-full w-full object-cover"
          priority
        />
      </motion.div>

      {/* Subtle border and glow */}
      <div
        className="absolute inset-0 rounded-full border-2 border-blue-300/50 dark:border-emerald-500/30"
        style={{
          clipPath:
            "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
        }}
      />
    </motion.div>
  );
}
