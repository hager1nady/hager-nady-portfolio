import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0D13",
        "bg-alt": "#0D1119",
        surface: "#12161F",
        "surface-2": "#161B26",
        border: {
          DEFAULT: "rgba(231,234,240,0.08)",
          strong: "rgba(231,234,240,0.14)",
        },
        ink: {
          DEFAULT: "#E7EAF0",
          dim: "#8B93A7",
          faint: "#565E70",
        },
        cobalt: "#5B8CFF",
        amber: "#FFB454",
        green: "#6EE7B7",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        pulse2: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
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
