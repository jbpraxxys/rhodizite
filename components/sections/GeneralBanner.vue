<template>
    <section class="bg-primary-900">
        <div class="max-w-[1440px] m-auto px-4 pt-[100px] pb-[100px] lg:pl-32 lg:pr-20 lg:py-[100px] flex lg:flex-row flex-col items-center justify-between">
            <div class="pt-10">
                <nuxt-img  
                    class="lg:max-w-[300px] banner-image object-contain min-h-[434px]" 
                    :src="item.image" 
                    alt="banner-image"
                    format="webp" quality="80"
                    loading="eager"
                    decoding="async"
                />
            </div>
            <div class="max-w-[755px] w-full text-banner">
                <h1 class="font-bold text-white mb-8 text-h1" v-html="item.title" />
                <a @click.prevent="handleContactClick" href="/contact-us/#contact-form">
                    <buttons-base-button>
                        Inquire Now
                    </buttons-base-button>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';

defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})

const handleContactClick = () => {
    if (typeof window !== 'undefined') {
        if (window.location.pathname === '/contact-us') {
            scrollToContactForm();
        } else {
            window.location.href = '/contact-us/#contact-form';
        }
    }
}

const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
    }
}

let scrollHandler: null | (() => void) = null;

onMounted(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#contact-form') {
        scrollHandler = () => setTimeout(scrollToContactForm, 100);
        window.addEventListener('load', scrollHandler);
    }
});

onUnmounted(() => {
    if (scrollHandler && typeof window !== 'undefined') {
        window.removeEventListener('load', scrollHandler);
    }
});
</script>