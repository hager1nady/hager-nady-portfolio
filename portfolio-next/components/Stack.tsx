"use client";

import Reveal from "./Reveal";
import { stack } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

const groupTranslations: Record<
  string,
  {
    en: string;
    ar: string;
  }
> = {
  Frontend: {
    en: "Frontend",
    ar: "الواجهة الأمامية",
  },
  Backend: {
    en: "Backend",
    ar: "الواجهة الخلفية",
  },
  "Data & Infra": {
    en: "Data & Infra",
    ar: "البيانات والبنية التحتية",
  },
  "Technical SEO": {
    en: "Technical SEO",
    ar: "تحسين محركات البحث التقني",
  },
};

export default function Stack() {
  const { t, language } = useLanguage();

  const isArabic = language === "ar";

  return (
    <section id="stack" className="py-[120px]">
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className={`mx-auto max-w-[1180px] px-8 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <div className="mb-14 max-w-[640px]">
          <Reveal>
            <span className="mb-3.5 block font-mono text-[0.8rem] text-cobalt">
              {isArabic ? "02 — المهارات" : "02 — Stack"}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mb-3.5 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
              {t("stack.title")}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[1.02rem] leading-[1.6] text-ink-dim">
              {isArabic
                ? "من قاعدة البيانات وحتى ظهور الموقع في نتائج البحث."
                : "From the database up to the search results page."}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((group) => (
              <div
                key={group.group}
                className="bg-surface p-7 transition-colors hover:bg-surface-2"
              >
                <h4 className="mb-4 font-mono text-[0.78rem] uppercase tracking-[0.08em] text-ink-faint">
                  {groupTranslations[group.group]?.[language] ??
                    group.group}
                </h4>

                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2.5 text-[0.94rem] before:h-[5px] before:w-[5px] before:flex-shrink-0 before:rounded-full before:bg-cobalt ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}