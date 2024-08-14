<template>
    <header ref="headRef" class="w-full fixed top-0 left-0 z-[90] transition"
        :class="[headerScroll ? 'scroll shadow-md' : 'bg-primary-900', customClass]">
        <div class="px-4 lg:px-4 xl:px-20 mx-auto lg:py-4 flex items-center justify-between transition header-wrapper"
            :class="headerScroll ? 'py-2' : 'py-6'">
            <div class="hdr-logo lg:w-auto">
                <NuxtLink @click="closeMenu" to="/">
                    <nuxt-img :src="config.public.storage + header?.content?.section1_logo" alt="logo"
                        class="lg:h-[68px] max-w-full mx-auto transition duration-700 header-logo"
                        :class="headerScroll ? 'h-[64px]' : 'brightness-0 invert h-[61px]'" loading="eager" decoding="async" format="webp" quality="80"/>
                </NuxtLink>
            </div>
            <div @click="toggleMenu" class="hamburger-menu pr-3" :class="menuOpen ? 'active' : ''">
                <div class="bar" :class="headerScroll ? 'scroll' : ''"></div>
            </div>
            <div class="lg:flex items-center font-medium lg:space-y-0 space-y-6 lg:space-x-4 xl:space-x-8 transition lg:relative fixed nav-menu lg:top-auto"
                :class="[
                    headerScroll ? 'text-primary-900 top-[80px] scroll' : 'lg:text-white top-[109px]',
                    menuOpen ? 'translate-x-0' : 'translate-x-[110%] lg:translate-x-0'
                ]">
                <div v-for="parent_page in parent_pages" :key="parent_page.id" class="relative group-hover text-sm">
                <div
                    class="flex items-center space-x-1 hover:text-primary-600 transition lg:w-fit w-full lg:justify-normal justify-between"
                    :class="parent_page.sub_pages.length == 0 ? 'cursor-pointer' : 'cursor-default'">
                    <NuxtLink @click="closeMenu" v-if="parent_page.sub_pages.length == 0" :to="`/pages/${parent_page.slug}`">
                        {{ parent_page.title }}
                    </NuxtLink>
                    <span v-else>{{ parent_page.title }}</span>
                    <svg v-if="parent_page.sub_pages.length > 0 || parent_page.title === 'Industries'"
                        class="rotate-180 lg:rotate-0" width="16" height="16" viewBox="0 0 16 16" fill="transparent"
                        stroke="currentColor">
                        <path d="M12 6L8 10L4 6" stroke-width="2" />
                    </svg>
                </div>
                <div v-if="parent_page.sub_pages.length > 0"
                    class="bg-white px-6 py-4 text-sm text-black flex flex-col space-y-4 min-w-[220px] rounded-b-xl lg:shadow-md absolute top-[40px] left-0 hover-child">
                    <template v-for="sub_page in parent_page.sub_pages">
                        <div v-if="sub_page.child_pages.length > 0" class="relative group-hover2">
                            <div
                                class="flex items-center space-x-2.5 hover:text-primary-600 transition lg:justify-normal justify-between cursor-default">
                                <p class="whitespace-nowrap">{{ sub_page.title }}</p>
                                <div>
                                    <svg class="lg:block hidden" width="24" height="24" viewBox="0 0 24 24"
                                        fill="transparent" stroke="currentColor">
                                        <path d="M9 6L15 12L9 18" stroke-width="2" />
                                    </svg>
                                    <svg class="lg:hidden block rotate-180 lg:rotate-0" width="16" height="16"
                                        viewBox="0 0 16 16" fill="transparent" stroke="currentColor">
                                        <path d="M12 6L8 10L4 6" stroke-width="2" />
                                    </svg>
                                </div>
                            </div>
                            <div
                                class="bg-white px-6 py-4 text-sm text-black flex flex-col space-y-4 min-w-[275px] rounded-b-xl lg:shadow-md absolute -top-1 left-[calc(100%+24px)] hover-child2">
                                <NuxtLink @click="closeMenu" v-for="child_page in sub_page.child_pages"
                                    class="hover:text-primary-600 transition cursor-pointer" :to="`/pages/${parent_page.slug}/${sub_page.slug}/${child_page.slug}`">
                                    {{ child_page.title }}
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink @click="closeMenu" v-else class="hover:text-primary-600 transition cursor-pointer" :to="`/pages/${parent_page.slug}/${sub_page.slug}`">
                            {{ sub_page.title }}
                        </NuxtLink>
                    </template>
                </div>
                <div v-if="parent_page.title === 'Industries'"
                    class="bg-white px-6 py-4 text-sm text-black flex flex-col space-y-4 min-w-[250px] rounded-b-xl lg:shadow-md absolute top-[40px] left-0 hover-child">
                    <NuxtLink @click="closeMenu" class="hover:text-primary-600 transition cursor-pointer" to="/industries/gaming-and-entertainment">
                        Gaming and Entertainment
                    </NuxtLink>
                    <NuxtLink @click="closeMenu" class="hover:text-primary-600 transition cursor-pointer" to="/industries/saas">
                        SaaS
                    </NuxtLink>
                    <NuxtLink @click="closeMenu" class="hover:text-primary-600 transition cursor-pointer" to="/industries/e-commerce">
                        E-Commerce
                    </NuxtLink>
                    <NuxtLink @click="closeMenu" class="hover:text-primary-600 transition cursor-pointer" to="/industries/finance">
                        Finance
                    </NuxtLink>
                </div>
            </div>


                <div class="relative group-hover text-sm">
                    <div
                        class="flex items-center space-x-1 hover:text-primary-600 cursor-pointer transition lg:w-fit w-full lg:justify-normal justify-between">
                        <NuxtLink @click="closeMenu" to="/resources">
                            Resources
                        </NuxtLink>
                    </div>
                </div>
                <div class="relative group-hover text-sm">
                    <div
                        class="flex items-center space-x-1 hover:text-primary-600 cursor-pointer transition lg:w-fit w-full lg:justify-normal justify-between">
                        <NuxtLink @click="closeMenu" to="/careers">
                            Careers
                        </NuxtLink>
                    </div>
                </div>
                <div class="relative group-hover text-sm">
                    <div
                        class="flex items-center space-x-1 hover:text-primary-600 cursor-pointer transition lg:w-fit w-full lg:justify-normal justify-between">
                        <NuxtLink @click="closeMenu" to="/calculator">
                            Calculator
                        </NuxtLink>
                    </div>
                </div>
                <div>
                    <div class="button-header px-5 py-4 lg:px-0 lg:py-0 text-sm">
                        <NuxtLink @click="closeMenu" @click.prevent="handleContactClick" to="/contact-us/#contact-form">
                            <buttons-base-button custom-class="w-full lg:w-auto" v-if="headerScroll ? '' : 'hidden'"
                                size="md">Contact
                                Us</buttons-base-button>
                            <buttons-base-button custom-class="w-full lg:w-auto" v-if="headerScroll ? 'hidden' : ''" size="md"
                                design-color="text-white">Contact Us</buttons-base-button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
