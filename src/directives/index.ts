import { App } from "vue";
import { handlerRipple } from "./handlerDom";

const list = [handlerRipple];

// 注册指令
export const initDirectives = (app: App) => {
  list.forEach((dire) => {
    app.directive(dire.name, dire);
  });
};
