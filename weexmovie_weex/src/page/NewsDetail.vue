<template>
    <div>
        <ActionBar></ActionBar>
        <web class="webview" :src="url"></web>
    </div>
</template>

<style scoped>
  .webview {
    flex: 1;
  }
  .fixed-button {
    position: absolute;
    bottom: 50px;
    right: 50px;
    background-color: #FC6621;
    border-radius: 10px;
    width: 120px;
    padding: 15px;
    color: white;
    text-align: center;
  }


</style>

<script>
  import ActionBar from '../components/ActionBar.vue'
  export default {
    components: { ActionBar },
    computed: {
      url () {
        if (this.$route && this.$route.params) {
          return this.$route.params.url
        }
        return 'https://www.alibaba.com/'
      }
    }
  }


</script>
