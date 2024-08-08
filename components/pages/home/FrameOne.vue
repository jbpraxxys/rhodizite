<template>
    <section class="relative lg:h-screen">
        <div
            class="px-4 lg:px-20 pt-[141px] lg:pt-[150px] lg:absolute lg:top-0 lg:left-0 z-[2] lg:bg-transparent bg-primary-900">
            <div :class="['w-full lg:w-[36vw] transition duration-1000', textColorClass]">
                <div class="[&>*]:[&>*]:text-5xl [&>*]:text-5xl [&>*]:leading-tight lg:[&>*]:leading-[5.8vw] lg:[&>*]:[&>*]:text-[5.1vw] lg:[&>*]:text-[5.1vw] mb-4 font-bold ck-content text-highlight lg:min-h-0 min-h-[256px]"
                    v-html="cms?.section1_title" />
                <div class="max-w-[400px] mb-8 lg:mb-12">
                    <p>{{ cms?.section1_content }}</p>
                </div>
                <nuxt-link :to="cms?.section1_btn_link ? cms?.section1_btn_link : '#contact-us'">
                    <buttons-base-button custom-class="h-14 px-6 !text-base">
                        {{ cms?.section1_btn_text ? cms?.section1_btn_text : 'Outsource with Us' }}
                    </buttons-base-button>
                </nuxt-link>
            </div>
        </div>
        <div class="lg:min-h-0 min-h-[386px] h-full bg-primary-900 lg:bg-transparent">
            <pages-home-frame-one-mock v-if="!showBackground" />
            <pages-home-frame-one-bg v-if="showBackground" class="lg:w-full w-[150%] relative right-[50%] lg:right-0" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
defineProps({
    cms: {
        type: Object,
        required: true
    }
})

const textColorClass = ref('text-gray-400');

const showBackground = ref(false)
const breakpoints = useBreakpoints({
  lg: 1024, // Adjust this value if needed to match your lg breakpoint
})

const isLargeScreen = breakpoints.greater('lg')

onMounted(() => {
    const delay = isLargeScreen.value ? 1500 : 5000 // 1.5 seconds for desktop, 5 seconds for mobile
    setTimeout(() => {
        showBackground.value = true
    }, delay)

    // Change text color after 0.5 seconds
    setTimeout(() => {
        textColorClass.value = 'text-white'
    }, 500)
})
</script>
