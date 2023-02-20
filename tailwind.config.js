/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF0000',
        shoppyBrand: '#F96162',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
