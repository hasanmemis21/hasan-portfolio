import Link from "next/link";

export default function ProjectCard({
  title,
  summary,
  stack,
  href,
}: {
  title: string;
  summary: string;
  stack: string[];
  href: string;
}) {
  return (
    <div className="rounded-2xl p-6 bg-[--card] shadow-lg border border-white/5 hover:border-white/10 transition-colors">
      <div className="flex items-start justify-between">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-gray-300 mt-2">{summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <Link
          href={href}
          className="text-emerald-400 hover:text-emerald-300 text-sm underline-offset-4 hover:underline"
        >
          Detay / Kaynak
        </Link>
      </div>
    </div>
  );
}
