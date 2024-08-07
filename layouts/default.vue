<template>
  <NuxtLazyHydrate :when-triggered="idleTrigger" @hydrated="onHydrated">
    <Header :custom-class="headerState.state.customClass" />
    <main class="overflow-x-hidden">
      <NuxtPage />
    </main>
    <Footer />
    <LazyDefer v-if="loadDeferred" />
  </NuxtLazyHydrate>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHeaderState } from '~/composables/useHeaderState';

const headerState = useHeaderState()
const idleTrigger = ref(false)
const loadDeferred = ref(false)

function fireTrigger() {
  idleTrigger.value = true
}

onMounted(() => {
  const delay = detectMobile() ? 5000 : 2500

  const loadScripts = async () => {
    setTimeout(fireTrigger, delay)
  }

  if (document.readyState === "complete") {
    loadScripts()
  } else {
    window.addEventListener("load", loadScripts)
  }
})

const onHydrated = () => {
  loadDeferred.value = true
}
</script>

<style lang="scss">
@import "~/assets/scss/main.scss";
</style>
