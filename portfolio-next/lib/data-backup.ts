export type Language = "en" | "ar";

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

export type TranslatedProject = {
  slug: string;
  index: string;
  name: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  summary: {
    en: string;
    ar: string;
  };
  liveUrl: string;
  tags: string[];
  blocks: {
    label: {
      en: string;
      ar: string;
    };
    body: {
      en: string;
      ar: string;
    };
    bullets?: {
      en: string[];
      ar: string[];
    };
  }[];
};

export const projects: TranslatedProject[] = [
  {
    slug: "careertech",
    index: "Case 01 / 04",
    name: {
      en: "CareerTech",
      ar: "CareerTech",
    },
    role: {
      en: "Backend Developer & Team Leader",
      ar: "مطور Backend وقائد فريق",
    },
    summary: {
      en: "A large EdTech SaaS platform covering authentication, dashboards, job listings, and a full learning/course system.",
      ar: "منصة تعليمية SaaS متكاملة تشمل نظام المصادقة، لوحات التحكم، الوظائف، ونظامًا كاملًا للتعلم والكورسات.",
    },
    liveUrl: "https://careertech-chi.vercel.app/",
    tags: ["Node.js", "Express", "REST APIs", "Auth", "Team Leadership"],
    blocks: [
      {
        label: {
          en: "Role",
          ar: "الدور",
        },
        body: {
          en: "Backend Developer and Team Leader — owned the backend architecture and led the wider development team through delivery.",
          ar: "مطور Backend وقائد فريق — مسؤول عن تصميم بنية الـBackend وقيادة فريق التطوير خلال مراحل تنفيذ المشروع.",
        },
      },
      {
        label: {
          en: "Problem",
          ar: "التحدي",
        },
        body: {
          en: "An EdTech platform this size needed a backend that could support authentication, course delivery, job listings, and a live dashboard, all consumed by a separate frontend team working in parallel — without integration becoming the bottleneck.",
          ar: "كانت المنصة بحاجة إلى Backend قادر على دعم المصادقة والكورسات والوظائف ولوحات التحكم، مع عمل فريق الـFrontend بالتوازي دون أن تصبح عملية التكامل عائقًا أمام التطوير.",
        },
      },
      {
        label: {
          en: "Solution",
          ar: "الحل",
        },
        body: {
          en: "Designed and built the backend in Node.js and Express, structured around clean, scalable REST APIs. Implemented authentication and authorization, managed the database layer, and set the architectural conventions the rest of the team built against.",
          ar: "تم تصميم وبناء الـBackend باستخدام Node.js وExpress مع الاعتماد على REST APIs منظمة وقابلة للتوسع، إلى جانب تنفيذ المصادقة والصلاحيات وإدارة قاعدة البيانات ووضع المعايير المعمارية للمشروع.",
        },
      },
      {
        label: {
          en: "Contributions & Leadership",
          ar: "المساهمات والقيادة",
        },
        body: {
          en: "",
          ar: "",
        },
        bullets: {
          en: [
            "Led the development team and coordinated task allocation",
            "Designed the REST API contracts consumed by the frontend",
            "Implemented authentication and authorization end to end",
            "Managed the database and overall backend architecture",
            "Integrated the frontend with backend services directly",
            "Ran code reviews to keep the architecture consistent and scalable",
          ],
          ar: [
            "قيادة فريق التطوير وتوزيع المهام",
            "تصميم REST API المستخدمة من جانب الـFrontend",
            "تنفيذ نظام المصادقة والصلاحيات بشكل كامل",
            "إدارة قاعدة البيانات وبنية الـBackend بالكامل",
            "ربط الـFrontend بخدمات الـBackend",
            "مراجعة الأكواد للحفاظ على بنية منظمة وقابلة للتوسع",
          ],
        },
      },
    ],
  },

  {
    slug: "maxim-tours",
    index: "Case 02 / 04",
    name: {
      en: "Maxim Tours",
      ar: "Maxim Tours",
    },
    role: {
      en: "Frontend Developer & Technical SEO Specialist",
      ar: "مطور Frontend ومتخصص Technical SEO",
    },
    summary: {
      en: "A WordPress-based Egypt travel agency site covering Nile cruises, tours, and hotel bookings.",
      ar: "موقع وكالة سياحية مصرية مبني باستخدام WordPress ويقدم رحلات نيلية وجولات سياحية وحجوزات فنادق.",
    },
    liveUrl: "https://maxim-tours.com/",
    tags: ["WordPress", "Technical SEO", "Core Web Vitals", "Search Console"],
    blocks: [
      {
        label: {
          en: "Role",
          ar: "الدور",
        },
        body: {
          en: "Frontend Developer and Technical SEO Specialist on a live WordPress travel booking site.",
          ar: "مطور Frontend ومتخصص Technical SEO لموقع سياحي يعمل بنظام WordPress.",
        },
      },
      {
        label: {
          en: "Problem",
          ar: "التحدي",
        },
        body: {
          en: "A WordPress/Elementor site with a large catalog of tours and destinations needed stronger technical foundations for search visibility, alongside responsive and UX fixes across the existing theme.",
          ar: "كان الموقع بحاجة إلى تحسين الأساسيات التقنية لتحسين ظهوره في محركات البحث، بالإضافة إلى تحسين الـResponsive والـUX في الصفحات الحالية.",
        },
      },
      {
        label: {
          en: "Solution",
          ar: "الحل",
        },
        body: {
          en: "Worked through technical and on-page SEO systematically: configured and optimized Google Search Console, addressed Core Web Vitals and general performance, customized WordPress components, and improved responsive behavior and UX across key pages.",
          ar: "تم تنفيذ تحسينات Technical SEO وOn-Page SEO بشكل منهجي، مع إعداد وتحسين Google Search Console، والعمل على Core Web Vitals والأداء، وتخصيص مكونات WordPress وتحسين الـResponsive والـUX.",
        },
      },
      {
        label: {
          en: "Contributions",
          ar: "المساهمات",
        },
        body: {
          en: "",
          ar: "",
        },
        bullets: {
          en: [
            "Technical SEO audit and fixes",
            "On-page SEO and content optimization",
            "Google Search Console setup and ongoing optimization",
            "Core Web Vitals and site performance improvements",
            "WordPress customization and responsive design fixes",
            "General UX improvements across key pages",
          ],
          ar: [
            "مراجعة وإصلاح مشكلات Technical SEO",
            "تحسين On-Page SEO والمحتوى",
            "إعداد وتحسين Google Search Console",
            "تحسين Core Web Vitals وأداء الموقع",
            "تخصيص WordPress وتحسين التصميم المتجاوب",
            "تحسين تجربة المستخدم في الصفحات الرئيسية",
          ],
        },
      },
    ],
  },

  {
    slug: "rasheed-research",
    index: "Case 03 / 04",
    name: {
      en: "Rasheed Research",
      ar: "Rasheed Research",
    },
    role: {
      en: "Frontend Developer & SEO Specialist",
      ar: "مطور Frontend ومتخصص SEO",
    },
    summary: {
      en: "An Arabic-language academic services site offering research writing, presentation design, and related support.",
      ar: "موقع عربي للخدمات الأكاديمية يقدم خدمات كتابة الأبحاث وتصميم العروض التقديمية وغيرها من الخدمات.",
    },
    liveUrl: "https://rasheedresearch.com/",
    tags: [
      "Technical SEO",
      "Content Structure",
      "Performance",
      "Responsive Design",
    ],
    blocks: [
      {
        label: {
          en: "Role",
          ar: "الدور",
        },
        body: {
          en: "Frontend Developer and SEO Specialist for an Arabic-language academic-services business.",
          ar: "مطور Frontend ومتخصص SEO لموقع يقدم خدمات أكاديمية باللغة العربية.",
        },
      },
      {
        label: {
          en: "Problem",
          ar: "التحدي",
        },
        body: {
          en: "The site needed clean, well-structured content and stronger technical fundamentals to be indexed and understood properly by search engines, alongside a solid responsive experience for visitors.",
          ar: "كان الموقع بحاجة إلى محتوى منظم بشكل أفضل وأساسيات تقنية أقوى حتى تتمكن محركات البحث من فهم الصفحات وأرشفتها بشكل صحيح، مع تحسين تجربة المستخدم على مختلف الأجهزة.",
        },
      },
      {
        label: {
          en: "Solution",
          ar: "الحل",
        },
        body: {
          en: "Applied technical SEO improvements, restructured content for clarity and crawlability, and improved page performance and responsive behavior to support better indexing and a more usable site.",
          ar: "تم تطبيق تحسينات Technical SEO، وإعادة تنظيم المحتوى لتحسين وضوحه وقابليته للزحف، بالإضافة إلى تحسين أداء الصفحات والتصميم المتجاوب لدعم الفهرسة وتجربة المستخدم.",
        },
      },
      {
        label: {
          en: "Contributions",
          ar: "المساهمات",
        },
        body: {
          en: "",
          ar: "",
        },
        bullets: {
          en: [
            "Technical SEO and general site optimization",
            "Google indexing improvements",
            "Content structure optimization",
            "Performance improvements and responsive design",
          ],
          ar: [
            "تحسين Technical SEO وأداء الموقع بشكل عام",
            "تحسين فهرسة الموقع في Google",
            "تحسين هيكلة المحتوى",
            "تحسين الأداء والتصميم المتجاوب",
          ],
        },
      },
    ],
  },

  {
    slug: "personal-shopper",
    index: "Case 04 / 04",
    name: {
      en: "Personal Shopper",
      ar: "Personal Shopper",
    },
    role: {
      en: "Full Stack Developer",
      ar: "مطور Full Stack",
    },
    summary: {
      en: "A modern personal shopping web application built around a clean, guided shopping experience.",
      ar: "تطبيق ويب حديث لخدمات التسوق الشخصي، مصمم لتقديم تجربة استخدام بسيطة وواضحة.",
    },
    liveUrl: "https://personal-shopper-olive.vercel.app/",
    tags: ["React", "Full Stack", "Responsive Design", "Performance"],
    blocks: [
      {
        label: {
          en: "Role",
          ar: "الدور",
        },
        body: {
          en: "Full Stack Developer, responsible for both the shopping experience on the frontend and its backend integration.",
          ar: "مطور Full Stack، مسؤول عن تجربة التسوق في الـFrontend بالإضافة إلى التكامل مع الـBackend.",
        },
      },
      {
        label: {
          en: "Problem",
          ar: "التحدي",
        },
        body: {
          en: "A personal shopping service needed a digital experience that felt as premium as the service itself — fast, clear, and usable across devices — backed by a clean, maintainable architecture rather than a one-off landing page.",
          ar: "كانت خدمة التسوق الشخصي بحاجة إلى تجربة رقمية سريعة وواضحة وتعمل بكفاءة على مختلف الأجهزة، مع بنية برمجية منظمة وقابلة للصيانة بدلًا من مجرد Landing Page.",
        },
      },
      {
        label: {
          en: "Solution",
          ar: "الحل",
        },
        body: {
          en: "Built a responsive, modern interface for browsing and requesting the shopping service, connected to backend integration for handling requests, structured around a clean, component-based architecture with performance as a first-class concern.",
          ar: "تم بناء واجهة حديثة ومتجاوبة لاستعراض وطلب خدمة التسوق، مع ربطها بالـBackend لمعالجة الطلبات، باستخدام بنية Component-based منظمة مع التركيز على الأداء.",
        },
      },
      {
        label: {
          en: "Contributions",
          ar: "المساهمات",
        },
        body: {
          en: "",
          ar: "",
        },
        bullets: {
          en: [
            "Responsive, modern UI for the shopping experience",
            "Backend integration for handling requests",
            "Clean, componentized frontend architecture",
            "Performance optimization across devices",
          ],
          ar: [
            "بناء واجهة حديثة ومتجاوبة لتجربة التسوق",
            "ربط الـFrontend بالـBackend لمعالجة الطلبات",
            "بناء Frontend منظم وقابل لإعادة الاستخدام",
            "تحسين الأداء على مختلف الأجهزة",
          ],
        },
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