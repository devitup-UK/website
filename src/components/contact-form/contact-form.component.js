import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

import PageTitle from '@/components/page-title/page-title.component.vue'
import FormError from '@/components/form-error/form-error.component.vue'

export default {
    name: 'ContactForm',
    props: {
    },
    components: {
        PageTitle,
        FormError
    },
    mixins: [validationMixin],
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
    },
    validations: {
        data: {
            firstName: {
                required,
                minLength: minLength(3)
            },
            email: {
                required,
                email
            },
            subject: {
                required
            },
            message: {
                required,
                minLength: minLength(20)
            }
        }
    },
    methods: {
        resetForm() {
            this.$v.$reset();
            this.data.firstName = '';
            this.data.lastName = '';
            this.data.email = '';
            this.data.subject.selected = this.data.subject.options[0].value;
            this.data.message = '';
        },
        onSubmit() {
            this.$v.data.$touch()
            if (this.$v.data.$anyError) {
                return
            }

            this.resetForm();
            this.$bvToast.toast('Your message has been submitted.', {
                toaster: 'b-toaster-bottom-right',
                title: 'Enquiry Submitted',
                variant: 'success',
                solid: true
            })
        }
    }
}