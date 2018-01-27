

<template>

    <div>


        <text>启动页面{{}}</text>


        <text class="button" @click="goMain()">去主页le</text>
        <bui-image src="/image/logo.png" width="244px" height="172px"></bui-image>

    </div>

</template>

<script>
    import mixins from '../mixins'
    export default {
        mixins:[mixins],
        data(){
            return {
                state:''
            }
        },
        created: function () {
            //var bundleUrl = this.$getConfig().bundleUrl;
            //bundleUrl = new String(bundleUrl);



//            storage.setItem('name', 'Hanks', event => {
//                this.state = 'set success'
//                console.log('set success')
//            })
//
//
//            storage.getItem('name', event => {
//                console.log('get value:', event.data)
//                this.state = 'value: ' + event.data
//
//                modal.toast({
//                    message: 'This is a toast'+this.state,
//                    duration: 0.3
//                })
//            })

            setTimeout(() =>{
                this.goMain()
            }, 500);

        },
        mounted () {
            this.globalEvent.removeEventListener("androidback")
        },
        methods:{
            goback() {
                this.router.back()
            },
            goMain(){
                this.router.back()
                this.router.push('/main')
            }
        }
    };
</script>