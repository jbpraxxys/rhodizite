<template>
    <section class="bg-gradient-to-b from-[#0F193D] to-[#2843A3] relative overflow-hidden">
        <pages-industries-saas-particle-two class="absolute lg:bottom-auto bottom-0 lg:top-[60%] left-1/2 -translate-x-1/2 z-1" />
        <div class="max-w-[1060px] m-auto lg:px-20 lg:py-20 px-4 py-16 relative z-[10]">
            <div class="text-white text-center text-4xl lg:text-[3rem] leading-tight saas-highlight ck-editor mb-16 reveal-type"
                v-html="cms?.content.section4_header"></div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                <div v-for="expectation in cms?.content.section4_items"
                    class="lg:even:translate-y-3 radial-card4 rounded-lg animateUp generic-hover">
                    <div class="p-6 rounded-lg bg-[#182948] flex space-x-4 h-full relative z-[10]">
                        <div class="w-10 h-10">
                            <img class="w-full h-full object-contain" :src="$config.public.storage + expectation.logo"
                                alt="expectation" loading="lazy" decoding="async">
                        </div>
                        <div class="w-[calc(100%-56px)] text-white">
                            <p class="text-lg font-semibold mb-4">{{ expectation.title }}</p>
                            <p class="opacity-[0.65]">{{ expectation.content }}</p>
                        </div>
                    </div>
                    <div class="radial-bg"></div>
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