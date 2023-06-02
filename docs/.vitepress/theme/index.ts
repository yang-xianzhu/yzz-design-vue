import Theme from "vitepress/theme";
import "./style/var.css";
import YzzDesignUi from "../../../src/entry";
// import "vitepress-theme-demoblock/theme/styles/index.css";
// import Demo from "vitepress-theme-demoblock/components/Demo.vue";
// import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";

export default {
  ...Theme,
  enhanceApp({ app }) {
    // 注册组件
    console.log("注册组件");

    app.use(YzzDesignUi);
    // app.component("Demo", Demo);
    // app.component("DemoBlock", DemoBlock);
  },
};
