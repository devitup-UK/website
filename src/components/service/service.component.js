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
        }
    }
}