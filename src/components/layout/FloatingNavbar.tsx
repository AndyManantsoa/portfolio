"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { House, Code2, ShieldCheck, Mail } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
  ariaLabel: string;
}

const navItems: NavItem[] = [
  {
    icon: House,
    href: "/",
    label: "Home",
    ariaLabel: "Navigate to home",
  },
  {
    icon: Code2,
    href: "/build",
    label: "BUILD",
    ariaLabel: "Explore my projects and work",
  },
  {
    icon: ShieldCheck,
    href: "/break",
    label: "BREAK",
    ariaLabel: "Explore my security research",
  },
  {
    icon: Mail,
    href: "/contact",
    label: "Contact",
    ariaLabel: "Get in touch with me",
  },
];

export function FloatingNavbar() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getIsActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2 transform"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Floating pill container */}
      <div className="flex items-center gap-2 rounded-full border border-slate-200/50 bg-white/70 px-2 py-2 shadow-lg backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-950/70">
        {navItems.map((item, index) => {
          const isActive = getIsActive(item.href);
          const IconComponent = item.icon;

          return (
            <motion.div
              key={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              {/* Tooltip */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white dark:bg-slate-100 dark:text-slate-900 mb-2"
                >
                  {item.label}
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-100" />
                </motion.div>
              )}

              {/* Nav item link */}
              <Link href={item.href}>
                <motion.button
                  aria-label={item.ariaLabel}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
                    isActive
                      ? "bg-blue-500/20 text-blue-600 dark:bg-emerald-500/20 dark:text-emerald-400"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white",
                  )}
                >
                  <IconComponent className="h-5 w-5" />

                  {/* Active indicator - subtle glow */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 rounded-full border border-blue-400/50 dark:border-emerald-400/50"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
}
