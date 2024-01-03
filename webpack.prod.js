const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            API_HOST: JSON.stringify("https://colors-api-882u.onrender.com"),
        })
    ]
});