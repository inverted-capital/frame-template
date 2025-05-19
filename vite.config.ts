import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function esmImportMapPlugin(): Plugin {
  const imports: Record<string, string> = {
    'lucide-react': 'https://esm.sh/lucide-react?external=react',
    '@open-iframe-resizer/core': 'https://esm.sh/@open-iframe-resizer/core',
    react: 'https://esm.sh/react',
    'react-dom': 'https://esm.sh/react-dom',
    'react-dom/client': 'https://esm.sh/react-dom/client',
    'react/jsx-runtime': 'https://esm.sh/react/jsx-runtime'
  }

  return {
    name: 'esm-import-map',
    enforce: 'pre',
    resolveId(id) {
      const url = imports[id]
      if (url) {
        return { id: url, external: true }
      }
      return null
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), esmImportMapPlugin()],
  resolve: {
    alias: {
      'lucide-react': 'https://esm.sh/lucide-react?external=react',
      '@open-iframe-resizer/core': 'https://esm.sh/@open-iframe-resizer/core',
      react: 'https://esm.sh/react',
      'react-dom': 'https://esm.sh/react-dom',
      'react-dom/client': 'https://esm.sh/react-dom/client',
      'react/jsx-runtime': 'https://esm.sh/react/jsx-runtime'
    }
  },
  optimizeDeps: {
    exclude: [
      'lucide-react',
      '@open-iframe-resizer/core',
      'react',
      'react-dom',
      'react-dom/client',
      'react/jsx-runtime'
    ]
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: [
        'lucide-react',
        '@open-iframe-resizer/core',
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime'
      ]
    }
  },
  base: './'
})
