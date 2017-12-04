const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {

    entry: path.resolve(__dirname, ``, `src/server/index.js`),
   /* entry:  {
        server: [
            path.resolve(__dirname, ``, `src/server/index.js`),
        ]
    },*/

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
    //devtool: 'source-map',

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
    },

   /* plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            minChunks: 2,
        }),
        new webpack.DefinePlugin({
            PRODUCTION: false,
            BROWSER_SUPPORTS_HTML5: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]*/
};