import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://olena-koval.github.io/pig-game-react/', // Asegúrate de que esta sea la ruta correcta de tu repositorio en GitHub
})
