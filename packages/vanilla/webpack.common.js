const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'hig.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'Hig',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ]
        }),
      },
      {
        test: /\.(html|svg)$/,
        issuer: /\.js$/,
        use: 'raw-loader'
      },
      {
        test: /\.svg$/,
        issuer: /\.scss$/,
        use: 'svg-url-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'interface.json': 'hig-interface',
      '_core.js': path.resolve(__dirname, 'src/helpers/js/_core.js')
    },
    extensions: ['.js', '.json'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ]
  },
  plugins: [
    new ExtractTextPlugin('hig.css'),
  ]
};
