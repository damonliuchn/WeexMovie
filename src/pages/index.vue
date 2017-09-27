<template>
        <!--<text class="button" @click="test2()"> 跳转至messages页面{{test}}dd</text>-->
    <div class="stories-view">
        <app-header></app-header>
        <!--<list class="story-list" @loadmore="loadMoreStories" loadmoreoffset="50">-->
            <!--<cell class="story-cell" v-for="movie in getListData.movies.abridged_cast" :key="movie.id" append="tree">-->
                <!--&lt;!&ndash;<story :story="story"></story>&ndash;&gt;-->
            <!--</cell>-->
        <!--</list>-->

        <text class="button" @click="test2()"> 跳转至messages页面{{ss}}dd</text>

        <div class="loading">
            <text class="loading-text">loading ...</text>
        </div>
    </div>
</template>

<script>
    import mixins from '../mixins'
    //Vue.mixin(mixins)
    import vuex from "../vuex/vuex"
    import { mapGetters, mapActions } from 'vuex'
    import AppHeader from '../components/app-header.vue'
    export default  {
        components: { AppHeader},
        mixins:[mixins],
        data(){
            return {
                loading:true,
                ss:"ssssss"
            }
        },
        created () {
            this.route2 = this.$store.state.users;
            this.route3 = this.$store.state;
            this.test2()

            this.$store.watch(
                function (state) {
                    return state.users;
                },
                function (newData) {
                    console.log("sseeeeeeeeeeeeeeeeeeeeee555e"+ newData.total)
                },
                {
                    deep: true //add this if u need to watch object properties change etc.
                }
            );
        },
        computed: {
            test () {
                return this.$store.state.users
            },
            test3 () {
                return vuex.state.users
            },
            ...mapGetters([
                'getListData'//this.$store.state.users
            ])
        },
        watch:{
            // 通过这种语法来watch就行，文档里有。。。看需求，还可以直接watch data，使用deep:true来深度观察
            "test3" :{
                handler(val,oldVal) {
                    console.log("sseeeeeeeeeeeeeeeeeeee"+val.total)
//                    this.loading = false
                    this.ss = "eeeeerr333333"
                },
                // 深度观察
                deep:true
            }
        },
        methods:{
            loadMoreStories() {

            },
            test2() {
                this.fetchList({type:1})//this.$store.dispatch('FETCH_LIST_DATA', {type:1})
            },
            ...mapActions([
                'fetchList'
            ])
        }
    };
</script>

<style scoped>
    .stories-view {
        display: flex;
        flex-direction: column;
    }
    .story-cell {
        margin-bottom: 3px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #DDDDDD;
        background-color: #FFFFFF;
    }
    .loading {
        width: 750px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loading-text {
        margin: auto;
        text-align: center;
        font-size: 40px;
        color: #BBB;
    }
</style>
