<template>
    <div class="company-slider">
        <div class="slider-container" ref="sliderContainer">
            <div v-for="(item, index) in displayItems" :key="index" class="slide">
                <nuxt-link :to="item.link" target="_blank" rel="noreferrer">
                    <div class="popAnimate w-fit m-auto">
                        <nuxt-img class="w-[114px] grayscale transition hover:grayscale-0 hover:scale-125 duration-500"
                            :src="config.public.storage + item.logo" alt="logo" loading="lazy" decoding="async" />
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: () => []
    }
});

const sliderContainer = ref<HTMLElement | null>(null);
let animationFrameId: number | null = null;
const slideWidth = 146; // Width of each slide (114px image + 32px gap)
const slidesPerView = ref(2.8); // Default to mobile view

// Double the items for smooth looping
const displayItems = computed(() => [...props.items, ...props.items]);

function moveSlider() {
    if (sliderContainer.value) {
        sliderContainer.value.scrollLeft += 1;
        if (sliderContainer.value.scrollLeft >= sliderContainer.value.scrollWidth / 2) {
            sliderContainer.value.scrollLeft = 0;
        }
        animationFrameId = requestAnimationFrame(moveSlider);
    }
}

function startSlider() {
    if (typeof window !== 'undefined') {
        animationFrameId = requestAnimationFrame(moveSlider);
    }
}

function stopSlider() {
    if (animationFrameId !== null && typeof window !== 'undefined') {
        cancelAnimationFrame(animationFrameId);
    }
}

onMounted(() => {
    if (typeof window !== 'undefined') {
        slidesPerView.value = window.innerWidth >= 1024 ? 6 : 2.8;
        window.addEventListener('resize', handleResize);
    }

    if (sliderContainer.value) {
        sliderContainer.value.style.width = `${slideWidth * slidesPerView.value}px`;
    }

    startSlider();
});

onUnmounted(() => {
    stopSlider();
    if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
    }
});

function handleResize() {
    if (typeof window !== 'undefined') {
        slidesPerView.value = window.innerWidth >= 1024 ? 6 : 2.8;
        if (sliderContainer.value) {
            sliderContainer.value.style.width = `${slideWidth * slidesPerView.value}px`;
        }
    }
}
</script>

<style scoped>
.company-slider {
    overflow: hidden;
}

.slider-container {
    display: flex;
    transition: transform 0.5s ease;
}

.slide {
    flex: 0 0 auto;
    width: 114px;
    margin-right: 32px;
}

@media (min-width: 1024px) {
    .slide {
        margin-right: 40px;
    }
}
</style>
