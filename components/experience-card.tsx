type Exp = {
  role: string;
  company: string;
  location?: string;
  start: string; // "07/2025"
  end: string;   // "Güncel" veya "01/2024"
  bullets: string[];
  stack?: string[];
};

export default function ExperienceCard({
  role, company, location, start, end, bullets, stack = [],
}: Exp) {
  return (
    <article className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 shadow-lg hover:border-white/20 transition">
      {/* timeline nokta */}
      <span className="absolute -left-3 top-6 size-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
      {/* üst satır */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-white">{role}</h3>
          <p className="text-sm text-gray-300">{company}{location ? ` (${location})` : ""}</p>
        </div>
        <div className="text-sm text-gray-400 whitespace-nowrap">
          {start} — {end}
        </div>
      </div>

      {/* içerik */}
      <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-200">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>

      {/* teknoloji rozetleri */}
      {stack.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map(s => (
            <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-200 border border-white/10">
              {s}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
