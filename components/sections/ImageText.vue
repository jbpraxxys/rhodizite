<template>
    <div class="flex lg:flex-row flex-col items-center justify-between image-text">
        <div class="w-full lg:w-7/12 mb-8 lg:mb-0" :class="item.imageFirst ? 'lg:order-2 lg:ml-20' : 'lg:mr-20'">
            <div class="text-5xl font-bold mb-6 title reveal-type leading-tight" v-html="item.title" />
            <div class="text-xl animateUp" v-html="item.content" />
            <div v-if="item.buttonText && item.buttonLink" class="pt-6">
                <buttons-base-button @click="redirect(item.buttonLink)" custom-class="h-14 px-6 !text-base animateUp" :design-color="item.designColor">
                    {{ item.buttonText }}
                </buttons-base-button>
            </div>
        </div>
        <div class="w-full lg:w-5/12 max-w-[540px] animateUp" :class="item.imageFirst ? 'lg:order-1' : ''">
            <nuxt-img 
                class="w-full" :src="config.public.storage + item.image" 
                alt="image"
                loading="lazy"
                decoding="async"
                format="webp"
                quality="80"
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig();
defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
})

const redirect = (link: string) => {
    navigateTo(link);
}
</script>

