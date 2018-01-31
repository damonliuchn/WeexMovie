<template>
    <div>
        <bui-header backgroundColor="#ff9100" title="面包影视">
            <div slot="right">
                <bui-icon name="ion-ios-search-strong" color="#ffffff" @click="back2"></bui-icon>
            </div>
        </bui-header>
        <slider class="slider" @change="onSliderChange" :index="currentTab">
            <div>
                <home/>
            </div>
            <!--<div class="slider-item">-->
            <!--<text class="h1">tab1</text>-->
            <!--</div>-->
            <!--<div class="slider-item">-->
            <!--<text class="h1">tab2</text>-->
            <!--</div>-->
        </slider>
        <!--<bui-tabbar :tabItems="tabItems" selectedBackground="#F77845" selectedColor="#ffffff" @change="onItemChange" v-model="currentTab"></bui-tabbar>-->
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style>
    .slider {
        flex: 1;
    }

    .slider-item {
        width: 750px;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
    import Home from '../components/home.vue'
    //    import buiweex from "bui-weex";
    import mixins from '../mixins'
    import pageMixins from '../mixins/page-mixins'
    export default {
        mixins: [mixins, pageMixins],
        data: function () {
            return {
                backTimestamp: 0,
                state: '----',
                rightItem: {
                    icon: 'ion-ios-search-strong',
                    text: '更多'
                },
                currentTab: 0,
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
        created() {
            this.storage.getItem('name', event => {
                console.log('get value:', event.data)
                this.state = 'value: ' + event.data
            })

            this.globalEvent.removeEventListener("androidback")
            this.globalEvent.addEventListener("androidback", e => {
                if ((new Date().getTime() - this.backTimestamp) > 2000) {
                    this.modal.toast({
                        message: '再按一次退出',
                        duration: 0.3
                    })
                    this.backTimestamp = new Date().getTime();
                } else {
                    this.router.back()
                }
            });
        },
        components: {
//            "bui-tabbar": buiweex.buiTabbar,
//            "bui-tabbar-item": buiweex.buiTabbarItem,
//            'bui-header': buiweex.buiHeader,
//            'bui-icon': buiweex.buiIcon,
//            'bui-button': buiweex.buiButton,
//            'bui-image': buiweex.buiImage,
            'home': Home
        },
        methods: {
            back2() {
                this.modal.toast({
                    message: 'This is a toast',
                    duration: 0.3
                })
            },
            onItemChange(index){

            },
            onSliderChange(e){
                var index = e.index;
                this.currentTab = index;
            }
        }
    }
</script>
