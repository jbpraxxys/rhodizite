<template>
    <div id="contact-us" class="-translate-y-24"></div>
    <div class="flex lg:flex-row flex-col items-center justify-between max-w-[1280px] m-auto xl:p-10 pb-0">
        <nuxt-img
            class="max-w-[483px] lg:max-w-[350px] xl:max-w-[483px] w-full" 
            src="/icons/contact-img.svg" 
            alt="contact"
            loading="lazy"
            decoding="async"
            format="webp" quality="80"
        />
        <div class="max-w-[656px] p-6 lg:p-8 bg-primary-900 w-full rounded-2xl">
            <div class="text-white mb-6">
                <p class="font-semibold text-3xl mb-3">Let's Chat!</p>
                <p>Drop us a line and access reliable solutions.</p>
            </div>
            <form class="hm-contact grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                    <inputs-text-input label="Full Name" placeholder="Enter full name here" id="full_name" name="full_name"
                        v-model="form.full_name" :error="errors.full_name" />
                </div>
                <div>
                    <inputs-text-input label="Phone" placeholder="Enter phone number here" type="number" id="phone"
                        name="phone" :add_on_left="true" add_on_text="+63" v-model="form.phone"
                        :error="errors.phone" />
                </div>
                <div>
                    <inputs-text-input label="Email" placeholder="Enter email here" type="email" id="email" name="email"
                        v-model="form.email" :error="errors.email" />
                </div>
                <div>
                    <inputs-text-input label="Company" placeholder="Enter company here" id="company" name="company"
                        v-model="form.company" :error="errors.company" />
                </div>
                <div class="col-span-full">
                    <inputs-text-input textarea label="Message" placeholder="Enter message (optional)" id="message"
                        name="message" text-area-rows="5" v-model="form.message" :error="errors.message" />
                </div>
                <div class="col-span-full flex lg:flex-row flex-col lg:space-y-0 space-y-4 justify-between pt-2">
                    <div>
                        <vue-recaptcha :sitekey="sitekey" @verify="verifySubmission" @expired="expiredRecaptcha"
                            ref="grecaptcha"></vue-recaptcha>
                    </div>
                    <div>
                        <buttons-base-button 
                            custom-class="h-12 px-6 !text-base" 
                            @click="submit" 
                            type="button"
                            :disabled="!form.recaptcha_response"
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
import { ref, reactive, onMounted } from "vue";
const config = useRuntimeConfig();
const VueRecaptcha = defineAsyncComponent({
  loader: () => import('vue-recaptcha').then(module => module.VueRecaptcha),
  loadingComponent: () => '<div>Loading...</div>',
  delay: 4000
});

const api = useApi();

const form = reactive({
    full_name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    recaptcha_response: false,
});

const errors = ref<Record<string, string>>({});

const emit = defineEmits(['close', 'showSuccess'])

const verifySubmission = () => {
    form.recaptcha_response = true;
};

const expiredRecaptcha = () => {
    form.recaptcha_response = false;
};

const showSuccessModal = ref(false);

const reload = () => {
    showSuccessModal.value = false;
    location.reload();
}

const isSubmitting = ref(false);
const submit = async () => {
    if (isSubmitting.value) return;
    isSubmitting.value = true;

    try {
        console.log('Submitting form:', form);
        const { data, error } = await api.post('/inquiry', { ...form });  // Spread the form object

        // Check if there's an error in the response
        if (error.value || (data.value && data.value.error)) {
            // If there's an error, parse it and set individual field errors
            const errorData = error.value || data.value.error;
            if (errorData && errorData.data && errorData.data.errors) {
                Object.keys(errorData.data.errors).forEach(key => {
                    errors.value[key] = errorData.data.errors[key][0];
                });
            } else {
                // If the error structure is different, set a general error
                errors.value = { general: 'An error occurred. Please try again.' };
            }
            return;
        }

        // If no errors, proceed with success handling
        emit('showSuccess');
        showSuccessModal.value = true;
        // Reset form
        Object.keys(form).forEach(key => form[key] = '');
        form.recaptcha_response = null;
        errors.value = {};
    } catch (error: any) {
        console.error('An error occurred:', error);
        errors.value = { general: 'An unexpected error occurred. Please try again.' };
    } finally {
        isSubmitting.value = false;
    }
};




const sitekey = config.public.siteKey;

onMounted(() => {
    // Any mounted logic
});
</script>
