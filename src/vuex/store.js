// import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
Vue.use(Vuex)
// if (WXEnvironment.platform !== 'Web') {
//
//  }
console.log("sssssssssssssssssssssss")
const store = new Vuex.Store({
    actions,
    mutations,

    state: {
        activeType: null,
        test:34,
        users: {},
        counts: {
            top: 20,
            new: 20,
            show: 15,
            ask: 15,
            job: 15
        },
        lists: {
            top: [],
            new: [],
            show: [],
            ask: [],
            job: []
        },
        pageOne: true,
        items: [],
        banners: []
    },

    getters: {
        // ids of the items that should be currently displayed based on
        // current list type and current pagination
        activeIds (state) {
            const {activeType, lists, counts} = state
            return activeType ? lists[activeType].slice(0, counts[activeType]) : []
        },

        // items that should be currently displayed.
        // this Array may not be fully fetched.
        activeItems (state, getters) {
            return getters.activeIds.map(id => state.items[id]).filter(_ => _)
        }
    }
})

export default store
