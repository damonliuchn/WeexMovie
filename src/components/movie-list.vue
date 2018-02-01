<template>
    <!--<text class="button" @click="test2()"> 跳转至messages页面{{test}}dd</text>-->
    <!-- Flow  Float  Flayer  Flexbox  四种布局方式 -->
    <div class="g-flex-column">
        <div class="g-flex-full">
            <!--<div class="g-flayer g-flex-center" v-if="loading">-->
                <!--<text> loading ...</text>-->
            <!--</div>-->
            <list class="g-flex-full" @loadmore="loadMoreStories" loadmoreoffset="50">
                <cell v-for="movie in test" :key="movie.url" append="tree">
                    <movie :data="movie"></movie>
                </cell>
            </list>
        </div>
    </div>
</template>

<script>
    import mixins from '../mixins'
    import {mapGetters, mapActions} from 'vuex'
    import Movie from './movie.vue'
    import {buiImageSlider} from 'bui-weex';
    //Vue.mixin(mixins)
    //    var buiweex = require("bui-weex");
    export default  {
        mixins: [mixins],
        components: {
            Movie, buiImageSlider,
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
                loading: true
            }
        },
        created () {
            let self = this
            //Vue.set(this.store.state.users, 'aaa', 'testing');
            this.fetchList({type: this.videoType})
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
                //return this.store.state.users[this.videoType]
                var key = "type" + this.videoType
//                console.log("334total:" + key + "------" + this.store.state.users.aaa)
//                console.log("334total:" + key + "------" + this.store.state.users.type1.length)
                return this.store.state[key]
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

    .c-red {
        background-color: #FF66ff;
    }
</style>
