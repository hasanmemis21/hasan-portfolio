import Section from "@/components/section";
import { experience } from "@/lib/experience";

export const metadata = { title: "Deneyim" };

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Section id="experience" title="Deneyim">
        <div className="space-y-4">
          {experience.map((e) => (
            <div key={e.company} className="rounded-2xl p-6 bg-[--card] border border-white/5">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{e.role}</h3>
                <span className="text-sm text-gray-400">{e.date}</span>
              </div>
              <p className="text-gray-300">{e.company}</p>
              <ul className="mt-3 list-disc pl-5 text-gray-300 space-y-1">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
