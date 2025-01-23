import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginVue from './plugins/fileFilter.js'
import mdPlugin from 'vite-plugin-markdown'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './src')
    },
    dedupe: [
      'vue'
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        additionalData: '@import \'@/assets/variables.less\';'
      }
    }
  },
  build2: {
    outDir: 'es',
    minify: true,
    rollupOptions: {
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
  },
  build: {
    outDir: 'docs', 
    minify: true, 
    rollupOptions: {
      /*output: {
        globals: {
          vue: 'Vue'
        }
      }*/
    }
  }
})
