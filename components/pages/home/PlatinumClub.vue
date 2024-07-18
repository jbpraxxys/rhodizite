<template>
  <section class="platinum-club-section">
    <div class="platinum-club-logo">
      <img :src="platinumClubLogo" alt="PLATINUM CLUB" />
    </div>
    <div class="marquee">
      <div class="marquee-content">
        <NuxtImg
          v-for="(logo, index) in platinumPartnerLogos"
          :key="index"
          :src="logo.src"
          :alt="logo.alt"
          sizes="140px"
          densities="x1 x2"
          format="webp"
          quality="95"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PartnerLogo {
  src: string;
  alt: string;
}

interface Props {
  platinumClubLogo: string | undefined;
  platinumPartnerLogos: PartnerLogo[] | undefined;
}

defineProps<Props>();
</script>
