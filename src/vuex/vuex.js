import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'
import {states} from './states'
Vue.use(Vuex)//在浏览器环境中，Vuex 是会自动注册的，只需要引入库文件就行了,不过重复注册也不会有问题
const store = new Vuex.Store({
    actions,
    mutations,
    getters,
    state: states//或者 把 states改为state
})
export default store
