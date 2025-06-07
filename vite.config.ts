import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const process: any

const useMkcert =
  process.env.USE_MKCERT === 'true' || process.env.USE_MKCERT === '1'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: useMkcert ? [react(), mkcert()] : [react()],
  optimizeDeps: {},
  base: './',
  server: {
    https: useMkcert
  } as unknown as import('vite').ServerOptions
})
