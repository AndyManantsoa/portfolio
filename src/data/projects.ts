import type { StaticImageData } from "next/image";
import inventoryImage from "../../public/projects/inventory.png";
import churchImage from "../../public/projects/church.png";
import crsImage from "../../public/projects/crs.png";

export type Project = {
  slug: string;
  title: string;
  description: string;
  image?: StaticImageData;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  category?: string;
  year?: number;
  overview?: string;
  role?: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  keyFeatures?: string[];
  technicalChallenges?: string[];
  screenshots?: { src: string; alt: string; caption?: string }[];
  status: "live" | "coming-soon";
};

export const projects: Project[] = [
  {
    slug: "inventory-management",
    title: "Gentle Park Inventory",
    description:
      "An inventory management app for organizing clothing products and keeping track of stock.",
    image: inventoryImage,
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    demo: "https://gentle-park-inventory.vercel.app/",
    category: "Full stack",
    year: 2026,
    status: "live",
    featured: true,
  },
  {
    slug: "church-voting-app",
    title: "Amodar Church",
    description:
      "A church song app for browsing songs, voting on selections, and organizing music for church services.",
    image: churchImage,
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    demo: "https://amodar-church.vercel.app/",
    category: "Full stack",
    year: 2026,
    status: "live",
    featured: true,
  },
  {
    slug: "elective-course-recommendation",
    title: "CRS — Course Recommendation System",
    description:
      "A platform that helps students explore courses based on their interests, academic profile, and career goals.",
    image: crsImage,
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    demo: "https://crs-reccommender.vercel.app/",
    category: "Full stack",
    year: 2026,
    status: "live",
    featured: true,
  },
  {
    slug: "kidspark",
    title: "KidSpark",
    description:
      "A learning platform for children.",
    technologies: [],
    status: "coming-soon",
  },
];
