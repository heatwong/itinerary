'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack'),
    jsPath  = 'app/assets/javascripts',
    path = require('path'),
    srcPath = path.join(__dirname, 'app/assets/javascripts');

var config = {
    target: 'web',
    entry: {
        app: path.join(srcPath, 'index.js')
        //, common: ['react-dom', 'react']
    },
    resolve: {
        alias: {},
        extensions: ['*', '.js'],
        modules: ['node_modules', jsPath]
    },
    output: {
        path:path.resolve(__dirname, jsPath, 'build'),
        publicPath: '',
        filename: 'bundle.js',
        pathinfo: true
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                   presets: ['react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        //makes jQuery available in every module
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};

module.exports = config;
