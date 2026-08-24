import { Users, GitPullRequest, MessagesSquare } from "lucide-react";
import Reveal from "./Reveal";

const badges = [
  {
    icon: Users,
    title: "Team Leadership",
    body: "Coordinated development tasks and priorities on CareerTech.",
  },
  {
    icon: GitPullRequest,
    title: "Code Review",
    body: "Kept the backend architecture consistent and scalable across the team.",
  },
  {
    icon: MessagesSquare,
    title: "Cross-team Collaboration",
    body: "Worked directly with frontend engineers on integration.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-14">
          <Reveal>
            <span className="mb-3.5 block font-mono text-[0.8rem] text-cobalt">
              04 — Beyond the Code
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-tight">
              Leadership, in addition to the build.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="grid gap-10 rounded-[20px] border border-border bg-surface p-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-3.5 font-display text-[1.5rem] font-semibold">
                Leading while shipping
              </h3>
              <p className="text-[0.98rem] leading-[1.7] text-ink-dim">
                On CareerTech, the backend work didn&apos;t stop at code — it
                included coordinating the team&apos;s tasks, reviewing code
                for consistency, and being the point of contact between
                backend architecture decisions and the frontend team building
                on top of them. Leadership here meant keeping a fast-moving
                team aligned on one clean, scalable structure.
              </p>
            </div>
            <div className="flex flex-col gap-3.5">
              {badges.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-3.5 rounded-xl border border-border bg-surface-2 p-4"
                >
                  <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[9px] bg-cobalt/[0.14] text-cobalt">
                    <b.icon size={17} />
                  </div>
                  <div>
                    <h5 className="mb-0.5 text-[0.92rem] font-semibold">
                      {b.title}
                    </h5>
                    <p className="text-[0.84rem] text-ink-dim">{b.body}</p>
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
