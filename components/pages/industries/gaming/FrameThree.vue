<template>
   <section class="relative">
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 pt-16 lg:pt-20 pb-[154px]">
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-3 lg:gap-10 w-full">
                <div class="flex items-center gaming-frame3-element">
                    <div class="text-4xl lg:text-[3rem] leading-tight gaming-highlight ck-editor mb-3 reveal-type"
                        v-html="cms?.content.section3_header"></div>
                </div>
                <div v-for="solution in cms?.content.section3_items"
                    class="p-8 rounded-lg bg-[#2D4959] text-white space-y-2.5 flex flex-col justify-start animateUp gaming-frame3-element generic-hover">
                    <div class="w-24 h-24 relative">
                        <nuxt-img class="w-full h-full object-contain" :src="$config.public.storage + solution?.logo"
                            alt="icon" loading="lazy" decoding="async" format="webp" quality="80"/>
                    </div>
                    <p class="font-semibold text-2xl">{{ solution?.title }}</p>
                    <p>{{ solution?.content }}</p>
                </div>
            </div>
        </div>
        <nuxt-img class="absolute bottom-0 w-[900%] lg:w-full max-w-max lg:max-w-full"
            :src="$config.public.storage + cms?.content.section3_footer" alt="footer" loading="lazy" decoding="async" format="webp" quality="80"/>
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