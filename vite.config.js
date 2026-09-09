import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Базовый путь для GitHub Pages — имя репозитория.
  base: '/Site_web_Vibe_coding/',
})
