<template>
    <sections-general-banner 
        :item="{
            image: $config.public.storage + item?.image,
            title: item?.header
        }"
    />

    <sections-offset-banner 
        :item="{
            title: item?.subtitle,
            description: item?.description
        }"
    />

    <div v-for="frame in item?.frames">
        <lazy-sections-generic-block 
            v-if="frame.frame_type == 1 && frame.card_type == 1"
            class="pb-10 bg-primary-50"
            :class="frame.custom_class"
            :item="{
                title: frame.title,
                content: frame.content,
                image: frame.image,
                imageFirst: frame.image_first,
                buttonText: frame.button_text,
                buttonLink: frame.button_link
            }"
        />
        <lazy-sections-benefit-block 
            v-if="frame.frame_type == 2 && frame.card_type == 1"
            class="pb-[120px]"
            :class="frame.custom_class"
            :items="frame?.cards"
        />

        <lazy-sections-image-text-frame 
            v-if="frame.frame_type == 1 && frame.card_type == 2"
            :class="frame.custom_class"
            :item="{
                image: $config.public.storage + frame.image,
                title: frame.title,
                content: frame.content,
                buttonText: frame.button_text,
                buttonLink: frame.button_link
            }"
        />
        
        <lazy-sections-specialty-block 
            v-if="frame.frame_type == 2 && frame.card_type == 2"
            class="pb-20 z-[2] relative bg-primary-50"
            :class="frame.custom_class"
            :items="frame"
        />

        <lazy-sections-offer-block 
            v-if="frame.frame_type == 2 && frame.card_type == 3"
            :items="frame"
        />

        <lazy-sections-text-with-map 
            v-if="frame.frame_type == 1 && frame.card_type == 3"
            :item="{
                title: frame.title,
                content: frame.content,
                image: frame.image,
            }"
        />

        <lazy-sections-team-frame 
            v-if="frame.frame_type == 2 && frame.card_type == 4"
            title1="Our Leaders"
            :items="frame.cards"
        />

        <lazy-sections-youtube-embed 
            v-if="frame.frame_type == 1 && frame.card_type == 4"
            title="Our Team"
            :item="{
                buttonLink: frame.button_link,
                image: frame.image
            }"
        />
    </div>

    <lazy-sections-contact-frame class="py-10 bg-primary-50" />
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const { get } = useApi();
const { data: item } = await get(`/child-page/${route.params.childPage}`);
const config = useRuntimeConfig();
useSeoMeta({
  title: item.value?.meta_title || item.value?.title,
  ogTitle: item.value?.meta_title || item.value?.title,
  description: item.value?.meta_description || item.value?.description,
  ogDescription: item.value?.meta_description || item.value?.description,
  keywords: item.value?.meta_keyword,
  ogImage: config.public.storage + item.value?.og_image_path,
  twitterCard: 'summary_large_image',
})

</script>