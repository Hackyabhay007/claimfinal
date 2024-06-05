/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'marlide': ['"Marlide Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}