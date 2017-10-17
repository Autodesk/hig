module.exports = {
  'extends': [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  'parser': 'babel-eslint',
  'settings': {
    'import/resolver': {
      'babel-module': {},
      'webpack': true
    }
  },
  plugins: [
    "react",
    "prettier"
  ],
  globals: {
    describe: true,
    it: true,
    expect: true,
    jest: true,
    beforeEach: true,
    document: true
  },
  'rules': {
    'class-methods-use-this': 0,
    'max-len': [1, { code: 100 }],
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 1,
    'react/jsx-filename-extension': 0,
    "jsx-a11y/href-no-hash": "off",
    "react/style-prop-object": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "prettier/prettier": "error",

    "react/prop-types": 0,
    "react/no-unused-prop-types": 0,
  }
};