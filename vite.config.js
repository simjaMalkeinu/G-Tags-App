import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: 'src/renderer',
  base: './', // 🔹 Importante para evitar rutas absolutas incorrectas
  build: {
    outDir: path.resolve(__dirname, 'src/dist'),
    emptyOutDir: true
  },
  server: {
    port: 5173
  },
  plugins: [react()]
})
