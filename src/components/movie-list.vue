<template>
    <!--<text class="button" @click="test2()"> 跳转至messages页面{{test}}dd</text>-->
    <!-- Flow  Float  Flayer  Flexbox  四种布局方式 -->
    <div class="g-flex-column g-flex-full">
        <div :class="classNameEmpty">
            <loadingaa/>
        </div>
        <!--<loading :class="classNameEmpty"/>-->
        <list :class="className0" @loadmore="loadMoreStories" loadmoreoffset="50">
            <cell v-for="movie in test" :key="movie.url" append="tree">
                <movie :data="movie"></movie>
            </cell>
        </list>
    </div>
</template>

<script>
    import mixins from '../mixins'
    import {mapGetters, mapActions} from 'vuex'
    import Movie from './movie.vue'
    import Loadingaa from './loading.vue'
    //import {buiImageSlider} from 'bui-weex';
    //Vue.mixin(mixins)
    //var buiweex = require("bui-weex");
    export default  {
        mixins: [mixins],
        components: {
            Movie,Loadingaa
//         "bui-tabbar": buiweex.buiTabbar
        },
        props: {
            videoType: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                loading: 1,
                myPage:1
            }
        },
        created () {
            let self = this
            //Vue.set(this.store.state.users, 'aaa', 'testing');
            this.fetchList({type: this.videoType,page:this.myPage})
            //监听一个getter
//            this.store.watch(
//                function (state) {
//                    return self.store.getters.getListData[this.videoType];
//                },
//                function (newData) {
//                    self.loading = false
//                },
//                {
//                    deep: true //add this if u need to watch object properties change etc.
//                }
//            );
            this.log('movie-list created done')
        },
        computed: {
            test () {
                var key = "type" + this.videoType
                if(this.loading == 1 && this.store.state[key].length >0 ){
                    this.loading = 0;
                }
                return this.store.state[key]
            },
            classNameEmpty () {
                return  this.loading==1 ? ['visible'] :['hidden']
            },
            className0 () {
                return  this.loading==0 ? ['visible'] :['hidden']
            },
//            ...mapGetters(
//                [
//                    'getListData'//this.store.state.users
//                ]
//            )
        },
        watch: {
            // 通过这种语法来watch就行，文档里有。。。看需求，还可以直接watch data，使用deep:true来深度观察
            "loading": {
                handler(val, oldVal) {

                },
                // 深度观察
                deep: true
            },
//            "test": {
//                handler(val, oldVal) {
//                    console.log('dddddd')
//                },
//                // 深度观察
//                deep: true
//            },
//            "getListData": {
//                handler(val, oldVal) {
//                    console.log('dddddd')
//                },
//                // 深度观察
//                deep: true
//            }
        },
        methods: {
            loadMoreStories() {
                this.log("loadMoreStories")
                this.myPage = this.myPage +1;
                this.fetchList({type: this.videoType,page:this.myPage})
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

    .g-flex-column {
        display: flex;
        flex-direction: column;
    }

    .g-flayer {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .g-flex-center {
        flex: 1;
        justify-content: center; /*针对子view 是行内元素才起作用*/
        align-items: center; /*针对子view 是行内元素才起作用*/
    }

    .g-flex-full {
        flex: 1;
    }

    .hidden{  visibility:hidden ;height: 1px;}

    .visible {  visibility:visible;}

    .c-red {
        background-color: #FF66ff;
    }
</style>
