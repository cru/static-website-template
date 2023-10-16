/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/lib/cms-utils.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Roboto Mono"'],
      },
      colors: {
        brand: '#6b21a8',
      },
    },
  },
}
