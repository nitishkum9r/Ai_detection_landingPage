import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Ai_detection_landingPage/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Explicitly set postcss config path
  },
})