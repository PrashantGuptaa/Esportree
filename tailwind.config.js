/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-100': '#1e1e1e',
        'brand-dark-200': '#2C313C',
        'brand-dark-300': "#364053",
        'brand-yellow': "#FFE500",
        "brand-green": "#98C54F",
        "brand-red":"#E46D00",
        'brand-light': '#ffffff',
      }
    },
    screens:{
      '1450':'1450px',
      'last':'350px',
      'ThreeHun':'300px',
      'fourHun':'400px',
      'FourFif':'450px',
      'FourEighty':"480px",
      'SixHun':'600px',
      'NineHun':'900px',
      'sevenHun':"700px",
      'TwelveHun':"1200px",
      'NineFif':'950px',
      'SevenFif':'750px',
      'Thou':'1000px',
      '800':"800px",
      '850':"850px",
      '500':'500px'
    }
  },
  plugins: [],
}

