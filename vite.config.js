import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, // Automatically open browser on server start
    port: 3000, // Set default port
  },
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets', // Directory for static assets
    minify: 'terser', // Minify with terser
    sourcemap: true, // Generate source maps for debugging
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['three'],
  },
  publicDir: 'public', // Specify the public assets directory
}); 