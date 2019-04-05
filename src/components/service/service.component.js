import Service from '@/components/service/service.component.vue'

export default {
    name: 'service',
    props: {
        img: String,
        title: String,
        icon: Object
    },
    components: {
        Service
    }
}