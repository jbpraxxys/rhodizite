<template>
    <pages-industries-finance-frame-one :cms="cms" />
    <pages-industries-finance-frame-two :cms="cms" />
    <pages-industries-finance-frame-three :cms="cms" />
    <pages-industries-finance-frame-four :cms="cms" />
    <pages-industries-finance-frame-five :cms="cms" />
    
    <section class="relative z-1 bg-[#051125] overflow-hidden">
        <div id="contact-form" class="-translate-y-20"></div>
        <nuxt-img class="absolute lg:top-0 top-[150px] lg:scale-100 scale-[200%] lg:bottom-0 left-0 -translate-x-[50%] z-1"
            src="/icons/contact-bg.svg" alt="contact" loading="lazy" decoding="async" format="webp" quality="80"/>
        <div class="max-w-[1440px] m-auto relative z-[2] lg:px-0 px-4 py-10">
            <sections-contact-form custom-class="!bg-[#000A2F]" :title="cms?.content.section6_title"
                :description="cms?.content.section6_content" />
        </div>
    </section>
</template>
<script setup lang="ts">
import { useHeaderState } from '~/composables/useHeaderState';

const headerState = useHeaderState();
headerState.setCustomClass('!bg-[#04193C]');

const { get } = useApi();
const { data: cms } = await get('/page/industries-finance');

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