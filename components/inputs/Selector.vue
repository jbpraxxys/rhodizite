<template>
    <div class="relative">
        <label :for="id" class="block text-sm text-gray-500 mb-2">
            {{ label }}
            <span v-if="required" class="text-red-600 ml-0.5">*</span>
        </label>
        <div class="relative bg-white rounded-md border">
            <button
                @click="toggleDropdown"
                type="button"
                class="h-11 px-4 py-2.5 text-sm w-full text-left"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
            >
                <span v-if="selected"
                class="whitespace-nowrap w-full overflow-hidden text-ellipsis"
                :class="[
                    error
                        ? 'text-red-500 border-red-500'
                        : 'text-gray-500 border-gray-100 focus:border-brand-primary',
                        disabled ? 'bg-gray-200 cursor-not-allowed' : '',
                ]">
                    {{ selected }}
                </span>
                <span
                    v-else
                    class="block text-sm">
                    {{ placeholder }}
                </span>
                <span class="absolute top-1/2 -translate-y-1/2 right-0 flex items-center pr-2 pointer-events-none">
                    <Icon name="heroicons:chevron-down" class="text-xl ml-2 text-cstm-dark-base"/>
                </span>
            </button>

            <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
            >
                <ul
                    v-if="isOpen"
                    class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 overflow-auto focus:outline-none sm:text-sm"
                    :class="topOptions ? 'bottom-12' : ''"
                    tabindex="-1"
                    role="listbox"
                    aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-option-3"
                >
                    <li
                        v-for="item in options"
                        :key="item.id"
                        @click="select(item.id)"
                        :class="[
                            modelValue == item.id
                                ? 'bg-gray-200'
                                : item.unavailable
                                ? 'text-gray-800 cursor-default'
                                : 'text-gray-800 cursor-pointer hover:bg-gray-100',
                            'select-none relative py-2 px-3',
                            item.hidden ? 'hidden' : '',
                            item.unavailable ? 'opacity-50' : ''
                        ]"
                    >
                        <span
                            :class="[
                                'text-cstm-gray-800',
                            ]"
                        >
                            {{ item.value }}
                        </span>
                    </li>
                </ul>
            </transition>
        </div>
        <p
            v-if="error"
            class="mt-2 text-sm"
            :class="error ? 'text-red-600' : 'text-gray-800'"
            id="email-error"
        >
            {{ error }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    modelValue: {
        default: null,
        required: true,
    },
    options: {
        type: Object,
        required: true,
    },
    label: {
        type: String,
        default: "",
    },
    id: {
        type: String,
        default: null,
    },
    error: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    topOptions: {
        type: Boolean,
        default: false
    }
})

const isOpen = ref(false);

const emit = defineEmits(['update:modelValue'])

const selected = computed(() => {
    const option = props.options.find(x => x.id == props.modelValue);
    if(option) {
        return option.value;
    }
    else {
        return props.placeholder;
    }
});

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const select = (id) => {
    emit('update:modelValue', id);
    isOpen.value = false;
}
</script>
