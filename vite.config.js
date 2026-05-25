import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Set base to repo name for GitHub Pages
// Change '/portfolio/' to your actual GitHub repo name
export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
