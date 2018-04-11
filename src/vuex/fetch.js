const stream = weex.requireModule('stream')

//const baseURL = 'https://gitee.com/masonliu/MockData/raw/master/MoviesExample.json'
const baseURL = 'https://www.baidu.com'
export function fetch3() {
    return new Promise((resolve, reject) => {
        stream.fetch(
            {
                method: 'GET',
                //url: `${baseURL}/${path}`,
                url: baseURL,
                type: 'json'
            },

            (response) => {
                //console.log('----------> response.status: ' + response.status)
                if (response.status == 200) {


                    // var el = weex.document.createElement( 'html' );
                    // el.innerHTML = "<html><head><title>titleTest</title></head><body><a href='test0'>test01</a><a href='test1'>test02</a><a href='test2'>test03</a></body></html>";
                    // console.log('----------> response.status: ' + el.getElementsByTagName( 'a' ).length)
                    //
                    //

                    try {
                        var aa = response.data.match(/vod_list[\s\S]*?ul/);
                        console.log("ssss" + aa);

                        var tmp = find(response.data, /vod_list[\s\S]*?ul/, 0, 0)
                        var tmp2 = find(tmp, /<li>[\s\S]*?<\/li>/g, 0, 0)
                        console.log(tmp);
                    }
                    catch (e) {
                        console.log(e + "123");
                        return "";
                    }


                    resolve(response.data)
                }
                else {
                    reject(response)
                }
            },

            () => {
            }
        )
    })
}

function find(source, regExp, start, end) {
    try {
        var find = source.match(regExp)[0];
        return find.substring(start, find.length - end);
    }
    catch (e) {
        return "";
    }
}

function handle(pathQuery){
    weex.requireModule("CommonModule").handle(pathQuery)
}
function log(log){
    handle('/provider/log?text=' + log)
    console.log(log)
}
function logObject(obj){
    var str = JSON.stringify(obj, null, 4);
    log(str)
}

