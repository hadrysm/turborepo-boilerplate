/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../packages/ui/**/*.{js,ts,jsx,tsx}', '../../apps/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFB040',
      },
      gridTemplateColumns: {
        'responsive-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
        'responsive-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/typography')],
};
