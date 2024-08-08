<template>
    <section>
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 counter-container">
            <div class="flex lg:flex-row flex-col lg:items-center space-x-0 lg:space-x-8 justify-between mb-12 lg:space-y-0 space-y-6">
                <div class="lg:max-w-[363px] w-full image-text">
                    <h3 class="text-3xl font-bold ck-content text-highlight" v-html="cms?.section5_title"></h3>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8" id="counter">
                    <div v-for="(item, index) in cms?.section5_items" class="counter-wrapper">
                        <p class="text-3xl font-bold">
                            {{ item.prefix }}<span class="timer">{{ item.count }}</span>{{ item.suffix }}
                        </p>
                        <p>{{ item.content }}</p>
                    </div>
                </div>
            </div>
            <sliders-testimony-slider v-if="cms?.section5_testimonials.length > 0" :items="cms?.section5_testimonials" />
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