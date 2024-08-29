<template>
    <section class="bg-primary-900 text-white">
            <div class="max-w-[1440px] m-auto px-4 py-16 lg:px-20 lg:py-[120px]">
                <div class="max-w-[835px] m-auto text-center mb-20">
                    <h2 class="text-3xl font-bold reveal-type mb-8">{{ cms?.section3_title }}</h2>
                    <p class="text-xl font-bold word-split">{{ cms?.section3_content }}</p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-4 w-full gap-8 lg:gap-10 xl:gap-20">
                    <cards-values-card
                        v-for="item in cms?.section3_items"
                        :item="item"
                    />
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