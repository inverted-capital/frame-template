import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function esmImportMapPlugin(): Plugin {
  const imports: Record<string, string> = {
    'lucide-react': 'https://esm.sh/lucide-react',
    '@open-iframe-resizer/core': 'https://esm.sh/@open-iframe-resizer/core',
  };

  return {
    name: 'esm-import-map',
    resolveId(id) {
      const url = imports[id];
      if (url) {
        return { id: url, external: true };
      }
      return null;
    },
  };
}

// https://vitejs.dev/config/ 
export default defineConfig({
  plugins: [react(), esmImportMapPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react', '@open-iframe-resizer/core'],
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['lucide-react', '@open-iframe-resizer/core'],
    },
  },
  base: './',
});