export function fetch222(type,page) {
    return new Promise((resolve, reject) => {
        var host = "http://www.15yc.com";
        stream.fetch(
            {
                timeout:30000,
                method: 'GET',
                //url: host + '/type/'+type+'/'+page+'.html',
                url: 'http://www.15yc.com',
                //url: 'http://httpbin.org/get',
                //type: 'text',
                headers: {
                    "Host": "www.15yc.com",
                    "Upgrade-Insecure-Requests": "1",
                    "User-Agent": "Mozilla/5.0 (Linux; U; Android 7.1.2; zh-cn; MI 5X Build/N2G47H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/9.5.9",
                    "x-miorigin": "on",
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,en-US;q=0.8"
                }
            },
            (response) => {
                log('----------> response: ')
                logObject(response)
                if(!response.ok){
                    log('----------> !response.ok')
                }else{
                    log('----------> response.data: ' + response.data)
                }
                //console.log('----------> response.status: ' + response.data)
                if (response.status == 200) {
                    try {
                        var array = [];
                        var tmp = find(response.data, /col-md-1-5 col-sm-4 col-xs-6[\s\S]*?background:#FFF/, 0, 0)
                        tmp.match(/"movie-item"[\s\S]*?otherinfo/g).forEach(
                            function (element) {
                                var object = new Object()
                                var status = find(element, /hdtag">[\s\S]*?</, 7, 1)
                                var title = find(element, /title="[\s\S]*?"/, 7, 1);
                                var url = host + find(element, /href="[\s\S]*?"/, 6, 1);
                                var img = find(element, /src="[\s\S]*?"/, 5, 1)
                                object.status = status;
                                object.title = title;
                                object.url = url;
                                object.img = img;
                                array.push(object);
                            }
                        );
                        console.log('----------> response.status: ' + array.length)
                        var array2 = [];
                        for (var i = 0; i < array.length; i++) {
                            if (i % 3 == 0) {
                                var object = new Object()
                                object.one = array[i];
                                if (i + 1 < array.length) {
                                    object.two(array[i+1]);
                                } else {
                                    object.two = new Object()
                                }
                                if (i + 2 < array.length) {
                                    object.three = array[i+2];
                                } else {
                                    object.three = new Object()
                                }
                                array2.push(object)
                            }
                        }
                        resolve(array2)
                    } catch (e) {
                        reject(response)
                    }
                } else {
                    log('----------> response.status2: '+response.status)
                    reject(response)
                }
            },
            (responseInfo) => {
                log('----------> responseInfo.status: ' + responseInfo.status)
                //logObject(responseInfo)
            }
        )
    })
}



export function fetch2(type,page) {
    return new Promise((resolve, reject) => {
        var host = "http://www.15yc.com";
        var url = host + '/type/'+type+'/'+page+'.html';
        var commonModule=weex.requireModule("CommonModule");
        commonModule.nativeHttpGet(url,(response)=>{
            if(!response.ok){
                log('----------> response.data: ' + response.ok)
                reject(response)
            }else{
                try {
                    log('----------> response.status111: ')
                    var array = [];
                    var tmp = find(response.data, /col-md-1-5 col-sm-4 col-xs-6[\s\S]*?background:#FFF/, 0, 0)
                    tmp.match(/"movie-item"[\s\S]*?otherinfo/g).forEach(
                        function (element) {
                            var object = new Object()
                            var status = find(element, /hdtag">[\s\S]*?</, 7, 1)
                            var title = find(element, /title="[\s\S]*?"/, 7, 1);
                            var url = host + find(element, /href="[\s\S]*?"/, 6, 1);
                            var img = find(element, /src="[\s\S]*?"/, 5, 1)
                            object.status = status;
                            object.title = title;
                            object.url = url;
                            object.img = img;
                            array.push(object);
                        }
                    );
                    log('----------> response.status: ' + array.length)
                    var array2 = [];
                    for (var i = 0; i < array.length; i++) {
                        if (i % 3 == 0) {
                            var object = new Object()
                            object.one = array[i];
                            if (i + 1 < array.length) {
                                object.two = array[i+1];
                            } else {
                                object.two = new Object()
                            }
                            if (i + 2 < array.length) {
                                object.three = array[i+2];
                            } else {
                                object.three = new Object()
                            }
                            array2.push(object)
                        }
                    }
                    log('----------> response.status3333: ' + array2.length)
                    resolve(array2)
                }
                catch (e) {
                    reject(response)
                }
            }
        })
    })
}

export function search(keyWord,page) {
    return new Promise((resolve, reject) => {
        var host = "http://www.15yc.com";
        var url =	host + '/s/'+encodeURIComponent(keyWord)+'/'+page+'.html';
        var commonModule=weex.requireModule("CommonModule");
        commonModule.nativeHttpGet(url,(response)=>{
            if(!response.ok){
                log('----------> response.data: ' + response.ok)
                reject(response)
            }else{
                try {
                    log('----------> response.status111: ')
                    var array = [];
                    var tmp = find(response.data, /col-md-1-5 col-sm-4 col-xs-6[\s\S]*?background:#FFF/, 0, 0)
                    tmp.match(/"movie-item"[\s\S]*?otherinfo/g).forEach(
                        function (element) {
                            var object = new Object()
                            var status = find(element, /hdtag">[\s\S]*?</, 7, 1)
                            var title = find(element, /title="[\s\S]*?"/, 7, 1);
                            var url = host + find(element, /href="[\s\S]*?"/, 6, 1);
                            var img = find(element, /src="[\s\S]*?"/, 5, 1)
                            object.status = status;
                            object.title = title;
                            object.url = url;
                            object.img = img;
                            array.push(object);
                        }
                    );
                    log('----------> response.status: ' + array.length)
                    var array2 = [];
                    for (var i = 0; i < array.length; i++) {
                        if (i % 3 == 0) {
                            var object = new Object()
                            object.one = array[i];
                            if (i + 1 < array.length) {
                                object.two = array[i+1];
                            } else {
                                object.two = new Object()
                            }
                            if (i + 2 < array.length) {
                                object.three = array[i+2];
                            } else {
                                object.three = new Object()
                            }
                            array2.push(object)
                        }
                    }
                    log('----------> response.status3333: ' + array2.length)
                    resolve(array2)
                }
                catch (e) {
                    reject(response)
                }
            }
        })
    })
}

export function fetch22(type,page) {
    return new Promise((resolve, reject) => {
        var host = "http://digua.masonliu.com/api/notToken";
        stream.fetch(
            {
                timeout:30000,
                method: 'GET',
                url: host + '?type='+type+'&page='+page,
                type: 'json'
            },
            (response) => {
                if (response.status == 200) {
                    try {
                        resolve( response.data.data)
                    } catch (e) {
                        reject(response)
                    }
                } else {
                    reject(response)
                }
            },
            () => {
            }
        )
    })
}
