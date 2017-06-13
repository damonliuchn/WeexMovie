<template>
    <div append="tree">
        <slider class="slider" interval="1000" auto-play="true" v-if="type === 'top'">
            <div v-for="banner in banners">
                <image class="slider_image" resize="cover" :src="banner.img"></image>
                <text class="slider_title">{{banner.title}}</text>
            </div>
            <indicator class="slider_indicator"></indicator>
        </slider>
        <list @loadmore="loadMoreStories" loadmoreoffset="10">
            <refresh class="loading" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
                <text class="loading_text">正在刷新...</text>
            </refresh>
            <cell class="cell" v-for="story in stories" append="tree">
                <NewsItem :story="story"></NewsItem>
            </cell>
            <loading class="loading" @loading="onloading" :display="loadingMore ? 'show' : 'hide'">
                <text class="loading_text">正在加载...</text>
            </loading>
        </list>
        <div class="loading" v-if="loading">
            <text class="loading_text">正在加载...</text>
        </div>
    </div>
</template>

<script>
  import NewsItem from '../components/NewsItem.vue'
  const modal = weex.require('modal')
  export default {
    components: { NewsItem },
    props: {
      type: {
        type: String,
        required: true,
        default: 'top'
      }
    },
    data () {
      return {
        loading: true,
        refreshing: false,
        loadingMore: false,
      }
    },

    computed: {
      stories () {
        return this.$store.state.lists[this.type]
      },
      banners () {
        return this.$store.state.banners
      },
    },

    methods: {
      fetchListData () {
        this.$store.dispatch('FETCH_LIST_DATA', {
          type: this.type
        }).then(() => {
          this.loading = false
          this.refreshing = false
        })
        if(this.type ==='top'){
            this.$store.dispatch('FETCH_BANNER_DATA', {})
        }
      },
      loadMoreStories () {
        this.loadingMore = true
        this.$store.dispatch('LOAD_MORE_ITEMS',{type: this.type}).then(() => {
          this.loadingMore = false
        })
      },
      onrefresh (event) {
        //modal.toast({ message: 'refresh', duration: 1 })
        this.refreshing = true
        this.fetchListData ()
        //setTimeout(() => {
         // this.refreshing = false
        //}, 2000)
      },
      onloading (event) {

      },
    },

    created () {
        this.loading = true
      this.fetchListData()
    }
  }
</script>

<style scoped>
  .slider {
    height: 250px;
    border-width: 1px;
    border-style: solid;
    border-color: #41B883;
  }

  .slider_image {
    height: 250px;
  }

  .slider_title {
    position: absolute;
    bottom: 0px;
    padding: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #FFFFFF;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .slider_indicator {
    height: 250px;
    item-color: green;
    item-selected-color: red;
    item-size: 50px;
  }

  .cell {
    margin-bottom: 3px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    background-color: #FFFFFF;
  }

  .loading {
    width: 100%;
    height: 120px;
    align-items: center;
    justify-content: center;
  }

  .loading_text {
    color: #888888;
    font-size: 34px;
  }
</style>
