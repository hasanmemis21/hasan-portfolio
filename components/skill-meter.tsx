"use client";
import { useEffect, useState } from "react";

export default function SkillMeter({ level=80 }: { level?: number }) {
  const [w, setW] = useState(0);
  useEffect(()=>{ const t=setTimeout(()=>setW(level), 80); return ()=>clearTimeout(t); },[level]);
  return (
    <div className="mt-3 h-2 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
      <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400 transition-all duration-700" style={{ width: `${w}%` }}/>
    </div>
  );
}
