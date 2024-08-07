<template>
    <div class="p-8 rounded-lg bg-white">
        <p class="text-xl font-bold mb-2">{{ item.title }}</p>
        <p class="text-neutral-600 leading-6 mb-6" v-html="item.content" />
            
        <buttons-base-button @click="$emit('apply')" designColor='text-white' size="md">Apply Now</buttons-base-button>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})
</script>