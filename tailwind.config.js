/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '100':'30rem',
        '101':'32rem',
        '102':'34rem',
        '103':'36rem',
        '104':'38rem',
        '105':'40rem',
        '106':'42rem',
        '107':'44rem',
        '108':'46rem',
        '109':'48rem',
      },
      fontFamily: {
        acme:['Acme', 'sans-serif'],
        aclonica:['Aclonica', 'sans-serif'],
        roboto:['Roboto', 'sans-serif'],
      }

    },
    colors:{
      lightRose:'#FFC7C7',
      iridium:'#3A3A3A',
      white:'#FFFFFF',
      lightGrey:'#d9d9d9',
      rosewood:'#630000',
      azure:'#00A3F5',
      vividGreen:'#35F500',
      cloudyGrey:'#746767',
      black:'#000000',
      yellow:'#E5BE02',
      vividAuburn:'#9B2322',
      monsoon:'#888888',
      aquaHaze:'#F3F3F3',
      osloGrey:'#8D8D8D',
     
    },
  },
  plugins: [require("daisyui")],
}