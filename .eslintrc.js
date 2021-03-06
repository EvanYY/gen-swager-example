module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint',
  ],
  rules: {
    indent: 'off',
    semi: [2, 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		"no-unused-vars": "off",
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'warn',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
  },
};
// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },
//   parser: 'vue-eslint-parser',
//   parserOptions: {
//     parser: '@typescript-eslint/parser',
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     jsxPragma: 'React',
//     ecmaFeatures: {
//       jsx: true,
//       tsx: true,
//     },
//   },
//   extends: [
//     'plugin:vue/vue3-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'prettier',
//     'plugin:prettier/recommended',
//   ],
//   rules: {
//     "indent": 'off',
//     '@typescript-eslint/ban-ts-ignore': 'off',
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/no-explicit-any': 'off',
//     '@typescript-eslint/no-var-requires': 'off',
//     '@typescript-eslint/no-empty-function': 'off',
//     'vue/custom-event-name-casing': 'off',
//     'no-use-before-define': 'off',
//     '@typescript-eslint/no-use-before-define': 'off',
//     '@typescript-eslint/ban-ts-comment': 'off',
//     '@typescript-eslint/ban-types': 'off',
//     '@typescript-eslint/no-non-null-assertion': 'off',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/no-unused-vars': [
//       'error',
//       {
//         argsIgnorePattern: '^h$',
//         varsIgnorePattern: '^h$',
//       },
//     ],
//     'no-unused-vars': [
//       'error',
//       {
//         argsIgnorePattern: '^h$',
//         varsIgnorePattern: '^h$',
//       },
//     ],
//     'space-before-function-paren': 'off',
//     'vue/attributes-order': 'off',
//     'vue/one-component-per-file': 'off',
//     'vue/html-closing-bracket-newline': 'off',
//     'vue/max-attributes-per-line': 'off',
//     'vue/multiline-html-element-content-newline': 'off',
//     'vue/singleline-html-element-content-newline': 'off',
//     'vue/attribute-hyphenation': 'off',
//     'vue/html-self-closing': 'off',
//     'vue/require-default-prop': 'off',
//     'vue/html-self-closing': [
//       'error',
//       {
//         html: {
//           void: 'always',
//           normal: 'always',
//           component: 'always',
//         },
//         svg: 'always',
//         math: 'always',
//       },
//     ],
//     'vue/html-closing-bracket-spacing': [
//       'warn',
//       {
//         startTag: 'never',
//         endTag: 'never',
//         selfClosingTag: 'always',
//       },
//     ],
//   },
// };


