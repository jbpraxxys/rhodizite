<template>
    <div
        class="flex lg:flex-row flex-col items-center justify-between max-w-[1280px] m-auto xl:p-10 pb-0 z-[10] relative">
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
                <p class="font-semibold text-3xl mb-3">{{ title }}</p>
                <p>{{ description }}</p>
            </div>
            <form @submit.prevent="submit" class="hm-contact grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                    <inputs-text-input label="Name" placeholder="Your name" id="full_name" name="full_name"
                        v-model="form.full_name" :error="errors.full_name" />
                </div>
                <div>
                    <inputs-text-input label="Email" placeholder="Enter email here" type="email" id="email" name="email"
                        v-model="form.email" :error="errors.email" />
                </div>
                <div class="col-span-full">
                    <inputs-text-input label="Contact Number" placeholder="Enter contact number here" type="number"
                        id="phone" name="phone" :add_on_left="true" add_on_text="+63" v-model="form.phone"
                        :error="errors.phone" />
                </div>
                <div class="col-span-full">
                    <inputs-text-input label="Position" placeholder="Enter position here" id="position" name="position"
                        v-model="form.position" :error="errors.position" />
                </div>
                <div class="col-span-full">
                    <inputs-file-input id="cv" label="Your Resume"
                        description="Only .PDF or .DOCX file will be accepted." v-model:path="form.cv"
                        v-model:file="form.cv" :error="errors.cv" />
                </div>
                <div class="col-span-full">
                    <inputs-text-input label="Cover Letter" placeholder="Enter Cover Letter" id="cover" name="cover"
                        v-model="form.message" :error="errors.message" :textAreaRows="7" textarea />
                </div>

                <div class="col-span-full">
                    <vue-recaptcha :sitekey="sitekey" @verify="verifySubmission" @expired="expiredRecaptcha"
                        ref="grecaptcha"></vue-recaptcha>
                </div>

                <div class="col-span-full">
                    <buttons-base-button size="md" @click="validateAndSubmit" :disabled="!form.recaptcha_response">
                        Submit Application
                    </buttons-base-button>
                </div>
            </form>
        </div>
    </div>
    <modals-success-modal :show="showSuccessModal" @close="showSuccessModal = false" title="Application Submitted!"
        description="Application has been successfully submitted">
        <template #button>
            <div class="flex items-center justify-end">
                <buttons-base-button @click="reload" design-color="text-white">
                    Confirm
                </buttons-base-button>
            </div>
        </template>
    </modals-success-modal>
    <modals-dialog-modal :show="isSubmitting" @close="isSubmitting = false" maxWidth="sm">
        <template #content>
            <div class="flex flex-col items-center text-center space-y-3 mb-6">
                <div class="w-[48px] h-[48px] flex justify-center items-center bg-primary-600 bg-opacity-10 rounded-full">
                    <EnvelopeIcon class="h-5 w-5 stroke-1 stroke-primary-600 text-primary-600 " aria-hidden="true" />
                </div>
                <p class="text-xl font-bold text-primary-600">Submitting ...</p>
            </div>
        </template>
    </modals-dialog-modal>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, watch } from "vue";
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
const VueRecaptcha = defineAsyncComponent({
  loader: () => import('vue-recaptcha').then(module => module.VueRecaptcha),
  loadingComponent: () => '<div>Loading...</div>',
  delay: 4000
});

const api = useApi();

const props = defineProps({
    position: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: 'Submit Application',
    },
    description: {
        type: String,
        default: 'Please submit your comprehensive resumé via online form.',
    }
})

interface FormData {
    full_name: string | null;
    email: string | null;
    phone: string | null;
    position: string | null;
    cv: File | { path: string } | null;
    message: string | null;
    recaptcha_response: boolean | null;
}

const form = reactive<FormData>({
    full_name: null,
    email: null,
    phone: null,
    position: props.position,
    cv: null,
    message: null,
    recaptcha_response: null,
});

const errors = ref<Record<string, string>>({});
const showSuccessModal = ref(false);
const isSubmitting = ref(false);

const emit = defineEmits(['close', 'showSuccess'])


const validateForm = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    if (!form.full_name) newErrors.full_name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.position) newErrors.position = "Position is required";
    if (!form.cv || (!(form.cv instanceof File) && !form.cv.path)) {
        newErrors.cv = "Resume is required";
    } else if (form.cv instanceof File) {
        // Check file type if it's a new file
        const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(form.cv.type)) {
            newErrors.cv = "Only PDF or DOCX files are accepted";
        }
    }
    if (!form.message) newErrors.message = "Cover letter is required";

    // Add any other specific validations you need

    return newErrors;
};

const validateAndSubmit = async () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
        errors.value = newErrors;
        return;
    }

    await submit();
};

watch(
    () => props.position,
    (newPosition) => {
        form.position = newPosition;
    }
);

const verifySubmission = () => {
    form.recaptcha_response = true;
};

const expiredRecaptcha = () => {
    form.recaptcha_response = null;
};

const reload = () => {
    showSuccessModal.value = false;
    location.reload();
}

const submit = async () => {
    if (isSubmitting.value) return;
    isSubmitting.value = true;

    const formData = new FormData();
    Object.keys(form).forEach(key => {
        if (key === 'cv' && form[key] instanceof File) {
            formData.append(key, form[key], form[key].name);
        } else if (form[key] !== null) {
            formData.append(key, form[key]);
        }
    });

    try {
        const response = await api.post('/application', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        isSubmitting.value = false;
        showSuccessModal.value = true;
    } catch (apiError) {
        console.error('Error in API call:', apiError);
        throw apiError; // Re-throw to be caught by the outer catch block
    }

};



const sitekey = "6Leg04gpAAAAAJvzhxc0KaQU-KvKrnWFWx3u9Gi7";

onMounted(() => {
    // Any mounted logic
});
</script>