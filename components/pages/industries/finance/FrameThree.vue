<template>
    <section class="bg-[#04193C]">
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 py-16 lg:py-20">
            <div class="text-white text-3xl leading-tight lg:text-[1.7vw] lg:leading-[2.5vw] finance-highlight ck-editor mb-16 text-center reveal-type"
                v-html="cms?.content.section3_header"></div>
            <div class="max-w-[1000px] m-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-11">
                <div class="radial-card1 relative rounded-xl animateUp generic-hover"
                    v-for="i in cms?.content.section3_items">
                    <div
                        class="p-8 rounded-xl bg-[#051d42] text-white space-y-2.5 flex flex-col justify-end h-full z-[10] relative">
                        <div class="w-24 h-24 relative">
                            <nuxt-img class="w-full h-full object-contain" :src="$config.public.storage + i.image"
                                alt="icon" loading="lazy" decoding="async" format="webp" quality="80" />
                        </div>
                        <p class="font-semibold text-2xl text-[#51D2CA]">{{ i.title }}</p>
                        <div class="content">
                            <p>{{ i.content }}</p>
                        </div>
                    </div>
                    <div class="radial-bg rounded-xl"></div>
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