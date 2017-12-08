/**
 * Created by ebi on 2017/2/7.
 */
var webpack = require('webpack')
var path = require('path');
var fs = require('fs');
var copy = require('copy-webpack-plugin');

var entry = {};
var srcPath  = path.join(__dirname, '../src');
var outDir = 'dist';

//开发环境时，将开发机的IP替换到代码文件里
const ip = require('ip');
const IP = ip.address();
console.log('----------use playground run: http://'+IP+':10004/dist/pages/index.js');//http://blog.csdn.net/fungleo/article/details/54574049
fs.readFile(srcPath + "/router-native.js", 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/const basePath = .*?;/g, "const basePath = 'http://"+IP+":10004/dist';");
    fs.writeFile(srcPath+"/router-native.js", result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});


var bannerPlugin = new webpack.BannerPlugin(
    '// { "framework": "Vue" }\n',
    { raw: true }
)

//  从项目根目录 输出到 输出文件夹目录，文件拷贝插件,将图片和字体拷贝到dist目录
var copyPlugin = new copy([
    {from: './node_modules/bui-weex/src/font', to:  "font"}
])

//搜集入口文件
function walk(root,dir) {
    var directory = path.join(root, dir);
    fs.readdirSync(directory)
        .forEach(function (fileOrDir) {
            var fullpath = path.join(directory, fileOrDir);
            var stat = fs.statSync(fullpath);
            if (stat.isFile() && path.extname(fullpath) === '.vue') {
                //例如name：pages/index    path.basename获取最终文件名，.vue是过滤字符串
                var name = path.join(dir, path.basename(fileOrDir, '.vue'));
                entry[name] = fullpath + '?entry=true'
            } else if (stat.isDirectory()) {
                var subdir = path.join(dir, fileOrDir);
                walk(root,subdir)
            }
        })
}

walk(srcPath,'pages');
module.exports = {
    entry:entry,
    output: {
        path: outDir,
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
    plugins: [bannerPlugin,copyPlugin],
    HOST: IP
};