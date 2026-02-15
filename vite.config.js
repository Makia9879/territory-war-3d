import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src_html',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  preview: {
    port: 4173
  }
});
