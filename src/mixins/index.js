/**
 * Created by ebi on 2017/1/23.
 */

// import weexVueRouter from 'weex-vue-router'
// import routes from '../router-native'//web端的路由在web-router里定义，在app.js里引用
// Vue.use(weexVueRouter,{routes,weex});
import store from '../vuex/store'

export default {
    data() {
        return {
            rpx: 1,
            apiDomain:'dddd',
        }
    },
    created() {

        this.$store = store;//需要手动放进来
    },
    methods: {

    }
}
