<template>
    <section class="relative">
        <div class="max-w-[1440px] m-auto px-4 py-16 lg:p-20">
            <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                <div class="flex items-center justify-center animateUp lg:pb-0 pb-20">
                    <p class="text-3xl font-bold">
                        {{ cms?.section2_title }}
                    </p>
                </div>
                <cards-service-card class="animateUp" v-for="(item, index) in cms?.section2_items" :key="index"
                    :item="item" />
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
