<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div v-if="items.total > min">
        <div class="flex items-center space-x-1.5">
            <template v-for="(link, key) in items.links" :key="link">
                <template v-if="key === 0">
                    <a
                        v-if="key === 0"
                        :href="link.url ?? '#'"
                        @click.prevent="changePage(link.url)"
                        :disabled="!items.prev_page_url"
                    >
                        <span class="sr-only">Previous</span>
                        <ChevronLeftIcon
                            class="w-5 h-5"
                            :class="{ 'text-primary-500': !items.prev_page_url }"
                            aria-hidden="true"
                        />
                    </a>
                </template>

                <template v-else-if="key === items.links.length - 1">
                    <a
                        :href="link.url ?? '#'"
                        @click.prevent="changePage(link.url)"
                        :disabled="!items.next_page_url"
                    >
                        <span class="sr-only">Next</span>
                        <ChevronRightIcon
                            class="h-5 w-5"
                            :class="{ 'text-primary-500': !items.next_page_url }"
                            aria-hidden="true"
                        />
                    </a>
                </template>

                <a
                    v-else
                    :href="link.url ?? '#'"
                    @click.prevent="changePage(link.url)"
                    aria-current="page"
                    class="w-8 h-8 flex items-center justify-center text-sm font-semibold"
                    :class="link.active ? 'bg-primary-800 text-white' : ''"
                >
                    {{ link.label }}
                </a>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";

/*--------------*
 * PROPS
 *--------------*/
const props = defineProps({
    items: {
        type: Object,
        required: true
    },
    min: {
        type: Number,
        default: 2,
    },
});

/*--------------*
 * EMITS
 *--------------*/
const emit = defineEmits(['update:page']);

/*--------------*
 * METHODS
 *--------------*/
const changePage = (url: string | null) => {
    if (url) {
        const pageMatch = url.match(/page=(\d+)/);
        if (pageMatch && pageMatch[1]) {
            const newPage = parseInt(pageMatch[1], 10);
            emit('update:page', newPage);
        }
    }
};
</script>
