import { createApp } from "vue";
import App from "./App.vue";
import "./theme/theme.css";
import "./style/animation.css";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import { initDirectives } from "./directives";

const app = createApp(App);
// 注册自定义指令
app.use(initDirectives);

app.mount("#app");
