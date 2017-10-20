#!/usr/bin/env node
require('shelljs/global');
var shell = require("shelljs");
var fs = require('fs');
var path = require("path");
var os = require("os");
//以上三个task需要手动build，可以采用下面的hotload
// task runWeexHotServer << {
//     killPort("8081")
// killPort("8082")
// adbReverse("8081")
// //adbReverse.execute()
// try {
//     project.exec {
//         workingDir project.rootDir.absolutePath + "/weex"
//         executable "weex"
//         args "src/entry.js"
//     }
// } catch (e) {
//     println e
// }
// try {
//     //copy bundle to assets？？？？
// } catch (e) {
//     println e
// }
// }

//build
shell.exec("npm run build");

//拷贝到个平台目录下
cp('D:/Project/AS_MY/weexmovie/weexmovie_weex/dist/index.weex.js','D:/Project/AS_MY/weexmovie/weexmovie_android/app/src/main/assets/weex/index.weex.js')

//杀死端口
if (os.type() == 'Windows_NT') {
    shell.exec("for /f \"tokens=5\" %a in ('netstat -aon ^| find \"8083\" ^| find \"LISTENING\"') do taskkill /f /pid %a");
} else {
    shell.exec("kill -9 \$(lsof -t -i:8083)");
}

//打开Android localhost adb 端口转发
try{
    shell.exec("adb reverse tcp:8083 tcp:8083");
}catch (err){
    console.log(err)
}

//开启服务
console.log('http://localhost:8083/index.html')
shell.exec("npm run serve");


/**
 *
 * 开启
 *
 *
 *
 *
 */

