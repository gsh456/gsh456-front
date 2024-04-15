import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 7070,
    proxy: {
      '/api': {
        target: 'http://localhost:7011',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 使用正则表达式去掉 URL 中的 /api
      }
    }
  }
})
