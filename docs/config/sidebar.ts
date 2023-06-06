import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = [
  {
    text: "开发指南",
    items: [{ text: "介绍", link: "/guide/" }],
    collapsed: false,
  },
  {
    text: "通用",
    items: [
      { text: "Button 按钮", link: "/components/Button" },
      { text: "Switch 开关", link: "/components/Switch" },
    ],
  },
  // { text: "导航" },
  // { text: "反馈" },
  // { text: "数据录入" },
  // { text: "数据展示" },
  // { text: "布局" },
];
