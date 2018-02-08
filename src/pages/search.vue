<template>
    <div>
        <bui-header backgroundColor="#ff9100" title="搜索">
            <div slot="left">
                <bui-icon name="ion-ios-arrow-back" color="#ffffff" @click="back"></bui-icon>
            </div>
        </bui-header>
        <bui-searchbar-center  @search="onSearch"></bui-searchbar-center>
        <search-result-list :keyWord="keyWord"/>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style>
    .slider {
        flex: 1;
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
            back(){
                this.router.back()
            },
            onSearch(value){
                this.keyWord = value
            }
        }
    }
</script>
