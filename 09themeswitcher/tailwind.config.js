/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Make sure this matches your file structure
  ],
  darkMode: 'class', // <-- Important!
  theme: {
    extend: {},
  },
  plugins: [],
}
