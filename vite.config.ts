import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
        entry: path.resolve(__dirname, 'src/packages/main.ts'),
        name: 'colorful-div',
        fileName: (format) => `lib.${format}.js`
    },
  }
})
