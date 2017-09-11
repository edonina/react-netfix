const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './index.jsx',

    output: {
      path: path.resolve(__dirname, './'),
      filename: 'index.js'
    },

    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3000
    },

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
        }]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
    ]
};