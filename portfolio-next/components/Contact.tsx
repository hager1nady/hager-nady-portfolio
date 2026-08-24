import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] border border-border bg-gradient-to-br from-surface to-surface-2 px-8 py-16 text-center sm:px-14">
            <div className="pointer-events-none absolute -right-24 -top-36 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.18),transparent_70%)]" />
            <h2 className="relative mb-4.5 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-tight">
              Let&apos;s build something
              <br />
              worth ranking for.
            </h2>
            <p className="relative mx-auto mb-9 max-w-[480px] text-[1.02rem] leading-[1.6] text-ink-dim">
              Open to full stack development and technical SEO work — whether
              that&apos;s a product to ship or a site that needs to be found.
            </p>
            <div className="relative flex flex-wrap justify-center gap-4">
              <Magnetic>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.02] px-5 py-3 text-[0.9rem] font-medium transition-colors hover:border-cobalt hover:text-cobalt"
                >
                  <Mail size={16} /> {contact.email}
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.02] px-5 py-3 text-[0.9rem] font-medium transition-colors hover:border-cobalt hover:text-cobalt"
                >
                  <Phone size={16} /> {contact.phone}
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.02] px-5 py-3 text-[0.9rem] font-medium transition-colors hover:border-cobalt hover:text-cobalt"
                >
                  <Github size={16} /> GitHub ↗
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.02] px-5 py-3 text-[0.9rem] font-medium transition-colors hover:border-cobalt hover:text-cobalt"
                >
                  <Linkedin size={16} /> LinkedIn ↗
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
