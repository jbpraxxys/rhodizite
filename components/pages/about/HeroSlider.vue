<!-- components/pages/about/HeroSlider.vue -->
<template>
  <section class="about-hero-slider">
    <div class="slider-container">
      <div class="slider-content">
        <NuxtImg
          :src="currentSlide.backgroundImage"
          :alt="currentSlide.imageAlt"
          sizes="100vw"
          densities="x1 x2"
          format="webp"
          quality="95"
          :width="1920"
          :height="1080"
          loading="eager"
          decoding="async"
          class="background-image"
        />
        <div class="content-wrapper">
          <span class="label">{{ currentSlide.label }}</span>
          <h1 class="title">{{ currentSlide.title }}</h1>
          <NuxtLink :to="currentSlide.ctaLink" class="btn btn-primary">
            {{ currentSlide.ctaText }}
            <Icon
              style="vertical-align: middle; padding-left: 5px"
              size="1.25rem"
              name="heroicons:chevron-right"
            />
          </NuxtLink>
        </div>
        <div class="slider-controls">
          <button class="slider-arrow prev" @click="prevSlide">
            <Icon name="heroicons:chevron-left" />
          </button>
          <button class="slider-arrow next" @click="nextSlide">
            <Icon name="heroicons:chevron-right" />
          </button>
        </div>
        <div class="slider-dots">
          <span
            v-for="(_, index) in slides"
            :key="index"
            :class="['dot', { active: currentSlideIndex === index }]"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slidesData: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const currentSlideIndex = ref(0);
    const slides = toRef(props, "slidesData");

    const currentSlide = computed(() => slides.value[currentSlideIndex.value]);

    function nextSlide() {
      currentSlideIndex.value =
        (currentSlideIndex.value + 1) % slides.value.length;
    }

    function prevSlide() {
      currentSlideIndex.value =
        (currentSlideIndex.value - 1 + slides.value.length) %
        slides.value.length;
    }

    function goToSlide(index) {
      currentSlideIndex.value = index;
    }

    return {
      currentSlideIndex,
      currentSlide,
      nextSlide,
      prevSlide,
      goToSlide,
      slides,
    };
  },
};
</script>
