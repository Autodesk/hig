const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

const r = {
  entry: './src/index.js',
  output: {
    filename: 'hig.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'Hig',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
            presets: [
                'es2015',
                'stage2'
            ],
            plugins: [],
            babelrc: false,
            compact: false
        },
        exclude: [/node_modules/]
    },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: "css-loader!sass-loader"
        }),
    },{
        test: /\.html$/,
        use: 'raw-loader'
    }]
  },
  resolve: {
      alias: {
          "basics": path.resolve(__dirname, "src", "basics"),
          "helpers": path.resolve(__dirname, "src", "helpers"),
          "components": path.resolve(__dirname, "src", "components"),
          "interface.json": "hig-interface",
          "_core.js": path.resolve( __dirname, 'src/helpers/js/_core.js' )
      },
      extensions: [ '.js', '.json' ]
  },
  plugins: [
      new ExtractTextPlugin('hig.css'),
      new OptimizeCssAssetsPlugin()
  ]
}

if (process.env.NODE_ENV !== 'production') {
  r.devtool = 'source-map';
}

module.exports = r;
