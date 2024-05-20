/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'fade-edge-to-transparent': 'linear-gradient(to right, transparent 0%, #fff 10%, #fff 90%, transparent 100%)',
      },
      textShadow: {
        outline: '0 0 10px #000',
      },
      fontFamily: {
        sans: ['Ronnia', ...defaultTheme.fontFamily.sans],
        wri: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'wri-blue': '#0967D2', 
        'wri-dark-blue': '#0D064C',
        'wri-mid-blue': '#107ae2',
        'wri-green': '#218838', 
        'wri-red': '#C82333', 
        'wri-yellow': '#FDB913', 
        'wri-gray': '#3B4245',
        'wri-neutral': '#d1d1d1',
      },      
      animation: {
        'loop-scroll': 'loop-scroll 100s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      aspectRatio: { // Adding aspect-ratio utilities
        '16/9': [16, 9],
        '4/3': [4, 3],
        '1/1': [1, 1],
      },
    },
  },
  variants: {
    textShadow: ['responsive', 'hover', 'focus'],
  },
  plugins: [require('tailwindcss-textshadow'), require('@tailwindcss/forms')],
};
