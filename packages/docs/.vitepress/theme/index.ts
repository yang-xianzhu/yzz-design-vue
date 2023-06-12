import "@unocss/reset/tailwind.css";
import DefaultTheme from "vitepress/theme";
import "../../../src/theme/theme.css";
import "../../../src/style/animation.css";
import "./style/var.css";
import "virtual:uno.css";
import YzzDesignUi from "../../../yzz-design/entry";
import { useData } from "vitepress";
import { h } from "vue";
import AsideBottom from "./components/AsideBottom.vue";

export default {
  ...DefaultTheme,
  Layout() {
    const props: Record<string, any> = {};

    const { frontmatter } = useData();

    return h(DefaultTheme.Layout, props, {
      /**
       * 相关插槽
       * https://vitepress.dev/guide/extending-default-theme#layout-slots
       * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
       */
      // 自定义头部logo区域
      // "nav-bar-title-after": () => h("div", { style: "color:red" }, "TEST"),
      // "layout-top": () => h("div", { stutliyle: "color:red" }, "ads-info"),
      // 右下底部
      "aside-bottom": () => h(AsideBottom),
    });
  },
  enhanceApp(ctx) {
    // 注册组件
    ctx.app.use(YzzDesignUi);
  },
};
