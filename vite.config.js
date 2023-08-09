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
        outDir: "docs",
        base:'/docs/',
        //压缩
        minify: false,
        //忽略打包vue文件
        external: ["vue"],
        output: {
            globals: {
                vue: "Vue",
            },
            dir: "dist",
        },
        lib: {
            entry: "./index.js",
            name: "icepro",
            fileName: "icepro",
            formats: ["es", "umd", "cjs"],
        }
    }
})
