/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        migra: ["Migra", "sans-serif"],
      },

      colors: {
        'dark': '#121212',
        'light': '#FFFFFF',
      }
    },
  },
  plugins: [],
}
