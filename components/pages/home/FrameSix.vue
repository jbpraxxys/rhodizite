<template>
    <section>
        <div class="max-w-[1440px] m-auto px-4 py-16 lg:p-20 text-center">
            <h3 class="text-xl font-bold mb-8">{{ cms?.section6_title }}</h3>
            <sliders-company-slider :items="cms?.section6_items" />
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