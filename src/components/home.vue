<template>
    <div>
        <bui-tabbar selectedColor="#ff9100" borderBottomColor="#ff9100" :tabItems="tabItems" showSelectedLine=true
                    @change="onItemChange" v-model="currentTab"></bui-tabbar>

            <div :class="classNameEmpty">
                <loadingaa/>
            </div>
        <movie-list :class="className0" :videoType="1"/>
        <movie-list :class="className1" :videoType="2"/>
        <movie-list :class="className2" :videoType="4"/>
        <movie-list :class="className3" :videoType="7"/>
            <!--<div :class="className0">-->
                <!--<movie-list :class="className0" :videoType="1"/>-->
            <!--</div>-->
            <!--<div :class="className1">-->
                <!--<movie-list :class="className1" :videoType="2"/>-->
            <!--</div>-->
            <!--<div :class="className2">-->
                <!--<movie-list :class="className2" :videoType="3"/>-->
            <!--</div>-->
            <!--<div :class="className3">-->
                <!--<movie-list :class="className3" :videoType="4"/>-->
            <!--</div>-->
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style>
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

    .slider {  visibility:visible;}

    .slider-item {
        width: 750px;
        justify-content: center;
        align-items: center;
    }

    .hidden{  visibility:hidden ;height: 1px;}
</style>
<script>
    import mixins from '../mixins'
    import MovieList from './movie-list.vue'
    import Loadingaa from './loading.vue'
    //    var buiweex = require("bui-weex");
    module.exports = {
        mixins: [mixins],
        data: function () {
            return {
                rootClass: 'slide',
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                currentTab: -1,
                tabItems: [
                    {
                        title: "电影"
                    },
                    {
                        title: "电视剧"
                    },
                    {
                        title: "综艺"
                    },
                    {
                        title: "动漫"
                    }
                ]
            }
        },
        components: {
//            "bui-tabbar": buiweex.buiTabbar,
//            "bui-tabbar-item": buiweex.buiTabbarItem,
//            'bui-header': buiweex.buiHeader,
//            'bui-icon': buiweex.buiIcon,
//            'bui-button': buiweex.buiButton,
//            'bui-image': buiweex.buiImage,
            'movie-list': MovieList,Loadingaa
        },
        created() {
            this.log('home created done')
            setTimeout(() => {
                this.currentTab=0
            }, 500);
        },

        computed: {
            classNameEmpty () {
                return  this.currentTab==-1   ? ['slider'] :['hidden']
            },
            className0 () {
                return  this.currentTab==0   ? ['slider'] :['hidden']
            },
            className1 () {
                return  this.currentTab==1 ? ['slider'] :['hidden']
            },
            className2 () {
                return  this.currentTab==2 ? ['slider'] :['hidden']
            },
            className3 () {
                return  this.currentTab==3 ? ['slider'] :['hidden']
            }
        },
        methods: {
            back() {
                this.$pop();
            },
            onItemChange(index){
                this.currentTab = index;

            },
            onSliderChange(e){
                this.currentTab = e.index;
            }
        }
    }
</script>
