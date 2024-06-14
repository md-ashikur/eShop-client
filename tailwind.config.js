/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D1FAE5",
          DEFAULT: "#7258DB",
        },
        secondary: {
          DEFAULT: "#00BDAA",
          500: "#626687",
          700: "#1B1C57",
        },
        neutral: {
          DEFAULT: "#888B97",
          500: "#626687",
          700: "#1B1C57",
        },
        third: "#F59E0B",
        base: {
          100: "#F9FBFD",
          DEFAULT:"#fff"
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
