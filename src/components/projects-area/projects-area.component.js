import Project from '../project/project.component.vue'

export default {
    name: 'projects-area',
    props: {
        projects: Array
    },
    components: {
        Project
    }
}