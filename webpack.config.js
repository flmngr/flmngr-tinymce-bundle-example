const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'TinyMCE with Flmngr file manager Webpack demo',
            meta: { viewport: 'width=device-width, initial-scale=1' }
        }),
    ],
    module: {
        rules: [
            {
                test: /skin\.css$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
            },
            {
                test: /content\.css$/i,
                use: [ 'css-loader' ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                tinymceVendor: {
                    test: /[\\/]node_modules[\\/](tinymce)[\\/](.*js|.*skin.css)|[\\/]plugins[\\/]/,
                    name: 'tinymce'
                },
            },
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};