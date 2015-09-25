module.exports = {
  'extends': [
    'vml/rules/best',
    'vml/rules/style',
    'vml/rules/errors',
    'vml/rules/variables',
    'vml/rules/es6'
  ],
  'parser': 'babel-eslint',
  'global': {
    'Modernizr': true
  },
  'env': {
    'browser': true,
    'commonjs': true
  }
};
