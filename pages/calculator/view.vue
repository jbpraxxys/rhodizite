<template>
    <sections-general-banner :item="{
        image: $config.public.storage + cms?.content.section1_image,
        title: cms?.content.section1_title
    }" />
    <sections-offset-banner id="calculator" :item="{
        title: cms?.content.section1_header,
        description: cms?.content.section1_content,
        customClass: '-translate-y-[100px]'
    }" />
    <section class="bg-primary-50 relative">
        <div class="max-w-[1440px] m-auto px-4 py-16 lg:px-20 lg:pb-20 xl:p-20 pt-0">
            <div class="flex xl:flex-row flex-col xl:space-y-0 space-y-10 xl:space-x-12">
                <div class="w-full xl:w-[350px] lg:p-8 rounded-[2rem] bg-primary-800/[0.02]">
                    <div class="mb-8">
                        <p class="text-3xl font-bold mb-4">Hire top talent!</p>
                        <p>For much less than you expect.</p>
                    </div>
                    <div class="space-y-8 filter-wrapper">
                        <div>
                            <inputs-selector :options="rolesObject" label="Role" placeholder="Select role here" id="role"
                                name="role" v-model="compuForm.role" />
                        </div>
                        <div>
                            <inputs-selector :options="experienceObject" label="Experience Level"
                                placeholder="Select experience level here" id="experience" name="experience"
                                v-model="compuForm.experience" />
                        </div>
                        <div>
                            <inputs-selector :options="countryObject" label="Country" placeholder="Select country here"
                                id="country" name="country" v-model="compuForm.country" />
                        </div>
                        <div class="flex items-center justify-between space-x-6">
                            <buttons-base-button @click="addFilterList()" :fill="false"
                                custom-class="px-6 !text-base w-1/2 bg-white" size="md" design-color="text-[#E8EBEB]">
                                Add Role
                            </buttons-base-button>
                            <buttons-base-button @click="filterList()" custom-class="px-6 !text-base w-1/2" size="md"
                                design-color="text-[#E8EBEB]">
                                Proceed
                            </buttons-base-button>
                        </div>
                    </div>
                </div>
                <div class="w-full xl:w-[calc(100%-398px)]">
                    <div class="p-8 bg-primary-900 rounded-[2rem] h-fit mb-8">
                        <table class="w-full text-left border-b mb-3 lg:block hidden">
                            <tr class="w-full text-white font-bold text-sm">
                                <th class="pr-2">Role</th>
                                <th class="px-2">Country</th>
                                <th class="px-2">Experience Level</th>
                                <th class="px-2">Onshore Cost</th>
                                <th class="px-2">Reliasourcing Cost</th>
                                <th class="px-2 text-right">Your Savings</th>
                                <th class="pl-2"></th>
                            </tr>
                            <tr v-for="item in filteredData" class="text-white text-left text-sm">
                                <td class="pl-0 pr-2 py-5 max-w-[150px] whitespace-pre-wrap">{{ item.role }}</td>
                                <td class="px-2 py-5">{{ item.country }}</td>
                                <td class="px-2 py-5">{{ item.experience }}</td>
                                <td class="px-2 py-5 font-bold">
                                    <div class="flex">
                                        <p v-if="compuForm.country == 'US'" class="mr-1">USD $</p>
                                        <p v-if="compuForm.country == 'UK'" class="mr-1">GBP £</p>
                                        <p v-if="compuForm.country == 'AU'" class="mr-1">AUD $</p>
                                        <p v-if="compuForm.country == 'CA'" class="mr-1">CAD $</p>
                                        <p v-if="compuForm.country == 'SG'" class="mr-1">SGD $</p>
                                        <partials-render-price :value="item.onshore" />
                                    </div>
                                </td>
                                <td class="px-2 py-5 font-bold">
                                    <div class="flex">
                                        <p v-if="compuForm.country == 'US'" class="mr-1">USD $</p>
                                        <p v-if="compuForm.country == 'UK'" class="mr-1">GBP £</p>
                                        <p v-if="compuForm.country == 'AU'" class="mr-1">AUD $</p>
                                        <p v-if="compuForm.country == 'CA'" class="mr-1">CAD $</p>
                                        <p v-if="compuForm.country == 'SG'" class="mr-1">SGD $</p>
                                        <partials-render-price :value="item.offshore" />
                                    </div>
                                </td>
                                <td class="px-2 py-5 font-bold text-right">
                                    <div class="flex">
                                        <p v-if="compuForm.country == 'US'" class="mr-1">USD $</p>
                                        <p v-if="compuForm.country == 'UK'" class="mr-1">GBP £</p>
                                        <p v-if="compuForm.country == 'AU'" class="mr-1">AUD $</p>
                                        <p v-if="compuForm.country == 'CA'" class="mr-1">CAD $</p>
                                        <p v-if="compuForm.country == 'SG'" class="mr-1">SGD $</p>
                                        <partials-render-price :value="item.onshore - item.offshore" />
                                    </div>
                                </td>
                                <td @click="removeItem(item.id)" class="px-4 py-5">
                                    <XMarkIcon class="w-5 h-5 text-red-600 cursor-pointer" />
                                </td>
                            </tr>
                            <tr v-if="filteredData.length == 0" class="text-white text-left h-16"></tr>
                        </table>
                        <div class="pb-12 border-b mb-8 border-white/[0.5] space-y-5 lg:hidden block">
                            <div v-for="item in filteredData"
                                class="pb-5 border-b border-white/[0.5] last:border-b-0 last:pb-0">
                                <div
                                    class="flex items-center justify-between w-full pb-3 border-b border-white/[0.5] mb-3">
                                    <div class="text-white">
                                        <p class="text-sm font-bold">Role</p>
                                        <p>{{ item.role }}</p>
                                    </div>
                                    <div @click="removeItem(item.id)">
                                        <XMarkIcon class="w-5 h-5 text-red-600 cursor-pointer" />
                                    </div>
                                </div>
                                <div class="space-y-1 text-white">
                                    <div class="flex w-full items-center justify-between text-sm">
                                        <p class="font-bold">Country</p>
                                        <p>{{ item.country }}</p>
                                    </div>
                                    <div class="flex w-full items-center justify-between text-sm">
                                        <p class="font-bold">Experience Level</p>
                                        <p>{{ item.experience }}</p>
                                    </div>
                                    <div class="flex w-full items-center justify-between text-sm">
                                        <p class="font-bold">Onshore Cost</p>
                                        <p class="flex">
                                        <p v-if="compuForm.country == 'US'" class="mr-1">USD $</p>
                                        <p v-if="compuForm.country == 'UK'" class="mr-1">GBP £</p>
                                        <p v-if="compuForm.country == 'AU'" class="mr-1">AUD $</p>
                                        <p v-if="compuForm.country == 'CA'" class="mr-1">CAD $</p>
                                        <p v-if="compuForm.country == 'SG'" class="mr-1">SGD $</p>
                                        <partials-render-price :value="item.onshore" />
                                        </p>
                                    </div>
                                    <div class="flex w-full items-center justify-between text-sm">
                                        <p class="font-bold">Reliasourcing Cost</p>
                                        <p class="flex">
                                        <p v-if="compuForm.country == 'US'" class="mr-1">USD $</p>
                                        <p v-if="compuForm.country == 'UK'" class="mr-1">GBP £</p>
                                        <p v-if="compuForm.country == 'AU'" class="mr-1">AUD $</p>
                                        <p v-if="compuForm.country == 'CA'" class="mr-1">CAD $</p>
                                        <p v-if="compuForm.country == 'SG'" class="mr-1">SGD $</p>
                                        <partials-render-price :value="item.offshore" />
                                        </p>
                                    </div>
                                    <div class="flex w-full items-center justify-between text-sm">
                                        <p class="font-bold">Your Savings</p>
                                        <p class="flex">
                                        <p v-if="compuForm.country == 'US'" class="mr-1">USD $</p>
                                        <p v-if="compuForm.country == 'UK'" class="mr-1">GBP £</p>
                                        <p v-if="compuForm.country == 'AU'" class="mr-1">AUD $</p>
                                        <p v-if="compuForm.country == 'CA'" class="mr-1">CAD $</p>
                                        <p v-if="compuForm.country == 'SG'" class="mr-1">SGD $</p>
                                        <partials-render-price :value="item.onshore - item.offshore" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="text-28 font-bold text-white mb-8">Estimated Monthly Cost</p>
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div>
                                    <p class="text-28 lg:text-3xl font-bold text-primary-500 mb-1 lg:mb-4 flex">
                                    <p v-if="compuForm.country == 'US'" class="mr-1">USD $</p>
                                    <p v-if="compuForm.country == 'UK'" class="mr-1">GBP £</p>
                                    <p v-if="compuForm.country == 'AU'" class="mr-1">AUD $</p>
                                    <p v-if="compuForm.country == 'CA'" class="mr-1">CAD $</p>
                                    <p v-if="compuForm.country == 'SG'" class="mr-1">SGD $</p>
                                    <partials-render-price :value="totalOnshore" />
                                    </p>
                                    <p class="text-white">Monthly Cost of Hiring Locally</p>
                                </div>
                                <div>
                                    <p class="text-28 lg:text-3xl font-bold text-primary-500 mb-1 lg:mb-4 flex">
                                    <p v-if="compuForm.country == 'US'" class="mr-1">USD $</p>
                                    <p v-if="compuForm.country == 'UK'" class="mr-1">GBP £</p>
                                    <p v-if="compuForm.country == 'AU'" class="mr-1">AUD $</p>
                                    <p v-if="compuForm.country == 'CA'" class="mr-1">CAD $</p>
                                    <p v-if="compuForm.country == 'SG'" class="mr-1">SGD $</p>
                                    <partials-render-price :value="totalOffshore" />
                                    </p>
                                    <p class="text-white">Monthly Cost of Hiring with Reliasourcing</p>
                                </div>
                                <div>
                                    <p class="text-28 lg:text-3xl font-bold text-primary-500 mb-1 lg:mb-4">{{
                                        totalSavings }}%</p>
                                    <p class="text-white">of Savings</p>
                                </div>
                            </div>
                            <div v-if="cms?.content.calculator_disclaimer" class="text-white ck-content mt-8"
                                v-html="cms?.content.calculator_disclaimer" />
                        </div>
                    </div>
                    <!-- TODO: Send Email Computation -->
                    <div class="w-fit m-auto">
                        <!-- <buttons-base-button @click="generatePdf" custom-class="px-6 !text-base animateUp" size="md" design-color="">
                                Download Computation
                            </buttons-base-button> -->
                        <buttons-base-button @click="generatePdf" custom-class="px-6 !text-base animateUp" size="md"
                            design-color="text-primary-50">
                            Email Computation
                        </buttons-base-button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <modals-dialog-modal 
        :show="showDialogModal"
        @cancel="showDialogModal = false"
        maxWidth="computation"
        cstmClass="!rounded-xl"
    >
        <template #title>
            <p class="mb-1 font-bold text-xl text-left">Email Computation</p>
            <p class="font-normal text-sm text-left mb-10">Hire top talent for much less than you expect</p>
        </template>
        <template #content>
            <form @submit.prevent="submit">
                <div class="mb-6 text-left">
                    <inputs-text-input
                        label="Email"
                        placeholder="Enter your email here"
                        type="email"
                        id="email"
                        name="email"
                        v-model="form.email"
                        :error="form.errors.email"
                    />
                </div>
                <div class="col-span-full hidden">
                    <inputs-file-input
                        id="pdf"
                        label="Your Resume"
                        description="Only .PDF or .DOCX file will be accepted."
                        custom-input-class="border"
                        v-model:path="form.pdf"
                        v-model:file="form.pdf"
                        :error="form.errors.pdf"
                    />
                </div>
                <!-- <div>
                    <input name="pdf" type="file" id="pdf" />
                </div> -->
                <div class="w-full flex justify-end mb-6">
                    <vue-recaptcha
                        :sitekey="sitekey"
                        @verify="verifySubmission"
                        @expired="expiredRecaptcha"
                        ref="grecaptcha"
                    ></vue-recaptcha>
                </div>
                <div class="w-full flex justify-end space-x-4">
                    
                    <buttons-base-button 
                        size="md"
                        :fill="false"
                        designColor="text-white"
                        custom-class="px-6 !text-base !border" 
                        @click="showDialogModal = false"
                    >
                        Cancel
                    </buttons-base-button>

                    <buttons-base-button 
                        size="md"
                        designColor="text-white"
                        custom-class="px-6 !text-base" 
                        @click="validateAndSubmit"
                        :disabled="!form.recaptcha_response"
                    >
                        Submit
                    </buttons-base-button>
                </div>
            </form>
        </template>
    </modals-dialog-modal>

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

    <modals-success-modal
        :show="showSuccessModal"
        @close="showSuccessModal = false"
        title="Computation Submitted!"
        description="Computation has been successfully submitted"
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
<script setup lang="ts">
import { ref, computed, onMounted, reactive, defineAsyncComponent } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import pdfMake from 'pdfmake/build/pdfmake';

