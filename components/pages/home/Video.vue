<template>
  <video v-if="videoURL" id="homeVideo" loop muted playsinline preload="none">
    <source :src="videoURL" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  videoURL: {
    type: String,
    required: true,
  },
});

const loaded = ref(false);

onMounted(() => {
  const playVideo = () => {
    setTimeout(() => {
      document.getElementById("homeVideo").play();
    }, 2500);
  };

  if (document.readyState === "complete") {
    playVideo();
  } else {
    window.addEventListener("load", playVideo);
  }

  loaded.value = true;
});
</script>
