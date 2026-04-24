/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        body:['Nunito'],
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {

      const newUtilities = {

        ".scrollbar-thin": {

          scrollbarWidth: "thin",

          scrollbarColor: "rgb(109 29 29) white"

        },

        ".scrollbar-webkit": {

          "&::-webkit-scrollbar": {

            width: "8px"

          },

          "&::-webkit-scrollbar-track": {

            background: "white"

          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white"
          }
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
};
