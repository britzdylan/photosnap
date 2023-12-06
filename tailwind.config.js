/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        pureBlack: '#000000',
        pureWhite: '#ffffff',
        lightGrey: '#DFDFDF',
        brand: {
          blue: '#FFC593',
          pink: '#BC7198',
          orange: '#5A77FF',
        },
      },
      backgroundImage: {
        'cta-bg': "url('/rocks.png')",
      },
    },
  },
  plugins: [],
};
