import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://perea07.github.io/react-shoppig-cart',
  plugins: [react()],
})
