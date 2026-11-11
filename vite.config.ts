import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './', // 完全相对路径（任意目录都能跑）
  plugins: [react()],
  resolve: {
    // 让Vite做路径解析
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
