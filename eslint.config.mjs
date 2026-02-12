import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: nextPlugin.configs["core-web-vitals"].rules,
  },
  {
    files: ["src/app/layout.tsx"],
    rules: {
      "@next/next/no-page-custom-font": "off",
    },
  },
];
