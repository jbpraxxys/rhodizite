<template>
    <div class="bg-[#051125]">
        <section class="bg-primary-900 relative saas-frame2 rounded-t-[2.25rem]">
            <div
                class="m-auto px-4 lg:px-20 flex lg:flex-row flex-col items-center space-x-0 lg:space-x-16 pt-16 lg:pt-[120px] pb-16 lg:pb-20 w-full xl:max-w-[1440px] xl:m-auto">
                <div class="w-full lg:w-1/2">
                    <div class="text-white text-3xl leading-normal lg:text-[1.7vw] lg:leading-[2.5vw] ecommerce-highlight ck-editor mb-4 reveal-type"
                        v-html="cms?.content.section2_header"></div>
                </div>
                <div class="w-full lg:w-1/2 text-white animateUp">
                    <p>{{ cms?.content.section2_content }}</p>
                </div>
            </div>
            <div class="fadeIn xl:max-w-[1440px] xl:m-auto">
                <pages-industries-ecommerce-slider :items="cms?.content.section2_items" />
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
defineProps({
    cms: {
        type: Object,
        required: true
    }
})
</script>