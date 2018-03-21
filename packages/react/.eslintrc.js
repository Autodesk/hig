module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  settings: {
    "import/resolver": {
      "babel-module": {},
      webpack: true
    }
  },
  plugins: ["react", "prettier"],
  globals: {
    describe: true,
    it: true,
    expect: true,
    gemini: true,
    jest: true,
    beforeEach: true,
    document: true,
    window: true
  },
  rules: {
    "import/no-extraneous-dependencies": 0,
    "max-len": [1, { code: 100 }],
    "no-underscore-dangle": 0,
    "prettier/prettier": "error",
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": "warn",
    "react/require-default-props": 0,
    "react/style-prop-object": 0
  }
};
