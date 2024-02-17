import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      "blue-main": "#1A298Ef6",
      "blue-bg": "#2653B0",
      "blue-light": "#98B5E8",
      "yellow-main": "#F7CE45",
    },
    fontFamily: {
      sans: ["var(--font--Epilogue)", ...defaultTheme.fontFamily.sans],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
