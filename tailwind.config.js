/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary
        pink: "hsl(322, 100%, 66%)",
        lightPink: "hsl(321, 100%, 78%)",
        lightRed: "hsl(0, 100%, 63%)",

        // Neutral
        veryDarkCyan: "hsl(192, 100%, 9%)",
        veryPaleBlue: "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 2px 10px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
};
