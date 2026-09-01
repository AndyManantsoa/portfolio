import type { Metadata } from "next";
import { WriteupGrid } from "@/components/break/WriteupCard";
import { getAllWriteups } from "@/data/writeups";

export const metadata: Metadata = {
  title: "Writeups - BREAK",
  description: "Security writeups, CTF solutions, and security research.",
};

export default function WriteupsPage() {
  const writeups = getAllWriteups();

  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-emerald-400">Writeups</h1>
          <p className="mt-4 text-lg text-slate-400">
            Detailed writeups of security challenges, labs, and research.
          </p>
        </div>

        {writeups.length > 0 ? (
          <WriteupGrid writeups={writeups} />
        ) : (
          <div className="rounded-lg border-2 border-dashed border-emerald-700/50 bg-slate-950/50 p-12 text-center">
            <p className="text-slate-400">Writeups coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
