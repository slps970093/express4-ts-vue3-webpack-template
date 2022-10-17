const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const Dotenv = require('dotenv-webpack');
require('dotenv').config({
    path: "./.env"
})

module.exports = {
    entry: './components/index.js',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'assets'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/components'),
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new Dotenv(),
    ],
};