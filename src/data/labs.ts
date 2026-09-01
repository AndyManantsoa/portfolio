// TODO: Update with actual labs data

export interface Lab {
  id: string;
  name: string;
  platform:
    | "THM"
    | "HTB"
    | "PentesterLab"
    | "PortSwigger"
    | "Personal"
    | "Other";
  targetConcept: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Insane";
  techniquesLearned: string[];
  toolsUsed: string[];
  result?: string;
  lessonsLearned?: string[];
  date?: string;
}

export const labs: Lab[] = [
  {
    id: "todo-lab-1",
    name: "TODO: Lab Name",
    platform: "THM",
    targetConcept: "TODO: What this lab teaches",
    difficulty: "Easy",
    techniquesLearned: ["TODO: Technique 1", "TODO: Technique 2"],
    toolsUsed: ["TODO: Tool 1"],
    result: "TODO: Completed/In Progress",
    lessonsLearned: ["TODO: Key lesson"],
  },
];

export function getLabsByPlatform(platform: Lab["platform"]): Lab[] {
  return labs.filter((l) => l.platform === platform);
}

export function getLabsByDifficulty(difficulty: Lab["difficulty"]): Lab[] {
  return labs.filter((l) => l.difficulty === difficulty);
}

export function getAllLabs(): Lab[] {
  return labs.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });
}

export function getLabById(id: string): Lab | undefined {
  return labs.find((l) => l.id === id);
}
