import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      camelcase: ['error', { allow: ['MRT_GlobalFilterTextField'] }],
      'eol-last': 'error',
      // "import/order": [
      //   "error",
      //   {
      //     "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"]],
      //     "pathGroups": [
      //       {
      //         "pattern": "@(react|react-native)",
      //         "group": "external",
      //         "position": "before"
      //       },
      //       {
      //         "pattern": "prop-types",
      //         "group": "external",
      //         "position": "before"
      //       },
      //       {
      //         "pattern": "ajv**",
      //         "group": "external",
      //         "position": "before"
      //       },
      //       {
      //         "pattern": "components/**",
      //         "group": "internal"
      //       },
      //       {
      //         "pattern": "containers/**",
      //         "group": "internal"
      //       },
      //       {
      //         "pattern": "services/**",
      //         "group": "internal"
      //       },
      //       {
      //         "pattern": "styles/**",
      //         "group": "internal"
      //       },
      //       {
      //         "pattern": "tests/**",
      //         "group": "internal"
      //       },
      //       {
      //         "pattern": "utils/**",
      //         "group": "internal"
      //       }
      //     ],
      //     "pathGroupsExcludedImportTypes": [],
      //     "alphabetize": {
      //       "order": "asc",
      //       "caseInsensitive": true
      //     }
      //   }
      // ],
      'no-duplicate-imports': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: ['.*']
        }
      ],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
          shorthandFirst: true
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/no-unused-prop-types': 'error',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true
        }
      ],
      'react/sort-prop-types': ['error', { ignoreCase: true }],
      'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }]
    }
  }
];
