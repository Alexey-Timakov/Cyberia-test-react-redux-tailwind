import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "layout": "auto 1fr auto",
        "layout-main": "auto minmax(65rem, 134rem) auto",
        "header": "9.3rem auto 3.2rem",
        "header-main": "13.1rem minmax(0, 19rem) minmax(35rem, 52rem) auto",
        "footer": "auto 1fr auto",
        "footer-main": "auto minmax(57rem, 124rem) auto",
        "footer-content": "1fr 1fr",
        "footer-content-main": "19.6rem minmax(0, 15.7rem) 16rem minmax(0, 5.4rem)",
        "projects": "1fr",
        "projects-main": "repeat(auto-fill, minmax(31rem, 1fr))"
      },
      gridTemplateRows: {
        "form-inputs": "repeat(3, 9rem) 3fr"
      }
    },
    colors: {
      "white": "#FFFFFF",
      "light-grey": "#EFF3FF",
      "dark-grey": "#313341",
      "blue": "#2D76F9",
      "crumb": "#9AA8BA",
      "red-error": "#F44336",
      "mob-dark": "#20212C"
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
