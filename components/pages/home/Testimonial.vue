<!-- components/PagesHomeTestimonial.vue -->
<template>
  <section class="testimonial-section checkered-bg">
    <div class="container">
      <div class="testimonial-content">
        <div class="testimonial-image">
          <NuxtImg
            :src="testimonialData.imageSrc"
            :alt="testimonialData.name"
            sizes="150px"
            densities="x1 x2"
            format="webp"
            quality="95"
            width="150"
            height="150"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h2 class="testimonial-name">{{ testimonialData.name }}</h2>
        <p class="testimonial-position">{{ testimonialData.position }}</p>
        <div class="testimonial-quote">
          <Icon name="icon-park-outline:quote" class="quote-icon" />
          <h3>{{ testimonialData.quote }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  testimonialData: {
    type: Object,
    required: true,
  },
});
</script>
