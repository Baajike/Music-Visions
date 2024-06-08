module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: 'module'
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: [
      'react',
      'react-hooks',
      'jsx-a11y',
      'import'
    ],
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  };
  