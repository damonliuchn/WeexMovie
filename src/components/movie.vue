<template>
  <div class="cell-item">
    <text class="title" @click="test2()">{{data.title}}</text>
    <image style="width:106px; height:154px;" v-bind:src="data.posters.thumbnail"></image>
  </div>
</template>

<style scoped>
  .cell-item {
    height: 200px;
  }
  .title {
    font-size: 32px;
    font-weight: bold;
    color: #FF6600;
  }
</style>

<script>

  export default {
    props: {
      data: {
        type: Object,
        required: true
      },
      'no-comment': {
        type: [String, Boolean],
        default: false
      }
    },
      methods:{
          test2() {
              this.$router.push("/messages")
          }
      }
  }
</script>
