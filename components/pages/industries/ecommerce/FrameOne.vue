<template>
    <section class="relative bg-[#051125]">
        <div class="px-4 lg:px-20 pt-[141px] lg:pt-[165px] lg:absolute lg:top-0 lg:left-0 z-[2] lg:bg-transparent bg-[#051125]">
            <div class="w-full lg:w-[70vw] text-white">
                <h1 
                class="text-5xl leading-tight lg:text-[3.5vw] lg:leading-[4.5vw] mb-4 ck-content ecommerce-highlight text-[#51D2CA]" 
                v-html="cms?.content.section1_header" />
                <div class="lg:max-w-[45vw] mb-8 lg:mb-12">
                    <p class="text-base lg:text-[1.2vw] lg:leading-relaxed">{{ cms?.content.section1_content }}</p>
                </div>
            </div>
        </div>
        <pages-industries-e-commerce-frame-one class="lg:w-full w-[200%] relative right-[105%] lg:right-0" />
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