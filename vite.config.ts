import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), mkcert()],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    sourcemap: true
  },
  base: './',
  server: {
    https: true
  }
})
