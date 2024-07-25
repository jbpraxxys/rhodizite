<!-- components/shared/HalfPanel.vue -->
<template>
  <div class="half-panel">
    <NuxtImg
      :src="bgImage"
      :alt="imageAlt"
      class="background-image"
      sizes="50vw"
      densities="x1 x2"
      format="webp"
      quality="95"
      loading="lazy"
      decoding="async"
    />
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ body }}</p>
      <a v-if="linkUrl" :href="linkUrl" class="cta-button">
        {{ linkText }}
        <Icon name="heroicons:chevron-right" />
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  body: { type: String, default: "" },
  linkUrl: { type: String, default: "" },
  linkText: { type: String, default: "Learn More" },
  bgImage: { type: String, required: true },
  imageAlt: { type: String, default: "" },
});
</script>
