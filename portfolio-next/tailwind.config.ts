import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        bg: "var(--background)",
        "bg-alt": "var(--background-alt)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",

        border: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
        },

        ink: {
          DEFAULT: "var(--foreground)",
          dim: "var(--foreground-dim)",
          faint: "var(--foreground-faint)",
        },

        cobalt: "var(--accent)",
        amber: "var(--accent-secondary)",
        green: "var(--green)",
      },

      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },

      keyframes: {
        blink: {
          "50%": {
            opacity: "0",
          },
        },

        marquee: {
          to: {
            transform: "translateX(-50%)",
          },
        },

        pulse2: {
          "0%,100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.3",
          },
        },
      },

      animation: {
        blink: "blink 1s steps(1) infinite",
        marquee: "marquee 26s linear infinite",
        pulse2: "pulse2 1.6s infinite",
      },
    },
  },

  plugins: [],
};

export default config;