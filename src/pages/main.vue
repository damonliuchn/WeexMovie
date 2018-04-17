<template>
    <div>
        <div class="header">
            <text class="header-title">地瓜影视</text>
            <div class="header-search-box" @click="search">
                <bui-icon @click="search" name="ion-ios-search-strong" color="#ffffff" ></bui-icon>
            </div>
            <div class="header-box" @click="share">
                <text class="header-subtitle">分享</text>
            </div>
        </div>
        <slider class="slider" @change="onSliderChange" :index="currentTab">
            <div :class="className0">
                <home/>
            </div>
            <div :class="className1">
                <!--<movie-list  :videoType="1"/>-->
                <home/>
            </div>
            <div class="slider-item">
                <text class="h1">功能开发中，敬请期待</text>
            </div>
        </slider>
        <bui-tabbar :tabItems="tabItems" selectedBackground="#F77845" selectedColor="#ffffff" @change="onItemChange" v-model="currentTab"></bui-tabbar>
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

    .g-flex-row {
        display: flex;
        flex-direction: row;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-between;
        height: 100px;
        background-color: #ff9100;
    }

    .header-title {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 38px;
        color: #FFFFFF;
        margin-left: 30px;
        margin-right: 30px;
    }

    .header-subtitle {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 32px;
        color: #FFFFFF;
    }

    .header-box {
        justify-content: center;
        align-items: center;
        width: 140px;
        height: 100px;
    }

    .header-search-box {
        width: 400px;
        height: 70px;
        justify-content: center;
        align-items: center;
        background-color: #c66200;
        border-radius: 15px;
    }

    .visible {  visibility:visible;}

    .hidden{  visibility:hidden ;height: 1px;}
</style>
<script>
    import Home from '../components/home.vue'
    import MovieList from '../components/movie-list.vue'
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
                        title: "最热",
                        icon: "ion-flame"
                    },
                    {
                        icon: "ion-ios-timer",
                        title: "最新"
                    },
                    {
                        icon: "ion-ios-contact",
                        title: "我的"
                    }
                ]
            }
        },
        computed: {
            className0 () {
                return  this.currentTab==0   ? ['visible'] :['hidden']
            },
            className1 () {
                return  this.currentTab==1 ? ['visible'] :['hidden']
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
            //检测升级
            this.handle('/provider/upgrade')
        },
        components: {
// "bui-tabbar": buiweex.buiTabbar,
// "bui-tabbar-item": buiweex.buiTabbarItem,
// 'bui-header': buiweex.buiHeader,
// 'bui-icon': buiweex.buiIcon,
// 'bui-button': buiweex.buiButton,
// 'bui-image': buiweex.buiImage,
            'movie-list': MovieList,
            'home': Home
        },
        methods: {
            search() {
                this.router.push("/search")
            },
            share() {
                this.handle('/provider/share')
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