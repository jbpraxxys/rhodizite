<template>
    <section class="bg-gradient-to-b from-[#172B75] to-[#425FC5]">
        <div class="max-w-[1440px] m-auto lg:px-20 lg:py-20 px-4 py-16">
            <div class="text-white text-4xl lg:text-[3rem] leading-tight saas-highlight ck-editor mb-10 reveal-type"
                v-html="cms?.content.section3_header"></div>
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-5 xl:gap-10">
                <div v-for="solution in cms?.content.section3_items"
                    class="p-8 rounded-lg bg-white/[0.03] text-white space-y-2.5 flex flex-col justify-start animateUp saas-frame3-element generic-hover">
                    <div class="w-24 h-24 relative">
                        <nuxt-img class="w-full h-full object-contain" :src="$config.public.storage + solution.logo"
                            alt="icon" loading="lazy" decoding="async" format="webp" quality="80"/>
                    </div>
                    <p class="font-semibold text-xl lg:text-2xl">{{ solution.title }}</p>
                    <p>{{ solution.content }}</p>
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