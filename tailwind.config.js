/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/renderer/**/*.{html,js}', // Rutas donde se usa Tailwind
    './src/main/**/*.{html,js}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
