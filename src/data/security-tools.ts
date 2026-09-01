// TODO: Update with actual security tools data

export interface SecurityTool {
  id: string;
  name: string;
  category: string;
  purpose: string;
  usage: string;
  proficiency?: "beginner" | "intermediate" | "advanced";
  relatedLabs?: string[];
}

export const securityTools: SecurityTool[] = [
  {
    id: "nmap",
    name: "Nmap",
    category: "Reconnaissance",
    purpose: "Network scanning and host discovery",
    usage: "TODO: How you use this tool",
    proficiency: "intermediate",
  },
  {
    id: "burp-suite",
    name: "Burp Suite",
    category: "Web Security",
    purpose: "Web application security testing",
    usage: "TODO: How you use this tool",
    proficiency: "beginner",
  },
  {
    id: "wireshark",
    name: "Wireshark",
    category: "Network Analysis",
    purpose: "Network packet analysis",
    usage: "TODO: How you use this tool",
    proficiency: "intermediate",
  },
  {
    id: "todo-tool",
    name: "TODO: Tool Name",
    category: "TODO: Category",
    purpose: "TODO: Purpose",
    usage: "TODO: How you use this tool",
  },
];

export function getToolsByCategory(category: string): SecurityTool[] {
  return securityTools.filter(
    (t) => t.category.toLowerCase() === category.toLowerCase(),
  );
}

export function getAllTools(): SecurityTool[] {
  return securityTools;
}

export function getToolById(id: string): SecurityTool | undefined {
  return securityTools.find((t) => t.id === id);
}
