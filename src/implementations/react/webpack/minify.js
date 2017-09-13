const webpack = require('webpack');

module.exports = function minify() {
  return new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      keep_fnames: true,
      warnings: false
    },
    mangle: {
      keep_fnames: true
    }
  })
}
