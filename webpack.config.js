const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            './index.jsx',
        ],
        home: "./Home",
        order: "./Order",
        profile: "./Profile",
        vendor: ["lodash"]
    },

    output: {
        filename: '[name].js',
        path:  path.resolve(__dirname, 'dist')
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
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
        },{
            test: /\.scss/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
            /* {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        camelCase: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    },
                }, {
                    loader: 'typed-css-modules-loader',
                    options: {
                        camelCase: true,
                        outDir: './dist/css-modules'
                    },
                }
            ]
        }*/}]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["common", 'vendor'],
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
    ],
    watch: true
};