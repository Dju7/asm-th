/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'pacifico': ['Pacifico', 'cursive'],
    },
    extend: {
      backgroundImage: {
        'home': "url('./assets/home.jpg')",
      },
      backgroundSize: {
        maxH : '100%',
        maxW : '100%',
      },

  },
  plugins: [],
}
}
