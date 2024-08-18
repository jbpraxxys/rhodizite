<template>
  <section class="relative">
    <div
      class="px-4 lg:px-20 pt-[141px] lg:pt-[250px] lg:absolute lg:top-0 lg:left-0 z-[2] lg:bg-transparent"
    >
      <div class="w-full lg:w-[70vw]">
        <div class="pulse2">
          <nuxt-img
            width="49"
            height="11"
            class="lg:-translate-x-16 mb-4 lg:w-[50vw] w-full"
            :src="$config.public.storage + cms?.content.section1_header"
            alt="game"
            sizes="xs:320px md:768 lg:1024 xl:1280 xxl:1536"
            densities="1x 2x"
          />
        </div>
        <div class="lg:max-w-[39vw] mb-8 lg:mb-12">
          <h1 class="text-base lg:text-[1.2vw] lg:leading-relaxed">
            {{ cms?.content.section1_content }}
          </h1>
        </div>
      </div>
    </div>
    <div
      v-if="!loaded"
      id="bgPlaceholder"
      class="lg:w-full w-[170%] relative right-[70%] lg:right-0 lg:pb-0 pb-20"
    >
      <nuxt-img
        src="/img/gaming-and-entertainment/placeholder.webp"
        alt="Gaming and Entertainment BG"
        width="500"
        height="271"
        format="webp"
        quality="80"
        sizes="xs:320px md:768 lg:1024 xl:1280 xxl:1536"
        densities="1x 2x"
        style="width: 100%; height: auto"
      />
    </div>
    <lazy-pages-industries-gaming-bg
      v-else
      class="lg:w-full w-[170%] relative right-[70%] lg:right-0 lg:pb-0 pb-20"
    />
    <nuxt-img
      class="absolute bottom-0 w-[900%] lg:w-full max-w-max lg:max-w-full"
      :src="$config.public.storage + cms?.content.section1_footer"
      alt="footer"
      format="webp"
      quality="80"
    />
  </section>
</template>
<script setup lang="ts">
defineProps({
  cms: {
    type: Object,
    required: true,
  },
});

const loaded = ref(false);

onMounted(() => {
  const delay = detectMobile() ? 1000 : 2500;

  const fireLoad = () => {
    setTimeout(() => {
      loaded.value = true;
    }, delay);
  };

  if (document.readyState === "complete") {
    fireLoad();
  } else {
    window.addEventListener("load", () => {
      fireLoad();
    });
  }
});
</script>
