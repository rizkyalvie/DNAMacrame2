import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "butter": "#FFFFD2",
        "mint": "#C5FAD5",
        "light-purple": "#AA96DA",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#AA96DA",
  //         secondary: "#C5FAD5",
  //         accent: "#FFFFD2",
  //         neutral: "#FFFFD2",
  //         "base-100": "#FFFFD2",
  //         info: "#C5FAD5",
  //         success: "#22d3ee",
  //         warning: "yellow",
  //         error: "red",
  //       },
  //     },
  //   ],
  // },
};
export default config;
