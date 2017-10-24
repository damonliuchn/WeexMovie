/**
1、path.resolve('a','b','c/d');
    返回D:\a\b\c\d ,path.resolve返回当前环境所在路径拼接参数字符串所得到的绝对路径，其中参数可以有多个
2、path.join('a','b');//返回 a\b
    path.join(__dirname,'c','main.js')//返回 D:\c\main.js  ,__dirname表示当前运行环境绝对路径
    path.join()方法拼接路径，并返回该路径，结合__dirname可以达到path.resolve()方法同样的效果
 */
var path = require('path');
var fs = require('fs');
var copy = require('copy-webpack-plugin');

var entry = {};
var srcPath  = path.join(__dirname, '../src');
//var srcPath2  = path.resolve('src');//在当前环境目录上下级寻找最近的src目录
var outDir = 'dist';

//  从项目根目录 输出到 输出文件夹目录，文件拷贝插件,将图片和字体拷贝到dist目录
var copyPlugin = new copy([
    {from: './src/index.html', to: ''}
])

module.exports = {
    entry: {
        // 'entry-web': path.resolve('src', 'entry-web.js')
        'entry-web': srcPath +'/entry-web.js'
    },
    output: {
        path: outDir,
        filename: '[name].js',
        //publicPath: 'http://xiazhou.me/example/xiazhou-weex/dist/',
        publicPath: outDir,
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