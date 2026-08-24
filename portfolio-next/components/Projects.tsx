"use client";

import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();

  const isArabic = language === "ar";

  return (
    <section id="work" className="py-[120px]">
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className={`mx-auto max-w-[1180px] px-8 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <div className="mb-14 max-w-[640px]">
          <Reveal>
            <span className="mb-3.5 block font-mono text-[0.8rem] text-cobalt">
              {isArabic ? "03 — أبرز الأعمال" : "03 — Selected Work"}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mb-3.5 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
              {isArabic
                ? "أربعة مشاريع، وأربع تحديات مختلفة."
                : "Four projects, four different problems."}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[1.02rem] leading-[1.6] text-ink-dim">
              {isArabic
                ? "كل مشروع يعكس جانبًا مختلفًا من خبرتي التقنية — من قيادة الفريق وبناء الـBackend، إلى تحسين محركات البحث وأنظمة إدارة المحتوى، وصولًا إلى تطوير مشاريع Full Stack متكاملة."
                : "Each one shows a different slice of the stack — leadership and backend architecture, SEO under a CMS, and a clean full-stack build."}
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