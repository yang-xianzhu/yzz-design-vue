import { defineConfig } from "vite";
// vite默认不支持vue的模版编译功能，需要使用到模板编译功能的vite的plugin，将template编译成render函数
import vue from "@vitejs/plugin-vue";
// 让vue中支持jsx、tsx语法的plugin
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCssConfig from "./uno.config";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    // 添加UnoCSS插件,
    UnoCSS(UnoCssConfig),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
