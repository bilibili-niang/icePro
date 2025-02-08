import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
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
    vueJsx({
      // 启用 TSX 文件的转换
      include: [/\.[jt]sx$/]
    }),
    mdPlugin.plugin({
      mode: ['html', 'vue']
    }),
    {
      ...vitePluginVue,
      enforce: 'post'
    },
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.tsx', 'src/**/*.jsx']
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
        javascriptEnabled: true,
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
