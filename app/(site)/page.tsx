import HeroMinimal from "@/components/hero-minimal";
import StatsBar from "@/components/stats-bar";
import StackCloud from "@/components/stack-cloud";
import TerminalCard from "@/components/terminal-card";
import Services from "@/components/services";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <HeroMinimal />
      <StatsBar />
      <StackCloud />
      <Services />
      <TerminalCard />

      <Section id="featured" title="Öne Çıkan Projeler" className="mt-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.slice(0,4).map((p) => (
            <ProjectCard key={p.slug} slug={p.slug} title={p.title} summary={p.summary} stack={p.stack} href={p.href}/>
          ))}
        </div>
      </Section>
    </div>
  );
}
