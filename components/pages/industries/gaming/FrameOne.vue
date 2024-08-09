<template>
   <section class="relative">
        <div class="px-4 lg:px-20 pt-[141px] lg:pt-[250px] lg:absolute lg:top-0 lg:left-0 z-[2] lg:bg-transparent">
            <div class="w-full lg:w-[70vw]">
                <div class="pulse2">
                    <nuxt-img class="lg:-translate-x-16 mb-4 lg:w-[50vw]"
                        :src="$config.public.storage + cms?.content.section1_header" alt="game" loading="lazy"
                        decoding="async" />
                </div>
                <div class="lg:max-w-[39vw] mb-8 lg:mb-12">
                    <h1 class="text-base lg:text-[1.2vw] lg:leading-relaxed">{{ cms?.content.section1_content }}</h1>
                </div>
            </div>
        </div>
        <pages-industries-gaming-bg class="lg:w-full w-[170%] relative right-[70%] lg:right-0 lg:pb-0 pb-20" />
        <nuxt-img class="absolute bottom-0 w-[900%] lg:w-full max-w-max lg:max-w-full"
            :src="$config.public.storage + cms?.content.section1_footer" alt="footer" loading="lazy" decoding="async" format="webp" quality="80"/>
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