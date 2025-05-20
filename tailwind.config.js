/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000", // Red color for primary elements
      },
      backgroundImage: {
        'texture': "url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\" opacity=\"0.3\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"1000\" height=\"1000\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
      },
      fontFamily: {
        'main-heading': ['Source Sans Pro', 'sans-serif'],
        'sub-heading': ['Inter', 'sans-serif'],
        'alt-heading': ['Source Sans Pro', 'sans-serif'],
        'nav': ['Inter', 'sans-serif']
      },
      letterSpacing: {
        'widest': '.25em',
        'ultra-wide': '.35em'
      }
    },
  },
  plugins: [],
}