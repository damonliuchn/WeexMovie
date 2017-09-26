// import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'
import {states} from './states'
Vue.use(Vuex)
// if (WXEnvironment.platform !== 'Web') {
//
// }
const store = new Vuex.Store({
    actions,
    mutations,
    getters,
    state:states//或者 把 states改为state
})

export default store
