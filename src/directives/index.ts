import { App } from "vue";
import { handlerRipple, handleScroll } from "./handlerDom";

const list = [handlerRipple, handleScroll];

// 注册指令
export const initDirectives = (app: App) => {
  list.forEach((dire) => {
    app.directive(dire.name, dire);
  });
};
