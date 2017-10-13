module.exports = {
  'extends': './node_modules/eslint-config-airbnb/.eslintrc',
  'parser': 'babel-eslint',
  'settings': {
    'import/resolver': {
      'babel-module': {},
      'webpack': true
    }
  },
  plugins: [
    "react"
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
    'max-len': [2, { code: 100 }],
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 1,
    'react/jsx-filename-extension': 0,
    "jsx-a11y/href-no-hash": "off",
  }
};