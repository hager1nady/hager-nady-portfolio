export type CaseBlock = {
  label: string;
  body: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  role: string;
  summary: string;
  liveUrl: string;
  tags: string[];
  blocks: CaseBlock[];
};

export const projects: Project[] = [
  {
    slug: "careertech",
    index: "Case 01 / 04",
    name: "CareerTech",
    role: "Backend Developer & Team Leader",
    summary:
      "A large EdTech SaaS platform covering authentication, dashboards, job listings, and a full learning/course system.",
    liveUrl: "https://careertech-chi.vercel.app/",
    tags: ["Node.js", "Express", "REST APIs", "Auth", "Team Leadership"],
    blocks: [
      {
        label: "Role",
        body: "Backend Developer and Team Leader — owned the backend architecture and led the wider development team through delivery.",
      },
      {
        label: "Problem",
        body: "An EdTech platform this size needed a backend that could support authentication, course delivery, job listings, and a live dashboard, all consumed by a separate frontend team working in parallel — without integration becoming the bottleneck.",
      },
      {
        label: "Solution",
        body: "Designed and built the backend in Node.js and Express, structured around clean, scalable REST APIs. Implemented authentication and authorization, managed the database layer, and set the architectural conventions the rest of the team built against.",
      },
      {
        label: "Contributions & Leadership",
        body: "",
        bullets: [
          "Led the development team and coordinated task allocation",
          "Designed the REST API contracts consumed by the frontend",
          "Implemented authentication and authorization end to end",
          "Managed the database and overall backend architecture",
          "Integrated the frontend with backend services directly",
          "Ran code reviews to keep the architecture consistent and scalable",
        ],
      },
    ],
  },
  {
    slug: "maxim-tours",
    index: "Case 02 / 04",
    name: "Maxim Tours",
    role: "Frontend Developer & Technical SEO Specialist",
    summary:
      "A WordPress-based Egypt travel agency site covering Nile cruises, tours, and hotel bookings.",
    liveUrl: "https://maxim-tours.com/",
    tags: ["WordPress", "Technical SEO", "Core Web Vitals", "Search Console"],
    blocks: [
      {
        label: "Role",
        body: "Frontend Developer and Technical SEO Specialist on a live WordPress travel booking site.",
      },
      {
        label: "Problem",
        body: "A WordPress/Elementor site with a large catalog of tours and destinations needed stronger technical foundations for search visibility, alongside responsive and UX fixes across the existing theme.",
      },
      {
        label: "Solution",
        body: "Worked through technical and on-page SEO systematically: configured and optimized Google Search Console, addressed Core Web Vitals and general performance, customized WordPress components, and improved responsive behavior and UX across key pages.",
      },
      {
        label: "Contributions",
        body: "",
        bullets: [
          "Technical SEO audit and fixes",
          "On-page SEO and content optimization",
          "Google Search Console setup and ongoing optimization",
          "Core Web Vitals and site performance improvements",
          "WordPress customization and responsive design fixes",
          "General UX improvements across key pages",
        ],
      },
    ],
  },
  {
    slug: "rasheed-research",
    index: "Case 03 / 04",
    name: "Rasheed Research",
    role: "Frontend Developer & SEO Specialist",
    summary:
      "An Arabic-language academic services site offering research writing, presentation design, and related support.",
    liveUrl: "https://rasheedresearch.com/",
    tags: ["Technical SEO", "Content Structure", "Performance", "Responsive Design"],
    blocks: [
      {
        label: "Role",
        body: "Frontend Developer and SEO Specialist for an Arabic-language academic-services business.",
      },
      {
        label: "Problem",
        body: "The site needed clean, well-structured content and stronger technical fundamentals to be indexed and understood properly by search engines, alongside a solid responsive experience for visitors.",
      },
      {
        label: "Solution",
        body: "Applied technical SEO improvements, restructured content for clarity and crawlability, and improved page performance and responsive behavior to support better indexing and a more usable site.",
      },
      {
        label: "Contributions",
        body: "",
        bullets: [
          "Technical SEO and general site optimization",
          "Google indexing improvements",
          "Content structure optimization",
          "Performance improvements and responsive design",
        ],
      },
    ],
  },
  {
    slug: "personal-shopper",
    index: "Case 04 / 04",
    name: "Personal Shopper",
    role: "Full Stack Developer",
    summary:
      "A modern personal shopping web application built around a clean, guided shopping experience.",
    liveUrl: "https://personal-shopper-olive.vercel.app/",
    tags: ["React", "Full Stack", "Responsive Design", "Performance"],
    blocks: [
      {
        label: "Role",
        body: "Full Stack Developer, responsible for both the shopping experience on the frontend and its backend integration.",
      },
      {
        label: "Problem",
        body: "A personal shopping service needed a digital experience that felt as premium as the service itself — fast, clear, and usable across devices — backed by a clean, maintainable architecture rather than a one-off landing page.",
      },
      {
        label: "Solution",
        body: "Built a responsive, modern interface for browsing and requesting the shopping service, connected to backend integration for handling requests, structured around a clean, component-based architecture with performance as a first-class concern.",
      },
      {
        label: "Contributions",
        body: "",
        bullets: [
          "Responsive, modern UI for the shopping experience",
          "Backend integration for handling requests",
          "Clean, componentized frontend architecture",
          "Performance optimization across devices",
        ],
      },
    ],
  },
];

export const stack = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "REST API design", "Auth & authorization"],
  },
  {
    group: "Data & Infra",
    items: ["MongoDB", "Git / GitHub", "Vercel", "WordPress"],
  },
  {
    group: "Technical SEO",
    items: [
      "Google Search Console",
      "Core Web Vitals",
      "Schema / structured data",
      "Content & site structure",
    ],
  },
];

export const timeline = [
  {
    year: "2023",
    title: "B.Sc. Management Information Systems",
    body: "Sadat Academy — systems thinking and structured problem solving underpinning how I approach architecture today.",
  },
  {
    year: "Route Academy",
    title: "Front-End Development Diploma",
    body: "Foundational training in modern JavaScript, React, and responsive engineering practice.",
  },
  {
    year: "Internship",
    title: "Front-End Developer, Stock Squeeze",
    body: "Built modular, reusable React components and integrated REST APIs for a large-scale educational platform, working inside a professional dev team with daily stand-ups and code review.",
  },
  {
    year: "Recent",
    title: "Backend Lead → Full Stack & SEO",
    body: "Led backend development on CareerTech, then extended into technical SEO across two production sites — the combination this portfolio is built around.",
  },
];

export const contact = {
  name: "Hager Nady",
  title: "Full Stack Developer",
  email: "hajrnady24@gmail.com",
  phone: "+20 122 593 2552",
  phoneHref: "+201225932552",
  github: "https://github.com/hager1nady",
  linkedin: "https://linkedin.com/in/hager-nady",
};
