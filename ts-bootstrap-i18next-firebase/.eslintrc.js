/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'next',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    'import/no-unresolved': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    // Promise-returning function provided to attribute where a void return was expected.
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    // Async arrow function has no 'await' expression.
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: { alwaysTryTypes: true },
    },
  },
};
