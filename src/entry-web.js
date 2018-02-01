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

/**
 * 创建vue实例 挂载到html的dom上， 在native环境下，这一步是weex sdk 和 native代码做的 创建Vue实例 挂载到Native activity上
 * html 和 native activity相类似  是一个容器
 */
new Vue({el: '#root', router});
