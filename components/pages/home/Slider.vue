<template>
  <section class="slider-container">
    <div
      class="left-frame"
      :style="{
        backgroundImage: `url(${
          currentSlide.backgroundImage || '/img/home/slider-static.svg'
        })`,
      }"
    >
      <div class="slider-text">
        <h2>{{ currentSlide.title }}</h2>
        <p>{{ currentSlide.description }}</p>
        <a :href="currentSlide.ctaLink" class="cta-button"
          >{{ currentSlide.ctaText }}
          <Icon
            style="vertical-align: middle; padding-left: 5px"
            size="1.25rem"
            name="heroicons:chevron-right"
          />
        </a>
        <div class="slider-controls">
          <button class="slider-arrow" @click="prevSlide">
            <Icon name="heroicons:arrow-left" />
          </button>
          <button class="slider-arrow" @click="nextSlide">
            <Icon name="heroicons:arrow-right" />
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
    <div class="right-frame">
      <NuxtImg
        :src="currentSlide.image"
        :alt="currentSlide.imageAlt"
        width="1000"
        height="1000"
        densities="x1 x2"
        format="webp"
        quality="95"
        loading="lazy"
        decoding="async"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slidesData: {
      required: true,
    },
  },
  setup(props) {
    console.log(props);
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

    return { currentSlideIndex, currentSlide, nextSlide, prevSlide, goToSlide };
  },
};
</script>
