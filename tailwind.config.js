/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      panding:'16px'
    },
    extend: {
      colors: {
        primary: 'oklch(68.5% 0.169 237.323)',
        secondary: 'oklch(55.4% 0.046 257.417)',
        dark : 'oklch(20.8% 0.042 265.755)',
      },
      screens:{'2xl':'1320px'

      },
    },
  },
  plugins: [],
}