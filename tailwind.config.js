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
      'last':'350px',
      'fourHun':'400px',
      'FourFif':'450px',
      'SixHun':'600px',
      'NineHun':'900px',
      'sevenHun':"700px",
      'TwelveHun':"1200px",
      'NineFif':'950px',
      'SevenFif':'750px',
    }
  },
  plugins: [],
}

