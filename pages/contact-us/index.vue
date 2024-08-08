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
</script>