<template>
    <sections-general-banner :item="{
        image: $config.public.storage + cms?.content.section1_image,
        title: cms?.content.section1_title
    }" />
    <section class="bg-primary-50">
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 py-16">
            <div class="max-w-[1061px] m-auto">
                <div v-for="item in articles.featured.slice(0, 1)" :key="item.id"
                    class="flex lg:flex-row lg:space-y-0 space-y-4 flex-col lg:space-x-8 w-full">
                    <div class="w-full lg:w-[calc(100%-415px)]">
                        <div class="aspect-w-[641] aspect-h-[469] overflow-hidden rounded-md">
                            <nuxt-img class="w-full h-full object-cover"
                                :src="$config.public.storage + item.banner_image_path" :alt="item.title" loading="lazy"
                                decoding="async" format="webp" quality="80"/>
                        </div>
                    </div>
                    <div class="space-y-4 w-full lg:w-[383px]">
                        <p class="text-28 font-bold line-clamp-3">{{ item.title }}</p>
                        <div class="line-clamp-6" v-html="item.content"></div>
                        <div>
                            <p class="text-sm text-neutral-500">{{ formatDate(item.publish_date) }} • {{
                                item.article_type }}</p>
                            <p v-if="item.author" class="text-sm text-neutral-500">Written by: {{ item.author }}</p>
                        </div>
                        <div>
                            <nuxt-link :to="`/resources/${item.slug}`">
                                <buttons-base-button designColor='text-primary-50'>Read More</buttons-base-button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 pb-16 bg-primary-50">
            <div class="max-w-[1061px] m-auto">
                <div class="w-fit m-auto space-x-2.5 flex mb-8 lg:mb-16">
                    <div @click="activateTab('case-studies')"
                        class="px-4 py-2 rounded-lg cursor-pointer transition hover:bg-primary-600/[0.24]"
                        :class="articleType == 'case-studies' ? 'bg-primary-600/[0.24] text-primary-400 font-medium' : ''">
                        <p class="text-sm leading-6">Case Studies</p>
                    </div>
                    <div @click="activateTab('blogs')"
                        class="px-4 py-2 rounded-lg cursor-pointer transition hover:bg-primary-600/[0.24]"
                        :class="articleType == 'blogs' ? 'bg-primary-600/[0.24] text-primary-400 font-medium' : ''">
                        <p class="text-sm leading-6">Blogs</p>
                    </div>
                </div>
                <div v-if="articleType == 'case-studies'">
                    <div v-if="articles.caseStudies.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <cards-article-card v-for="item in articles.caseStudies" :item="item" />
                    </div>
                    <div v-else>
                        No article available
                    </div>
                </div>
                <div v-if="articleType == 'blogs'">
                    <div v-if="articles.blogs.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <cards-article-card v-for="item in articles.blogs" :item="item" />
                    </div>
                    <div v-else>
                        No article available
                    </div>
                </div>
                <div class="w-fit flex items-center m-auto">
                    <partials-pagination :items="articles.blogs" :min="6" />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const { get } = useApi();
const { data: cms } = await get('/page/resources');
const { data: articles } = await get('/articles');

const articleType = ref('case-studies');

const activateTab = (tab: string) => {
    articleType.value = tab;
}

const formatDate = (rawDate: string) => {
    return new Date(rawDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}
</script>