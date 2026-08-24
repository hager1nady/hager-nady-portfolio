"use client";

import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#leadership", label: "Experience" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] border-b transition-colors duration-300 backdrop-blur-md ${
        scrolled ? "border-border bg-bg/70" : "border-transparent bg-bg/40"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-[18px]">
        <a href="#top" className="flex items-center gap-2 font-display text-[1.05rem] font-bold tracking-tight">
          <span className="h-[7px] w-[7px] rounded-full bg-cobalt shadow-[0_0_12px_#5B8CFF]" />
          Hager Nady
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[0.88rem] font-medium text-ink-dim transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-cobalt transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Magnetic>
            <a
              href="#contact"
              className="rounded-full border border-border-strong bg-surface px-[18px] py-[9px] text-[0.85rem] font-semibold transition-colors hover:border-cobalt hover:bg-cobalt/10"
            >
              Get in touch
            </a>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
}
