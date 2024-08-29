<template>
   <section class="bg-[#11CEBB] relative gaming-frame2">
        <div
            class="max-w-[1440px] m-auto px-4 lg:px-20 flex items-center lg:flex-row flex-col lg:space-x-20 py-16 lg:py-20 w-full lg:space-y-0 space-y-8">
            <div class="lg:w-[240px] xl:w-[540px] fadeIn">
                <nuxt-img class="w-full" :src="$config.public.storage + cms?.content.section2_image" alt="iceberg" loading="lazy"
                    decoding="async" format="webp" quality="80"/>
            </div>
            <div class="w-full lg:w-[calc(100%-320px)] xl:w-[calc(100%-620px)]">
                <div class="text-white text-4xl lg:text-[3rem] leading-tight gaming-highlight ck-editor mb-4 reveal-type"
                    v-html="cms?.content.section2_header"></div>
                <p class="text-white animateUp">{{ cms?.content.section2_content }}</p>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
defineProps({
    cms: {
        type: Object,
        required: true
    }
})
</script>