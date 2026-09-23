export const methodology = ["Reconnaissance", "Enumeration", "Attack surface", "Testing", "Validation", "Impact", "Remediation"];

export interface Writeup {
  slug: string;
  title: string;
  category: string;
  date?: string;
  difficulty?: "Easy" | "Medium" | "Hard" | "Insane";
  description: string;
  tags: string[];
  tools: string[];
  status: "Lab outline" | "Completed lab" | "Authorized work";
  target: string;
  scope: string;
  objective: string;
  methodology: string[];
  findings?: string[];
  impact?: string;
  reproduction?: string[];
  remediation?: string[];
}

// Replace these clearly labeled outlines with evidence from completed, authorized labs.
// Leave results empty until validated; these entries do not claim completed testing.
export const writeups: Writeup[] = [
  {
    slug: "authentication-session-testing",
    title: "Authentication & Session Testing",
    category: "Web application security",
    description: "A lab plan for testing authentication flows, sessions, authorization, and common access-control weaknesses.",
    tags: ["Authentication", "Session Management", "Authorization"],
    tools: ["Burp Suite", "Browser DevTools"],
    status: "Lab outline",
    target: "An intentionally vulnerable web application in a local learning environment; target not yet selected.",
    scope: "Lab-owned accounts and the local application only. No third-party systems or real user data.",
    objective: "Compare expected session and access-control behavior with observed responses using separate lab accounts.",
    methodology,
  },
  {
    slug: "idor-access-control-lab",
    title: "IDOR / Broken Access Control Lab",
    category: "Access control",
    description: "A controlled lab outline for checking object ownership and permissions between test accounts.",
    tags: ["IDOR", "Authorization", "Object Ownership"],
    tools: ["Burp Suite", "Browser DevTools"],
    status: "Lab outline",
    target: "An intentionally vulnerable local API with two test accounts; target not yet selected.",
    scope: "Objects created by the two lab accounts. Only the explicitly scoped local API.",
    objective: "Verify whether the server enforces ownership when a test account requests another lab account’s object.",
    methodology,
  },
  {
    slug: "web-enumeration-lab",
    title: "Web Enumeration Lab",
    category: "Attack surface mapping",
    description: "A learning exercise for mapping routes, inputs, and exposed functionality in a local lab.",
    tags: ["Enumeration", "HTTP", "Attack Surface"],
    tools: ["Browser DevTools", "Burp Suite", "curl"],
    status: "Lab outline",
    target: "A locally hosted learning application; target not yet selected.",
    scope: "The local lab host and its documented routes. No external domains or services.",
    objective: "Build a route and input inventory, then identify hypotheses for scoped follow-up tests.",
    methodology,
  },
];

export function getWriteupBySlug(slug: string) { return writeups.find(w => w.slug === slug); }
export function getWriteupsByCategory(category: string) { return writeups.filter(w => w.category.toLowerCase() === category.toLowerCase()); }
export function getAllWriteups() { return [...writeups].sort((a, b) => (b.date ? Date.parse(b.date) : 0) - (a.date ? Date.parse(a.date) : 0)); }
export function getWriteupsByTag(tag: string) { return writeups.filter(w => w.tags.some(t => t.toLowerCase() === tag.toLowerCase())); }
