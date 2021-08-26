/* eslint-disable unicorn/prefer-module */
const prettierRules = require('./.prettierrc')

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint-config-prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:testing-library/react',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'jest',
    'jest-dom',
    'testing-library',
    'import',
    'react-hooks',
    'prettier',
    'unicorn',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'arrow-body-style': ['error', 'always'],
    eqeqeq: ['error', 'always'],
    'no-console': 'warn',
    'no-else-return': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    //   "global-require": "off",
    // conflict between eslint + typescript eslint
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    'prettier/prettier': ['error', prettierRules],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/no-cycle': 'error',
    'import/no-named-as-default': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  overrides: [
    // allow using "!" in tests files
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
      globals: {
        fail: true,
      },
    },
    {
      files: ['cypress-tests/cypress/**/*.js', 'cypress-tests/cypress/**/*.ts'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        'no-console': 'off',
      },
      globals: {
        cy: true,
        Cypress: true,
        context: true,
        assert: true,
      },
    },
  ],
}
