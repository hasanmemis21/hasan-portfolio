"use client";
import { motion } from "framer-motion";

type Tech = { label: string; bg?: string };

const RING1: Tech[] = [
  { label: "React", bg: "bg-cyan-400/20" },
  { label: "JS",    bg: "bg-yellow-400/20" },
  { label: "TS",    bg: "bg-blue-400/20" },
  { label: "Node",  bg: "bg-lime-400/20" },
  { label: "AWS",   bg: "bg-amber-400/20" },
  { label: "Git",   bg: "bg-orange-400/20" },
];

const RING2: Tech[] = [
  { label: "Next",  bg: "bg-white/10" },
  { label: "PRIS",  bg: "bg-teal-400/20" }, // Prisma (kısaltma)
  { label: "SQL",   bg: "bg-sky-400/20" },
  { label: "CV",    bg: "bg-emerald-400/20" }, // Computer Vision
  { label: "BI",    bg: "bg-purple-400/20" },
  { label: "ML",    bg: "bg-pink-400/20" },
];

function Dot({ className="" }: { className?: string }) {
  return <span className={`absolute rounded-full bg-white/60 ${className}`} style={{width:2,height:2}} />;
}

export default function TechOrbits() {
  return (
    <div className="relative w-full h-[480px] md:h-[520px]">
      {/* yıldız alanı (hafif) */}
      {[...Array(28)].map((_,i)=>(
        <Dot key={i} className={`star-${i}`} />
      ))}

      {/* dış aurora ve üst halka */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[90%] h-40 rounded-full blur-2xl aurora-ring pointer-events-none" />
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[86%] h-[3px] rounded-full bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-400/80 to-indigo-400/0 shadow-[0_0_40px_rgba(168,85,247,0.6)]" />

      {/* merkez */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <div className="size-28 md:size-32 rounded-2xl bg-white/5 border border-white/10 grid place-items-center shadow-xl">
            <span className="text-3xl font-bold tracking-tight">TS</span>
          </div>

          {/* Ring 1 */}
          <motion.div
            className="absolute inset-0 -z-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          >
            <div className="orbit orbit-1" />
            {RING1.map((t, idx)=>(
              <div key={idx} className={`orbit-item orbit-1-pos-${idx}`}>
                <div className={`badge ${t.bg}`}>{t.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Ring 2 (tersten dönsün) */}
          <motion.div
            className="absolute inset-0 -z-0"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
          >
            <div className="orbit orbit-2" />
            {RING2.map((t, idx)=>(
              <div key={idx} className={`orbit-item orbit-2-pos-${idx}`}>
                <div className={`badge ${t.bg}`}>{t.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
