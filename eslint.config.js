import react from "eslint-plugin-react";
import reacthooks from "eslint-plugin-react-hooks";
import eslintImport from "eslint-plugin-import";
import globals from "globals";

export default [
  "eslint:recommended",
  {
    plugins: {
      eslintImport,
    },
    rules: {
      "eslintImport/default": "error",
    },
  },
  {
    ignores: ["./node_modules/**/*"],
  },
  {
    rules: {
      semi: "off",
    },
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react: react,
      "react-hooks": reacthooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project:"./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
];
//---
//env:
//  browser: true
//  es2021: true
//  node: true
//extends:
//  - eslint:recommended
//  - plugin:react/recommended
//  - plugin:@typescript-eslint/recommended
//overrides:
//  - files:
//      - '**/__tests__/**/*.+(ts|tsx|js)'
//      - '**/?(*.)+(spec|test).+(ts|tsx|js)'
//    extends:
//      - plugin:jest-dom/recommended
//      - plugin:testing-library/react
//parser: '@typescript-eslint/parser'
//parserOptions:
//  ecmaVersion: latest
//  sourceType: module
//plugins:
//  - react
//  - react-hooks
//  - '@typescript-eslint'
//  - testing-library
//rules:
//  indent:
//    - error
//    - 4
//  linebreak-style:
//    - error
//    - unix
//  quotes:
//    - error
//    - double
//  semi:
//    - error
//    - always
