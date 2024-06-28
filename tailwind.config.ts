import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "projects-main": "repeat(auto-fill, minmax(31rem, 1fr))"
      }
    },
    colors: {
      "white": "#FFFFFF",
      "light-grey": "#EFF3FF",
      "dark-grey": "#313341",
      "blue": "#2D76F9",
      "crumb": "#9AA8BA",
      "red-error": "#F44336"
    },
    fontSize: {
      sm: '1.2rem',
      base: ['1.8rem', '2.1rem'],
      xl: '2.1rem',
      '2xl': ['2.4rem', '2.8rem'],
      '3xl': '2.7rem',
      '4xl': ['4.8rem', '5.7rem'],
      "mob": "1.3rem",
      "pre": "1.4rem"
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "10px" },
      });
    }),
  ],
};
