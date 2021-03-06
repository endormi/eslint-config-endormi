module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true,
    "jest": true,
    "serviceworker": true
  },
  "rules": {
    "no-debugger": 0,
    "no-alert": 0,
    "react/prop-types": 0,
    "react/no-danger": 2,
    "react/jsx-curly-brace-presence": 1,
    "no-return-assign": ["error", "except-parens"],
    "no-restricted-syntax": [2, "ForInStatement", "LabeledStatement", "WithStatement"],
    "no-unused-vars": [
      2,
      {
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "res|next|^err"
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all"
      }
    ],
    "arrow-body-style": ["error", "always"],
    "no-unused-expressions": [
      2,
      {
        "allowTaggedTemplates": true,
        "allowShortCircuit": false,
        "allowTernary": false
      }
    ],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-console": 0,
    "func-names": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 1,
    "import/no-duplicates": 2,
    "import/no-deprecated": 1,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "no-underscore-dangle": 1,
    "consistent-return": 0,
    "react/display-name": 1,
    "react/forbid-prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/no-array-index-key": 0,
    "react/prefer-stateless-function": 0,
    "react/no-unescaped-entities": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "no-shadow": [
      2,
      {
        "hoist": "all",
        "allow": [
          "resolve",
          "done",
          "next",
          "err",
          "error"
        ]
      }
    ],
    "quotes": [
      1,
      "single",
      {
	"allowTemplateLiterals": true,
        "avoidEscape": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
	"trailingComma": "es5",
	"tabWidth": 4,
        "eslintIntegration": true,
        "stylelintIntegration": true,
        "singleQuote": true,
        "printWidth": 70,
      }
    ],
  },
  "plugins": ["html", "prettier"]
}
