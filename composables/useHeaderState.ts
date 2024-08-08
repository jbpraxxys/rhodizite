import { ref, readonly } from "vue";

const customClass = ref("");

export function useHeaderState() {
    const setCustomClass = (newClass: string) => {
        customClass.value = newClass;
    };

    return {
        customClass: readonly(customClass),
        setCustomClass,
    };
}
