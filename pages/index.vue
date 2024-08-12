<!-- pages/index.vue -->
<template>
    <main class="w-full overflow-hidden">
        <pages-home-frame-one :cms="homeData?.content" />
        <lazy-pages-home-frame-two :cms="homeData?.content" />
        <lazy-pages-home-frame-three :cms="homeData?.content" />
        <lazy-pages-home-frame-four :cms="homeData?.content" />
        <lazy-pages-home-frame-five :cms="homeData?.content" />
        <lazy-pages-home-frame-six :cms="homeData?.content" />
        <lazy-pages-home-frame-seven :cms="homeData?.content" />
        <lazy-pages-home-frame-eight :cms="homeData?.content" />
    </main>
</template>

<script setup lang="ts">
const { get } = useApi();
const config = useRuntimeConfig();
const { data: homeData } = await get('/page/home');
// const { data: homeData } = await useFetch('/api/home');

useSeoMeta({
  title: homeData.value?.title,
  ogTitle: homeData.value?.title,
  description: homeData.value?.description,
  ogDescription: homeData.value?.description,
  keywords: homeData.value?.keywords,
  ogImage: config.public.storage + homeData.value?.og_image_path,
  twitterCard: 'summary_large_image',
})
</script>

<style lang="scss">
@import "~/assets/scss/pages/home.scss";
</style>
