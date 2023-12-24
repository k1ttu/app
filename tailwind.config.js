/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgstart' : 'rgb(51, 97, 230)',
        'bgend' : 'rgb(100 , 209 , 249)'
      }
    },
  },
  plugins: [],
}
