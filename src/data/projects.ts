// TODO: Update with actual project data

export interface Project {
  slug: string;
  name: string;
  description: string;
  shortDescription?: string;
  problemSolved: string;
  technologies: string[];
  keyFeatures: string[];
  github?: string;
  demo?: string;
  images?: string[];
  challenges: string[];
  lessonsLearned: string[];
  year: number;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "todo-project-1",
    name: "TODO: Project Name",
    description: "TODO: Add detailed project description",
    shortDescription: "TODO: Add short description",
    problemSolved: "TODO: Add problem solved",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    keyFeatures: ["TODO: Feature 1", "TODO: Feature 2"],
    github: "#",
    demo: "#",
    challenges: ["TODO: Challenge 1"],
    lessonsLearned: ["TODO: Lesson 1"],
    year: 2024,
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).slice(0, 3);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => b.year - a.year);
}
