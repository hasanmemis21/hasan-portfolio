export default function Page() {
  return (
    <div className="hero-bg max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs mb-4">
        Yeni fırsatlara açık · Data & AI
      </span>
      <h1 className="text-4xl md:text-5xl font-bold">Hasan Memiş — Software Engineer</h1>
      <p className="text-gray-300 mt-4 max-w-2xl">
        Power BI, SQL ve Makine Öğrenimi odaklı; bilgisayarlı görme ve panolarla ölçülebilir etki yaratan çözümler.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="https://github.com/hasanmemis21" className="btn-outlined">GitHub</a>
        <a href="/cv/Hasan_Memis_CV_TR.pdf" className="btn-solid">CV (TR)</a>
        <a href="/cv/Hasan_Memis_CV_EN.pdf" className="btn-solid">CV (EN)</a>
      </div>
    </div>
  );
}
