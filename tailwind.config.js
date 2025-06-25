/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-bg': '#19181f',
      },
      backgroundImage: {
        'hero-pattern': "url('/Assets/bg.png')",
        'about-pattern': "url('/Assets/bg2.png')",
      },
    },
  },
  plugins: [],
}