/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../packages/ui/**/*.{js,ts,jsx,tsx}', '../../apps/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFB040',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/typography')],
};
