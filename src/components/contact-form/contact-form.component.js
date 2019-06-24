import PageTitle from '@/components/page-title/page-title.component.vue'

export default {
    name: 'ContactForm',
    props: {
    },
    components: {
        PageTitle
    },
    data() {
        return {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                subject: {
                    selected: 'Free Quote',
                    options: [
                        { value: 'Free Quote', text: 'Free Quote' },
                        { value: 'Project Enquiry', text: 'Project Enquiry' },
                        { value: 'Technical Support', text: 'Technical Support' },
                        { value: 'Complaint', text: 'Complaint' }
                    ]
                },
                message: ''
            }
        }
    }
}