import type { Metadata } from "next";
import { LabGrid } from "@/components/break/LabCard";
import { getAllLabs } from "@/data/labs";

export const metadata: Metadata = {
  title: "Security Labs - BREAK",
  description: "Cybersecurity labs and hands-on security practice.",
};

export default function LabsPage() {
  const labs = getAllLabs();

  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-emerald-400">Security Labs</h1>
          <p className="mt-4 text-lg text-slate-400">
            Practical cybersecurity labs and hands-on learning from various
            platforms.
          </p>
        </div>

        {labs.length > 0 ? (
          <LabGrid labs={labs} />
        ) : (
          <div className="rounded-lg border-2 border-dashed border-emerald-700/50 bg-slate-950/50 p-12 text-center">
            <p className="text-slate-400">Labs coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
