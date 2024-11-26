/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins-font':["Poppins", 'sans-serif',],
        'nunito-font':["Nunito", 'sans-serif',],
      },
      colors: {
        'primary': '#5F35F5'
      },
    },
  },
  plugins: [],
}