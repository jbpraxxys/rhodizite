<template>
  <NuxtLazyHydrate :when-triggered="idleTrigger" @hydrated="onHydrated">
    <Header />
    <NuxtPage />
    <Footer />
    <LazyDefer v-if="loadDeferred" />
  </NuxtLazyHydrate>
  <div></div>
</template>
<script>
export default {
  async setup() {
    const idleTrigger = ref(false);
    const loadDeferred = ref(false);

    function fireTrigger() {
      idleTrigger.value = true;
    }

    onMounted(() => {
      const delay = detectMobile() ? 5000 : 2500;

      const loadScripts = async () => {
        setTimeout(fireTrigger, delay);
      };

      if (document.readyState === "complete") {
        loadScripts();
      } else {
        window.addEventListener("load", loadScripts);
      }
    });

    const onHydrated = () => {
      loadDeferred.value = true;
    };

    return { idleTrigger, loadDeferred, onHydrated };
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/main.scss";
</style>