const VueRecaptcha = defineAsyncComponent({
  loader: () => import('vue-recaptcha').then(module => module.VueRecaptcha),
  loadingComponent: () => '<div>Loading...</div>',
  delay: 4000
});

const form = reactive({
  email: null,
  pdf: null,
  recaptcha_response: false,
  errors: {},
});

const { get } = useApi();
const api = useApi();
const { data: cms } = await get('/page/calculator');
const { data: items } = await get('/pricing-items');


const props = defineProps({
    cms: {
        type: Object,
        default: () => ({})
    },
    role: {
        type: String,
    },
    experience: {
        type: String,
    },
    country: {
        type: String,
    },
});

const config = useRuntimeConfig();

useSeoMeta({
  title: cms.value?.title,
  ogTitle: cms.value?.title,
  description: cms.value?.description,
  ogDescription: cms.value?.description,
  keywords: cms.value?.keywords,
  ogImage: config.public.storage + cms.value?.og_image_path,
  twitterCard: 'summary_large_image',
});



(<any>pdfMake).fonts = {
    Roboto: {
        normal:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
        bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
        italics:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
        bolditalics:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
    },
};

const showDialogModal = ref(false);

const rolesObject = computed(() => [...new Set(items.value.map(obj => obj.role))].map(role => ({ id: role, value: role })));
const experienceObject = computed(() => [...new Set(items.value.map(obj => obj.experience))].map(experience => ({ id: experience, value: experience })));
const countryObject = computed(() => [...new Set(items.value.map(obj => obj.country))].map(country => ({ id: country, value: country })));


