<!-- components/pages/about/Timeline.vue -->
<template>
  <section class="timeline-section">
    <div class="content-wrapper">
      <h2 class="section-title">{{ data.title }}</h2>
      <div class="timeline">
        <div
          v-for="(item, index) in data.timelineItems"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-image">
            <NuxtImg
              :src="item.image.src"
              :alt="item.image.alt"
              sizes="(max-width: 768px) 100vw, 300px"
              densities="x1 x2"
              format="webp"
              quality="95"
              :width="item.image.width"
              :height="item.image.height"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="timeline-content">
            <h3 class="timeline-date">{{ item.dateRange }}</h3>
            <div class="timeline-body" v-html="item.body"></div>
          </div>
        </div>
      </div>
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
