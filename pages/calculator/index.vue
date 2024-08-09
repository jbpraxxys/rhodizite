<template>
    <sections-general-banner :item="{
        image: $config.public.storage + cms?.content.section1_image,
        title: cms?.content.section1_title
    }" />
    <sections-offset-banner :item="{
        title: cms?.content.section1_header,
        description: cms?.content.section1_content,
        customClass: '-translate-y-[100px]'
    }" />
    <section class="relative bg-primary-50">
        <nuxt-img class="absolute top-0 left-0 w-full h-full z-1 object-cover" src="/icons/grid.png" alt="grid"
            loading="lazy" decoding="async" format="webp" quality="80"/>
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 relative z-[2] py-16">
            <div class="flex lg:flex-row flex-col items-center justify-between image-text">
                <div class="w-full lg:w-7/12 mb-8 lg:mb-0 order-2 lg:ml-20">
                    <div class="text-5xl font-bold mb-6 title reveal-type leading-tight" v-html="cms?.content.section2_title" />
                    <div class="text-xl animateUp" v-html="cms?.content.section2_content" />
                    <div class="pt-6">
                        <buttons-base-button @click="showCalculatorModal = true" custom-class="h-14 px-6 !text-base animateUp"
                            design-color="text-primary-50">
                            Get Started
                        </buttons-base-button>
                    </div>
                </div>
                <div class="w-full lg:w-5/12 max-w-[540px] animateUp order-1">
                    <nuxt-img class="w-full" :src="$config.public.storage + cms?.content.section2_image" alt="image" loading="lazy"
                        decoding="async" format="webp" quality="80"/>
                </div>
            </div>
        </div>
    </section>

    <modals-calculator-modal :show="showCalculatorModal" @close="showCalculatorModal = false" maxWidth="calculator"
        :items="items" />
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const { get } = useApi();
const { data: cms } = await get('/page/calculator');
const { data: items } = await get('/pricing-items');
const props = defineProps({
    items: {
        type: Object,
        default: () => ({})
    },
    cms: {
        type: Object,
        default: () => ({})
    }
});

const showCalculatorModal = ref(false);

onMounted(()=> {
    setTimeout(() => {
        showCalculatorModal.value = true;
    }, 2000)
})
</script>