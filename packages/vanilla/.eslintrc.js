export default {
  'extends': './node_modules/eslint-config-airbnb/.eslintrc',
  'parser': 'babel-eslint',
  'globals': {
    'document': true,
    'window': true
  },
  'settings': {
    'import/resolver': {
      'babel-module': {},
      'webpack': true
    }
  },
  'globals': {
    gemini: true,
  },
  'rules': {
    'class-methods-use-this': 0,
    'jsx-a11y/href-no-hash': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': ['error', { allowTernary: true }],
    'max-len': [2, { code: 100 }]
  }
};