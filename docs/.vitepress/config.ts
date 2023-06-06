import { nav } from "../config/nav";
import { sidebar } from "../config/sidebar";
import { socialLinks } from "../config/socialLinks";

const config = {
  title: "Yzz Design",
  description: "个人组件库",
  themeConfig: {
    logo: "./logo.png",
    socialLinks,
    sidebar,
    nav,
    footer: {
      message: "MIT.",
      copyright: "Copyright © 2023-present Yzz",
    },
  },
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    config: (md) => {
      // 添加DemoBlock插槽
    },
  },
};
export default config;
