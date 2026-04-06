import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0A0A0A",
        "primary-dark": "#222222",
        secondary: "#5B5B5B",
        "primary-light": "#FFFFFC",
        glow: {
          yellow: "#F6C453",
          orange: "#F08B49",
          red: "#D6523C",
        },
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #F6C453 0%, #F08B49 48%, #D6523C 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(240, 139, 73, 0.18)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
      fontFamily: {
        sans: ["Satoshi", "Inter", "system-ui", "sans-serif"],
        display: ["Clash Display", "Satoshi", "Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 10s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
