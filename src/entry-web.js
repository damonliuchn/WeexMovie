/**
 * 导入weex,使得全局js文件可以使用 weex对象 和  vue对象
 * native 环境下自动导入 weex对象 和  vue对象
 */
import "weex-vue-render"
/**
 * 导入vue-router，仅web环境可用
 */
import VueRouter from 'vue-router'
import routes from './router-web'
Vue.use(VueRouter);

const router = new VueRouter({
    //mode: 'hash',
    routes
});
new Vue({el: '#root', router});
