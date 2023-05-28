const sidebar = [
  {
    text: "开发指南",
    items: [{ text: "快速开始", link: "/guide/" }],
    collapsed: false,
  },
  {
    text: "通用",
    items: [{ text: "Button 按钮", link: "/components/Button" }],
  },
  // { text: "导航" },
  // { text: "反馈" },
  // { text: "数据录入" },
  // { text: "数据展示" },
  // { text: "布局" },
];

// 顶部导航配置
const nav = [{ text: "组件", link: "/guide/" }];

const socialLinks = [
  { icon: "github", link: "https://github.com/yang-xianzhu/yzz-design-vue" },
];

const config = {
  title: "🚀 Yzz Design",
  description: "个人组件库",
  themeConfig: {
    socialLinks,
    sidebar,
    nav,
    footer: {
      message: "MIT.",
      copyright: "Copyright © 2023-present Yzz",
    },
  },

  markdown: {
    // config: (md) => {
    //   // 添加DemoBlock插槽
    //   const { demoBlockPlugin } = require("vitepress-theme-demoblock");
    //   md.use(demoBlockPlugin);
    // },
  },
};
export default config;
