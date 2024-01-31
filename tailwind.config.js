/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8A42DB',
        primaryDarker: '#7b3bc4',
        grayLighter: '#dadada',
        grayDarker: '#ababab',
      },
    },
  },
  plugins: [],
};
