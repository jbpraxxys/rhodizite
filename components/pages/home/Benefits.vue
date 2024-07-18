<template>
  <section class="benefits">
    <h2>{{ benefitsData.heading }}</h2>
    <div class="benefits-list">
      <div
        v-for="(benefit, index) in benefitsData.items"
        :key="index"
        class="benefit-item"
        :class="{ even: index % 2 !== 0 }"
      >
        <div class="benefit-content">
          <div class="icon">
            <img :src="benefit.icon" :alt="benefit.title + ' icon'" />
          </div>
          <div class="text-content">
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
        <div class="benefit-image">
          <NuxtImg
            :src="benefit.image"
            :alt="benefit.title"
            sizes="320px"
            densities="x1 x2"
            format="webp"
            quality="95"
            width="320"
            height="200"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";

export default defineComponent({
  props: {
    benefitsData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const benefitsData = toRef(props, "benefitsData");
    return { benefitsData };
  },
});
</script>
