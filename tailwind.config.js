/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'primary':{
        50: '#f5f7ee',
        100: '#eaeed9',
        200: '#d7deb8',
        300: '#bcc88e',
        400: '#9eaf64',
        500: '#84964c',
        600: '#667739',
        700: '#505c2f',
        800: '#414a2a',
        900: '#394027',
        950: '#1d2211',
      },
      'secondary':{
        50:'#e0be28c5',
        100:'#e0bd28ff'
      }
    },
    extend: {},
  },
  plugins: [],
}

