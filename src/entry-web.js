/**
 * Created by ebi on 2017/2/7.
 */


import VueRouter from 'vue-router'
//import "weex-vue-render"//导入weex
import routes from './router-web'
import VueResource from 'vue-resource';
// Don't forget to call this
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    //mode: 'hash',
    routes
});

new Vue({el:'#root',router});
/**
  上边做了两件事情
  1、当前html dom 中 的#root 实例化成一个Vue对象
  2、将vuerouter传入 寻找 router-view 替换
 */


