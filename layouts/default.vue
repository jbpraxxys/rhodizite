<template>
    <NuxtLazyHydrate :when-triggered="idleTrigger" @hydrated="onHydrated">
        <Header :custom-class="headerState.customClass.customClass" :key="headerState.customClass.customClass" />
        <main class="overflow-x-hidden">
            <NuxtPage />
        </main>
        <LazyFooter />
        <LazyDefer v-if="loadDeferred" />
    </NuxtLazyHydrate>
    <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHeaderState } from '~/composables/useHeaderState'

const idleTrigger = ref(false)
const loadDeferred = ref(false)
const headerState = useHeaderState()

watch(() => headerState.customClass.customClass, (newValue) => {
  console.log('default.vue: headerState.customClass changed:', newValue);
});

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