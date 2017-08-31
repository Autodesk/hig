const path = require('path');
const fs = require('fs');

const pkg = JSON.parse(fs.readFileSync('./package.json'));


r = {
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
  externals: [
    'react',
    'react-dom',
    'prop-types'
  ]
}

if(process.env.NODE_ENV != "production"){
    r['devtool'] = "source-map";
}

module.exports = r;