const filteredData = ref([]);


const addFilterList = () => {
    // Perform filtering here
    const filtered = items.value.filter(
    item => item.role.includes(compuForm.value.role) &&
            item.country.includes(compuForm.value.country) &&
            item.experience.includes(compuForm.value.experience)
    );
    // Add the new filtered list to the existing filteredData array
    filteredData.value = filteredData.value.concat(filtered);
};

const filterList = () => {
    // Perform filtering here
    const filtered = items.value.filter(
    item => item.role.includes(compuForm.value.role) &&
            item.country.includes(compuForm.value.country) &&
            item.experience.includes(compuForm.value.experience)
    );
    // Replace the existing filteredData array with the new filtered list
    filteredData.value = filtered;
};

const removeItem = (id) => {
  // Create a new filteredData array with the item with the given id removed
  filteredData.value = filteredData.value.filter(item => item.id !== id);
};

const totalOnshore = computed(() => {
  // Add up the onshore values in the filteredData array
  return filteredData.value.reduce((total, item) => total + Number(item.onshore), 0);
});
const totalOffshore = computed(() => {
  // Add up the offshore values in the filteredData array
  return filteredData.value.reduce((total, item) => total +  Number(item.offshore), 0);
});

const totalSavings = computed(() => {
  // Compute the total savings
  return (( (totalOnshore.value - totalOffshore.value) / totalOnshore.value) * 100).toFixed(2);
});

