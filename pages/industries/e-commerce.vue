<template>
    <pages-industries-ecommerce-frame-one :cms="cms" />
    <pages-industries-ecommerce-frame-two :cms="cms" />
    <pages-industries-ecommerce-frame-three :cms="cms" />
    <pages-industries-ecommerce-frame-four :cms="cms" />
    <pages-industries-ecommerce-frame-five :cms="cms" />
    <pages-industries-ecommerce-frame-six :cms="cms" />
</template>
<script setup lang="ts">
import { useHeaderState } from '~/composables/useHeaderState';

const headerState = useHeaderState();
headerState.setCustomClass('!bg-[#04193C]');

const { get } = useApi();
const { data: cms } = await get('/page/industries-ecommerce');

onUnmounted(() => {
    headerState.setCustomClass('');
});


import "swiper/css/navigation";
import "swiper/css/free-mode";
import 'swiper/css';
</script>

<style lang="scss">
@import "~/assets/scss/pages/industries.scss";
@import "~/assets/scss/components/ckeditor.scss";
</style>