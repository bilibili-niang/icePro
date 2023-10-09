import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginVue from './plugins/fileFilter.js'
import mdPlugin from "vite-plugin-markdown"
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'


export default defineConfig({
    plugins: [
        vue(),
        mdPlugin.plugin({
            mode: ["html", "vue"],
        }),
        vitePluginVue,
        eslintPlugin({
            include: ['src/**/*.ts', 'src/**/*.vue']
        })
    ],
    output: {
        globals: {
            vue: 'Vue'
        }
    },
    resolve: {
        alias: {
            '@': path.resolve('src'),
        },
        dedupe: [
            'vue'
        ],
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
    /*build: {
        lib: {
            entry: "./index.js",
            name: "icepro",
            fileName: "icepro",
            formats: ["es", "umd", "cjs"],
        },
        //打包后文件目录
        outDir: "docs",
        //压缩
        minify: true,
        external: ['vue'],
        externals: ['vue'],
        // 打包
        rollupOptions: {
            outDir: "docs",
            base: '/docs/',
            //压缩
            minify: false,
            // 排除 Vue 依赖
            external: ['vue'],
            inlineDynamicImports: true,
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }*/
})
