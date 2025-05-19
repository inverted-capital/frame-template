import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const cdnImports: Record<string, string> = {
  'lucide-react': 'https://esm.sh/lucide-react?external=react',
  '@open-iframe-resizer/core': 'https://esm.sh/@open-iframe-resizer/core',
  react: 'https://esm.sh/react',
  'react-dom': 'https://esm.sh/react-dom',
  'react-dom/client': 'https://esm.sh/react-dom/client',
  'react/jsx-runtime': 'https://esm.sh/react/jsx-runtime'
}

const externalPackages = Object.keys(cdnImports)

function esmImportMapPlugin(): Plugin {
  return {
    name: 'esm-import-map',
    enforce: 'pre',
    resolveId(id) {
      const url = cdnImports[id]
      if (url) {
        return { id: url, external: true }
      }
      return null
    },
  }
}

// https://vitejs.dev/config/ 
export default defineConfig({
  plugins: [react(), esmImportMapPlugin()],
  resolve: {
    alias: cdnImports,
  },
  optimizeDeps: {
    exclude: externalPackages,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: externalPackages,
    },
  },
  base: './',
});
