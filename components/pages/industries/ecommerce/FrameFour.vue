<template>
    <section class="bg-primary-900">
        <div class="max-w-[1440px] m-auto lg:px-20 lg:py-20 px-4 py-16">
            <div class="text-white text-3xl ecommerce-highlight ck-editor mb-16 text-center reveal-type"
                v-html="cms?.content.section4_header"></div>
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-4">
                <div v-for="service in cms?.content.section4_items"
                    class="radial-card3 rounded-lg animateUp ecommerce-frame4-element generic-hover">
                    <div class="flex space-x-4 bg-[#232627] p-6 rounded-lg relative z-[10] h-full">
                        <div class="w-11 h-11 bg-primary-700 flex items-center rounded-full justify-center">
                            <nuxt-img class="w-6 h-6 group-hover/benefit:scale-125 transition"
                                :src="$config.public.storage + service.image" alt="icon" loading="lazy" decoding="async"
                                format="webp" quality="80" />
                        </div>
                        <div class="w-[calc(100%-60px)] text-white">
                            <p class="font-semibold text-lg mb-4">{{ service.title }}</p>
                            <p>{{ service.content }}</p>
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