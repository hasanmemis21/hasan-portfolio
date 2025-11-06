import Section from "@/components/section";
import { skills } from "@/lib/skills";

export const metadata = { title: "Yetenekler" };

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Section id="skills" title="Yetenekler">
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((g) => (
            <div key={g.group} className="rounded-2xl p-6 bg-[--card] border border-white/5">
              <h3 className="text-white font-medium">{g.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
