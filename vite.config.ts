import { defineConfig } from "vite";
// vite默认不支持vue的模版编译功能，需要使用到模板编译功能的vite的plugin，将template编译成render函数
import vue from "@vitejs/plugin-vue";
// 让vue中支持jsx、tsx语法的plugin
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCssConfig from "./config/uno.config";

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    // 添加UnoCSS插件,
    UnoCssConfig(),
  ],
  resolve: {
    alias: {
      "@": "/packages/yzz-design",
    },
  },
  build: {
    rollupOptions,
    minify: "terser", // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: "./packages/yzz-design/entry.ts",
      name: "YzzDesign",
      fileName: "yzz-design",
      formats: ["es", "umd", "iife"], // 导出模块类型
    },
  },
});
