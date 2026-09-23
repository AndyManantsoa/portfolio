export type Project = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  status: "live" | "coming-soon";
};

export const projects: Project[] = [
  {
    slug: "inventory-management",
    title: "Gentle Park Inventory",
    description:
      "An inventory management app for organizing clothing products and keeping track of stock.",
    image: "/projects/inventory.png",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    demo: "https://gentle-park-inventory.vercel.app/",
    status: "live",
    featured: true,
  },
  {
    slug: "church-voting-app",
    title: "Amodar Church",
    description:
      "A church song app for browsing songs, voting on selections, and organizing music for church services.",
    image: "/projects/church.png",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    demo: "https://amodar-church.vercel.app/",
    status: "live",
    featured: true,
  },
  {
    slug: "elective-course-recommendation",
    title: "CRS — Course Recommendation System",
    description:
      "A platform that helps students explore courses based on their interests, academic profile, and career goals.",
    image: "/projects/crs.png",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    demo: "https://crs-reccommender.vercel.app/",
    status: "live",
    featured: true,
  },
  {
    slug: "kidspark",
    title: "KidSpark",
    description:
      "An app for children to learn. More details and a live link are coming soon.",
    technologies: [],
    status: "coming-soon",
  },
];
