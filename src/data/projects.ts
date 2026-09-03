export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "elective-course-recommendation",
    title: "Elective Course Recommendation System",
    description:
      "An intelligent platform that helps students choose suitable elective courses based on their interests, academic profile, and career goals.",
    image: "/projects/crs.png",
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/yourusername/project",
    demo: "https://example.com",
    featured: true,
  },

  {
    slug: "inventory-management",
    title: "Inventory Management System",
    description:
      "A full-stack inventory management application for managing products, stock levels, and business operations.",
    image: "/projects/inventory.png",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/project",
    demo: "https://example.com",
    featured: true,
  },

  {
    slug: "church-voting-app",
    title: "Church Song Voting App",
    description:
      "A web application that allows members to vote for songs and helps organize song selections for church services.",
    image: "/projects/church.png",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/yourusername/project",
    featured: false,
  },

  {
    slug: "money-exchange-platform",
    title: "Student Money Exchange Platform",
    description:
      "A concept for facilitating currency exchange between students using local payment ecosystems such as Mvola and UPI.",
    image: "/projects/exchange.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/yourusername/project",
    featured: true,
  },
];
