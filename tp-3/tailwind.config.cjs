/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
      },
      colors: {
        'brand-primary': colors.violet
      }
    },
  },
  plugins: [],
}
