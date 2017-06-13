// import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import StoriesView from './page/NewsList.vue'
import ArticleView from './page/NewsDetail.vue'
import Main from './page/Main.vue'

//????????
function createStoriesView(type) {
    return {
        name: `${type}-stories-view`,
        render (createElement) {
            return createElement(StoriesView, {props: {type}})
        }
    }
}

export default new Router({
    routes: [
        {path: '/main', component: Main},
        {path: '/top', component: createStoriesView('top')},
        {path: '/article/:url(.*)?', component: ArticleView},
        {path: '/', redirect: '/main'}
    ]
})
