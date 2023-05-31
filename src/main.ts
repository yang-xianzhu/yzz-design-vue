import { createApp } from "vue";
import App from "./App.vue";
import "./theme/theme.css";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import { initDirectives } from "./directives";

const app = createApp(App);

app.use(initDirectives).mount("#app");