const route = useRoute();

const compuForm = ref({
    role: route.query.role as string,
    country: route.query.country as string ,
    experience: route.query.experience as string,
});

const generatePdf = () => {
    const currencySymbols = {
        US: 'USD $ ',
        UK: 'GBP £ ',
        AU: 'AUD $ ',
        CA: 'CAD $ ',
        SG: 'SGD $ ',
    };
    const currencySymbol = currencySymbols[compuForm.value.country];

    const docDefinition = {
        content: [
            {
                text: 'Reliasourcing Computation', alignment: 'center', bold: true, fontSize: 20, margin: [0, 0, 0, 20]
            },
            {
                layout: 'lightHorizontalLines',
                table: {
                    headerRows: 1,
                    widths: [100, 'auto', '*', '*', '*', '*'],
                
                    body: [
                        [{ text: 'Role', bold: true }, { text: 'Country', bold: true }, { text: 'Experience Level', bold: true }, { text: 'Onshore Cost', bold: true }, { text: 'Reliasourcing Cost', bold: true }, { text: 'Your Savings', bold: true }],
                            ...filteredData.value.map(item => [
                            { text: item.role },
                            { text: item.country },
                            { text: item.experience },
                            { text: currencySymbol + parseFloat(item.onshore).toFixed(2) },
                            { text: currencySymbol + parseFloat(item.offshore).toFixed(2) },
                            { text: currencySymbol + (item.onshore - item.offshore).toFixed(2) },
                        ])
                    ],
                    
                },
                margin: [0, 0, 0, 20]
            },
            {
                text: 'Estimated Monthly Cost', bold: true, fontSize: 16, margin: [0, 0, 0, 5]
            },
            {
                layout: 'lightHorizontalLines',
                table: {
                    headerRows: 1,
                    widths: ['*', '*', '*'],

                    body: [
                        [{ text: 'Monthly Cost of Hiring Locally', bold: true }, { text: 'Monthly Cost of Hiring with Reliasourcing', bold: true }, { text: 'Your Savings', bold: true }],
                        [{ text: currencySymbol + parseFloat(totalOnshore.value).toFixed(2), bold: true, fontSize: 20 }, { text: currencySymbol + parseFloat(totalOffshore.value).toFixed(2), bold: true, fontSize: 20 }, { text: parseFloat(totalSavings.value).toFixed(2) + ' %', bold: true, fontSize: 20 }],
                        
                    ]
                },
                margin: [0, 0, 0, 20]
            },
            {
                text: 'Disclaimer:', bold: true, fontSize: 14, margin: [0, 0, 0, 5]
            },
            {
                text: 'The information provided in this cost-saving calculator is intended for general informational purposes only and is not an offer and therefore does not legally bind Reliasourcing.', fontSize: 12, margin: [0, 0, 0, 12]
            },
            {
                text: 'Actual outsourcing costs may vary based on individual client needs, project complexity, market conditions, and other factors. Clients are advised to consult with Reliasourcing representatives for personalized assessments and accurate cost projections tailored to their specific requirements.', fontSize: 12, margin: [0, 0, 0, 10]
            },
        ],
    };

    pdfMake.createPdf(docDefinition).getBuffer((buffer) => {
        if (buffer) {
            const blob = new Blob([buffer], { type: 'application/pdf' });
            const file = new File([blob], 'computation_' + Date.now() + '.pdf', { type: blob.type });
            form.pdf = file;
        }
    });

    showDialogModal.value = true;

    // For testing
    // pdfMake.createPdf(docDefinition).open();
};


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

