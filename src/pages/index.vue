<template>

    <div>

        <text class="button" @click="test2()"> {{aaa}}跳转至messages页面{{test}}dd</text>

        <div class="item"><full-calendar :events="fcEvents" locale="en"></full-calendar></div>

        <div class="block">
            <span class="demonstration">默认显示颜色</span>
            <span class="wrapper">
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
  </span>
        </div>
        <div class="block">
            <span class="demonstration">hover 显示颜色</span>
            <span class="wrapper">
    <el-button :plain="true" type="success">成功按钮</el-button>
    <el-button :plain="true" type="warning">警告按钮</el-button>
    <el-button :plain="true" type="danger">危险按钮</el-button>
    <el-button :plain="true" type="info">信息按钮</el-button>
  </span>
        </div>
    </div>

</template>

<script>
    var demoEvents = [
        {
            title : 'Sunny Out of Office',
            start : '2016-08-25',
            end : '2017-07-27'
        }
    ]
    import mixins from '../mixins'
    //Vue.component('full-calendar', fullCalendar)
    import Element from 'element-ui'
    Vue.use(Element)
    //Vue.mixin(mixins)
    export default  {
        mixins:[mixins],
        data(){
            return {
                route:{},
                fcEvents : demoEvents,
                aaa:"ssssss"
            }
        },
        created () {
            this.route=this.$route;
        },
        computed: {
            test () {
                return this.$store.state.users
            }
        },
        methods:{
            test2() {
                this.$store.dispatch('FETCH_LIST_DATA', {type:1})
            }
        },
//        components : {
//            'full-calendar': require('vue-fullcalendar')
//        }
    };
</script>

<style scoped>
    .item{
        flex:1;
        justify-content: center;
        align-items:flex-start;
    }
    .row{
        flex-direction: row;
        height:80px;
    }
</style>