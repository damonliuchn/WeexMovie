<template>
    <div>
        <ActionBar></ActionBar>
        <div class="tabbar">
            <text class="tab_text" @click="selectOne">推荐</text>
            <text class="tab_text" @click="selectTwo">会议</text>
        </div>
        <div>
            <NewsList type="top" v-if="pageOne" key="1"></NewsList>
            <NewsList type="new" v-else key="2"></NewsList>
        </div>
    </div>
</template>
<style>
.tabbar{
	flex-direction: row;
	height:88;
	align-items: center;
}
.tab_text{
	flex:1;
	text-align:center;
}
</style>

<script>
    import ActionBar from '../components/ActionBar.vue'
    import NewsList from './NewsList.vue'
    export default {
        components: { NewsList,ActionBar },
        data () {
          return {
            pageOne: true
          }
        },
        methods: {
          selectOne () {
            this.pageOne = true;
          },
          selectTwo () {
            this.pageOne = false;
          }
        }
    }


</script>