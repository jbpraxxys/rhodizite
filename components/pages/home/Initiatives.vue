<!-- components/pages/home/Initiatives.vue -->
<template>
  <section class="ibpap-initiatives checkered-bg">
    <div class="container">
      <div class="initiatives-layout">
        <div class="content">
          <h2 class="title">{{ initiativesData.title }}</h2>
          <p class="description">{{ initiativesData.description }}</p>
          <NuxtLink :to="initiativesData.ctaLink" class="btn btn-primary cta-button">{{
            initiativesData.ctaText
          }}</NuxtLink>
        </div>
        <div class="initiatives-grid">
          <div
            v-for="(initiative, index) in initiativesData.items"
            :key="index"
            class="initiative-item"
          >
            <h3>{{ initiative.title }}</h3>
            <p>{{ initiative.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    initiativesData: {
      required: true,
    },
  },
  setup(props) {
    const initiativesData = toRef(props, "initiativesData");
    return initiativesData;
  },
};
</script>
