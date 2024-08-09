<template>
    <div>
        <nuxt-link :to="`/resources/${item.slug}`">
            <div class="flex lg:flex-row flex-col lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 cursor-pointer hover:text-primary-500 transition">
                <div class="w-full lg:w-[calc(100%-279px)]">
                    <div class="lg:aspect-w-1 aspect-w-4 aspect-h-3 lg:aspect-h-1 rounded-md overflow-hidden">
                        <nuxt-img 
                            class="w-full h-full object-cover" 
                            :src="$config.public.storage + item.banner_image_path" 
                            :alt="item.title"
                            loading="lazy"
                            decoding="async"
                            format="webp"
                            quality="80"
                        />
                    </div>
                </div>
                <div class="w-full lg:w-[263px]">
                    <p class="text-xl font-semibold line-clamp-4 mb-4 leading-8">{{ item.title }}</p>
                    <p class="text-sm text-neutral-600">{{ formatDate(item.publish_date) }} • {{ item.article_type }}</p>
                    <p v-if="item.author" class="text-sm text-neutral-600">Written by: {{ item.author }}</p>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})

const formatDate = (rawDate: string) => {
    return new Date(rawDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}
</script>