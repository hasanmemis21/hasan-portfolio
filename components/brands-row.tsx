export default function BrandsRow() {
  const brands = ["slack", "amazon", "logitech", "google", "facebook"];
  return (
    <section className="mt-6 rounded-3xl border border-black/5 bg-white/70 px-6 py-4 backdrop-blur">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-black/50 sm:grid-cols-5">
        {brands.map((b) => (
          <div key={b} className="flex items-center justify-center text-sm font-semibold tracking-wide">
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}
