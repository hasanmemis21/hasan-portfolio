"use client";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectCard({
  title,
  summary,
  stack,
  slug,
  href,
}: {
  title: string;
  summary: string;
  stack: string[];
  slug?: string;
  href?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 transition-all duration-300 hover:from-emerald-500/[0.08] hover:to-indigo-500/[0.08] hover:border-emerald-400/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
      {/* parıltı overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/10 via-transparent to-indigo-500/10 pointer-events-none" />

      {/* başlık */}
      <h3 className="relative z-10 text-lg font-semibold text-white flex items-center justify-between">
        {title}
        <ArrowRight className="w-4 h-4 opacity-0 translate-x-[-4px] group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
      </h3>

      {/* açıklama */}
      <p className="relative z-10 mt-2 text-gray-300 text-sm leading-relaxed">
        {summary}
      </p>

      {/* stack rozetleri */}
      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-gray-200 tracking-wide hover:bg-white/[0.1] transition"
          >
            {s}
          </span>
        ))}
      </div>

      {/* butonlar */}
      <div className="relative z-10 mt-5 flex gap-3 text-sm">
        {slug && (
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-emerald-300 hover:bg-emerald-500/20 transition"
          >
            Detay
            <ArrowRight className="w-3 h-3" />
          </Link>
        )}
        {href && (
          <a
            href={href}
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-400/40 bg-indigo-400/10 px-3 py-1.5 text-indigo-300 hover:bg-indigo-400/20 transition"
          >
            Kaynak
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* dekoratif ışık halkası */}
      <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-400/20 to-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
    </div>
  );
}
