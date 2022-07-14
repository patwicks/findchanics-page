/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: "#FD003A",
        darkBlack: "#111111",
        darkGreen: "#009E80",
        whitey: {
          100: "#FFFFFF",
          200: "#E6E6E6",
          300: "#CCCCCC",
        },
      },
    },
  },
  variants: {
    extends: {
      scrollbar: ["rounded"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
