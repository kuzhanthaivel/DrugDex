/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#62B073',          
        customPurpleLight: '#C9A0C5',     
        customBlue: '#83C3D2',           
        customBrown: '#C79AE3',           
        customPurpleDark: '#C79AE3',      
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
