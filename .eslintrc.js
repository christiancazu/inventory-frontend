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
    // eslint
    "object-curly-newline": ["error", {
      "ObjectExpression": "always",
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": { "multiline": true, "minProperties": 2 }
   }],   
    semi: ['error', 'always'],
    quotes: [
      "error", "single",
      { "allowTemplateLiterals": true }
    ],
    'eol-last': ['error', 'always'],
    // react
    'react/jsx-max-props-per-line': [
      1, 
      { maximum: 4 }
    ],
    'react/jsx-indent': [
      2, 2, 
      { checkAttributes: false }
    ],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [
      1, 
      'tag-aligned'
    ],
    'react/jsx-curly-spacing': [
      'error', 
      { when: 'always', attributes: { when: 'never' }, children: true }
    ],
    // '@typescript-eslint/explicit-function-return-type': [
    //   'error',
    //   {
    //     allowExpressions: true,
    //     allowTypedFunctionExpressions: true,
    //     allowHigherOrderFunctions: true
    //   },
    // ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        // '@typescript-eslint/explicit-function-return-type': [
        //   'error',
        //   {
        //     allowExpressions: true,
        //     allowTypedFunctionExpressions: true,
        //     allowHigherOrderFunctions: true,
        //     allowVoid: true
            
        //   },
        // ],
        "@typescript-eslint/explicit-function-return-type": "off"
        // '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
