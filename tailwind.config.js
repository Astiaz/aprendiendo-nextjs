const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,//Usamos los colores extras
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};