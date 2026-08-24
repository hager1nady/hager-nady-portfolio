# Hager Nady — Portfolio

A premium, animated Next.js portfolio for Hager Nady, Full Stack Developer
(React, Next.js, Node.js) with a Technical SEO specialism.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals, magnetic buttons)
- lucide-react icons
- next/font (Space Grotesk, Inter, JetBrains Mono)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

This build was validated end-to-end (TypeScript, Tailwind, static generation,
sitemap, robots) in a sandboxed environment without access to
fonts.googleapis.com — on a normal machine or when deployed (e.g. to Vercel),
`next/font/google` fetches and self-hosts the fonts automatically at build
time, so no extra setup is needed there.

## Structure

```
app/
  layout.tsx      — fonts, metadata, root shell
  page.tsx        — composes all sections
  globals.css     — design tokens + custom background grid
  sitemap.ts
  robots.ts
components/
  Nav.tsx, Hero.tsx, Terminal.tsx, Marquee.tsx, About.tsx,
  Stack.tsx, Projects.tsx, ProjectCard.tsx, Leadership.tsx,
  Contact.tsx, Footer.tsx, CustomCursor.tsx, Magnetic.tsx, Reveal.tsx
lib/
  data.ts         — single source of truth for project case studies,
                    stack, timeline, and contact info
```

## Editing content

All project case studies, the tech stack list, the timeline, and contact
details live in `lib/data.ts` — edit that one file rather than hunting
through components.

## Deploying

Push to a GitHub repo and import it on [vercel.com](https://vercel.com) —
zero configuration needed.
