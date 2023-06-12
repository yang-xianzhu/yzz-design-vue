import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unoConfig from "../../config/uno.config";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    unoConfig(),
  ],
});
