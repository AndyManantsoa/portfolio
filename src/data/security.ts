// TODO: Update with actual security knowledge data

export interface SecurityArea {
  name: string;
  description: string;
  topics: string[];
  proficiency?: "learning" | "intermediate" | "advanced";
}

export const securityAreas: SecurityArea[] = [
  {
    name: "Web Security",
    description:
      "TODO: Add description of web security knowledge and learning areas",
    topics: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF"],
    proficiency: "intermediate",
  },
  {
    name: "Network Security",
    description:
      "TODO: Add description of network security knowledge and learning areas",
    topics: ["TCP/IP", "Firewalls", "VPNs", "Network Protocols"],
    proficiency: "learning",
  },
  {
    name: "TODO: Security Area",
    description: "TODO: Add description",
    topics: ["TODO: Topic 1", "TODO: Topic 2"],
    proficiency: "learning",
  },
];

export function getSecurityAreaByName(name: string): SecurityArea | undefined {
  return securityAreas.find((a) => a.name.toLowerCase() === name.toLowerCase());
}

export function getAllSecurityAreas(): SecurityArea[] {
  return securityAreas;
}
