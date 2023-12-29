/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { 
      '3xl': '2400px',
    },
    fontFamily: {
      'montserrat': ['"Montserrat"', '"sans-serif"'],
      'pacifico': ['"Pacifico"', '"cursive"'],
    },
    extend: {
      backgroundImage: {
        'home': "url('./assets/marche.jpg')",
      },
      backgroundSize: {
        maxH : '100%',
        maxW : '100%',
      },

  },
  plugins: [],
}
}
