import { reactive, watch } from "vue";

const state = reactive({
    customClass: "",
});

export function useHeaderState() {
    const setCustomClass = (newClass: string) => {
        state.customClass = newClass;
    };

    if (process.client) {
        watch(() => state.customClass, (newValue) => {
            document.body.classList.remove('gaming', 'saas', 'e-commerce', 'finance');
            if (newValue) {
                document.body.classList.add(newValue);
            }
        }, { immediate: true });
    }

    return {
        customClass: state,
        setCustomClass,
    };
}
