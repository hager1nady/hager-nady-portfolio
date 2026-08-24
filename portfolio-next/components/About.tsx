"use client";

import Reveal from "./Reveal";
import { timeline } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-[120px]">
      <div
        className={`mx-auto grid max-w-[1180px] gap-[70px] px-8 lg:grid-cols-2 ${
          language === "ar" ? "text-right" : "text-left"
        }`}
      >
        <div>
          <Reveal>
            <span className="mb-3.5 block font-mono text-[0.8rem] text-cobalt">
              {language === "en" ? "01 — About" : "01 — نبذة عني"}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mb-6 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
              {t("about.title")}
            </h2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="space-y-[18px] text-ink-dim"
          >
            {language === "en" ? (
              <>
                <p className="leading-[1.8]">
                  Most front-end developers stop at the interface. Most SEO
                  specialists never touch the backend. I&apos;ve spent my career
                  sitting deliberately in between —{" "}
                  <strong className="font-semibold text-ink">
                    building the systems that serve the data
                  </strong>
                  , and making sure the pages built on top of them actually get
                  found.
                </p>

                <p className="leading-[1.8]">
                  That combination came from Route Academy&apos;s Front-End
                  Development Diploma paired with a Management Information
                  Systems degree from Sadat Academy — one gave me the
                  engineering foundation, the other the systems-thinking to
                  reason about architecture, not just components.
                </p>

                <p className="leading-[1.8]">
                  Recently that&apos;s meant leading a small backend team on an
                  EdTech platform, and separately, going deep on the technical
                  SEO work — Search Console configuration, Core Web Vitals,
                  schema, indexing — that decides whether a well-built site is
                  ever actually seen.
                </p>
              </>
            ) : (
              <>
                <p className="leading-[1.8]">
                  معظم مطوري الواجهة الأمامية يتوقفون عند تصميم الواجهة،
                  ومعظم متخصصي تحسين محركات البحث لا يتعاملون مع الـBackend.
                  أما أنا فقد عملت بشكل متعمد في المنطقة التي تجمع بينهما —
                  <strong className="font-semibold text-ink">
                    أبني الأنظمة التي تتعامل مع البيانات
                  </strong>
                  ، وأتأكد من أن الصفحات المبنية فوقها يمكن لمحركات البحث
                  والمستخدمين الوصول إليها بسهولة.
                </p>

                <p className="leading-[1.8]">
                  جاء هذا المزيج من دراسة دبلومة Front-End Development في Route
                  Academy، إلى جانب دراستي لتخصص نظم المعلومات الإدارية في
                  أكاديمية السادات — الأولى منحتني الأساس الهندسي، والثانية
                  ساعدتني على التفكير في الأنظمة والـArchitecture وليس فقط
                  الـComponents.
                </p>

                <p className="leading-[1.8]">
                  ومؤخرًا، شمل ذلك قيادة فريق Backend صغير في منصة تعليمية
                  EdTech، إلى جانب التعمق في Technical SEO — مثل إعداد Search
                  Console، وCore Web Vitals، وSchema، وIndexing — وهي العوامل
                  التي تحدد ما إذا كان الموقع المصمم بشكل جيد سيظهر فعلًا أمام
                  المستخدمين أم لا.
                </p>
              </>
            )}
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            className={`flex flex-col gap-8 border-border ${
              language === "ar"
                ? "border-r pr-7"
                : "border-l pl-7"
            }`}
          >
            {timeline.map((item) => (
              <div key={item.title} className="relative">
                <span
                  className={`absolute top-1 h-[9px] w-[9px] rounded-full border-2 border-cobalt bg-bg ${
                    language === "ar"
                      ? "-right-[33px]"
                      : "-left-[33px]"
                  }`}
                />

                <span className="mb-1.5 block font-mono text-[0.78rem] text-amber">
                  {item.year}
                </span>

                <h4 className="mb-1.5 font-display text-[1.05rem] font-semibold">
                  {item.title}
                </h4>

                <p className="text-[0.92rem] leading-[1.6] text-ink-dim">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}