module.exports = {
  'extends': './node_modules/eslint-config-airbnb/.eslintrc',
  'parser': 'babel-eslint',
  'globals': {
    'document': true,
    'window': true
  },
  'settings': {
    'import/resolver': {
      'babel-module': {}
    }
  },
  'globals': {
    gemini: true,
  },
  'rules': {
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0
  }
};