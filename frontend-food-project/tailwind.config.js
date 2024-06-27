/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "	#ab395a",
        green: "#39ab8a	",
      },
      fontFamily: {
        primary: "Inter",
      },
    },
  },
  plugins: [],
};
