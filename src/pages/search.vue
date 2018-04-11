<template>
    <div>
        <div class="header">
            <div class="g-flex-row g-flex-center">
                <div class="header-box" @click="back">
                    <bui-icon name="ion-android-arrow-back" color="#ffffff" @click="back"></bui-icon>
                </div>
                <text class="header-title">搜索</text>
            </div>
            <div style="width=1px">
            </div>
            <div class="header-box" @click="share">
                <text class="header-subtitle">分享</text>
            </div>
        </div>
        <bui-searchbar-center @search="onSearch"></bui-searchbar-center>
        <search-result-list :keyWord="keyWord"/>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style>
    .slider {
        flex: 1;
    }
    .g-flex-center {
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
        margin-left: 0px;
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
        width: 100px;
        height: 100px;
    }
</style>
<script>
    import SearchResultList from '../components/search-result-list.vue'
    import mixins from '../mixins'
    import pageMixins from '../mixins/page-mixins'
    export default {
        mixins: [mixins, pageMixins],
        data: function () {
            return {
                keyWord: ""
            }
        },
        created() {
        },
        components: {
            SearchResultList
        },
        methods: {
            share() {
                this.handle('/provider/share')
            },
            back(){
                this.router.back()
            },
            onSearch(value){
                this.keyWord = value
            }
        }
    }
</script>
