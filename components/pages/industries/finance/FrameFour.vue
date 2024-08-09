<template>
    <section class="bg-[#051125] finance-frame">
        <div class="xl:max-w-[1440px] xl:m-auto">
            <div class="m-auto lg:px-20 lg:pt-20 px-4 pt-16">
                <div class="text-white text-3xl leading-tight lg:text-[2.3vw] lg:leading-[2.5vw] finance-highlight ck-editor mb-6 lg:mb-20 reveal-type"
                    v-html="cms?.content.section4_header"></div>
            </div>
            <div class="animateUp lg:block hidden">
                <pages-industries-finance-slider :items="cms?.content.section4_items" />
            </div>
            <div class="space-y-4 px-4 lg:hidden block pb-16">
                <div v-for="item in cms?.content.section4_items" class="radial-card2 relative rounded-xl generic-hover">
                    <div class="p-8 rounded-xl text-white space-y-2.5 flex flex-col bg-[#051125] z-[10] relative"
                        :class="item.customClass">
                        <div class="w-24 h-24 relative">
                            <nuxt-img class="w-full h-full object-contain" :src="$config.public.storage + item.image"
                                alt="icon" loading="lazy" decoding="async" format="webp" quality="80" />
                        </div>
                        <p class="font-semibold text-xl text-[#51D2CA]">{{ item.title }}</p>
                        <div>
                            <p>{{ item.content }}</p>
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