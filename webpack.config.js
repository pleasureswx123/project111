var path = require('path');
var webpack = require('webpack');
var args = require('node-args');

var config = {
    entry : './public/js/index.js',
    output : {
        path : path.join(__dirname,'dist'),
        publicPath : '/dist/',
        filename : 'bundle.js'
    },
    plugins : [],
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                loader : "babel-loader"
            },{
                test : /\.jsx$/,
                exclude: /node_modules/,
                loader : "babel-loader"
            },{
                test : /\.less$/,
                exclude: /node_modules/,
                loader : "style-loader!css-loader!less-loader"
            },{
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },{
                test: /\.png$/,
                exclude: /node_modules/,
                loader: "url-loader"
            },{
                test : /\.json$/,
                exclude: /node_modules/,
                loader : "json-loader"
            }
        ]
    }
};

if(args.minify){
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ];
}

module.exports  = config;