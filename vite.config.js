import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use 'sass:map';`,
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    strictPort: false,
    port: 8080,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
  optimizeDeps: {
    include: ['quill'],
  },
})
