<template>
    <div id="contact-us" class="-translate-y-24"></div>
    <div class="flex lg:flex-row flex-col items-center justify-between max-w-[1280px] m-auto lg:p-10 pb-0">
        <img class="w-[483px]" src="/icons/contact-img.svg" alt="contact" loading="lazy" decoding="async">
        <div class="max-w-[656px] p-6 lg:p-8 bg-primary-900 w-full rounded-2xl">
            <div class="text-white mb-6">
                <p class="font-semibold text-3xl mb-3">Let's Chat!</p>
                <p>Drop us a line and access reliable solutions.</p>
            </div>
            <form @submit.prevent="submit" class="hm-contact grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
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
                        <buttons-base-button custom-class="h-12 px-6 !text-base" @click="submit"
                            :disabled="!form.recaptcha_response">
                            Submit
                        </buttons-base-button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";

const form = reactive({
    full_name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    recaptcha_response: null,
});

const errors = ref({});

const emit = defineEmits(['close', 'showSuccess'])

const verifySubmission = () => {
    form.recaptcha_response = true;
};

const expiredRecaptcha = () => {
    form.recaptcha_response = null;
};

const showSuccessModal = ref(false);

const reload = () => {
    showSuccessModal.value = false;
    location.reload();
}

const submitUrl = '/api/inquiry/submit'; // Replace with your actual API endpoint

const submit = async () => {
    try {
        const response = await fetch(submitUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
            },
            body: JSON.stringify(form)
        });

        if (!response.ok) {
            const errorData = await response.json();
            if (errorData.errors) {
                errors.value = errorData.errors;
            } else {
                throw new Error('Server error');
            }
            return;
        }

        const data = await response.json();
        emit('showSuccess');
        showSuccessModal.value = true;
        // Reset form
        Object.keys(form).forEach(key => form[key] = '');
        form.recaptcha_response = null;
        errors.value = {};
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

const sitekey = "6Leg04gpAAAAAJvzhxc0KaQU-KvKrnWFWx3u9Gi7";

onMounted(() => {
    // Any mounted logic
});
</script>
