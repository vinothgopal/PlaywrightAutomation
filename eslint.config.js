import noOnlyTests from 'eslint-plugin-no-only-tests';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules', 'dist', 'playwright-report'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      'no-only-tests': noOnlyTests,
      prettier: prettierPlugin,
    },
    rules: {
      'no-only-tests/no-only-tests': 'error',
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off'
    },
  },
];
