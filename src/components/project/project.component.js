export default {
    name: 'project',
    props: {
        title: String,
        content: String,
        img: String
    },
    methods: {
        getBackgroundImage() {
            return 'background-image: url(\'' + this.img + '\')';
        }
    }
}