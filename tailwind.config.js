/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF0000',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
