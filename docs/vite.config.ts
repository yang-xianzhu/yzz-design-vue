import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unoconfig from "../uno.config";
import UnoCss from "unocss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    // UnoCss(unoconfig),
  ],
});
