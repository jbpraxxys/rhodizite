<template>
    <section class="relative bg-[#04193C]">
        <div
            class="px-4 lg:px-20 pt-[141px] lg:pt-[165px] lg:absolute lg:top-0 lg:left-0 z-[2] lg:bg-transparent bg-[#04193C]">
            <div class="w-full lg:w-[70vw] text-white">
                <h1
                    class="text-5xl leading-tight lg:text-[5vw] lg:leading-[4.5vw] mb-4 ck-content finance-highlight text-[#10B8AD]">
                    <p>
                        {{ cms?.content.section1_uppertext }}<br>
                        <strong :data-shadow=cms?.content.section1_middletext>{{ cms?.content.section1_middletext }}</strong>
                        <br>{{ cms?.content.section1_lowertext }}
                    </p>
                </h1>
                <div class="lg:max-w-[42vw] mb-8 lg:mb-12">
                    <p class="text-base lg:text-[1.2vw] lg:leading-relaxed">{{ cms?.content.section1_content }}</p>
                </div>
            </div>
        </div>
        <pages-industries-finance-bg class="lg:w-full w-[200%] relative right-[100%] lg:right-0" />
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