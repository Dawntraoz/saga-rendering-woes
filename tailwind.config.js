/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  safelist: [
    {
      pattern: /row-start-(1|2|3|4|5|6|7|8|9|10|11|12|13|14)/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        woes: {
          light: '#decea7',
          medium: '#937C50',
          dark: '#231C18',
          red: '#FF5942',
          green: '#41B883'
        }
      },
      gridRow: {
        'span-14': 'span 14 / span 14',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
      }
    },
  },
  plugins: [
  ],
}
