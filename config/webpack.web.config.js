/**
 * Created by ebi on 2017/2/7.
 */
var path = require('path');
var fs = require('fs');
var webpack = require('webpack')
module.exports = {
    entry: {
        'app': path.resolve('src', 'entry-web.js')
    },
    output: {
        path: 'public/dist',
        filename: '[name].js',
        publicPath: '/dist/',
    },
    node: {
        global: true
    },
    module: {
        loaders: [
            {
                test: /\.vue(\?[^?]+)?$/,
                loaders: ['vue']
            },
            {
                test:/\.js(\?[^?]+)?$/,
                loader: 'babel',
            }
        ]
    },
    devtool:"source-map",
    plugins: [

        // ...

        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery'
        })
    ]
};