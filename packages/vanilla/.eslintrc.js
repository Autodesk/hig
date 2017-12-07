module.exports = {
  'extends': ["airbnb"],
  'parser': 'babel-eslint',
  'globals': {
    'document': true,
    'window': true
  },
  'settings': {
    'import/resolver': {
      'babel-module': {},
      'webpack': {
        config: 'webpack.dev.js',
      }
    }
  },
  'globals': {
    gemini: true,
  },
  'rules': {
    'class-methods-use-this': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/href-no-hash': 0,
    'max-len': [1, { code: 100 }],
    'no-param-reassign': 1,
    'no-underscore-dangle': 0,
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-unused-vars': ['error', {
      'args': 'after-used',
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_',
     }],
    'prefer-rest-params': 1,
    'prefer-spread': 1
  }
};
