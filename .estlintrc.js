module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:@next/next/recommended',
  ],
  plugins: ['react', 'prettier'],
}
