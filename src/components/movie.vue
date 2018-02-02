<template>
    <!--<div class="g-flex-row padding" @click="test2()">-->
        <!--<div class="g-flex-column g-flex-full" style="padding-right:10px;">-->
            <!--<text class="title">{{data.title}}</text>-->
            <!--<text class="title">{{data.zhuyan}}</text>-->
        <!--</div>-->
        <!--<image style="width:159px; height:231px;" v-bind:src="data.img"-->
               <!--placeholder="http://resizing.flixster.com/Q8IBqX3b-nhEAEYokJ_aH6jO6lE=/54x78/dkpu1ddg7pbsk.cloudfront.net/movie/10/94/13/10941373_ori.jpg"></image>-->
    <!--</div>-->
    <div class="root" @click="test2()">
        <div class="row card">
            <div class="card-side">
                <image class="card-poster" v-bind:src="data.img"
                       placeholder="http://resizing.flixster.com/Q8IBqX3b-nhEAEYokJ_aH6jO6lE=/54x78/dkpu1ddg7pbsk.cloudfront.net/movie/10/94/13/10941373_ori.jpg"></image>

            </div>
            <div class="card-message">
                <text class="card-subtitle">{{data.title}}</text>

                <div class="card-line row">
                    <image class="card-icon" src="//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"></image>
                    <text class="card-title">{{data.zhuyan}}</text>
                </div>

                <div class="card-progress row">
                    <!--<div class="card-progress-inner" style="{ width: 200px }"></div>-->
                    <text class="card-got">{{data.score}}</text>
                </div>
                <div class="card-btn">
                    <text class="card-btn-text">{{data.status}}</text>
                </div>
            </div>
        </div>
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
        flex: 1;
        justify-content: center; /*针对子view 是行内元素才起作用*/
        align-items: center; /*针对子view 是行内元素才起作用*/
    }

    .padding {
        padding: 10px;
    }

    .g-flex-full {
        flex: 1;
    }

    .root {
        background-color: #E7E8EA;
    }

    .list {
        width: 750px;
        background-color: #EFEFEF;
    }
    .row {
        flex-direction: row;
    }

    .tab-cell {
        justify-content: stretch;
        background-color: #f51438;
    }
    .tab {
        height: 120px;
        width: 150px;
        justify-content: center;
        align-items: center;
    }
    .tab-icon {
        width: 45px;
        height: 45px;
    }
    .tab-title {
        font-size: 28px;
        color: #FFF;
        margin-top: 10px;
    }

    .banner-image {
        width: 750px;
        height: 235px;
    }

    .app-cell { background-color: #FFF; }
    .card-message {
        margin-top:10px;
        margin-bottom:10px;
        margin-right:10px;
    }
    .app-title {
        width: 180px;
        font-size: 30px;
        text-align: center;
        padding-top: 15px;
        color: #999999;
    }
    .app-icon {
        width: 140px;
        height: 140px;
        margin-left: 20px;
    }

    .card {
        width: 740px;
        margin-left: 5px;
        margin-top:5px;
        margin-bottom:0px;
        margin-right: 5px;
        background-color: #FFFFFF;
        border-radius: 0px;
        padding-right: 5px;
    }
    .card-banner {
        width: 222px;
        height: 60px;
    }
    .card-side {
        padding: 10px;
    }
    .card-poster {
        width: 230px;
        height: 230px;
        margin-right: 20px;
    }
    .card-title {
        font-size: 26px;
        color: #666666;
        margin-top: 10px;
        max-width: 400px;
        padding-bottom: 6px;
    }
    .card-line {
        align-items: center;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .card-icon {
        width: 36px;
        height: 36px;
        margin-right: 8px;
    }
    .card-subtitle {
        font-size: 28px;
        color: #07152a;
    }
    .card-progress {
        flex-direction: row;
        align-items: center;
        width: 100px;
        height: 30px;
        background-color: #FEC1C1;
        border-radius: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .card-progress-inner {
        position: absolute;
        height: 30px;
        left: 0;
        border-radius: 20px;
        background-color: #ff3c32;
    }
    .card-got {
        position: absolute;
        left: 8px;
        line-height: 30px;
        color: #FFFFFF;
        font-size: 22px
    }
    .card-remain {
        position: absolute;
        right: 8px;
        line-height: 30px;
        color: #FFFFFF;
        font-size: 22px;
    }
    .card-info {
        width: 400px;
        flex-direction: row;
        align-items: flex-end;
    }
    .card-price {
        font-size: 52px;
        color: #ff3c32;
        margin-bottom: -10px;
        margin-top: 10px;
        margin-right: 8px;
    }
    .card-sale-price {
        font-size: 28px;
        color: #999999;
        text-decoration: line-through;
    }
    .card-btn {
        background-color: #ff5d62;
        border-radius: 8px;
        width: 100px;
        height: 48px;
        justify-content: center;
    }
    .card-btn-text {
        color: #FFFFFF;
        font-size: 26px;
        text-align: center;
    }

    .floor {
        margin-bottom: 15px;
        background-color: #FFF;
    }
    .floor-title {
        font-size: 40px;
        text-align: center;
        padding-top: 35px;
        padding-bottom: 25px;
    }
    .floor-desc {
        lines: 2;
        color: #999;
        font-size: 30px;
        padding-left: 30px;
        padding-right: 30px;
    }
    .floor-image-box {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;
    }
    .floor-image {
        width: 245px;
        height: 245px;
    }
    .floor-comment {
        color: #52bfe6;
        font-size: 32px;
        text-align: right;
        padding-right: 50px;
        margin-top: 25px;
        margin-bottom: 20px;
    }
</style>

<script>

    import mixins from '../mixins'
    export default {
        mixins: [mixins],
        props: {
            data: {
                type: Object,
                required: true
            },
            'no-comment': {
                type: [String, Boolean],
                default: false
            }
        }, created () {

        },
        methods: {
            test2() {
                this.nativeAction('/activity/movieDetail?url=' + this.data.url)
            }
        }
    }
</script>
