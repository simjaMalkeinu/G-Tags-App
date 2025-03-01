import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/renderer/**/*.{html,js,ts,jsx,tsx}', // Rutas donde se usa Tailwind
    './src/app/**/*.{html,js,ts,jsx,tsx}', // Rutas donde se usa Tailwind
    './src/main/**/*.{html,js}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}' // Rutas de los componentes de HeroUI
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
  darkMode: 'class', // Modo oscuro
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }), // Plugin para scroll personalizado
    heroui() // Plugin de HeroUI
  ]
}
