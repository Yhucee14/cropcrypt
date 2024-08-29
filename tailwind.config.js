/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepgreen: '#1B6909',
        blue: '#1B6392',
        white: '#FFFFFF',
        black: '#000000',
      },
      screens: {
        xx: "320px",
        xs: "412px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1400px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}