const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const clientConfig = {

    context: path.resolve(__dirname, 'src'),

    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
            './index.jsx'
        ],
        vendor: ["lodash"]
    },

    output: {
        filename: '[name].js',
        path:  path.resolve(__dirname, 'dist'),
        publicPath : '/'
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3000
    },

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
                plugins: ["transform-react-jsx"]/*,
                 presets: ['env']*/
            }
        }, {
            test: /\.scss/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },

    plugins: [
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
    ]
};

module.exports = [clientConfig, serverConfig];