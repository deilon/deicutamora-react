/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '25px',
    },
    fontFamily: {
      cascadiacode: ['CascadiaCode', 'sans-serif']
    },
    extend: {
      colors: {
        customBlack: '#0C0C0C',
        customWhite: '#FFFFFF',
        mutedWhite: '#AAAAAA',
        mutedGreen: '#377E72',
        deepBlue: '#5950C1'
      }
    },
  },
  plugins: [],
}
