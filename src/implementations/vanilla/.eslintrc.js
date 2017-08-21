module.exports = {
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
    'max-len': [2, { code: 100 }],
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 0
  }
};