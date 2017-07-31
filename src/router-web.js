/**
 * Created by ebi on 2017/2/8.
 */
import index from './pages/index.vue'
import messages from './pages/messages.vue'
import a from './pages/calendar.vue'
import chart from './pages/chart.vue'
export default [
    { path: '/', component: chart },
    { path: '/messages', component: messages }
];