import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#EEF2F8",
          100: "#D5E0F0",
          200: "#AABFE1",
          300: "#7F9FD2",
          400: "#547FC3",
          500: "#2A5EB4",
          600: "#1B3A6B",
          700: "#152D52",
          800: "#0F2039",
          900: "#0B1528",
          950: "#060D18",
        },
        gold: {
          300: "#EDD08A",
          400: "#E5B96E",
          500: "#D4A853",
          600: "#C9963F",
          700: "#B8832C",
          800: "#A07020",
          900: "#7A5518",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
