/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/renderer/**/*.{html,js}', // Rutas donde se usa Tailwind
    './src/main/**/*.{html,js}'
  ],
  theme: {
    extend: {
      // Opcional: Colores personalizados
      colors: {
        scrollbar: {
          thumb: '#4B5563', // Color del "pulgar" del scroll
          track: '#E5E7EB' // Color del fondo
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }) // Plugin para scroll personalizado
  ]
}
