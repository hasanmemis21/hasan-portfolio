import { Cpu, Boxes, Database, Braces, CircuitBoard } from "lucide-react";

const items = [
  { t: "TypeScript", tone: "emerald" }, { t: "React/Next.js", tone: "emerald" },
  { t: "Node.js", tone: "emerald" },    { t: "Python", tone: "indigo" },
  { t: "TensorFlow/YOLO", tone: "indigo" }, { t: "Power BI (DAX)", tone: "amber" },
  { t: "SQL/PostgreSQL", tone: "amber" },   { t: "Docker", tone: "slate" },
];

function Pill({ children, tone="slate" }:{children:React.ReactNode; tone?: "emerald"|"indigo"|"amber"|"slate"}) {
  const tones: Record<string,string> = {
    emerald:"bg-emerald-400/10 text-emerald-200 border-emerald-400/30",
    indigo:"bg-indigo-400/10 text-indigo-200 border-indigo-400/30",
    amber:"bg-amber-400/10 text-amber-200 border-amber-400/30",
    slate:"bg-white/5 text-gray-200 border-white/10",
  };
  return <span className={`px-3 py-1 rounded-full text-xs border ${tones[tone]} backdrop-blur`}>{children}</span>;
}

export default function StackCloud(){
  return (
    <section className="mt-8 rounded-2xl border border-white/10 p-6 bg-gradient-to-r from-emerald-400/5 via-transparent to-indigo-400/5">
      <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
        <CircuitBoard className="w-4 h-4 text-emerald-300" /> Ana Teknolojiler
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((i)=> <Pill key={i.t} tone={i.tone as any}>{i.t}</Pill>)}
      </div>
    </section>
  );
}
