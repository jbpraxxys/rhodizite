<template>
    <section class="relative">
        <nuxt-img class="absolute bottom-[1300px] lg:bottom-0 left-0 lg:scale-100 scale-[200%] -translate-x-[50%] z-1"
            src="/icons/contact-bg.svg" alt="contact" loading="lazy" decoding="async" format="webp" quality="80"/>
        <div class="max-w-[1440px] m-auto lg:py-[120px] lg:px-20 px-4 py-16 relative z-[2]">
            <div class="flex lg:flex-row flex-col lg:space-y-0 space-y-8 lg:space-x-20 max-w-[1062px] m-auto mb-24">
                <div class="w-full lg:w-1/2 image-text">
                    <h3 class="font-bold text-3xl mb-6 animateUp ck-content text-highlight reveal-type"
                        v-html="cms?.section8_title" />
                    <div class="text-xl mb-4 lg:mb-12 animateUp" v-html="cms?.section8_content" />
                    <a v-if="cms?.section8_btn_link" :href="cms?.section8_btn_link">
                        <buttons-base-button custom-class="h-14 px-6 !text-base animateUp" design-color="text-white">
                            {{ cms?.section8_btn_text }}
                        </buttons-base-button>
                    </a>
                </div>
                <div class="w-full lg:w-1/2 space-y-4">
                    <div v-for="item in cms?.section8_items" class="animateUp">
                        <div
                            class="p-6 lg:p-8 bg-primary-50 rounded-2xl group/tech hover:-translate-y-2 transition duration-300 hover:shadow-md">
                            <p class="text-xl font-bold mb-2">{{ item.title }}</p>
                            <p>{{ item.content }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <pages-home-contact-form />
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