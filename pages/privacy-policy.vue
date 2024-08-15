<template>
    <section class="min-h-screen">
        <div class="w-[90%] lg:w-[70%] 2xl:w-[50%] mx-auto py-[150px]">
            <h1 class="text-2xl lg:text-4xl font-extrabold mb-8 lg:mb-12 text-center">
                {{ cms?.content.section1_title }}
            </h1>

            <div 
                class="ck-content w-full" 
                v-html="cms?.content.section1_content" 
            />
        </div>
    </section>
</template>
<script lang="ts" setup>
const { get } = useApi();
const config = useRuntimeConfig();
const { data: cms } = await get('/page/privacy-policy');

useSeoMeta({
  title: cms.value?.title,
  ogTitle: cms.value?.title,
  description: cms.value?.description,
  ogDescription: cms.value?.description,
  keywords: cms.value?.keywords,
  ogImage: config.public.storage + cms.value?.og_image_path,
  twitterCard: 'summary_large_image',
})
</script>
<style lang="scss">
@import "~/assets/scss/components/ckeditor.scss";
</style>