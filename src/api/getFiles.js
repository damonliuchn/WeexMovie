var http = require('http');
var path = require("path");
var fileList = [];
//qr = require('qr-image');
var url = require('url');

function walk(path){  
    // var dirList = fs.readdirSync(path);
    // dirList.forEach(function(item){
    //     if(fs.statSync(path + '/' + item).isDirectory()){
    //         walk(path + '/' + item);
    //     }else{
    //         fileList.push(path + '/' + item);
    //     }
    // });
}


function padding() {
    // fileList = [];
    // var fileDir = path.resolve()+'/file'
    // walk(fileDir);
    // //sort
    // fileList.sort(function(val1, val2){
    //     //读取文件信息
    //     var stat1 = fs.statSync(val1);
    //     var stat2 = fs.statSync(val2);
    //     //根据时间从最新到最旧排序
    //     return stat2.mtime - stat1.mtime;
    // });
    // for(var i = 0,  l = fileList.length; i < l; i++) {
    //     var fileName = fileList[i].replace(fileDir+'/','')
    //
    // }
}

const LoginUsers = [
  {
    id: 1,
    age: 123,
    password: '123456',
    avatar: 'https://avatars2.githubusercontent.com/u/2810577?v=3&s=460',
    name: '刘盟'
  }
];

export default {
    getQueryStringByName: function () {

        return LoginUsers;
    }
};
