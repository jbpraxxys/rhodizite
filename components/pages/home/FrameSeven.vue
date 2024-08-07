<template>
    <section class="bg-primary-900">
        <div class="max-w-[1440px] m-auto text-center px-4 py-16 lg:px-0 lg:py-[120px]">
            <div class="max-w-[715px] m-auto text-white">
                <h3 class="text-5xl font-bold mb-4 animateUp">{{ cms?.section7_title }}</h3>
                <p class="mb-12 text-xl animateUp">{{ cms?.section7_content }}</p>
                <nuxt-link v-if="cms?.section7_btn_link" :to="cms?.section7_btn_link">
                    <buttons-base-button class="animateUp">{{ cms?.section7_btn_text }}</buttons-base-button>
                </nuxt-link>
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