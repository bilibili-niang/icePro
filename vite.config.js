import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";


export default defineConfig({
  plugins: [
    vue(),
    /*mdPlugin.plugin({
      // mode: ["html", "vue"],
      mode: ["vue"],
    }),
    vitePluginVue,
    eslintPlugin({
      include: ["src/!**!/!*.ts", "src/!**!/!*.vue"]
    })*/
  ],
  output: {
    // 设置打包后的文件目录
    dir: "dist/",
    // 外部化 Vue，这样它就不会被打包到最终的 JavaScript 文件中
    external: ["vue"],
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
    dedupe: [
      "vue"
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
    //打包后文件目录
    outDir: "docs",
    //压缩
    minify: true,
    external: ["vue"],
    externals: ["vue"],
  },*/
  build: {
    //打包后文件目录
    outDir: "es",
    //压缩
    minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        dir: "dist",
      },
    },
    lib: {
      entry: "./index.js",
      name: "icepro",
      fileName: "icepro",
      formats: ["es", "umd", "cjs"],
    },
  }
});
