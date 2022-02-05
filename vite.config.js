import vue from '@vitejs/plugin-vue'
import {
  defineConfig
} from 'vite'
import path from 'path'
// https://vitejs.dev/config/
console.log(path.resolve(__dirname, 'src'));
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  }
})