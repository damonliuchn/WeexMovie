<template>

    <div>

        <text class="button" @click="test2()"> 跳转至messages页面{{test}}dd</text>

    </div>

</template>

<script>
    import mixins from '../mixins'
    //Vue.mixin(mixins)
    export default  {
        mixins:[mixins],
        data(){
            return {
                route:{}
            }
        },
        created () {
            this.route=this.$route;
        },
        computed: {
            test () {
                return this.$store.state.users
            }
        },
        methods:{
            test2() {
                this.$store.dispatch('FETCH_LIST_DATA', {type:1})
            }
        }
    };
</script>