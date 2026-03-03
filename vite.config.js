import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Seven84/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true,
  },
});
