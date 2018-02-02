const stream = weex.requireModule('stream')

const baseURL = 'https://gitee.com/masonliu/MockData/raw/master/MoviesExample.json'
//const baseURL = 'https://www.baidu.com'
export function fetch2() {
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

export function fetch(type,page) {
    return new Promise((resolve, reject) => {
        var host = "http://d.aaccy.com";
        stream.fetch(
            {
                timeout:30000,
                method: 'GET',
                url: host + '/vod-list-id-'+type+'-pg-'+page+'-order--by-hits-class-0-year-0-letter--area--lang-.html',
                type: 'html',
                headers: {
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    //"Accept-Encoding":"gzip, deflate",
                    "Accept-Language": "en-US,en;q=0.9,de;q=0.8,zh-CN;q=0.7,zh-TW;q=0.6,zh;q=0.5",
                    "Cache-Control": "max-age=0",
                    "Connection": "keep-alive",
                    "Cookie": "Hm_lvt_2b18c505a9d15bd467f33b53d2edd9b9=1516955381; Hm_lpvt_2b18c505a9d15bd467f33b53d2edd9b9=1516955381",
                    "Host": "d.aaccy.com",
                    "Upgrade-Insecure-Requests": "1",
                    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
                }
            },
            (response) => {
                //console.log('----------> response.status: ' + response.data)
                if (response.status == 200) {
                    try {
                        var array = [];
                        var tmp = find(response.data, /vod_list[\s\S]*?ul/, 0, 0)
                        tmp.match(/<li>[\s\S]*?<\/li>/g).forEach(
                            function (element) {
                                var object = new Object()
                                var score = find(element, /class="score">[\s\S]*?</, 14, 1)
                                var status = find(element, /class="title">[\s\S]*?</, 14, 1)
                                var titleTmp = find(element, /<h2>[\s\S]*?<\/h2>/, 4, 5);
                                var title = find(titleTmp, />[\s\S]*?</, 1, 1);
                                var url = host + find(titleTmp, /href="[\s\S]*?"/, 6, 1);
                                var zhuyan = find(element, /<p>[\s\S]*?<\/p>/, 3, 4)
                                var img = "http:" + find(element, /data-original="[\s\S]*?"/, 15, 1)
                                object.score = score;
                                object.status = status;
                                object.title = title;
                                object.url = url;
                                object.zhuyan = zhuyan;
                                object.img = img;
                                array.push(object);
                            }
                        );
                        console.log('----------> response.status: ' + array.length)
                        resolve(array)
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

export function search(keyWord,page) {
    return new Promise((resolve, reject) => {
        var host = "http://d.aaccy.com";
        stream.fetch(
            {
                timeout:30000,
                method: 'GET',
                url: host + '/vod-search-pg-'+page+'-wd-'+encodeURIComponent(keyWord)+'.html',
                type: 'html',
                headers: {
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    //"Accept-Encoding":"gzip, deflate",
                    "Accept-Language": "en-US,en;q=0.9,de;q=0.8,zh-CN;q=0.7,zh-TW;q=0.6,zh;q=0.5",
                    "Cache-Control": "max-age=0",
                    "Connection": "keep-alive",
                    "Cookie": "Hm_lvt_2b18c505a9d15bd467f33b53d2edd9b9=1516955381; Hm_lpvt_2b18c505a9d15bd467f33b53d2edd9b9=1516955381",
                    "Host": "d.aaccy.com",
                    "Upgrade-Insecure-Requests": "1",
                    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
                }
            },
            (response) => {
                //console.log('----------> response.status: ' + response.data)
                if (response.status == 200) {
                    try {
                        var array = [];
                        var tmp = find(response.data, /new_tab_img[\s\S]*?ul/, 0, 0)
                        tmp.match(/<li>[\s\S]*?<\/li>/g).forEach(
                            function (element) {
                                var object = new Object()
                                var score = find(element, /class="iRankNum"><em>[\s\S]*?</, 21, 1)       //<label class="iRankNum"><em>1</em></label>
                                var status = find(element, /状态[\s\S]*?</, 3, 1)      //<p>状态：高清</p>
                                var title = find(element, /title="[\s\S]*?"/, 7, 1);                   //title="  "
                                var url = host + find(element, /href="[\s\S]*?"/, 6, 1);               //href="  '
                                var zhuyan = ""
                                var img = "http:" + find(element, /data-original="[\s\S]*?"/, 15, 1)
                                object.score = score;
                                object.status = status;
                                object.title = title;
                                object.url = url;
                                object.zhuyan = zhuyan;
                                object.img = img;
                                array.push(object);
                            }
                        );
                        console.log('----------> response.status: ' + array.length)
                        resolve(array)
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
