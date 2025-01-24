// 打包配置
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vitePluginVue from './plugins/fileFilter.js'
import mdPlugin from 'vite-plugin-markdown'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  base: './',
  sourceMap: true,
  plugins: [
    vue(),
    mdPlugin.plugin({
      mode: ['html', 'vue']
    }),
    vitePluginVue,
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue']
    })
  ],
  output: {
    dir: 'dist/',
    external: ['vue']
  },
  resolve: {
    alias: {
      // '@': path.resolve('src')
      icepro: path.resolve(__dirname, './')
    },
    dedupe: ['vue'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        additionalData: "@import '@/assets/variables.less';"
      }
    }
  },
  build: {
    outDir: 'es',
    minify: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        dir: 'dist'
      }
    },
    lib: {
      entry: './index.js',
      name: 'icepro',
      fileName: 'icepro',
      formats: ['es', 'umd', 'cjs']
    }
  }
})
