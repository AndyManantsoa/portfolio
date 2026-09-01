import type { Metadata } from "next";
import { ToolGrid } from "@/components/break/ToolCard";
import { getAllTools } from "@/data/security-tools";

export const metadata: Metadata = {
  title: "Security Tools - BREAK",
  description: "Cybersecurity tools I use and have learned.",
};

export default function ToolsPage() {
  const tools = getAllTools();

  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-emerald-400">
            Security Tools
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Cybersecurity tools I use in labs and security research.
          </p>
        </div>

        {tools.length > 0 ? (
          <ToolGrid tools={tools} />
        ) : (
          <div className="rounded-lg border-2 border-dashed border-emerald-700/50 bg-slate-950/50 p-12 text-center">
            <p className="text-slate-400">Tools coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
