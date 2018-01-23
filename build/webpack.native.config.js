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

var bannerPlugin = new webpack.BannerPlugin(
    '// { "framework": "Vue" }\n',
    { raw: true }
)

//开发环境时，将开发机的IP替换到代码文件里
const ip = require('ip');
const IP = ip.address();
console.log('----------   use playground run: http://'+IP+':10004/dist/pages/index.js');//http://blog.csdn.net/fungleo/article/details/54574049
fs.readFile(srcPath + "/router-native.js", 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/const basePath = .*?;/g, "const basePath = 'http://"+IP+":10004/dist';");
    fs.writeFile(srcPath+"/router-native.js", result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});


//  从项目根目录 输出到 输出文件夹目录，文件拷贝插件,将图片和字体拷贝到dist目录
var copyPlugin = new copy([
    {from: './node_modules/bui-weex/src/font', to:  "pages/font"},
    {from: './assets/image', to: "pages/image"}
])

//搜集入口文件
function walk(fullRoot,pathDir) {
    var fullDir = path.join(fullRoot, pathDir);
    fs.readdirSync(fullDir)
        .forEach(function (pathChild) {
            var fullChild = path.join(fullDir, pathChild);
            var statChild = fs.statSync(fullChild);
            if (statChild.isFile() && path.extname(fullChild) === '.vue') {
                //例如pathAndName：pages/index    path.basename获取最终文件名，.vue是过滤字符串
                var pathAndName = path.join(pathDir, path.basename(fullChild, '.vue'));
                entry[pathAndName] = fullChild + '?entry=true'
            } else if (statChild.isDirectory()) {
                var subdir = path.join(pathDir, pathChild);
                walk(fullRoot,subdir)
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
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [bannerPlugin,copyPlugin],
    HOST: IP
};