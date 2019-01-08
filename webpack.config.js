const path = require('path');
const webpack = require('webpack');
const deployPath = path.resolve(__dirname, './dist');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        path: deployPath,
        filename: 'src-bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            sourceMap: true
        }),
        new CleanWebpackPlugin([deployPath]),
        new CopyWebpackPlugin([
            { from: "index.html", to: '', flatten: false }
        ]),
    ]
}