import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the built site also works on GitHub Pages,
  // which serves it from /Travelmate/ rather than the domain root.
  base: './',
})
