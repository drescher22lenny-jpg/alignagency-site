import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F4EF",
        "primary-dark": "#171717",
        secondary: "#6E6A64",
        "primary-light": "#171717",
        glow: {
          yellow: "#F5B642",
          orange: "#F07A22",
          red: "#E4312B",
        },
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #F5B642 0%, #F07A22 48%, #E4312B 100%)",
      },
      boxShadow: {
        glow: "0 12px 32px rgba(240, 122, 34, 0.12)",
        soft: "0 10px 28px rgba(35, 30, 24, 0.055)",
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
