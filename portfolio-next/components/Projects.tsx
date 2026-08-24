import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-14 max-w-[640px]">
          <Reveal>
            <span className="mb-3.5 block font-mono text-[0.8rem] text-cobalt">
              03 — Selected Work
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-3.5 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
              Four projects, four different problems.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[1.02rem] leading-[1.6] text-ink-dim">
              Each one shows a different slice of the stack — leadership and
              backend architecture, SEO under a CMS, and a clean full-stack
              build.
            </p>
          </Reveal>
        </div>

        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
