<template>
    <div class="h-[100px]"></div>
    <section class="bg-primary-50">
        <div class="max-w-[1440px] px-4 lg:px-20 m-auto py-16">
            <div class="max-w-[900px] m-auto mb-16">
                <p v-if="cms.article.article_type == 'blogs'" class="text-neutral-600 mb-4">Blogs</p>
                <p v-if="cms.article.article_type == 'case-studies'" class="text-neutral-600 mb-4">Case Studies</p>
                <h1 class="text-3xl lg:text-5xl font-bold mb-4">{{ cms.article.title }}</h1>
                <div
                    class="text-neutral-600 mb-8 flex lg:items-center lg:space-x-1 justify-between w-full lg:space-y-0 space-y-1 lg:flex-row flex-col lg:text-base text-sm">
                    <p>{{ formatDate(cms.article.publish_date) }}</p>
                    <p v-if="cms.article.author">Written by: {{ cms.article.author }}</p>
                </div>
                <div class="overflow-hidden relative mb-4">
                    <nuxt-img class="w-full h-full object-cover" :src="$config.public.storage + cms.article.banner_image_path"
                        alt="banner" loading="lazy" decoding="async" format="webp" quality="80"/>
                </div>
                <div class="ck-content" v-html="cms.article.content"></div>
            </div>
            <div class="max-w-[1032px] m-auto">
                <p class="text-2xl font-bold mb-8">Read more Articles</p>
                <div v-if="cms.suggestedArticles.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <nuxt-link v-for="item in cms.suggestedArticles" :key="item.slug"
                        :to="`/resources/${item.slug}`" class="block">
                        <div class="space-y-4 transition hover:text-primary-500">
                            <div class="aspect-w-[500] aspect-h-[307]">
                                <nuxt-img class="w-full h-full object-cover"
                                    :src="$config.public.storage + item.banner_image_path" :alt="item.title"
                                    loading="lazy" decoding="async" format="webp" quality="80"/>
                            </div>
                            <p class="text-sm text-neutral-600">{{ formatDate(item.publish_date) }}</p>
                            <p class="line-clamp-2 font-semibold text-xl">{{ item.title }}</p>
                        </div>
                    </nuxt-link>
                </div>
                <div v-else>
                    <p>No article available ...</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const route = useRoute();
const { get } = useApi();
const { data: cms } = await get(`/articles/${route.params.slug}`);
const formatDate = (rawDate: string) => {
    return new Date(rawDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

const config = useRuntimeConfig();
useSeoMeta({
    title: cms.value?.article.title,
    ogTitle: cms.value?.article.title,
    description: cms.value?.article.meta_description,
    ogDescription: cms.value?.article.meta_description,
    keywords: cms.value?.article.meta_keyword,
    ogImage: config.public.storage + cms.value?.article.meta_image,
    twitterCard: 'summary_large_image',
})

</script>

<style lang="scss">
@import "~/assets/scss/components/ckeditor.scss";
</style>