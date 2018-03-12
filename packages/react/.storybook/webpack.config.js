const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "../src"), "node_modules"]
  }
};
