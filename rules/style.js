module.exports = {
  'rules': {
    'indent': [2, 2, {'SwitchCase': 1, 'VariableDeclarator': 2}],
    'brace-style': [
      2,
      '1tbs', {
        'allowSingleLine': true
      }
    ],
    'quotes': [
      2, 'single', 'avoid-escape'
    ],
    'id-length': [2, {
      'min': 2,
      'properties': 'never'
    }],
    'camelcase': 2,
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'eol-last': 2,
    'func-names': 1,
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'new-cap': [2, {
      'newIsCap': true
    }],
    'no-multiple-empty-lines': [2, {
      'max': 2
    }],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-extra-parens': [2, 'functions'],
    'no-underscore-dangle': 0,
    'one-var': 0,
    'padded-blocks': [2, 'never'],
    'semi': [2, 'always'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-after-keywords': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-infix-ops': 2,
    'space-return-throw-case': 2,
    'spaced-comment': [2, 'always', {
      'exceptions': ['-', '+'],
      'markers': ['=', '!']
    }],
    'object-curly-spacing': [2, 'always'],
    'no-warning-comments': [1, { 'terms': ['todo', 'fixme', 'any other term'], 'location': 'anywhere' }],
    'func-style': [2, 'declaration'],
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    'linebreak-style': [2, 'unix'],
    'newline-after-var': [2, 'always'],
    'no-console': 1,
    'no-spaced-func': 2,
    'no-else-return': 2
  }
};
