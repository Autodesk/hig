const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

var r = {
  entry: './src/hig-react.js',
  output: {
    path: path.resolve('./lib'),
    filename: 'hig-react.js',
    library: 'HigReact',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /..\/vanilla/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015', 
              'react',
              'stage-2'
            ],
            plugins: [],
            babelrc: false,
            compact: false
          }
        }
      }
    ]
  },
  plugins: [],
  externals: [
    "react",
    "react-dom",
    "prop-types"
  ]
}

if(process.env.NODE_ENV != "production"){
  r['devtool'] = "source-map";
}else{
  r['plugins'].push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
          keep_fnames: true,
          warnings: false
      },
      mangle: {
          keep_fnames: true
      }
    })
  );
}

module.exports = r;