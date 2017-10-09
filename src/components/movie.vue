<template>
  <div class="cell-item">
    <text class="story-score">{{data.title}}</text>

    <image class="image" src="data.posters.thumbnail"></image>
  </div>
</template>

<style scoped>
  .cell-item {
    position: relative;
    padding-top: 20px;
    padding-bottom: 25px;
    padding-left: 100px;
    padding-right: 40px;
  }
  .story-score {
    position: absolute;
    width: 100px;
    text-align: center;
    left: 0;
    top: 20px;
    font-size: 32px;
    font-weight: bold;
    color: #FF6600;
  }
  .story-link {
    margin-bottom: 25px;
    width: 610px;
  }
  .story-title {
    font-size: 33px;
    color: #404040;
  }
  .small-text {
    color: #BBB;
    font-size: 22px;
    margin-bottom: 0;
    font-family: Verdana, Geneva, sans-serif;
  }
  .link-text {
    /*color: red;*/
    text-decoration: underline;
  }
  .text-group {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .text-cell {
    flex-grow: 0;
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
    }
  }
</script>
