import noOnlyTests from "eslint-plugin-no-only-tests";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules", "dist", "playwright-report"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "no-only-tests": noOnlyTests,
      prettier: prettierPlugin,
    },
    rules: {
      "no-only-tests/no-only-tests": "error", // Disallow .only() in test files
      "prettier/prettier": "error", // Ensure Prettier formatting is followed
      "no-unused-vars": "warn", // Warn about unused variables
      "no-console": "off", // Allow console usage
    },
  },
];
