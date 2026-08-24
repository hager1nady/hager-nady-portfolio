export type Language = "en" | "ar";

export const translations = {
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      work: "Work",
      experience: "Experience",
      contact: "Get in touch",
    },

    hero: {
      available: "Available for full-stack & SEO engagements",
      greeting: "Hi, I'm",
      name: "Hager Nady",
      role: "Full Stack Developer",
      description:
        "I'm Hager Nady, a Full Stack Developer working across React, Next.js and Node.js — with a specialism in Technical SEO most engineers skip. I build the backend that holds up under load, and the front end that shows up in search.",
      viewWork: "View my work",
      contact: "Get in touch",
    },

    about: {
      label: "About",
      title: "Two disciplines most people keep separate.",
      description:
        "I build the systems that serve the data and make sure the pages built on top of them actually get found.",
    },

    stack: {
      label: "Stack",
      title: "Technologies I work with",
    },

    work: {
      label: "Work",
      title: "Selected projects",
      viewProject: "View project",
    },

    leadership: {
      label: "Experience",
      title: "Experience & Leadership",
    },

    contact: {
      label: "Contact",
      title: "Let's work together.",
      description:
        "Have a project in mind or want to work together? I'd love to hear from you.",
      send: "Send message",
    },

    footer: {
      rights: "All rights reserved.",
    },
  },

  ar: {
    nav: {
      about: "نبذة عني",
      stack: "المهارات",
      work: "أعمالي",
      experience: "الخبرة",
      contact: "تواصل معي",
    },

    hero: {
      available: "متاحة للعمل في مشاريع Full Stack وSEO",
      greeting: "مرحبًا، أنا",
      name: "هاجر نادي",
      role: "مطورة Full Stack",
      description:
        "أنا هاجر نادي، مطورة Full Stack أعمل باستخدام React وNext.js وNode.js، مع تخصص في Technical SEO الذي يتجاهله الكثير من المطورين. أبني أنظمة Backend قوية وقابلة لتحمل الضغط، وواجهات Frontend محسنة للظهور في نتائج البحث.",
      viewWork: "شاهد أعمالي",
      contact: "تواصل معي",
    },

    about: {
      label: "نبذة عني",
      title: "مجالان يفضل معظم الناس الفصل بينهما.",
      description:
        "أبني الأنظمة التي تتعامل مع البيانات، وأحرص على أن تصل الصفحات المبنية فوقها إلى المستخدمين ومحركات البحث.",
    },

    stack: {
      label: "المهارات",
      title: "التقنيات التي أعمل بها",
    },

    work: {
      label: "أعمالي",
      title: "أبرز مشاريعي",
      viewProject: "عرض المشروع",
    },

    leadership: {
      label: "الخبرة",
      title: "الخبرات والقيادة",
    },

    contact: {
      label: "تواصل معي",
      title: "لنعمل معًا.",
      description:
        "لديك مشروع في ذهنك أو ترغب في التعاون؟ يسعدني أن أسمع منك.",
      send: "إرسال الرسالة",
    },

    footer: {
      rights: "جميع الحقوق محفوظة.",
    },
  },
} as const;