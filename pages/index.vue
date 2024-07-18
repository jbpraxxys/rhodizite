<!-- pages/index.vue -->
<template>
  <main class="home-page">
    <PagesHomeSlider v-if="slidesData" :slidesData="slidesData" />
    <PagesHomeVideo :videoURL="videoURL" />
    <PagesHomePlatinumClub
      :platinumClubLogo="platinumClubLogo"
      :platinumPartnerLogos="platinumPartnerLogos"
    />
    <PagesHomeSecondarySlider
      v-if="secondarySlidesData"
      :slidesData="secondarySlidesData"
    />
    <PagesHomeInitiatives :initiativesData="initiativesData" />
    <PagesHomeBenefits :benefitsData="benefitsData" />
    <PagesHomeTestimonial :testimonialData="testimonialData" />
    <PagesHomeStats :statisticsData="statisticsData" />
  </main>
</template>

<script setup lang="ts">
const { data: homeData } = await useFetch("/api/home");
const slidesData = homeData.value?.slides;
const secondarySlidesData = homeData.value?.secondarySlides;
const videoURL = homeData.value?.videoURL;
const platinumClubLogo = homeData.value?.platinumClubLogo;
const platinumPartnerLogos = homeData.value?.platinumPartnerLogos;
const initiativesData = homeData.value?.initiatives;
const statisticsData = homeData.value?.statistics;
const benefitsData = homeData.value?.benefits;
const testimonialData = homeData.value?.testimonial;
</script>

<style lang="scss">
@import "~/assets/scss/pages/home.scss";
</style>
