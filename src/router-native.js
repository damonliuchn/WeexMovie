/**
 * Created by zhouz on 2017/2/12.
 */
const basePath = 'http://172.20.12.26:10004/dist';//替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
//const basePath='http://xiazhou.me/example/xiazhou-weex/dist';
export default [
    {path: '/native/:pathQuery', component: 'http://native'},
    {path: '/', component: basePath + '/pages/index.js'},
    {path: '/main', component: basePath + '/pages/main.js'},
    {path: '/search', component: basePath + '/pages/search.js'}
];