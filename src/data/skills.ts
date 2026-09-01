// TODO: Update with actual skills data

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
  relatedProjects?: string[];
}

export const skillsCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React/Next.js", proficiency: "expert" },
      { name: "TypeScript", proficiency: "advanced" },
      { name: "Tailwind CSS", proficiency: "advanced" },
      { name: "Framer Motion", proficiency: "intermediate" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", proficiency: "advanced" },
      { name: "TODO: Technology", proficiency: "beginner" },
    ],
  },
  {
    name: "TODO: Add Category",
    skills: [{ name: "TODO: Technology", proficiency: "beginner" }],
  },
];

export function getSkillsByCategory(categoryName: string): Skill[] {
  const category = skillsCategories.find(
    (c) => c.name.toLowerCase() === categoryName.toLowerCase(),
  );
  return category?.skills || [];
}

export function getAllSkills(): Skill[] {
  return skillsCategories.flatMap((c) => c.skills);
}
