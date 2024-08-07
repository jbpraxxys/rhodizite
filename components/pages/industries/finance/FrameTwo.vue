<template>
    <div class="bg-[#04193C]">
        <section class="bg-[#051125] relative saas-frame2 rounded-t-[2.25rem]">
            <div
                class="max-w-[1440px] m-auto px-4 lg:px-20 flex lg:flex-row flex-col items-center space-x-0 lg:space-x-20 py-16 lg:py-20 w-full">
                <div class="w-full lg:w-[540px]">
                    <img class="w-full" :src="$config.public.storage + cms?.content.section2_image" alt="finance"
                        loading="lazy" decoding="async">
                </div>
                <div class="w-full lg:w-[calc(100%-620px)]">
                    <div class="text-white text-3xl leading-tight lg:text-[2.2vw] lg:leading-[3vw] finance-highlight ck-editor mb-4 reveal-type"
                        v-html="cms?.content.section2_header"></div>
                    <p class="text-white reveal-type font-base">{{ cms?.content.section2_content }}</p>
                </div>
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