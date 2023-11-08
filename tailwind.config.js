/** @type {import('tailwindcss').Config} */
/*eslint-disable*/
module.exports = {
  content: [ './src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.js' ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans'], 
      },

      colors: {
        'primary': '#312263',
        primaryDark: '#312263',
        primaryLight: '#00ffff',
        secondary: '#f2d231',
        secondaryDark: '#000635',
        accent: '#ac78FF',
      },

      height: {
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '12/12': '100%',
      },

      

    },
  },
  plugins: [],
}

