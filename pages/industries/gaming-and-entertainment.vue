<template>
    <div class="spacer h-[100px] lg:block hidden"></div>
    
    <pages-industries-gaming-frame-one :cms="cms" />
    <pages-industries-gaming-frame-two :cms="cms" />
    <pages-industries-gaming-frame-three :cms="cms" />
    <pages-industries-gaming-frame-four :cms="cms" />
    <pages-industries-gaming-frame-five :cms="cms" />
    <pages-industries-gaming-frame-six :cms="cms" />
</template>
<script setup lang="ts">
import { useHeaderState } from '~/composables/useHeaderState';

const { get } = useApi();
const { data: cms } = await get('/page/industries-gaming');

const headerState = useHeaderState();
onMounted(() => {
  headerState.setCustomClass('gaming');
})
onUnmounted(() => {
  headerState.setCustomClass('')
})


import "swiper/css/navigation";
import "swiper/css/free-mode";
import 'swiper/css';
</script>

<style lang="scss">
@import "~/assets/scss/pages/industries.scss";
@import "~/assets/scss/components/ckeditor.scss";
</style>