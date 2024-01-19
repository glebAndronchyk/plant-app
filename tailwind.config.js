/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Nunito-Regular"'],
    },
    extend: {
      colors: {
        primary: '#0C600C',
        secondary: '#E9F6E0',
        black: '#1F241E',
        gray: {
          light: '#F7F7F7',
          background: '#FAFAFA',
        },
        orange: {
          light: '#FFEFE8',
          dark: '#A53100',
        },
        purple: {
          light: '#E6D2E5',
          dark: '#7A2053',
        },
        green: {
          100: '#B7CDB0',
          200: '#B4E197',
          300: '#59754F',
        },
        support: '#D33030',
      },
    },
  },
  plugins: [],
};
