import Section from "@/components/section";
import SkillPill from "@/components/skill-pill";
import SkillMeter from "@/components/skill-meter";
import { Code, Cpu, Database, Brain, LineChart } from "lucide-react";

export const metadata = { title: "Yetenekler" };

const groups = [
  {
    title: "Programlama & Web",
    icon: <Code className="w-4 h-4 text-emerald-300" />,
    tone: "emerald" as const,
    top: ["Python","TypeScript","React","Next.js","Node.js"],
    others: ["HTML","CSS","C#","REST","JWT","Zustand"],
    level: 85
  },
  {
    title: "AI/ML & Görüntüleme",
    icon: <Brain className="w-4 h-4 text-indigo-300" />,
    tone: "indigo" as const,
    top: ["TensorFlow","Keras","YOLO","OpenCV","scikit-learn"],
    others: ["Pandas","NumPy","Gradio","ONNX"],
    level: 80
  },
  {
    title: "Veri & BI",
    icon: <LineChart className="w-4 h-4 text-amber-300" />,
    tone: "amber" as const,
    top: ["SQL","PostgreSQL","Power BI (DAX)","ETL"],
    others: ["Tableau","Excel","dbt"],
    level: 82
  },
  {
    title: "Kuantum",
    icon: <Cpu className="w-4 h-4 text-pink-300" />,
    tone: "pink" as const,
    top: ["Qiskit","PennyLane","IBM Q"],
    others: ["QuTiP"],
    level: 60
  },
  {
    title: "Araçlar",
    icon: <Database className="w-4 h-4 text-slate-300" />,
    tone: "slate" as const,
    top: ["Git/GitHub","Jira","Agile/Scrum","Jupyter/Colab"],
    others: ["Docker","Linux","Vercel"],
    level: 78
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Section id="skills" title="Yetenekler">
        {/* filtre/öneri çipleri */}
        <div className="mb-6 flex flex-wrap gap-2">
          <SkillPill label="Full-stack" tone="emerald" />
          <SkillPill label="Computer Vision" tone="indigo" />
          <SkillPill label="Data & BI" tone="amber" />
          <SkillPill label="Research/ML" tone="pink" />
        </div>

        {/* kart grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-white/10 bg-[--card] p-6 shadow-lg hover:shadow-2xl hover:border-white/20 transition">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center size-9 rounded-xl bg-white/5 ring-1 ring-white/10">
                  {g.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{g.title}</h3>
              </div>

              {/* öne çıkanlar */}
              <div className="mt-4 flex flex-wrap gap-2">
                {g.top.map((t) => <SkillPill key={t} label={t} tone={g.tone} />)}
              </div>

              {/* seviye */}
              <SkillMeter level={g.level} />

              {/* diğerleri */}
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-300/90">
                {g.others.map((o) => (
                  <span key={o} className="rounded-md bg-white/5 px-2 py-1 border border-white/10">{o}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* alt not: sertifikalar/rozete yer */}
        <div className="mt-10 rounded-2xl border border-white/10 p-5 text-gray-300/90 bg-gradient-to-r from-emerald-400/5 via-transparent to-indigo-400/5">
          <p className="text-sm">
            Sertifikalar: <span className="text-white">Google Data Analytics</span>, 
            <span className="text-white"> TensorFlow in Practice</span> (örnek). İstersen gerçek sertifika linklerini buraya ekleyelim.
          </p>
        </div>
      </Section>
    </div>
  );
}
