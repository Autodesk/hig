module.exports = {
  extends: ["airbnb", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
  babelOptions: {
      presets: ["@babel/preset-react"]
    }
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  plugins: ["react", "prettier"],
  globals: {
    describe: true,
    it: true,
    expect: true,
    gemini: true,
    jest: true,
    beforeAll: true,
    beforeEach: true,
    afterEach: true,
    afterAll: true,
    document: true,
    window: true
  },
  rules: {
    "import/no-extraneous-dependencies": 0,
    "max-len": [1, { code: 200 }],
    "no-underscore-dangle": 0,
    "prettier/prettier": "error",
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-bind": [
      2,
      {
        "allowArrowFunctions": true,
        "allowFunctions": true,
        "ignoreRefs": true
      }
    ],
    "react/no-danger": 2,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 2,
    "react/require-default-props": 0,
    "react/style-prop-object": 0,
    /* Allow the use of <label /> without nesting the <input /> */
    "jsx-a11y/label-has-for": [
      2,
      {
        required: {
          every: ["id"]
        }
      }
    ],
    "react/jsx-props-no-spreading": 0,
    "import/no-unresolved": 0,
    "no-restricted-exports": 0,
    "react/function-component-definition": 0
  },
  overrides: [
    {
      files: ["*test.js", "**/__stories__/*.js"],
      rules: {
        "react/prop-types": 0
      }
    }
  ]
};
