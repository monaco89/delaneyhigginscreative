module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
