import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Relative base so the built site works both at the repo root
// and when deployed under a subpath (e.g. GitHub Pages /portfolio_dsfr_vue/).
export default defineConfig({
  base: './',
  plugins: [vue()],
})
