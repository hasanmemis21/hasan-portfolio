import { projects } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = projects.find(x => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/projects" className="text-sm text-gray-400 hover:text-white">← Tüm projeler</Link>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">{p.title}</h1>
      <p className="text-gray-300 mt-3">{p.summary}</p>

      {/* Stack rozetleri */}
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">{s}</span>
        ))}
      </div>

      {/* Ölçümler */}
      {p.metrics && (
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {p.metrics.map(m => (
            <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-gray-400">{m.label}</div>
              <div className="text-xl font-semibold">{m.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Uzun açıklama */}
      {p.body && <div className="prose prose-invert mt-6 max-w-none">{p.body}</div>}

      {/* Kısa maddeler */}
      {p.highlights && (
        <ul className="mt-6 list-disc pl-5 text-gray-300 space-y-1">
          {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}

      {/* Kaynak */}
      {p.href && (
        <div className="mt-8">
          <a className="btn-outlined" target="_blank" href={p.href}>GitHub / Kaynak</a>
        </div>
      )}
    </div>
  );
}
