import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unoConfig from "../uno.config";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    UnoCSS(unoConfig),
  ],
});
