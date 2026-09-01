"use client";

import Link from "next/link";
import { SiInstagram, SiGmail, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: SiGmail,
      href: "mailto:andymanantsoa@myyahoo.com",
      label: "Email",
    },
    {
      icon: SiGithub,
      href: "https://github.com/AndyManantsoa",
      label: "GitHub",
      target: "_blank",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/AndyManantsoa",
      label: "LinkedIn",
      target: "_blank",
    },
    {
      icon: SiInstagram,
      href: "https://instagram.com/manantso_",
      label: "Instagram",
      target: "_blank",
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around md:gap-12">
          {/* About */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Andy
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Fullstack Web/mobile Developer × Ethical Hacker
            </p>
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
