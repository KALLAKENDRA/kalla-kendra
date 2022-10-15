/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '53':'13.438rem',
        '100':'30rem',
        '102':'32rem',
        '104':'34rem',
        '106':'36rem',
        '108':'38rem',
        '110':'40rem',
        '112':'42rem',
        '113':'42.313rem',
        '114':'44rem',
        '116':'46rem',
        '118':'48rem',
        '200':'90rem',
      },
      fontFamily: {
        acme: ['Acme', 'sans-serif'],
        aclonica: ['Aclonica', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      }

    },
    colors: {
      lightRose: '#FFC7C7',
      iridium: '#3A3A3A',
      white: '#FFFFFF',
      lightGrey: '#d9d9d9',
      rosewood: '#630000',
      azure: '#00A3F5',
      vividGreen: '#35F500',
      cloudyGrey: '#746767',
      black: '#000000',
      yellow: '#E5BE02',
      vividAuburn: '#9B2322',
      darkRed: '#7F1211',
      monsoon: '#888888',
      aquaHaze: '#F3F3F3',
      osloGrey: '#8D8D8D',

    },
  },
  plugins: [require("daisyui")],
}