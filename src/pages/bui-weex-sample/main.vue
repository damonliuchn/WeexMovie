<template>
    <div>
        <bui-header title="选项卡(bui-tabbar)" :leftItem="leftItem" @leftClick="back"></bui-header>
        <slider class="slider" @change="onSliderChange" :index="currentTab">
            <div>
                <home />
            </div>
            <div class="slider-item">
                <text class="h1">tab1</text>
            </div>
            <div class="slider-item">
                <text class="h1">tab2</text>
            </div>
        </slider>
        <bui-tabbar :tabItems="tabItems" selectedBackground="#F77845" selectedColor="#ffffff" @change="onItemChange" v-model="currentTab"></bui-tabbar>
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
    var buiweex = require("bui-weex");
    import Home from './tabbar-demo.vue'
    module.exports = {
        data: function () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                currentTab:0,
                tabItems: [
                    {
                        title: "首页",
                        icon: "ion-home"
                    },
                    {
                        icon: "ion-planet",
                        title: "专题"
                    },
                    {
                        icon: "ion-ios-cart",
                        title: "我的"
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
            'home':Home
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
