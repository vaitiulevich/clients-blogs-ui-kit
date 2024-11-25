/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sen: ['Sen', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        borderColor: '#6D6E76',
        yellow: '#FFD050',
        yellowHover: '#ffdf89',
        yellowOpasity: '#FBF6EA',
        darkBG: '#232536',
        lightBG: '#F5F5F5',
        dark: '#232536',
        light: '#FFFFFF',
        grey: '#6D6E76',
        purpure: '#592EA9',
      },
    },
  },
  plugins: [],
};
