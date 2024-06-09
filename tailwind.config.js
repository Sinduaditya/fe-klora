/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: '#1C4B1D',
        primary: {
          50: "#f2fbf2",
          100: "#e1f8e0",
          200: "#c4f0c2",
          300: "#94e292",
          400: "#5ecc5c",
          500: "#39b136",
          600: "#289227",
          700: "#237322",
          800: "#215b20",
          900: "#1c4b1d",
          950: "#0a290b",
        },
        neutral: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#242424",
        },
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
