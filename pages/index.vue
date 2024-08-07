<!-- pages/index.vue -->
<template>
    <main class="w-full overflow-hidden">
        <pages-home-frame-one :cms="homeData?.content" />
        <pages-home-frame-two :cms="homeData?.content" />
        <pages-home-frame-three :cms="homeData?.content" />
        <pages-home-frame-four :cms="homeData?.content" />
        <pages-home-frame-five :cms="homeData?.content" />
        <pages-home-frame-six :cms="homeData?.content" />
        <pages-home-frame-seven :cms="homeData?.content" />
        <pages-home-frame-eight :cms="homeData?.content" />
    </main>
</template>

<script setup lang="ts">
const { get } = useApi();
const { data: homeData } = await get('/page/home');
</script>

<style lang="scss">
@import "~/assets/scss/pages/home.scss";
</style>
