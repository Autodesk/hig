module.exports = function createBuildPreset() {
  return {
    exclude: [
      "**/node_modules/**"
    ],
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          targets: ">1%"
        }
      ],
      "@babel/preset-react",
      "@emotion/babel-preset-css-prop"
    ],
    plugins: [
      "react-docgen",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-json-strings",
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-numeric-separator",
      "@babel/plugin-proposal-throw-expressions",
      "@babel/plugin-proposal-export-default-from",
      "@emotion/babel-plugin"
    ]
  };
};