<template>
    <div class="flex lg:flex-row flex-col items-center justify-between max-w-[1280px] m-auto lg:p-10 pb-0">
        <nuxt-img
            class="w-[483px]" 
            src="/icons/contact-img.svg" 
            alt="contact"
            loading="lazy"
            decoding="async"
            format="webp" quality="80"
        />
        <div class="max-w-[656px] p-6 lg:p-8 bg-primary-900 w-full rounded-2xl">
            <div class="text-white mb-6">
                <p class="font-semibold text-3xl mb-3">{{title}}</p>
                <p>{{ description }}</p>
            </div>
            <form @submit.prevent="submit" class="hm-contact grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                    <inputs-selector
                        :options="solutions"
                        label="Interested Solutions"
                        placeholder="Select solutions here"
                        id="solution"
                        name="solution"
                        v-model="form.solution"
                        :error="errors.solution"
                    />
                </div>
                <div>
                    <inputs-text-input
                        label="Roles to Outsource"
                        placeholder="Input Roles to Outsource here"
                        id="roles"
                        name="roles"
                        v-model="form.role"
                        :error="errors.role"
                    />
                </div>
                <div>
                    <inputs-text-input
                        label="Full Name"
                        placeholder="Enter full name here"
                        id="fullname"
                        name="fullname"
                        v-model="form.full_name"
                        :error="errors.full_name"
                    />
                </div>
                <div>
                    <inputs-text-input
                        label="Company"
                        placeholder="Enter company here"
                        id="company"
                        name="company"
                        v-model="form.company"
                        :error="errors.company"
                    />
                </div>
                <div>
                    <inputs-text-input
                        label="Position"
                        placeholder="Enter position here"
                        id="position"
                        name="position"
                        v-model="form.position"
                        :error="errors.position"
                    />
                </div>
                <div>
                    <inputs-selector
                        :options="industries"
                        label="Industry"
                        placeholder="Select industry here"
                        id="industry"
                        name="industry"
                        v-model="form.industry"
                        :error="errors.industry"
                    />
                </div>
                <div>
                    <inputs-text-input
                        label="Email"
                        placeholder="Enter email here"
                        type="email"
                        id="email"
                        name="email"
                        v-model="form.email"
                        :error="errors.email"
                    />
                </div>
                <div>
                    <inputs-mobile-number
                        label="Phone"
                        placeholder="Enter phone number here"
                        id="phone"
                        name="phone"
                        v-model="form.phone"
                        :error="errors.phone"
                    />
                </div>
                <div class="col-span-full flex lg:flex-row flex-col lg:space-y-0 space-y-4 justify-between pt-2">
                    <div>
                        <!-- <vue-recaptcha
                            ref="recaptchaRef"
                            :sitekey="config.public.sitekey"
                            @verify="verifyRecaptcha"
                        /> -->
                    </div>
                    <div>
                        <!-- <buttons-base-button 
                            custom-class="h-12 px-6 !text-base" 
                            @click="submit"
                            :designColor="designColor"
                            :disabled="!form.recaptcha_response"
                        >
                            Submit
                        </buttons-base-button> -->

                        <buttons-base-button 
                            custom-class="h-12 px-6 !text-base" 
                            @click="submit"
                            :designColor="designColor"
                        >
                            Submit
                        </buttons-base-button>

                    </div>
                </div>
            </form>
        </div>
    </div>

    <modals-success-modal 
        :show="showSuccessModal" 
        @close="showSuccessModal = false"
        title="Inquiry Submitted!"
        description="Inquiry has been successfully submitted"
    >
        <template #button>
            <div class="flex items-center justify-end">
                <buttons-base-button 
                    @click="reload"
                    design-color="text-white"
                >
                    Confirm
                </buttons-base-button>
            </div>
        </template>
    </modals-success-modal>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
// import VueRecaptcha from 'vue-recaptcha';

const api = useApi();

defineProps({
    customClass: {
        type: String
    },
    title: {
        type: String,
        default: 'Contact Us',
    },
    description: {
        type: String,
        default: 'Let’s discuss your project, together we will find a solution to the most difficult task',
    },
    designColor: {
        type: String,
        default: 'text-primary-900'
    }
})

const solutions = [
    { id: 'Creative Services', value: 'Creative Services'},
    { id: 'Web Design', value: 'Web Design'},
    { id: 'Web Development', value: 'Web Development'},
    { id: 'Software Development', value: 'Software Development'},
    { id: 'Sales Development Services', value: 'Sales Development Services'},
    { id: 'Email and Phone Support', value: 'Email and Phone Support'},
    { id: 'Live Chat Support', value: 'Live Chat Support'},
    { id: 'Social Media Services', value: 'Social Media Services'},
    { id: 'Revenue Optimization Services', value: 'Revenue Optimization Services'},
]

const industries = [
    { id: 'Product & Saas', value: 'Product & Saas'},
    { id: 'Retail', value: 'Retail'},
    { id: 'E-commerce', value: 'E-commerce'},
    { id: 'Gaming & Entertainment', value: 'Gaming & Entertainment'},
    { id: 'Financial Services / FinTech', value: 'Financial Services / FinTech'},
    { id: 'Healthcare', value: 'Healthcare'},
    { id: 'Insurance', value: 'Insurance'},
    { id: 'Logistics', value: 'Logistics'},
    { id: 'Travel/Hospitality', value: 'Travel/Hospitality'},
    { id: 'Cybersecurity', value: 'Cybersecurity'},
    { id: 'Others', value: 'Others'},
]

const config = useRuntimeConfig();

const form = reactive({
  solution: null,
  role: null,
  full_name: null,
  company: null,
  position: null,
  industry: null,
  email: null,
  phone: null,
  recaptcha_response: null,
  errors: {}, // Initialize the errors object
});

const errors = ref<Record<string, string>>({});
const showSuccessModal = ref(false);
const isSubmitting = ref(false);

const emit = defineEmits(['close', 'showSuccess'])

const recaptchaRef = ref(null)
const recaptchaResponse = ref(null)

const verifyRecaptcha = (response) => {
  recaptchaResponse.value = response
}

const reload = () => {
    showSuccessModal.value = false;
    location.reload();
}

const submit = async () => {
    if (isSubmitting.value) return;
    isSubmitting.value = true;

    try {
        const { data, error } = await api.post('/subscription', { ...form });

        if (error.value || (data.value && data.value.error)) {
            const errorData = error.value || data.value.error;
            if (errorData && errorData.data && errorData.data.errors) {
                Object.keys(errorData.data.errors).forEach(key => {
                    errors.value[key] = errorData.data.errors[key][0];
                });
            } else {
                errors.value = { general: 'An error occurred. Please try again.' };
            }
            return;
        }

        emit('showSuccess');
        showSuccessModal.value = true;
        Object.keys(form).forEach(key => form[key] = '');
        errors.value = {};
    } catch (error: any) {
        console.error('An error occurred:', error);
        errors.value = { general: 'An unexpected error occurred. Please try again.' };
    } finally {
        isSubmitting.value = false;
    }
};

onMounted(() => {

});
</script>