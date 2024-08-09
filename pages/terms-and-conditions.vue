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
const { data: cms } = await get('/page/terms-and-conditions');
</script>
<style lang="scss">
@import "~/assets/scss/components/ckeditor.scss";
</style>