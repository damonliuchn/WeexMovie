/**
 * Created by zhouz on 2017/2/12.
 */
const basePath='http://172.20.16.56:10004/dist';//替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
//const basePath='http://xiazhou.me/example/xiazhou-weex/dist';
export default [
    {path:'/',component:basePath+'/index.js'},
    // {path:'/messages',component:basePath+'/weex-ui-sample/tab-page/index.js'}
    {path:'/messages',component:basePath+'/bui-weex-sample/tabbar-bottom-demo.js'}
];