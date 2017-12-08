<template>
  <div class="g-flex-row padding"  @click="test2()">
    <div class="g-flex-column g-flex-full" style="padding-right:10px;">
      <text class="title" >{{data.title}}</text>
      <text class="title" >{{data.year}}</text>
    </div>
    <image style="width:159px; height:231px;" v-bind:src="data.posters.thumbnail" placeholder="http://resizing.flixster.com/Q8IBqX3b-nhEAEYokJ_aH6jO6lE=/54x78/dkpu1ddg7pbsk.cloudfront.net/movie/10/94/13/10941373_ori.jpg"></image>
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
  .g-flex-row {
    display: flex;
    flex-direction: row;
  }
  .g-flex-column {
    display: flex;
    flex-direction: column;
  }
  .g-flayer {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .g-flex-center {
    flex:1;
    justify-content: center;/*针对子view 是行内元素才起作用*/
    align-items:center;/*针对子view 是行内元素才起作用*/
  }

  .padding {
    padding : 10;
  }

  .g-flex-full {
    flex:1;
  }

  .c-red {
    background-color: #FF66ff;
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
