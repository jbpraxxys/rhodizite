<template>
    <section class="relative z-1 bg-[#1B2B35] overflow-hidden">
        <div id="contact-form" class="-translate-y-20"></div>
        <img class="absolute lg:top-0 top-[150px] lg:scale-100 scale-[200%] lg:bottom-0 left-0 -translate-x-[50%] z-1"
            src="/icons/contact-bg.svg" alt="contact" loading="lazy" decoding="async">
        <div class="max-w-[1440px] m-auto relative z-[2] lg:px-0 px-4 py-10">
            <sections-contact-form custom-class="!bg-[#142129]" :title="cms?.content.section6_header"
                :description="cms?.content.section6_content" />
        </div>
    </section>
</template>
<script setup lang="ts">
defineProps({
    cms: {
        type: Object,
        required: true
    }
})
</script>