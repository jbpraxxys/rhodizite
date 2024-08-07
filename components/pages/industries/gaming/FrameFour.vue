<template>
   <section class="bg-[#11CEBB] relative">
        <div
            class="max-w-[1440px] m-auto px-4 lg:px-20 py-16 lg:py-20 flex space-x-0 lg:flex-row flex-col lg:space-x-20">
            <div class="w-full lg:w-1/2 lg:order-1 order-2">
                <div class="text-white text-4xl lg:text-[3rem] leading-tight gaming-highlight ck-editor mb-6 lg:mb-12 reveal-type lg:text-left text-center"
                    v-html="cms?.content.section4_header"></div>
                <div class="space-y-4">
                    <div v-for="expectation in cms?.content.section4_items"
                        class="radial-card5 rounded-lg animateUp generic-hover">
                        <div class="flex space-x-4 bg-[#146a68] p-6 rounded-lg relative z-[10]">
                            <div class="w-11 h-11 bg-primary-700 flex items-center rounded-full justify-center">
                                <img class="w-6 h-6 group-hover/benefit:scale-125 transition"
                                    :src="$config.public.storage + expectation?.logo" alt="icon">
                            </div>
                            <div class="w-[calc(100%-60px)] text-white">
                                <p class="font-semibold text-lg mb-4">{{ expectation.title }}</p>
                                <p class="opacity-[0.65]">{{ expectation.content }}</p>
                            </div>
                        </div>
                        <div class="radial-bg"></div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 relative block order-1 lg:order-2">
                <img class="w-full lg:sticky lg:top-20" :src="$config.public.storage + cms?.content.section4_image"
                    alt="gaming" loading="lazy" decoding="async">
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