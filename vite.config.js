import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base 경로를 기본값인 '/'로 수정했습니다.
  base: '/', 
  
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
    css: {
    devSourcemap: true 
  }
})