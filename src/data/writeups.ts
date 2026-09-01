// TODO: Update with actual writeups data

export interface Writeup {
  slug: string;
  title: string;
  category: string;
  date: string;
  difficulty?: "Easy" | "Medium" | "Hard" | "Insane";
  description: string;
  tags: string[];
  contentPath?: string; // Path to MDX file
  excerpt?: string;
}

export const writeups: Writeup[] = [
  {
    slug: "todo-writeup-1",
    title: "TODO: Writeup Title",
    category: "Web Security",
    date: "2024-01-01",
    difficulty: "Easy",
    description: "TODO: Brief description of the writeup",
    tags: ["TODO: Tag 1", "TODO: Tag 2"],
    contentPath: "/content/writeups/todo-writeup-1.mdx",
    excerpt: "TODO: Short excerpt for the preview",
  },
];

export function getWriteupBySlug(slug: string): Writeup | undefined {
  return writeups.find((w) => w.slug === slug);
}

export function getWriteupsByCategory(category: string): Writeup[] {
  return writeups.filter(
    (w) => w.category.toLowerCase() === category.toLowerCase(),
  );
}

export function getAllWriteups(): Writeup[] {
  return writeups.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getWriteupsByTag(tag: string): Writeup[] {
  return writeups.filter((w) =>
    w.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}
