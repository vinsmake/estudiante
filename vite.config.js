import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', // importante para GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        interface: resolve(__dirname, 'interface.html')
      }
    }
  }
});