// module.exports = {
//   // root: true,
//   // env: {
//   // 	node: true,
//   // },
//   // extends: [
//   // 	'plugin:vue/vue3-essential',
//   // 	'eslint:recommended',
//   // 	'@vue/typescript/recommended',
//   // 	'@vue/prettier',
//   // 	'@vue/prettier/@typescript-eslint',
//   // ],
//   // parserOptions: {
//   // 	ecmaVersion: 2020,
//   // },
//   // rules: {
//   // 	'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//   // 	'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//   // 	'@typescript-eslint/explicit-module-boundary-types': 'off',
//   // 	'@typescript-eslint/no-explicit-any': 'off',
//   // 	'@typescript-eslint/camelcase': 'off',
//   // 	'@typescript-eslint/interface-name-prefix': 'off',
//   // },
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },
//   parser: 'vue-eslint-parser',
//   parserOptions: {
//     parser: '@typescript-eslint/parser',
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     jsxPragma: 'React',
//     ecmaFeatures: {
//       jsx: true,
//       tsx: true,
//     },
//   },
//   extends: [
//     'plugin:vue/vue3-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'prettier',
//     'plugin:prettier/recommended',
//   ],
//   rules: {
//     indent: 'off',
//     '@typescript-eslint/ban-ts-ignore': 'off',
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/no-explicit-any': 'off',
//     '@typescript-eslint/no-var-requires': 'off',
//     '@typescript-eslint/no-empty-function': 'off',
//     'vue/custom-event-name-casing': 'off',
//     'no-use-before-define': 'off',
//     '@typescript-eslint/no-use-before-define': 'off',
//     '@typescript-eslint/ban-ts-comment': 'off',
//     '@typescript-eslint/ban-types': 'off',
//     '@typescript-eslint/no-non-null-assertion': 'off',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/no-unused-vars': [
//       'error',
//       {
//         argsIgnorePattern: '^h$',
//         varsIgnorePattern: '^h$',
//       },
//     ],
//     'no-unused-vars': [
//       'error',
//       {
//         argsIgnorePattern: '^h$',
//         varsIgnorePattern: '^h$',
//       },
//     ],
//     'space-before-function-paren': 'off',
//     'vue/attributes-order': 'off',
//     'vue/one-component-per-file': 'off',
//     'vue/html-closing-bracket-newline': 'off',
//     'vue/max-attributes-per-line': 'off',
//     'vue/multiline-html-element-content-newline': 'off',
//     'vue/singleline-html-element-content-newline': 'off',
//     'vue/attribute-hyphenation': 'off',
//     // 'vue/html-self-closing': 'off',
//     'vue/require-default-prop': 'off',
//     'vue/html-self-closing': [
//       'error',
//       {
//         html: {
//           void: 'always',
//           normal: 'never',
//           component: 'always',
//         },
//         svg: 'always',
//         math: 'always',
//       },
//     ],
//     'vue/html-closing-bracket-spacing': [
//       'error',
//       {
//         startTag: 'never',
//         endTag: 'always',
//         selfClosingTag: 'always',
//       },
//     ],
//   },
// };
// module.exports = {
//   parser: 'vue-eslint-parser',
//   parserOptions: {
//     parser: '@typescript-eslint/parser',
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true
//     }
//   },
//   env: {
//     node: true,
//     es6: true,
//     browser: true
//   },
//   globals: {
//     Markdown: true
//   },
//   extends: [
//     'plugin:vue/vue3-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'prettier/@typescript-eslint',
//     'plugin:prettier/recommended',
//     'eslint:recommended'
//   ],
//   rules: {
//     '@typescript-eslint/ban-ts-ignore': 'off',
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/no-explicit-any': 'off',
//     '@typescript-eslint/no-var-requires': 'off',
//     '@typescript-eslint/no-empty-function': 'off',
//     '@typescript-eslint/no-use-before-define': 'off',
//     '@typescript-eslint/ban-ts-comment': 'off',
//     '@typescript-eslint/ban-types': 'off',
//     '@typescript-eslint/no-non-null-assertion': 'off',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/no-unused-vars': [
//       'error',
//       {
//         argsIgnorePattern: '^h$',
//         varsIgnorePattern: '^h$'
//       }
//     ],
//     'no-unused-vars': [
//       'error',
//       {
//         argsIgnorePattern: '^h$',
//         varsIgnorePattern: '^h$'
//       }
//     ],
//     'space-before-function-paren': 'off',
//     'quotes': ['error', 'single'],
//     'comma-dangle': ['error', 'never'],
//     'vue/require-default-prop': 'off',
//     'vue/custom-event-name-casing': 'off',
//     'no-use-before-define': 'off',
//     'vue/comment-directive': 'off',
//     'vue/singleline-html-element-content-newline': 'off',
//     'vue/html-self-closing': 'off',
//     'vue/max-attributes-per-line': 'off'
//   },
//   'vue/html-self-closing': [
//     'error',
//     {
//       html: {
//         void: 'always',
//         normal: 'never',
//         component: 'always',
//       },
//       svg: 'always',
//       math: 'always',
//     },
//   ],
//   'vue/html-closing-bracket-spacing': [
//     'error',
//     {
//       startTag: 'never',
//       endTag: 'always',
//       selfClosingTag: 'always',
//     },
//   ],
// }