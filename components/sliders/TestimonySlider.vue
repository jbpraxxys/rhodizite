<template>
    <div class="testimony-slider">
        <div class="slider-container" ref="sliderContainer">
            <div v-for="(item, index) in items" :key="index" class="slider-item">
                <div
                    class="p-6 lg:p-14 bg-primary-50 rounded-2xl flex lg:space-x-11 items-center lg:flex-row flex-col space-y-6 lg:space-y-0">
                    <div class="w-full lg:w-[340px] lg:h-[340px] flex items-center justify-center lg:p-0 p-10">
                        <div class="w-full max-w-[240px] m-auto relative">
                            <div class="absolute top-2 left-0 bg-primary-500 w-full h-full rounded-[2rem] rotate-45">
                            </div>
                            <div class="aspect-w-1 aspect-h-1 w-full rounded-[2rem] rotate-45 overflow-hidden relative">
                                <div
                                    class="w-[135%] h-[135%] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                    <nuxt-img class="w-full object-cover"
                                        :src="config.public.storage + item.image" alt="ceo" loading="lazy"
                                        decoding="async" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-[calc(100%-384px)] relative">
                        <img src="" alt="quote" class="absolute -top-4 lg:-top-8 left-0 lg:-left-8" loading="lazy"
                            decoding="async">
                        <p class="text-xl lg:text-2xl font-medium poppins mb-4 animateUp">{{ item?.testimonial }}</p>
                        <p class="text-sm font-bold animateUp">{{ item?.name }}</p>
                        <p class="text-sm animateUp">{{ item?.position }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button @click="prevSlide" class="prev-button">&lt;</button>
        <button @click="nextSlide" class="next-button">&gt;</button>
    </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    items: {
        type: Object,
        required: true
    }
});

const sliderContainer = ref(null);
let currentIndex = 0;
let intervalId: number | null = null;

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % props.items.length;
    updateSlider();
};

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + props.items.length) % props.items.length;
    updateSlider();
};

const updateSlider = () => {
    if (sliderContainer.value) {
        const translateX = -currentIndex * 100;
        sliderContainer.value.style.transform = `translateX(${translateX}%)`;
    }
};

const startAutoplay = () => {
    intervalId = setInterval(nextSlide, 5000);
};

const stopAutoplay = () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
};

onMounted(() => {
    updateSlider();
    startAutoplay();
});

onUnmounted(() => {
    stopAutoplay();
});
</script>

<style scoped>
.testimony-slider {
    position: relative;
    overflow: hidden;
}

.slider-container {
    display: flex;
    transition: transform 1s ease;
}

.slider-item {
    flex: 0 0 100%;
}

.prev-button,
.next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.prev-button {
    left: 10px;
}

.next-button {
    right: 10px;
}
</style>