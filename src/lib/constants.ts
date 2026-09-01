// Design system constants
export const COLORS = {
  // BUILD - Light, clean aesthetic
  build: {
    primary: "#0F172A", // Slate 900
    accent: "#3B82F6", // Blue
    background: "#F8FAFC", // Slate 50
    surface: "#FFFFFF",
    text: "#0F172A",
    textMuted: "#64748B",
  },
  // BREAK - Dark, technical aesthetic
  break: {
    primary: "#0F172A", // Slate 900
    accent: "#10B981", // Emerald
    background: "#0D1117", // Near black
    surface: "#161B22", // Dark gray
    text: "#E6EDF3",
    textMuted: "#8B949E",
  },
};

export const TYPOGRAPHY = {
  fontFamily: {
    sans: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
    mono: 'var(--font-geist-mono), "Courier New", monospace',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
};

export const SPACING = {
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  "2xl": "4rem",
  "3xl": "6rem",
};

export const TRANSITIONS = {
  fast: "150ms ease-in-out",
  base: "300ms ease-in-out",
  slow: "500ms ease-in-out",
};

export const Z_INDEX = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  overlay: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

// Brand messaging
export const MICROCOPY = {
  landing: {
    hero: "Build it. Break it. Understand it.",
    subtitle: "Software Developer × Cybersecurity Enthusiast",
    description:
      "I create web applications and understand how systems can be attacked, tested, and secured.",
  },
  build: {
    hero: "BUILD",
    tagline: "Turning ideas into working systems.",
    cta: "Explore my work",
  },
  break: {
    hero: "BREAK",
    tagline: "Understand the system. Find the weakness.",
    cta: "Explore my research",
  },
  contact: {
    hero: "Let's build something.",
    subtitle: "Have an idea, problem, or system worth exploring?",
  },
};
