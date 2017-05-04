var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

r = {
    entry: './src/web/index.js',
    output: {
        filename: 'hig.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Hig',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'es2015'
                ],
                plugins: [],
                babelrc: false,
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
            "interface.json": path.resolve( __dirname, 'src/interface/interface.json' ),
            "_core.js": path.resolve( __dirname, 'src/web/helpers/js/_core.js' )
        },
        extensions: [ '.js', '.json' ]
    },
    plugins: [
        new ExtractTextPlugin('hig.css'),
    ]
}

if(process.env.NODE_ENV != "production"){
    r['devtool'] = "eval-source-map";
}

module.exports = r;