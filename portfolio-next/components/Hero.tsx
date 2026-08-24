import { Github, Linkedin, Mail } from "lucide-react";
import Magnetic from "./Magnetic";
import Terminal from "./Terminal";
import Reveal from "./Reveal";
import { contact } from "@/lib/data";

export default function Hero() {
  return (
    <header id="top" className="relative min-h-screen pb-16 pt-[100px]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[60px]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/25 bg-amber/[0.14] px-3 py-1.5 font-mono text-[0.78rem] text-amber">
            <span className="h-1.5 w-1.5 animate-pulse2 rounded-full bg-amber" />
            Available for full-stack &amp; SEO engagements
          </div>

          <h1 className="mb-6 font-display text-[clamp(2.4rem,5vw,4.1rem)] font-bold leading-[1.05] tracking-tight">
            Full-stack products,
            <br />
            <span className="bg-gradient-to-r from-cobalt via-[#9BB8FF] to-amber bg-clip-text text-transparent">
              built to ship — and rank.
            </span>
          </h1>

          <p className="mb-9 max-w-[520px] text-[1.08rem] leading-[1.65] text-ink-dim">
            I&apos;m Hager Nady, a Full Stack Developer working across React,
            Next.js and Node.js — with a specialism in Technical SEO most
            engineers skip. I build the backend that holds up under load, and
            the front end that shows up in search.
          </p>

          <div className="mb-11 flex flex-wrap gap-3.5">
            <Magnetic>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-[10px] bg-cobalt px-[26px] py-3.5 text-[0.92rem] font-semibold text-[#050810] shadow-[0_0_0_1px_rgba(91,140,255,0.4),0_12px_30px_-10px_rgba(91,140,255,0.55)] transition-transform hover:-translate-y-0.5"
              >
                View my work →
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[10px] border border-border-strong px-[26px] py-3.5 text-[0.92rem] font-semibold transition-transform hover:-translate-y-0.5"
              >
                Get in touch
              </a>
            </Magnetic>
          </div>

          <div className="flex items-center gap-4">
            <Magnetic>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-border text-ink-dim transition-colors hover:border-cobalt hover:text-cobalt"
              >
                <Github size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-border text-ink-dim transition-colors hover:border-cobalt hover:text-cobalt"
              >
                <Linkedin size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-border text-ink-dim transition-colors hover:border-cobalt hover:text-cobalt"
              >
                <Mail size={18} />
              </a>
            </Magnetic>
          </div>
        </div>

        <Reveal>
          <Terminal />
        </Reveal>
      </div>
    </header>
  );
}
