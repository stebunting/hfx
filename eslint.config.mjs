import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat["jsx-runtime"],
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: globals.browser,
    },
  },

  reactHooks.configs["recommended-latest"],
  tseslint.configs.recommended,
  eslintConfigPrettier,
]);
