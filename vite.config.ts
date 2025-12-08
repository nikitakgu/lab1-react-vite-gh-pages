import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // ОБЯЗАТЕЛЬНО: базовый путь для GitHub Pages
  base: '/lab1-react-vite-gh-pages/',

  // Настройки Vitest — ДОЛЖНЫ быть внутри defineConfig
  test: {
    environment: 'jsdom'
  }
})
