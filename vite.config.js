import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 这个插件在开发时必须存在
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
    // inlineStyleTransform,
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue']
    })
  ],
  output: {
    // 设置打包后的文件目录
    dir: 'dist/',
    // 外部化 Vue，这样它就不会被打包到最终的 JavaScript 文件中
    external: ['vue']
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    },
    dedupe: [
      'vue'
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: 'always',
        additionalData: '@import \'@/assets/variables.less\';'
      }
    }
  },
  build2: {
    //打包后文件目录
    outDir: 'es',
    //压缩
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
  },
  build: {
    outDir: 'dist', // 指定构建输出目录
    minify: true, // 启用代码压缩
    rollupOptions: {
      // external: ['vue'],
      /*output: {
        globals: {
          vue: 'Vue'
        }
      }*/
    }
  }
})
