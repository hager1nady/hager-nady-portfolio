"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const bars = [20, 28, 24, 38, 34, 48, 44, 60, 55, 72, 68, 86];

export default function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [stage, setStage] = useState(0);

  const { language } = useLanguage();

  useEffect(() => {
    if (!inView) return;

    const t1 = setTimeout(() => setStage(1), 900);
    const t2 = setTimeout(() => setStage(2), 1900);
    const t3 = setTimeout(() => setStage(3), 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface to-surface-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-border bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />

        <span className="ml-2 font-mono text-xs text-ink-faint">
          status.sh
        </span>
      </div>

      {/* Terminal Content */}
      <div className="min-h-[230px] p-6 font-mono text-[0.86rem] leading-[1.9]">
        <div className="text-green">
          {stage >= 1 && "$ curl /api/hager --status"}
          {stage === 0 && <span className="caret" />}
        </div>

        {stage >= 1 && (
          <div className="text-ink-dim">
            {language === "en"
              ? "Resolving profile…"
              : "جاري تحميل الملف الشخصي…"}

            {stage === 1 && <span className="caret" />}
          </div>
        )}

        {stage >= 3 && (
          <>
            <pre className="whitespace-pre-wrap text-ink-dim">
{`{
  `}<span className="text-amber">&quot;role&quot;</span>: <span className="text-cobalt">&quot;Full Stack Developer&quot;</span>,{`
  `}<span className="text-amber">&quot;focus&quot;</span>: [<span className="text-cobalt">&quot;React&quot;</span>, <span className="text-cobalt">&quot;Next.js&quot;</span>, <span className="text-cobalt">&quot;Node.js&quot;</span>, <span className="text-cobalt">&quot;Technical SEO&quot;</span>],{`
  `}<span className="text-amber">&quot;leading&quot;</span>: <span className="text-cobalt">true</span>{`
}`}
            </pre>

            <div className="mt-4 text-xs text-ink-faint">
              {language === "en"
                ? "// organic visibility, trending up"
                : "// الظهور في نتائج البحث يتحسن باستمرار"}
            </div>

            <div className="mt-3 flex h-[46px] items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-b from-cobalt to-cobalt/10 transition-[height] duration-700 ease-out"
                  style={{
                    height: `${h}%`,
                    transitionDelay: `${i * 40}ms`,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}