/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      backgroundImage: {
        app: 'url(/bg-effects.png)'
      },

      colors:{
        ignite:{
          500: '#129E57'
        },
        gray:{
          900: '#121214',
          800: '#202024',
          600: '#323238',
          300: '#8D8D99',
          100: '#E1E1E6'
        },
        yellow:{
          700: '#E5CD3D',
          500: '#F7DD43',
        }
      }

    },
  },
  plugins: [],
}
