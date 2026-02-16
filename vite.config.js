import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: 'src_html',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src_html/index.html'),
        human_vs_ai: resolve(__dirname, 'src_html/human_vs_ai.html'),
        ai_vs_ai: resolve(__dirname, 'src_html/ai_vs_ai.html'),
        rules: resolve(__dirname, 'src_html/rules.html'),
      },
    },
  },
  preview: {
    port: 4173
  }
});
