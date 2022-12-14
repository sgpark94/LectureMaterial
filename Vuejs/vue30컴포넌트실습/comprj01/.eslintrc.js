module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'linebreak-style': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'no-shadow': 'off',
    'no-alert': 'off',
    'no-var': 'error',
    'no-unused-vars': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
