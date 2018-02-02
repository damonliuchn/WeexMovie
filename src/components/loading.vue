<template>
    <div class="g-flex-column g-flex-center">
        <!--<wxc-loading :show="isShow" type="default"></wxc-loading>-->
        <wxc-part-loading class="v-flex-full" :style='margintTop' :show="isShow" :width="width" :height="height"></wxc-part-loading>
        <!--<text>ssssssss</text>-->
    </div>
</template>
<script>
    import { WxcLoading, WxcPartLoading } from 'weex-ui';
    import mixins from '../mixins'
    export default {
        mixins: [mixins],
        components: { WxcLoading, WxcPartLoading },
        data(){
            return {
                isShow: true,
                width: 80,
                height: 80,
                marginTopData: {
                    marginTop: '0px'
                }
            }
        },
        computed: {
            margintTop () {
                this.marginTopData.marginTop = this.heightCenter() + 'px'
                return this.marginTopData
            },
        },
        methods: {
            heightCenter() {
                var height = 750 / this.$getConfig().env.deviceWidth * this.$getConfig().env.deviceHeight;
                return height/3;
            }
        }
    }
</script>
<style scoped>
    .g-flex-row {
        /*display: flex;*/
        flex-direction: row;
    }

    .g-flex-column {
        /*display: flex;*/
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
        /*flex: 1;*/
        justify-content: center; /*针对子view 是行内元素才起作用*/
        align-items: center; /*针对子view 是行内元素才起作用*/
    }

    .v-flex-full {
        flex: 1;
    }

    .hidden{  visibility:hidden ;height: 1px;}

    .visible {  visibility:visible;}

    .c-red {
        background-color: #FF66ff;
    }
</style>