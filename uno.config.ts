import {
  defineConfig,
  presetIcons,
  presetUno,
  presetAttributify,
  Preset,
  Rule,
} from "unocss";

const rules: Rule[] = [];

export const theme = {
  colors: {
    primary: "var(--primary-color)",
    "primary-500": "var(--primary-color-500)",
    "primary-700": "var(--primary-color-700)",

    "font-yzz-white": "var(--font-color-white)",
    "font-yzz-black": "var(--font-color-black)",
    default: "var(--default-color)",
  },
};

// 自定义联合属性
const shortcuts: any = {
  flexCenter: "flex",
};

const safelist = [
  "bg-primary",
  "bg-default",
  "hover:bg-primary-500",
  "active:bg-primary-700",
  "text-font-yzz-white",
  "text-font-yzz-black",
];

export const presets: Preset[] = [
  presetUno(),
  presetAttributify(),
  presetIcons(),
];

export default defineConfig({
  presets,
  rules,
  theme,
  shortcuts,
  safelist,
}) as any;
