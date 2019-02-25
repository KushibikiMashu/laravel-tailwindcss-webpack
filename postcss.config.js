var tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('precss'),
    require('autoprefixer'),
  ]
}
