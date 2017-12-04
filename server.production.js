const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, ``, `src/server/index.js`),
    output: {
        filename: 'compiled.js",',
        path:  path.resolve(__dirname,'', 'dist'),
        publicPath : '/dist/',
        library: 'app',
        libraryTarget:'commonjs2'

    },
    target: 'node',
    externals: [nodeExternals()],
    devtool: 'eval',

    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                plugins: ["transform-react-jsx"],
                presets: ['es2015', 'react', 'stage-2']
            }
        },

            {
                test: /\.scss$/,
                loader: 'css-loader/locals'
            },
        ]
    }
};