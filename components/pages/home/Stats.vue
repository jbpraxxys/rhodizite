<!-- components/PagesHomeStats.vue -->
<template>
  <section class="home-stats">
    <div class="container">
      <h2 class="home-stats__title">{{ statisticsData.title }}</h2>
      <div class="home-stats__numbers">
        <div
          v-for="stat in statisticsData.stats"
          :key="stat.label"
          class="home-stats__number"
        >
          <span class="home-stats__value">{{ stat.value }}</span>
          <span class="home-stats__label">{{ stat.label }}</span>
        </div>
      </div>
      <NuxtLink :to="statisticsData.ctaLink" class="home-stats__cta">
        {{ statisticsData.ctaText }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  statisticsData: {
    type: Object,
    required: true,
  },
});
</script>
