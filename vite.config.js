import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'
import vitePluginVue from './plugins/fileFilter.js'
import mdPlugin from "vite-plugin-markdown"

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
       /* lib: {
            entry: path.resolve(__dirname, "index.js"), // 打包的入口文件
            name: "icepro", // 包名
            // formats: ['es', 'umd'], // 打包模式，默认是es和umd都打
            fileName: (format) => `icepro.${ format }.js`,
        },*/
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            // external: ["vue"],
            /*output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: "vue",
                },
            },*/
        },
        outDir: "lib", // 打包后存放的目录文件
    }


})
