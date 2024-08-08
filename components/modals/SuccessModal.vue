<template>
    <modals-base-modal :show="show" :max-width="maxWidth" @close="$emit('close')">
        <div class="bg-white px-9 py-[60px] rounded-none border">
            <div class="flex flex-col items-center text-center space-y-3 mb-6">
                <div class="w-[48px] h-[48px] flex justify-center items-center bg-primary-600 bg-opacity-10 rounded-full">
                    <CheckIcon class="h-5 w-5 stroke-1 stroke-primary-600 text-primary-600 " aria-hidden="true" />
                </div>
                <p class="text-xl font-bold text-primary-600">{{  title }}</p>
                <p class="">{{ description }}</p>
                <slot name="headerText"></slot>
            </div>
            <slot name="content" class="mb-6"></slot>
            <div class="flex space-x-2 justify-center">
                <slot name="button"></slot>
            </div>
        </div>
    </modals-base-modal>
</template>

<script setup lang="ts">
import { CheckIcon } from "@heroicons/vue/24/solid";
defineProps({
    id: {
        type: String
    },
    title: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    show: {
        default: false
    },
    maxWidth: {
        default: 'lg'
    },
    form: {
        type: Object
    },
    items: {
        type: Object
    }
})
const emit = defineEmits(["close"])

</script>