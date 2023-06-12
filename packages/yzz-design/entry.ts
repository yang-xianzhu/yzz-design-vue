import { App } from "vue";
import Button from "./component/Button";
import Switch from "./component/Switch/index.vue";
// 注册组件
export default (app: App): void => {
  // console.log("app", app);
  // console.log("Switch", Switch);

  app.component(Button.name, Button);
  app.component("YzzSwitch", Switch);
};
