module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    ethereum: 'readonly',
    JSX: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'react-hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // suppress errors for missing "import React" in files
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/forbid-prop-types': 'off',
    'object-curly-spacing': 'off',
    'eol-last': 'error',

    // Fixes import extension issue in Typescript lint
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      tsx: 'never',
    }],

    // Disables JS linting rules that conflict with TypeScript
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',

    // Allows arrow function syntax in tsx
    'react/function-component-definition': 'off',

    // Fixes JSX linting issue in Typescript lint
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.tsx'],
    }],

    // Plugin for avoiding hook issues with linting
    'react-hooks/rules-of-hooks': 'error',

    // To ease development and avoid errors while writing code (Are fixed before commiting code)
    'default-param-last': 'warn',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',

    // Others
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': ['error', {
      allow: ['arrowFunctions'],
    }],

    // Update no-unused-vars rule to add function types in TS interfaces
    'no-unused-vars': ['error', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
    }],

    // Disabled to use nextjs Link component with anchor tag
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
