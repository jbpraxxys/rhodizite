<!-- pages/about-us.vue -->
<template>
  <main class="about-page">
    <PagesAboutHeroSlider v-if="heroSliderData" :slidesData="heroSliderData" />
    <PagesAboutWhoWeAre v-if="whoWeAreData" :data="whoWeAreData" />
    <section class="half-panel-section">
      <SharedHalfPanel v-bind="mission" />
      <SharedHalfPanel v-bind="vision" />
    </section>
    <PagesAboutTimeline v-if="timelineData" :data="timelineData" />
  </main>
</template>

<script setup lang="ts">
const { data: aboutData } = await useFetch("/api/about");
const heroSliderData = computed(() => aboutData.value?.heroSlider);
const whoWeAreData = computed(() => aboutData.value?.whoWeAre);
const mission = computed(() => aboutData.value?.mission);
const vision = computed(() => aboutData.value?.vision);
const timelineData = computed(() => aboutData.value?.timeline);
</script>

<style lang="scss">
@import "~/assets/scss/pages/about.scss";
</style>
