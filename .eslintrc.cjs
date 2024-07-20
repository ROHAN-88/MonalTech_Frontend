module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", 'react-refresh', "react-hooks", "@typescript-eslint",
    "simple-import-sort"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-console": "warn",
    "react/prop-types": "off"
  },
  "overrides": [
    // override "simple-import-sort" config
    {
      "files": [
        "*.js",
        "*.jsx",
        "*.ts",
        "*.tsx"
      ],
      "rules": {
        "simple-import-sort/imports": [
          "error",
          {
            "groups": [
              // Packages `react` related packages come first.
              [
                "^react",
                "^@?\\w"
              ],
              // Internal packages.
              [
                "^(@|components)(/.*|$)"
              ],
              // Side effect imports.
              [
                "^\\u0000"
              ],
              // Parent imports. Put `..` last.
              [
                "^\\.\\.(?!/?$)",
                "^\\.\\./?$"
              ],
              // Other relative imports. Put same-folder imports and `.` last.
              [
                "^\\./(?=.*/)(?!/?$)",
                "^\\.(?!/?$)",
                "^\\./?$"
              ],
              // Style imports.
              [
                "^.+\\.?(css)$"
              ]
            ]
          }
        ]
      }
    }
  ]
}
