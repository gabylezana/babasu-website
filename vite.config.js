import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/babasu-website/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        philosophy: resolve(__dirname, 'philosophy/index.html'),
        portfolio: resolve(__dirname, 'portfolio/index.html'),
        tugerente: resolve(__dirname, 'portfolio/tugerente/index.html'),
        team: resolve(__dirname, 'team/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
});
