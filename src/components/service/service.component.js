import VueFlipcard from 'vue-flipcard';

export default {
    name: 'service',
    props: {
        img: String,
        title: String,
        icon: Object
    },
    components: {
        VueFlipcard
    },
    methods: {
        manualFlip() {
            this.$refs.flipcard.flip();
        },
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        }
    }
}