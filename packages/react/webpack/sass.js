const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  test: /\.(scss|css)$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      { loader: "css-loader" },
      {
        loader: "sass-loader",
        options: {
          includePaths: ["node_modules"]
        }
      }
    ]
  })
};
