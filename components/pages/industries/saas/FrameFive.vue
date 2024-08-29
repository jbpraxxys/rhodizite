<template>
    <section class="bg-gradient-to-b from-[#0F193D] to-[#425FC5]">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="h-full bg-white relative block">
                <nuxt-img class="w-full h-full object-cover" :src="$config.public.storage + cms?.content.section5_image" alt="saas"
                    loading="lazy" decoding="async" format="webp" quality="80"/>
            </div>
            <div class="flex items-center justify-center">
                <div class="text-white px-4 lg:px-10 xl:px-20 py-16 lg:py-[100px]">
                    <p class="text-5xl font-bold mb-6 animateUp" v-html="cms?.content.section5_header"></p>
                    <div class="text-lg mb-12 animateUp" v-html="cms?.content.section5_content" />
                    <a href="/#contact-us">
                        <buttons-base-button class="animateUp" design-color="text-[#425FC5]">
                            Outsource with Us
                        </buttons-base-button>
                    </a>
                </div>
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