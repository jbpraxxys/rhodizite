<template>
    <pages-industries-saas-frame-one :cms="cms" />
    <pages-industries-saas-frame-two :cms="cms" />
    <pages-industries-saas-frame-three :cms="cms" />
    <pages-industries-saas-frame-four :cms="cms" />
    <pages-industries-saas-frame-five :cms="cms" />
    
    <section class="relative z-1 bg-[#142150]">
        <div id="contact-form" class="-translate-y-20"></div>
        <div class="max-w-[1440px] m-auto relative z-[2] lg:px-0 px-4 py-10">
            <sections-contact-form custom-class="!bg-[#0F193D]" :title="cms?.content.section6_title"
                :description="cms?.content.section6_content" />
        </div>
    </section>
</template>
<script setup lang="ts">
const { get } = useApi();
import { useHeaderState } from '~/composables/useHeaderState';
const { data: cms } = await get('/page/industries-saas');

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


const headerState = useHeaderState();
onMounted(() => {
  headerState.setCustomClass('!bg-[#0F193D]');
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