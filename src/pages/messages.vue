

<template>

    <div>

        <text class="button" @click="goback()">返回</text>

        <text>messages页面{}}</text>

    </div>

</template>

<script>
    import mixins from '../mixins'
    module.exports = {
        mixins:[mixins],
        data(){
            return {
                route:{}
            }
        },
        created: function () {
            this.route=this.$route;
        },
        methods:{
            goback() {
                this.$router.back()
            }
        }
    };
</script>