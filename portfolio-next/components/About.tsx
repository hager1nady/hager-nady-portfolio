import Reveal from "./Reveal";
import { timeline } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-[120px]">
      <div className="mx-auto grid max-w-[1180px] gap-[70px] px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="mb-3.5 block font-mono text-[0.8rem] text-cobalt">
              01 — About
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-6 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
              Two disciplines most people keep separate.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-[18px] text-ink-dim">
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
              Systems degree from Sadat Academy — one gave me the engineering
              foundation, the other the systems-thinking to reason about
              architecture, not just components.
            </p>
            <p className="leading-[1.8]">
              Recently that&apos;s meant leading a small backend team on an
              EdTech platform, and separately, going deep on the technical SEO
              work — Search Console configuration, Core Web Vitals, schema,
              indexing — that decides whether a well-built site is ever
              actually seen.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-8 border-l border-border pl-7">
            {timeline.map((t) => (
              <div key={t.title} className="relative">
                <span className="absolute -left-[33px] top-1 h-[9px] w-[9px] rounded-full border-2 border-cobalt bg-bg" />
                <span className="mb-1.5 block font-mono text-[0.78rem] text-amber">
                  {t.year}
                </span>
                <h4 className="mb-1.5 font-display text-[1.05rem] font-semibold">
                  {t.title}
                </h4>
                <p className="text-[0.92rem] leading-[1.6] text-ink-dim">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
