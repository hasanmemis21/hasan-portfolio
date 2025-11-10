type PillProps = { label: string; icon?: React.ReactNode; tone?: "emerald"|"indigo"|"amber"|"pink"|"slate" };
export default function SkillPill({ label, icon, tone="slate" }: PillProps){
  const tones: Record<string,string> = {
    emerald: "bg-emerald-400/10 text-emerald-200 border-emerald-400/30",
    indigo:  "bg-indigo-400/10  text-indigo-200  border-indigo-400/30",
    amber:   "bg-amber-400/10   text-amber-200   border-amber-400/30",
    pink:    "bg-pink-400/10    text-pink-200    border-pink-400/30",
    slate:   "bg-white/5        text-gray-200    border-white/10"
  };
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${tones[tone]} backdrop-blur`}>
      {icon}{label}
    </span>
  );
}
