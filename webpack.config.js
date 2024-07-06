const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant page',
            template: './src/index.html',
        }),
        // new HtmlWebpackInlineSVGPlugin({
        //     runPreEmit: true,
        // }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]-[hash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};