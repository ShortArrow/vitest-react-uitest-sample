import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import testingLibrary from "eslint-plugin-testing-library";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import jestDom from "eslint-plugin-jest-dom";
import eslintImport from "eslint-plugin-import";
import globals from "globals";

const jsRules = {
  semi: "error",
};
const tsRules = {};

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
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...jsRules,
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      typescriptEslint: typescriptEslint,
    },
    rules: {
      ...jsRules,
      ...tsRules,
    },
  },
  {
    files: ["tests/**/*.{ts,tsx}"],
    plugins: {
      testingLibrary: testingLibrary,
      jestDom: jestDom,
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      parserOptions: {
        sourceType: "commonjs",
        project: "./tsconfig.json",
      },
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: react,
      reactHooks: reactHooks,
    },
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
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
