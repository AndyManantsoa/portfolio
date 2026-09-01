import type { Metadata } from "next";
import { SecurityGrid } from "@/components/break/SecurityCard";
import { getAllSecurityAreas } from "@/data/security";

export const metadata: Metadata = {
  title: "Security Knowledge - BREAK",
  description: "Cybersecurity knowledge areas, concepts, and areas of study.",
};

export default function SecurityPage() {
  const areas = getAllSecurityAreas();

  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-emerald-400">
            Security Knowledge
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Areas of cybersecurity I'm studying and learning.
          </p>
        </div>

        {areas.length > 0 ? (
          <SecurityGrid areas={areas} />
        ) : (
          <div className="rounded-lg border-2 border-dashed border-emerald-700/50 bg-slate-950/50 p-12 text-center">
            <p className="text-slate-400">Security knowledge coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
