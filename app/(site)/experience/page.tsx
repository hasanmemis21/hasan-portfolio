import ExperienceCard from "@/components/experience-card";

export const metadata = { title: "Deneyim" };

export default function ExperiencePage() {
  const data = [
    {
      role: "IT & Software Specialist",
      company: "Altınay Mücevherat",
      location: "Diyarbakır",
      start: "07/2025",
      end: "Güncel",
      bullets: [
        "Sistem yönetimi, SQL/Python ve LAN/WAN ağları üzerinde uygulamalı çalışmalar",
        "Veri analizi ve yazılım geliştirme ile süreç verimliliği ve güvenliğini artırma",
      ],
      stack: ["Python", "SQL", "Power BI", "Windows Server", "Network"],
    },
    {
      role: "AI & Vision Intern / ERP",
      company: "Tersan Shipyard",
      location: "Yalova",
      start: "06/2023",
      end: "01/2024",
      bullets: [
        "Görüntü işleme iş akışları ve gerçek zamanlı tespit modelleri",
        "Excel/Python/SQL ile veri temizleme–analiz, içgörü raporları",
      ],
      stack: ["OpenCV", "TensorFlow", "Python", "SQL"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Deneyim</h1>

      {/* timeline çizgisi */}
      <div className="relative">
        <span className="absolute left-0 top-0 bottom-0 ml-[6px] w-px bg-gradient-to-b from-emerald-400/40 via-white/10 to-transparent" />

        <div className="space-y-5 pl-6">
          {data.map((e) => (
            <ExperienceCard key={`${e.role}-${e.start}`} {...e} />
          ))}
        </div>
      </div>

      {/* alt CTA şeridi */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-gray-300 text-sm">
          Detaylı bilgi için CV’mi inceleyebilirsiniz.
        </p>
        <a href="/cv/Hasan_Memis_CV_TR.pdf" className="btn-solid">CV (TR) İndir</a>
      </div>
    </div>
  );
}
