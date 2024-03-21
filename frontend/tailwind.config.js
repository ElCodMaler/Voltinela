/** @type {import('tailwindcss').config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.{html,js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
    ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      lime: colors.lime,
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};