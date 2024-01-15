# EsLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## EsLint for typescript

Run the script in the terminal:

```shell
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Edit `.eslintrc.js`:

```javascript
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
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended', 
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: [
        '@typescript-eslint'
    ],
};
```

[Relative TSConfig Projects with `parserOptions.project = true`](https://typescript-eslint.io/blog/parser-options-project-true/)

```javascript
module.exports = {
    parserOptions: {
        project: true, // './tsconfig.custom.json',
        tsconfigRootDir: __dirname,
    },
};
```

Edit `tsconfig.custom.json`:

```json
{
    "extends": ["./tsconfig"],
    "compilerOptions": {
        "baseUrl": ".",
    },
}
```

## Integration with Import Resolver

Run the script in the terminal:

```shell
npm install --save-dev eslint-plugin-import eslint-import-resolver-typescript
```

Edit `.eslintrc.js`:

```javascript
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    plugins: ['import'],
    rules: {
        'import/no-unresolved': 'error'
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
```

## Integration with React

Run the script in the terminal:

```shell
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @next/eslint-plugin-next
```

Edit `.eslintrc.js`:

```javascript
module.exports = {
    extends: [
        'plugin:react/recommended', 
        'plugin:react-hooks/recommended', 
        'plugin:jsx-a11y/recommended', 
        'next'
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }],
    }
};
```

## Integration with Prettier

Run the script in the terminal:

```shell
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

Edit `.eslintrc.js`:

```javascript
module.exports = {
    plugins: ['prettier'],
    extends: ['next', 'plugin:prettier/recommended'],
};
```

## Reference

- [Typescript-eslint](https://typescript-eslint.io/getting-started/)
