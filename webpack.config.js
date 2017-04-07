var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

r = {
    entry: './src/web/index.js',
    output: {
        filename: 'hig.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Hig',
        libraryTarget: 'var'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'es2015'
                ],
                plugins: []
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
    plugins: [
        new ExtractTextPlugin('hig.css'),
    ]
}

if(process.env.NODE_ENV != "production"){
    r['devtool'] = "eval-source-map";
}

module.exports = r;