const { get } = useApi();
const config = useRuntimeConfig();
const { data: parent_pages } = await get('/parent-pages');
const { data: header } = await get('/cms-header');

const props = defineProps<{
  customClass?: string
}>();


const handleContactClick = () => {
  if (window.location.pathname === '/contact-us') {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    window.location.href = '/contact-us#contact-form';
  }
};

const headerAnimation = ref(false);

const menuOpen = ref(false);
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
}

const closeMenu = () => {
    menuOpen.value = false;
}

const headRef = ref<any>(null);
const headerScroll = ref(false);

// const handleContactClick = () => {
//     if (window.location.pathname === '/contact-us') {
//         const contactForm = document.getElementById('contact-form');
//         if (contactForm) {
//             contactForm.scrollIntoView({ behavior: 'smooth' });
//         }
//     } else {
//         navigateTo('/contact-us', {
//             preserveState: true,
//             preserveScroll: true,
//             onSuccess: () => {
//                 setTimeout(() => {
//                     const contactForm = document.getElementById('contact-form');
//                     if (contactForm) {
//                         contactForm.scrollIntoView({ behavior: 'smooth' });
//                     }
//                 }, 100);
//             }
//         });
//     }
// }

onMounted(() => {
    var prev = window.pageYOffset;
    window.addEventListener("scroll", () => {
        var curr = window.pageYOffset;
        if (prev < 200) {
            headerScroll.value = false

        } else {
            headerScroll.value = true
        }
        prev = curr;
    });

    setTimeout(() => {
        headerAnimation.value = true;
    }, 4000)


});


</script>

<style scoped>
@import "~/assets/scss/components/header.scss";
</style>