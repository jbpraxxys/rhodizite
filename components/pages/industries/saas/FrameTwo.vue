<template>
    <div class="bg-[#0F193D]">
        <section class="bg-[#172B75] relative saas-frame2 rounded-t-[2.25rem]">
            <pages-industries-saas-particle class="absolute top-[-200px] left-[-650px]" />
            <div
                class="max-w-[1440px] m-auto px-4 lg:px-20 flex items-center lg:space-x-20 py-16 lg:flex-row flex-col lg:py-20 w-full">
                <div class="w-full lg:w-[340px] xl:w-[540px] relative z-1">
                    <nuxt-img class="w-full" :src="$config.public.storage + cms?.content.section2_image" alt="saas" loading="lazy"
                        decoding="async" format="webp" quality="80"/>
                </div>
                <div class="w-full lg:w-[calc(100%-420px)] xl:w-[calc(100%-620px)]">
                    <div class="text-white text-4xl lg:text-[3rem] leading-tight saas-highlight ck-editor mb-4 reveal-type"
                        v-html="cms?.content.section2_header"></div>
                    <p class="text-white animateUp">{{ cms?.content.section2_content }}</p>
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