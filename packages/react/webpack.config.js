const path = require("path");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const minify = require("./webpack/minify");
const styles = require("./webpack/sass");

const externals = ["react", "react-dom", "prop-types"];

const debug = {
  devtool: "source-map",
  entry: "./src/hig-react.js",
  output: {
    path: path.resolve("./lib"),
    filename: "hig-react-debug.js",
    library: "HigReact",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["react-docgen"]
          }
        }
      },
      styles
    ]
  },
  plugins: [],
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  externals
};

const production = {
  entry: "./src/hig-react.js",
  output: {
    path: path.resolve("./lib"),
    filename: "hig-react.js",
    library: "HigReact",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: [/node_modules/]
      },
      styles
    ]
  },
  plugins: [
    minify(),
    new ExtractTextPlugin("hig-react.css"),
    new OptimizeCssAssetsPlugin()
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  externals
};

if (process.env.NODE_ENV !== "production") {
  module.exports = debug;
} else {
  module.exports = production;
}
