import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/JepzFolio/portfolio/my-portfolio/', // Adjust this to match your subdirectory
  plugins: [react()]
});
