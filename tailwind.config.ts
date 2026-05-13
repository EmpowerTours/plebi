import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fbf8f1",
        paperWarm: "#f4ede0",
        ink: "#1a1a1f",
        graphite: "#3b3b44",
        mute: "#7a7682",
        line: "rgba(26,26,31,0.10)",
        coral: "#ff5a3c",
        coralDeep: "#d44627",
        leaf: "#1c8a5a",
        sky: "#3a6df0",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        body: ['"Instrument Sans"', "ui-sans-serif", "system-ui"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: { tightest: "-0.04em" },
    },
  },
  plugins: [],
} satisfies Config;
