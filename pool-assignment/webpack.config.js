var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            './src/main.js',
        ]
    },
    output: {
        filename: './dist/[name].js'
    },

    module: {
        loaders: [{
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                loader: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
    },
    resolve: {
        extensions: [".jsx", ".json", ".js"]
    },
}