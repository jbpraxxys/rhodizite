<template>
    <section class="relative">
        <div
            class="px-4 lg:px-20 pt-[141px] lg:pt-[250px] lg:absolute lg:top-0 lg:left-0 z-[2] lg:bg-transparent bg-[#0F193D]">
            <div class="w-full lg:w-[70vw] text-white">
                <pages-industries-saas-text class="w-full lg:max-w-[53vw] mb-5 lg:mb-0" />
                <div class="lg:max-w-[37vw] lg:mb-12">
                    <p class="text-base lg:text-[1.2vw] lg:leading-relaxed">{{ cms?.content.section1_content }}</p>
                </div>
            </div>
        </div>
        <pages-industries-saas-bg class="lg:w-full w-[170%] relative right-[70%] lg:right-0" />
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