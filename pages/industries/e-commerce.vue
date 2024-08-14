<template>
    <pages-industries-ecommerce-frame-one :cms="cms" />
    <lazy-pages-industries-ecommerce-frame-two :cms="cms" />
    <lazy-pages-industries-ecommerce-frame-three :cms="cms" />
    <lazy-pages-industries-ecommerce-frame-four :cms="cms" />
    <lazy-pages-industries-ecommerce-frame-five :cms="cms" />
    <lazy-pages-industries-ecommerce-frame-six :cms="cms" />
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'default',
    layoutProps: {
        customClass: '!bg-[#051125]',
    }
})
const { get } = useApi();
const { data: cms } = await get('/page/industries-ecommerce');

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