import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/XAUUSD/',  // 改為你的倉庫名稱
  plugins: [vue()],
})