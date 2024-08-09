<template>
    <section class="relative">
        <nuxt-img  
            class="absolute top-0 left-0 w-full h-full z-1 object-cover" 
            src="/icons/grid.png" 
            alt="grid"
            loading="lazy"
            decoding="async"
            format="webp" quality="80"
        />
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 relative z-[2]">
            <sections-image-text 
                :item="item"
            />
        </div>
    </section>
</template>
<script lang="ts" setup>
defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})
</script>