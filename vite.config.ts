import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    }
  })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@home': path.resolve(__dirname, './src/Home'),
      '@report': path.resolve(__dirname, './src/Report'),
      '@auth': path.resolve(__dirname, './src/Auth'),
      '@app': path.resolve(__dirname, './src/App'),
    }
  },
})
