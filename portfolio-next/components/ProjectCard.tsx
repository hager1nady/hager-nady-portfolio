"use client";

import Reveal from "./Reveal";
import type { TranslatedProject } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProjectCard({
  project,
}: {
  project: TranslatedProject;
}) {
  const { language } = useLanguage();

  const isArabic = language === "ar";

  return (
    <article
      className={`grid gap-14 border-t border-border py-14 last:border-b lg:grid-cols-[0.9fr_1.1fr] ${
        isArabic ? "text-right" : "text-left"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Reveal>
        <div className="lg:sticky lg:top-[110px]">
          <div className="mb-3 font-mono text-[0.85rem] text-ink-faint">
            {project.index}
          </div>

          <h3 className="mb-2.5 font-display text-[1.7rem] font-semibold tracking-tight">
            {project.name[language]}
          </h3>

          <span className="mb-5 inline-block rounded-full border border-cobalt/25 bg-cobalt/[0.14] px-3 py-1.5 font-mono text-[0.78rem] text-cobalt">
            {project.role[language]}
          </span>

          <p className="text-[0.95rem] leading-[1.7] text-ink-dim">
            {project.summary[language]}
          </p>

          <div className="mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-border-strong pb-0.5 text-[0.88rem] font-semibold transition-colors hover:border-cobalt hover:text-cobalt"
            >
              {isArabic ? "عرض المشروع ↗" : "Live demo ↗"}
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-2xl border border-border bg-white/[0.02] p-2 backdrop-blur-md">
          {project.blocks.map((block, i) => (
            <div
              key={`${project.slug}-${i}`}
              className="border-b border-border p-6 last:border-none"
            >
              <div
                className={`mb-2.5 flex items-center gap-2.5 ${
                  isArabic ? "flex-row-reverse justify-end" : ""
                }`}
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] bg-amber font-mono text-[0.75rem] font-semibold text-bg">
                  {i + 1}
                </span>

                <span className="font-display text-[0.95rem] font-semibold">
                  {block.label[language]}
                </span>
              </div>

              {block.body[language] && (
                <p className="text-[0.94rem] leading-[1.7] text-ink-dim">
                  {block.body[language]}
                </p>
              )}

              {block.bullets && (
                <ul
                  className={`mt-2.5 space-y-2 text-[0.94rem] leading-[1.6] text-ink-dim ${
                    isArabic
                      ? "list-disc pr-[18px]"
                      : "list-disc pl-[18px]"
                  }`}
                >
                  {block.bullets[language].map((bullet, index) => (
                    <li key={`${project.slug}-${i}-${index}`}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {i === project.blocks.length - 1 && (
                <div
                  className={`mt-3.5 flex flex-wrap gap-2 ${
                    isArabic ? "justify-start" : "justify-start"
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      dir="ltr"
                      className="rounded-md border border-border-strong px-2.5 py-1 font-mono text-[0.75rem] text-ink-dim"
                    >
                      {tag}
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