import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWriteupBySlug, getAllWriteups } from "@/data/writeups";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const writeup = getWriteupBySlug(slug);

  if (!writeup) {
    return { title: "Writeup Not Found" };
  }

  return {
    title: `${writeup.title} - BREAK`,
    description: writeup.description,
  };
}

export async function generateStaticParams() {
  const writeups = getAllWriteups();
  return writeups.map((writeup) => ({
    slug: writeup.slug,
  }));
}

export default async function WriteupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writeup = getWriteupBySlug(slug);

  if (!writeup) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Navigation back */}
      <div
        className="border-b border-emerald-700/50 px-4 py-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl">
          <Link
            href="/break/writeups"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Writeups
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section
        className="border-b border-emerald-700/50 px-4 py-12 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-emerald-400">
            {writeup.title}
          </h1>
          <p className="mt-4 text-xl text-slate-300">{writeup.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-sm text-slate-400">{writeup.category}</span>
            {writeup.difficulty && (
              <span className="rounded-full bg-emerald-900/30 px-3 py-1 text-sm text-emerald-300">
                {writeup.difficulty}
              </span>
            )}
            <span className="text-sm text-slate-500">
              {new Date(writeup.date).toLocaleDateString()}
            </span>
          </div>

          {writeup.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {writeup.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-400">
              Writeup content will be displayed here. You can add markdown
              content by creating a content/writeups/ folder or by adding the
              content directly to this page.
            </p>

            <div className="mt-8 rounded-lg border border-emerald-700/50 bg-slate-950/50 p-6">
              <p className="text-slate-400">
                <strong>Tip:</strong> Replace this placeholder with the full
                writeup content.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 border-t border-slate-800 pt-8">
            <Link
              href="/break/writeups"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              ← Back to all writeups
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
