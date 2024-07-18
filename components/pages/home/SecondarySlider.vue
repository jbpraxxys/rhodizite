<template>
  <section class="secondary-slider-container">
    <div class="right-frame">
      <NuxtImg
        :src="currentSlide.image"
        :alt="currentSlide.imageAlt"
        sizes="1000px"
        densities="x1 x2"
        format="webp"
        quality="95"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div
      class="left-frame"
      :style="{
        backgroundImage: `url(${
          currentSlide.backgroundImage || '/img/home/secondary-slider-static.jpg'
        })`,
      }"
    >
      <div class="slider-text">
        <h2>{{ currentSlide.title }}</h2>
        <p>{{ currentSlide.description }}</p>
        <a :href="currentSlide.ctaLink" class="cta-button">
          {{ currentSlide.ctaText }}
          <Icon
            style="vertical-align: middle; padding-left: 5px"
            size="1.25rem"
            name="heroicons:chevron-right"
          />
        </a>
      </div>
      <div class="slider-controls">
        <button class="slider-arrow" @click="prevSlide">
          <Icon name="heroicons:arrow-left" />
        </button>
        <button class="slider-arrow" @click="nextSlide">
          <Icon name="heroicons:arrow-right" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  slidesData: {
    type: Array,
    required: true,
  },
});

const currentSlideIndex = ref(0);
const slides = toRef(props, "slidesData");

const currentSlide = computed(() => slides.value[currentSlideIndex.value]);

function nextSlide() {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;
}

function prevSlide() {
  currentSlideIndex.value =
    (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length;
}
</script>
