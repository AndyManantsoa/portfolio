// TODO: Update with actual experience data

export interface Experience {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "todo-exp-1",
    role: "TODO: Job Title",
    organization: "TODO: Company Name",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    description: "TODO: Add experience description",
    responsibilities: ["TODO: Responsibility 1", "TODO: Responsibility 2"],
    technologies: ["TODO: Tech 1", "TODO: Tech 2"],
    achievements: ["TODO: Achievement 1"],
  },
];

export function getAllExperience(): Experience[] {
  return experiences.sort((a, b) => {
    const endA = a.endDate ? new Date(a.endDate) : new Date();
    const endB = b.endDate ? new Date(b.endDate) : new Date();
    return endB.getTime() - endA.getTime();
  });
}
