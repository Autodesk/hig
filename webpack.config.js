var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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
                compact: false
            },
            exclude: [/node_modules/, /orion-ui\/packages\/hig\.web\/dist/]
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
            "basics": path.resolve(__dirname, "src", "web", "basics"),
            "helpers": path.resolve(__dirname, "src", "web", "helpers"),
            "components": path.resolve(__dirname, "src", "web", "components"),
            "interface.json": path.resolve( __dirname, 'src/interface/interface.json' ),
            "_core.js": path.resolve( __dirname, 'src/web/helpers/js/_core.js' )
        },
        extensions: [ '.js', '.json' ]
    },
    plugins: [
        new ExtractTextPlugin('hig.css'),
        new OptimizeCssAssetsPlugin()
    ]
}

if(process.env.NODE_ENV != "production"){
    r['devtool'] = "eval-source-map";
}

module.exports = r;