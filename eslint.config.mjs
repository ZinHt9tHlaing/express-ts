import js from "@eslint/js";
import globals, { es2021, node } from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    env: {
      es2021: true,
      node: true,
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended", "standard-with-typescript"],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.browser },
    parser: "@typescript-eslint/parser",
    ignorePatterns: ["**/build/*", "**/node_modules/*", "**/public/*"],
  },
  tseslint.configs.recommended,
]);
