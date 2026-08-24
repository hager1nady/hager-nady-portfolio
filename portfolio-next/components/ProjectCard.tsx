import Reveal from "./Reveal";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-14 border-t border-border py-14 last:border-b lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal>
        <div className="lg:sticky lg:top-[110px]">
          <div className="mb-3 font-mono text-[0.85rem] text-ink-faint">
            {project.index}
          </div>
          <h3 className="mb-2.5 font-display text-[1.7rem] font-semibold tracking-tight">
            {project.name}
          </h3>
          <span className="mb-5 inline-block rounded-full border border-cobalt/25 bg-cobalt/[0.14] px-3 py-1.5 font-mono text-[0.78rem] text-cobalt">
            {project.role}
          </span>
          <p className="text-[0.95rem] leading-[1.7] text-ink-dim">
            {project.summary}
          </p>
          <div className="mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener"
              className="border-b border-border-strong pb-0.5 text-[0.88rem] font-semibold transition-colors hover:border-cobalt hover:text-cobalt"
            >
              Live demo ↗
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-2xl border border-border bg-white/[0.02] p-2 backdrop-blur-md">
          {project.blocks.map((block, i) => (
            <div
              key={block.label}
              className="border-b border-border p-6 last:border-none"
            >
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-amber font-mono text-[0.75rem] font-semibold text-bg">
                  {i + 1}
                </span>
                <span className="font-display text-[0.95rem] font-semibold">
                  {block.label}
                </span>
              </div>
              {block.body && (
                <p className="text-[0.94rem] leading-[1.7] text-ink-dim">
                  {block.body}
                </p>
              )}
              {block.bullets && (
                <ul className="mt-2.5 list-disc space-y-2 pl-[18px] text-[0.94rem] leading-[1.6] text-ink-dim">
                  {block.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {i === project.blocks.length - 1 && (
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border-strong px-2.5 py-1 font-mono text-[0.75rem] text-ink-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </article>
  );
}
