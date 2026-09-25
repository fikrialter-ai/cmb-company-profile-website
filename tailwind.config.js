/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#243FC2', dark: '#182B8C', pale: '#EEF2FF' },
        accent: { DEFAULT: '#D9232D', dark: '#B41C25' },
        ink: '#252B32',
        muted: '#59636E',
        line: '#DFE3E8',
        surface: '#F5F6F8'
      },
      fontFamily: {
        sans: ['Manrope', 'Arial', 'sans-serif'],
        display: ['Barlow Condensed', 'Arial Narrow', 'sans-serif']
      }
    }
  },
  plugins: []
};
