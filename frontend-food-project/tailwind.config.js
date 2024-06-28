/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#39DB4A",
        // green: "#336600",

        category: "#C1F1C6",
        title: "#000000",
        description: "#555555",
      },
      fontFamily: {
        primary: "Inter",
      },
    },
  },
  plugins: [daisyui],
};
