<template>
    <section class="bg-gradient-to-b from-[#1C2C36] to-[#304958]">
        <div class="flex items-center lg:flex-row flex-col">
            <div class="w-full lg:w-1/2 h-full bg-white">
                <nuxt-img class="w-full h-full object-cover" :src="$config.public.storage + cms?.content.section5_image"
                    alt="ecommerce" loading="lazy" decoding="async" format="webp" quality="80" />
            </div>
            <div class="w-full lg:w-1/2 text-white px-4 lg:px-20 py-16 lg:py-[100px]">
                <p class="text-5xl leading-tight font-bold mb-6 animateUp" v-html="cms?.content.section5_header"></p>
                <div class="text-lg mb-12 animateUp" v-html="cms?.content.section5_content" />
                <a href="/#contact-us">
                    <buttons-base-button class="animateUp" design-color="text-[#304958]">
                        Outsource with Us
                    </buttons-base-button>
                </a>
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