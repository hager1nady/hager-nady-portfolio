const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Technical SEO",
  "Core Web Vitals",
  "REST APIs",
  "Team Leadership",
];

export default function Marquee() {
  const doubled = [...skills, ...skills];
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-border bg-bg-alt py-5">
      <div className="inline-flex animate-marquee gap-12">
        {doubled.map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 font-mono text-[0.85rem] text-ink-faint before:content-['◆'] before:text-[0.6rem] before:text-cobalt"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
