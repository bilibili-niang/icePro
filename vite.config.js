import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginVue from './plugins/fileFilter.js'
import mdPlugin from "vite-plugin-markdown"
import path from 'path'

export default defineConfig({
    plugins: [
        vue(),
        mdPlugin.plugin({
            mode: ["html", "vue"],
        }),
        vitePluginVue
    ],
    resolve: {
        alias: {
            '@': path.resolve('src'),
        },
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    css: {
        // 预处理器配置项
        preprocessorOptions: {
            less: {
                math: "always",
                additionalData: "@import '@/assets/variables.less';"
            },
        }
    },
    // 打包
    build: {
        outDir: "docs",
        base: '/docs/',
        //压缩
        minify: false,
        lib: {
            entry: "./index.js",
            name: "index",
            fileName: "icepro",
            formats: ["es", "umd", "cjs"],
        }
    },
    rollupOptions: {
        // 排除 Vue 依赖
        exclude: ['vue'],
        inlineDynamicImports: true,
        resolve: {
            dedupe: ['vue']
        },
        output: {
            globals: {
                vue: 'vue'
            }
        }
    },
})
