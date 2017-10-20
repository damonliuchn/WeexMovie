/**
 * Created by ebi on 2017/2/7.
 */
var webpack = require('webpack')
var path = require('path');
var fs = require('fs');
var copy = require('copy-webpack-plugin');
var entry = {};
var outPath="dist";

var bannerPlugin = new webpack.BannerPlugin(
    '// { "framework": "Vue" }\n',
    { raw: true }
)


//  文件拷贝插件,将图片和字体拷贝到dist目录
var copyPlugin = new copy([
    //{from: './src/image', to: "./image"},
    {from: '../node_modules/bui-weex/src/font', to: outPath + "/font"}
])

//搜集入口文件
function walk(root,dir) {
    var directory = path.join(__dirname, root, dir);
    fs.readdirSync(directory)
        .forEach(function (file) {
            var fullpath = path.join(directory, file);
            var stat = fs.statSync(fullpath);
            if (stat.isFile() && path.extname(fullpath) === '.vue') {
                //dir.substr(6)是在dist里去掉pages这层文件夹
                var name = path.join(outPath, dir.substr(6), path.basename(file, '.vue'));
                entry[name] = fullpath + '?entry=true'
            } else if (stat.isDirectory()) {
                var subdir = path.join(dir, file);
                walk(root,subdir)
            }
        })
}
walk('../src','pages');
module.exports = {
    entry:entry,
    output: {
        path: '',
        filename: '[name].js'
    },
    node: {
        global: true
    },
    module: {
        loaders: [
            {
                test: /\.vue(\?[^?]+)?$/,
                loaders: ['weex']
            },
            {
                test:/\.js(\?[^?]+)?$/,
                loader: 'babel',
            }
            ,{
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    plugins: [bannerPlugin,copyPlugin]
};