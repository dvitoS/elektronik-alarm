import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        yellow: {
          DEFAULT: "var(--color-yellow)",
          bright: "var(--color-yellow-bright)",
        },
        muted: "var(--color-muted)",
        soft: "var(--color-soft)",
        warm: "var(--color-warm)",
        peach: "var(--color-peach)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
