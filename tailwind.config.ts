import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFEF7",
        cream: "#FAF8F5",
        warm: {
          50: "#FDFCFA",
          100: "#FAF8F5",
          200: "#F5F1EB",
          300: "#EDE7DD",
        },
        accent: {
          gold: "#C9A86C",
          "gold-light": "#E5D4B3",
          "gold-dark": "#8B7355",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
    },
  },
  plugins: [],
};

export default config;
