// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import {sync} from 'vuex-router-sync'
import * as filters from './filters'
import mixins from './mixins'

// sync the router with the vuex vuex.
// this registers `vuex.state.route`
sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// register global mixins.
Vue.mixin(mixins)

// create the app instance.
// here we inject the router and vuex to all child components,
// making them available everywhere as `this.$router` and `this.$vuex`.
new Vue(Vue.util.extend({el: '#root', router, store}, App))//??????????????????

router.push('/')
