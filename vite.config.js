import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = process.env.VITE_BASE_PATH || '/babasu-website/';

export default defineConfig({
  base,
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
