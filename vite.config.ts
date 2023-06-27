/** @type {import('vite').UserConfig} */

import * as path from 'path'

import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteImagemin from 'vite-plugin-imagemin'

import config from './config.js'

const { imagemin } = config

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: 'localhost',
    port: 3000,
    hmr: true
  },
  plugins: [
    react(),
    viteImagemin(imagemin),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.tsx'
    }),
    Unfonts({
      google: {
        preconnect: false,
        display: 'swap',
        injectTo: 'head-prepend',
        families: ['Inter']
      }
    })
  ],
  css: {},
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      }
    ]
  }
})
