<template>
    <section>
        <div class="max-w-[1440px] m-auto px-4 py-16 lg:px-20 lg:py-[120px]">
            <div class="space-y-8">
                <sections-image-text v-for="(item, index) in cms?.section4_items" :key="index" :item="{
                    title: item.title,
                    content: item.content,
                    image: item.image,
                    imageFirst: index % 2 === 0 ? false : true,
                    buttonText: item.btn_text,
                    designColor: 'text-white',
                    buttonLink: item.btn_link
                }" />
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