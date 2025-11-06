import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata = { title: "Projeler" };

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Section id="projects" title="Projeler">
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} title={p.title} summary={p.summary} stack={p.stack} href={p.href} />
          ))}
        </div>
      </Section>
    </div>
  );
}
