export default function StatsBar() {
  const stats = [
    { k: "Toplam Proje", v: "25+" },
    { k: "Üretimde Çözüm", v: "7" },
    { k: "Ana Stack", v: "TS • React • Node" },
  ];
  return (
    <section className="mt-6 grid gap-3 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="text-xs text-gray-400">{s.k}</div>
          <div className="text-lg font-semibold">{s.v}</div>
        </div>
      ))}
    </section>
  );
}
