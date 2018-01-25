<template>
    <div>
        <bui-tabbar selectedColor="#ff9100" borderBottomColor="#ff9100" :tabItems="tabItems" showSelectedLine=true @change="onItemChange" v-model="currentTab"></bui-tabbar>
        <slider class="slider" @change="onSliderChange" :index="currentTab">
            <div>
                <list-movie/>
            </div>
            <div class="slider-item">
                <bui-image src="/image/logo.png" width="244px" height="172px"></bui-image>
            </div>
            <div class="slider-item">
                <text class="h1">tab2</text>
            </div>
            <div class="slider-item">
                <text class="h1">tab3</text>
            </div>
        </slider>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style>
    .slider{
        flex:1;
    }
    .slider-item{
        width: 750px;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
    import mixins from '../mixins'
    import Index2 from './movie-list.vue'

//    var buiweex = require("bui-weex");
    module.exports = {
        mixins:[mixins],
        data: function () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                currentTab:0,
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
            'list-movie':Index2
        },
        methods: {
            back() {
                this.$pop();
            },
            onItemChange(index){

            },
            onSliderChange(e){
                this.currentTab=e.index;
            }
        }
    }
</script>
