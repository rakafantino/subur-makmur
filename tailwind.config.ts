import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5bec13",
        "primary-dark": "#4ad00f",
        "background-light": "#f6f8f6",
        "background-dark": "#162210",
        "banner-red": "#d91e18",
        "banner-orange": "#f39c12",
        "pecel-orange": "#ff6b00",
        "pecel-yellow": "#fff200",
        "pecel-red": "#DC143C",
      },
      fontFamily: {
        display: ["Work Sans", "sans-serif"],
      },
      boxShadow: {
        hard: "4px 4px 0px 0px rgba(0,0,0,1)",
        "hard-sm": "2px 2px 0px 0px rgba(0,0,0,1)",
        "hard-hover": "6px 6px 0px 0px rgba(0,0,0,1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
