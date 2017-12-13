module.exports = function babel(options = {}) {
  return {
    test: /\.js$/,
    exclude: [/node_modules/, /..\/vanilla/],
    use: {
      loader: "babel-loader",
      options: Object.assign(
        {
          presets: [
            [
              "env",
              {
                targets: {
                  browsers: "> 1%"
                }
              }
            ],
            "react",
            "stage-2"
          ],
          babelrc: false,
          compact: false
        },
        options
      )
    }
  };
};
