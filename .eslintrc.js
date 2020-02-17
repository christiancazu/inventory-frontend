module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        MemberExpression: 1,
        ImportDeclaration: 1,
      },
    ],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    // 'object-curly-newline': ['error', { multiline: true, minProperties: 2 }],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ImportDeclaration: { multiline: false, minProperties: 2 },
        ObjectPattern: { multiline: false, minProperties: 3 },
      },
    ],
    // react
    'react/jsx-max-props-per-line': [1, { maximum: 3 }],
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-curly-spacing': [
      'error',
      'always',
      {
        allowMultiline: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        // "@typescript-eslint/explicit-function-return-type": [
        //   "error",
        //   {
        //     allowExpressions: true,
        //     allowTypedFunctionExpressions: true,
        //     allowHigherOrderFunctions: true,
            
        //   }
        // ],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'comma',
              requireLast: false,
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false,
            },
            overrides: {
              interface: {
                multiline: {
                  delimiter: 'semi',
                  requireLast: true,
                },
              },
            },
          },
        ],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
