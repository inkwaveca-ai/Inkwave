import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f2f7ff",
          100: "#e3edff",
          200: "#c5d9ff",
          300: "#9bbcff",
          400: "#6a95ff",
          500: "#3e6fff",
          600: "#2850e6",
          700: "#1e3cb3",
          800: "#17308a",
          900: "#111f5c",
          950: "#0a1436",
        },
        accent: {
          500: "#ff7a1a",
          600: "#e65c00",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.08)",
        lift: "0 10px 30px -10px rgba(17,31,92,0.25)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
