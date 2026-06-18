import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        royal: {
          dark: "#0A0A0A",
          saffron: "#E27D60",
          gold: "#C5A059",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-geist)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
