/**
 * Created by ebi on 2017/2/7.
 */
var path = require('path');
var fs = require('fs');
var copy = require('copy-webpack-plugin');

//  文件拷贝插件,将图片和字体拷贝到dist目录
var copyPlugin = new copy([
    {from: './src/index.html', to: './dist'}
])

module.exports = {
    entry: {
        'entry-web': path.resolve('src', 'entry-web.js')
    },
    output: {
        path: 'dist',
        filename: '[name].js',
        //publicPath: 'http://xiazhou.me/example/xiazhou-weex/dist/',
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
    plugins: [copyPlugin]
};