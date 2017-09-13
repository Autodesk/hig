const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const babel = require('./webpack/babel');
const minify = require('./webpack/minify');

const externals = [
  "react",
  "react-dom",
  "prop-types"
];

const debug = {
  devtool: "source-map",
  entry: './src/hig-react.js',
  output: {
    path: path.resolve('./lib'),
    filename: 'hig-react-debug.js',
    library: 'HigReact',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      babel({ plugins: ["react-docgen"]})
    ]
  },
  plugins: [],
  externals: externals
}

const production = {
  entry: './src/hig-react.js',
  output: {
    path: path.resolve('./lib'),
    filename: 'hig-react.js',
    library: 'HigReact',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      babel()
    ]
  },
  plugins: [
    minify()
  ],
  externals: externals
}

if(process.env.NODE_ENV != "production") {
  module.exports = debug;
} else {
  module.exports = production;
}
