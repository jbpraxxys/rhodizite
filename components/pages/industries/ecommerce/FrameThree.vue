<template>
    <section class="bg-gradient-to-b from-[#1C2C36] to-[#283F4E] e-commerce-frame">
        <div class="max-w-[1440px] m-auto lg:px-20 lg:py-20 px-4 py-16">
            <div class="text-white text-3xl ecommerce-highlight ck-editor lg:mb-20 lg:text-center reveal-type"
                v-html="cms?.content.section3_header"></div>
        </div>
        <div class="xl:max-w-[1440px] xl:m-auto lg:block hidden">
            <pages-industries-ecommerce-advantage-slider :items="cms?.content.section3_items" />
        </div>
        <div class="space-y-4 px-4 pb-16 lg:hidden block">
            <div v-for="item in cms?.content.section3_items" class="animateUp">
                <div
                    class="p-8 rounded-xl bg-[#191919]/[0.60] advantage-card text-white space-y-2.5 flex flex-col justify-end border-[3px] border-[#191919]/[0.60] hover:border-[#51D2CA]">
                    <div class="w-24 h-24 relative">
                        <nuxt-img class="w-full h-full object-contain" :src="$config.public.storage + item.image"
                            alt="icon" loading="lazy" decoding="async" format="webp" quality="80" />
                    </div>
                    <p class="font-semibold text-xl text-primary-500 lg:text-2xl">{{ item.title }}</p>
                    <div class="content">
                        <p>{{ item.content }}</p>
                    </div>
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