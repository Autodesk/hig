const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const babel = require("./webpack/babel");
const minify = require("./webpack/minify");

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
    rules: [babel({ plugins: ["react-docgen"] })]
  },
  plugins: [],
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
    rules: [babel()]
  },
  plugins: [
    minify(),
    new CopyWebpackPlugin([
      {
        from: "../vanilla/lib/hig.css",
        to: "hig-react.css"
      }
    ])
  ],
  externals
};

if (process.env.NODE_ENV !== "production") {
  module.exports = debug;
} else {
  module.exports = production;
}
