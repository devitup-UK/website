import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

import PageTitle from '@/components/page-title/page-title.component.vue'
import FormError from '@/components/form-error/form-error.component.vue'
import axios from 'axios';

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
            var vm = this;
            var firstName = vm.data.firstName;
            var lastName = vm.data.lastName;
            var email = vm.data.email;
            var subject = vm.data.subject.selected;
            var message = vm.data.message;
            var password = process.env.VUE_APP_API_PASSWORD;

            vm.$v.data.$touch();

            if (vm.$v.data.$anyError) {
                return
            }

            axios.post(process.env.VUE_APP_API_URL + 'contact', {
                contact: {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    subject: subject,
                    message: message,
                },
                password: password
            })
            .then(() => {
                vm.resetForm();
                vm.$bvToast.toast('Your message has been submitted.', {
                    toaster: 'b-toaster-bottom-right',
                    title: 'Enquiry Submitted',
                    variant: 'success',
                    solid: true
                });
            })
            .catch(() => {
                vm.$bvToast.toast('There was a problem submitting your message.', {
                    toaster: 'b-toaster-bottom-right',
                    title: 'Error Occurred',
                    variant: 'danger',
                    solid: true
                });
            });
        }
    }
}