const errors = ref({});
const isSubmitting = ref(false);

const validateForm = () => {
    const newErrors = {};

    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.pdf) newErrors.pdf = "PDF is required";

    return newErrors;
};

const validateAndSubmit = async () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
        form.errors = newErrors;
        return;
    }

    await submit();
};

const submit = async () => {
    if (isSubmitting.value) return;
    showDialogModal.value = false;
    isSubmitting.value = true;

    const formData = new FormData();
    Object.keys(form).forEach(key => {
        if (key === 'pdf' && form[key] instanceof File) {
            formData.append(key, form[key], form[key].name);
        } else if (form[key] !== null && key !== 'errors') {
            formData.append(key, form[key]);
        }
    });

    try {
        const response = await api.post('/computation', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        isSubmitting.value = false;
        showSuccessModal.value = true;
        Object.assign(form, {
            email: null,
            pdf: null,
            recaptcha_response: null,
            errors: {},
        });
    } catch (error) {
        console.error('Submission error:', error);
        isSubmitting.value = false;
    }
};
const sitekey = "6Leg04gpAAAAAJvzhxc0KaQU-KvKrnWFWx3u9Gi7";

onMounted(() => {
    filterList();
    setTimeout(() => {
        var element = document.getElementById('calculator');
        if (element) {
            window.scroll({
            top: element.offsetTop,
            left: 0,
            behavior: 'smooth'
            });
        }
    }, 500)
});
</script>