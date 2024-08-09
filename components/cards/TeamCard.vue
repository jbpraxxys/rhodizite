<template>
    <div class="w-full aspect-w-[392] aspect-h-[504] bg-primary-500/[0.08] rounded-xl overflow-hidden relative member-card">
        <div class="w-40 h-40 absolute top-8 left-8">
            <nuxt-img 
                class="w-full h-full object-cover team-iso" 
                :src="$config.public.storage + item.icon" 
                alt="iso"
                loading="lazy"
                decoding="async"
                format="webp"
                quality="80"
            />
        </div>
        <div class="px-3 py-8">
            <nuxt-img 
                class="w-full h-full object-cover team-img" 
                :src="$config.public.storage + item.image" 
                alt="member"
                loading="lazy"
                decoding="async"
                format="webp"
                quality="80"
            />
        </div>
        <div class="absolute w-full flex items-center justify-between bg-primary-500 p-4 bottom-0 top-auto left-0 h-fit">
            <div class="text-white">
                <p class="text-2xl font-bold" v-html="item.title"></p>
                <p class="font-semibold" v-html="item.content"></p>
            </div>
            <div>
                <a :href="item.linkedin_link" target="_blank" rel="noreferrer">
                    <nuxt-img 
                        src="/icons/linkedin-icon.svg" 
                        alt="icon"
                        loading="lazy"
                        decoding="async"
                        format="webp"
                        quality="80"
                    />
                </a>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
})
</script>