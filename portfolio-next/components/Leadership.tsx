"use client";

import { Users, GitPullRequest, MessagesSquare } from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

const badges = [
  {
    icon: Users,
    title: {
      en: "Team Leadership",
      ar: "قيادة الفريق",
    },
    body: {
      en: "Coordinated development tasks and priorities on CareerTech.",
      ar: "تنسيق مهام وأولويات فريق التطوير في مشروع CareerTech.",
    },
  },
  {
    icon: GitPullRequest,
    title: {
      en: "Code Review",
      ar: "مراجعة الأكواد",
    },
    body: {
      en: "Kept the backend architecture consistent and scalable across the team.",
      ar: "الحفاظ على بنية Backend منظمة وقابلة للتوسع ومتسقة بين أعضاء الفريق.",
    },
  },
  {
    icon: MessagesSquare,
    title: {
      en: "Cross-team Collaboration",
      ar: "التعاون بين الفرق",
    },
    body: {
      en: "Worked directly with frontend engineers on integration.",
      ar: "التعاون المباشر مع مطوري Frontend لضمان التكامل بين أجزاء المشروع.",
    },
  },
];

export default function Leadership() {
  const { language } = useLanguage();

  return (
    <section id="leadership" className="py-[120px]">
      <div
        className={`mx-auto max-w-[1180px] px-8 ${
          language === "ar" ? "text-right" : "text-left"
        }`}
      >
        <div className="mb-14">
          <Reveal>
            <span className="mb-3.5 block font-mono text-[0.8rem] text-cobalt">
              {language === "en"
                ? "04 — Beyond the Code"
                : "04 — ما وراء البرمجة"}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
              {language === "en"
                ? "Leadership, in addition to the build."
                : "القيادة، إلى جانب التطوير."}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            className={`grid gap-10 rounded-[20px] border border-border bg-surface p-12 lg:grid-cols-2 ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {/* Leadership Description */}
            <div>
              <h3 className="mb-3.5 font-display text-[1.5rem] font-semibold">
                {language === "en"
                  ? "Leading while shipping"
                  : "القيادة أثناء تنفيذ المشروع"}
              </h3>

              <p className="text-[0.98rem] leading-[1.7] text-ink-dim">
                {language === "en"
                  ? "On CareerTech, the backend work didn&apos;t stop at code — it included coordinating the team&apos;s tasks, reviewing code for consistency, and being the point of contact between backend architecture decisions and the frontend team building on top of them. Leadership here meant keeping a fast-moving team aligned on one clean, scalable structure."
                  : "في مشروع CareerTech، لم يقتصر العمل على تطوير الـBackend فقط، بل شمل أيضًا تنسيق مهام الفريق، ومراجعة الأكواد للحفاظ على consistency، والعمل كنقطة اتصال بين قرارات بنية الـBackend وفريق الـFrontend. كانت القيادة هنا تعني الحفاظ على توافق الفريق وسرعة التنفيذ ضمن بنية منظمة وقابلة للتوسع."
                }
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-col gap-3.5">
              {badges.map((b) => (
                <div
                  key={b.title.en}
                  className={`flex items-start gap-3.5 rounded-xl border border-border bg-surface-2 p-4 ${
                    language === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[9px] bg-cobalt/[0.14] text-cobalt">
                    <b.icon size={17} />
                  </div>

                  <div>
                    <h5 className="mb-0.5 text-[0.92rem] font-semibold">
                      {b.title[language]}
                    </h5>

                    <p className="text-[0.84rem] text-ink-dim">
                      {b.body[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}