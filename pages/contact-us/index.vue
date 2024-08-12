<template>
    <sections-general-banner :item="{
        image: $config.public.storage + cms?.content.section1_image,
        title: cms?.content.section1_header
    }" />

    <sections-offset-banner :item="{
        title: cms?.content.section1_subtitle,
        description: cms?.content.section1_description
    }" />

    <sections-contact-frame class="py-10 bg-primary-50" />
</template>
<script lang="ts" setup>
const { get } = useApi();
const { data: cms } = await get('/page/contact-us');

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

</script>