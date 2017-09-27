<template>
        <!--<text class="button" @click="test2()"> 跳转至messages页面{{test}}dd</text>-->
    <!-- Flow  Float  Flayer  Flexbox  四种布局方式 -->
    <div>
        <app-header></app-header>
        <div>
            <div class="v-frayer">
                <text class="loading-text">loading ...</text>
            </div>

            <list class="story-list" @loadmore="loadMoreStories" loadmoreoffset="50">
                <cell class="story-cell" v-for="movie in getListData.movies" :key="movie.id" append="tree">
                    <!--<story :story="story"></story>-->
                    <text class="title">{{movie.title}}</text>
                </cell>
            </list>
        </div>


        <div class="g-flex-row">
            <text class="button" @click="test2()"> aaa</text>
            <text class="button" @click="test2()"> aaa</text>
        </div>
        <div>
            <text class="button" @click="test2()"> bbb</text>
            <text class="button" @click="test2()"> bbb</text>
        </div>
        <!--<text class="button" @click="test2()"> 跳转至messages页面dd</text>-->


    </div>
</template>

<script>
    import mixins from '../mixins'
    //Vue.mixin(mixins)
    import { mapGetters, mapActions } from 'vuex'
    import AppHeader from '../components/app-header.vue'
    export default  {
        components: { AppHeader},
        mixins:[mixins],
        data(){
            return {
                loading:true
            }
        },
        created () {
            let self = this
            this.fetchList({type:1})
            this.$store.watch(
                function (state) {
                    return self.$store.getters.getListData;
                },
                function (newData) {
                    self.loading = false
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
            ...mapGetters(
                [
                'getListData'//this.$store.state.users
            ]
    )
        },
        watch:{
            // 通过这种语法来watch就行，文档里有。。。看需求，还可以直接watch data，使用deep:true来深度观察
            "loading" :{
                handler(val,oldVal) {

                },
                // 深度观察
                deep:true
            }
        },
        methods:{
            loadMoreStories() {

            },
            ...mapActions([
                'fetchList'
            ])
        }
    };
</script>

<style scoped>
    .g-flex-row {
        display: flex;
        flex-direction: row;
    }
    .v-frayer {
        position: absolute;
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
