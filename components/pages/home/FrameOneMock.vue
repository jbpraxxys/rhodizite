<template>
    <div class="relative lg:w-full w-[150%] right-[50%] lg:right-0 transition duration-1000">
        <nuxt-img 
            src="/img/home/frameone.webp"
            alt="mockup-banner"
            format="webp"
            quality="95"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-contain"
            @error="handleImageError"
        />
    </div>
</template>
<script setup lang="ts">
const handleImageError = (error: string) => {
  console.error('Image failed to load:', error);
  // You can set a fallback image or take other actions here
}
</script>