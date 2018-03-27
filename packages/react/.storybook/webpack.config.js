const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        loader: require.resolve("file-loader"),
        query: {
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "../src"), "node_modules"]
  }
};
