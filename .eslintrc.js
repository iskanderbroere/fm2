module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,  // Allows for the parsing of JSX
    },
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'always',
    '@typescript-eslint/no-explicit-any': 'always',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/member-delimiter-style': {
    //   delimiter: 'none',
    //   requireLast: true,
    // },
  }
};
