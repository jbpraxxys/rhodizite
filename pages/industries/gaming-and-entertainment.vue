<template>
    <div class="spacer h-[100px] lg:block hidden"></div>

    <pages-industries-gaming-frame-one :cms="cms" />
    <lazy-pages-industries-gaming-frame-two :cms="cms" />
    <lazy-pages-industries-gaming-frame-three :cms="cms" />
    <lazy-pages-industries-gaming-frame-four :cms="cms" />
    <lazy-pages-industries-gaming-frame-five :cms="cms" />
    <lazy-pages-industries-gaming-frame-six :cms="cms" />
</template>
<script setup lang="ts">

definePageMeta({
    layout: 'default',
    layoutProps: {
        customClass: 'gaming',
    }
})


const { get } = useApi();
const { data: cms } = await get('/page/industries-gaming');

const config = useRuntimeConfig();
useSeoMeta({
    title: cms.value?.title,
    ogTitle: cms.value?.title,
    description: cms.value?.description,
    ogDescription: cms.value?.description,
    keywords: cms.value?.keywords,
    ogImage: config.public.storage + cms.value?.og_image_path,
    twitterCard: 'summary_large_image',
})

import "swiper/css/navigation";
import "swiper/css/free-mode";
import 'swiper/css';
</script>

<style lang="scss">
@import "~/assets/scss/pages/industries.scss";
@import "~/assets/scss/components/ckeditor.scss";
</style>