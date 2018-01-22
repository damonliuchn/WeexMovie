<template>
    <div>
        <bui-tabbar :tabItems="tabItems" showSelectedLine=true @change="onItemChange" v-model="currentTab"></bui-tabbar>
        <slider class="slider" @change="onSliderChange" :index="currentTab">
            <div>
                <list-movie/>
            </div>
            <div class="slider-item">
                <text class="h1">tab1</text>
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

    var buiweex = require("bui-weex");
    module.exports = {
        mixins:[mixins],
        data: function () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                currentTab:1,
                tabItems: [
                    {
                        title: "首页",
                        icon: "ion-home"
                    },
                    {
                        icon: "ion-planet",
                        title: "探索"
                    },
                    {
                        icon: "ion-ios-cart",
                        title: "商城"
                    },
                    {
                        icon: "ion-ribbon-a",
                        title: "奖励"
                    }
                ]
            }
        },
        components: {
            "bui-tabbar": buiweex.buiTabbar,
            "bui-tabbar-item": buiweex.buiTabbarItem,
            'bui-header': buiweex.buiHeader,
            'bui-icon': buiweex.buiIcon,
            'bui-button': buiweex.buiButton,
            'bui-image': buiweex.buiImage,
            'list-movie':Index2
        },
        methods: {
            back() {
                this.$pop();
            },
            onItemChange(index){

            },
            onSliderChange(e){
                var index = e.index;
                this.currentTab=index;
            }
        }
    }
</script>
