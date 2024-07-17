<template>
  <main class="home-page">
    <template>
      <div class="slider-container">
        <div class="slider-content">
          <div class="slider-text">
            <h2>We are IT-BPM<br />We are<br />with the<br />Philippines.</h2>
            <a href="#" class="learn-more">LEARN MORE</a>
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
                :class="['dot', { active: currentSlide === index }]"
                @click="goToSlide(index)"
              ></span>
            </div>
          </div>
          <div class="slider-image">
            <NuxtImg
              :src="currentSlideImage"
              alt="IT-BPM Professional"
              format="webp"
              quality="95"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div class="partner-logos">
          <p>Proud to partner with</p>
          <div class="logo-container">
            <NuxtImg
              v-for="(logo, index) in partnerLogos"
              :key="index"
              :src="logo.src"
              :alt="logo.alt"
              format="webp"
              quality="95"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </template>
  </main>
</template>

<script setup>
const slides = ref([
  { image: "/path/to/image1.jpg" },
  { image: "/path/to/image2.jpg" },
  // Add more slides as needed
]);

const currentSlide = ref(0);

const currentSlideImage = computed(
  () => slides.value[currentSlide.value].image
);

const partnerLogos = [
  { src: "/path/to/logo1.png", alt: "Partner 1" },
  { src: "/path/to/logo2.png", alt: "Partner 2" },
  { src: "/path/to/logo3.png", alt: "Partner 3" },
  { src: "/path/to/logo4.png", alt: "Partner 4" },
  { src: "/path/to/logo5.png", alt: "Partner 5" },
  { src: "/path/to/logo6.png", alt: "Partner 6" },
];

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
}

function goToSlide(index) {
  currentSlide.value = index;
}
</script>

<style lang="scss">
@import "~/assets/scss/pages/home.scss";
</style>
