const globalEvent = weex.requireModule('globalEvent');
export default {
    created() {
        this.globalEvent = globalEvent;
        this.globalEvent.addEventListener("androidback", e => {
            this.router.back()
        });
    },
    methods: {}
}
