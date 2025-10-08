/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },

      colors: {
        lightBg: "#F7F6F2",
        lightPrimaryText: "#000",
        lightSecondaryText: "#575757",
        lightBtnBg: "#222",
        lightHoverBtnBg: "#167bce", 
        lightActiveBtnBg: "#2196f3",
        lightBorder: "#E0E0E0",
        lightInputBg: "#F5F5F5",
        lightInputBorder: "#E0E0E0",
        lightInputText: "#000",
        lightInputPlaceholder: "#575757",
        lightInputFocusBorder: "#2196f3",
        lightInputFocusPlaceholder: "#575757",
        lightInputFocusText: "#000",
      }
    },
  },
  plugins: [],
}

