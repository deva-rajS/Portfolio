// const { withAnimations } = require("animated-tailwindcss");

import { withAnimations } from 'animated-tailwindcss'

/** @type {import('tailwindcss').Config} */
export default withAnimations({
  darkMode:"class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Archivo: "'Archivo',sans-serif",
        Poppins: "'Poppins',sans-serif",
      },
    },
  },
  plugins: [],
});
