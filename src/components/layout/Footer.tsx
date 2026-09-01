"use client";

import Link from "next/link";
import { Code, Briefcase, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Code,
      href: "https://github.com",
      label: "GitHub",
      target: "_blank",
    },
    {
      icon: Briefcase,
      href: "https://linkedin.com",
      label: "LinkedIn",
      target: "_blank",
    },
    {
      icon: Mail,
      href: "mailto:hello@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Andy
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Software Developer × Cybersecurity Enthusiast
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Sections
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="/build"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  BUILD
                </Link>
              </li>
              <li>
                <Link
                  href="/break"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  BREAK
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Connect
            </h3>
            <div className="mt-2 flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.target}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
          <p>&copy; {currentYear} Andy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
