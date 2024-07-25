<!-- components/pages/about/WhoWeAre.vue -->
<template>
  <section class="who-we-are checkered-bg">
    <div class="content-wrapper">
      <div class="image-container">
        <NuxtImg
          :src="data.image.src"
          :alt="data.image.alt"
          sizes="(max-width: 768px) 100vw, 40vw"
          densities="x1 x2"
          format="webp"
          quality="95"
          :width="data.image.width"
          :height="data.image.height"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h2 class="section-title">{{ data.title }}</h2>
      <div class="section-content" v-html="data.content"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
