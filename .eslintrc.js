module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react'
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,  // Allows for the parsing of JSX
    },
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/interface-name-prefix': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/member-delimiter-style': {
    //   delimiter: 'none',
    //   requireLast: true,
    // },
  },
  'settings': {
    'react': {
      'version': 'latest'
    }
  }
};
