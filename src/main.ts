import { createApp } from "vue";
import App from "./App.vue";
import "./theme/theme.css";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

const app = createApp(App);

app.mount("#app");
