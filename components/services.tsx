import { LayoutTemplate, Brain, LineChart, ShieldCheck } from "lucide-react";

const services = [
  { icon: <LayoutTemplate className="w-5 h-5 text-emerald-300"/>, title:"Full-stack Web", desc:"Next.js/React + Node.js ile üretim-hazır web uygulamaları." },
  { icon: <Brain className="w-5 h-5 text-indigo-300"/>, title:"AI / CV", desc:"YOLO, TensorFlow ile tespit & sınıflandırma, model servisleri." },
  { icon: <LineChart className="w-5 h-5 text-amber-300"/>, title:"Data & BI", desc:"SQL + Power BI ile veri modeli, DAX ölçüleri, panolar." },
  { icon: <ShieldCheck className="w-5 h-5 text-sky-300"/>, title:"IoT / Anomali", desc:"Ağ trafiği, IoT verisi için anomali tespiti ve izleme." },
];

export default function Services(){
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Neler yapıyorum?</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map(s=>(
          <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/20 transition">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center size-9 rounded-lg bg-white/5 ring-1 ring-white/10">{s.icon}</div>
              <div className="font-medium">{s.title}</div>
            </div>
            <p className="text-sm text-gray-300 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
