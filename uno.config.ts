import {
  defineConfig,
  presetIcons,
  presetUno,
  presetAttributify,
  Preset,
  Rule,
} from "unocss";

export const theme = {
  colors: {
    primary: "var(--primary-color)",
    danger: "var(--danger-color)",
    success: "var(--success-color)",
    warning: "var(--warning-color)",

    "font-yzz-white": "var(--font-color-white)",
    "font-yzz-black": "var(--font-color-black)",
    "font-yzz-primary": "var(--primary-color)",
    "font-yzz-danger": "var(--danger-color)",

    "yzz-btn-color": "var(--shadow-btn-color)",
    default: "var(--default-color)",
  },
};

// 自定义联合属性
const shortcuts: any = {
  flexCenter: "flex items-center justify-center",
  flexCenterX: "flex justify-center",
  flexCenterY: "flex items-center",
};

const safelist = [
  // 背景色
  ...["primary", "danger", "success", "warning"].map((v) => `bg-${v}`),

  // 字体颜色
  "text-font-yzz-white",
  "text-font-yzz-black",
  // 边框颜色
  ...["primary", "danger", "success", "warning"].map((v) => `border-${v}`),
];

export const presets: Preset[] = [
  presetUno(),
  presetAttributify(),
  presetIcons(),
];

const rules: Rule[] = [
  [
    // 禁用样式
    "yzz-isDisabled",
    {
      cursor: "not-allowed",
      "border-color": "#d9d9d9",
      color: "rgba(0,0,0,.25)",
      "background-color": "rgba(0,0,0,.04)",
      "box-shadow": "none",
    },
  ],
];

export default defineConfig({
  exclude: ["node_modules"],
  presets,
  rules,
  theme,
  shortcuts,
  safelist,
}) as any;
