import { ref, reactive } from 'vue'

const state = reactive({
  customClass: ''
})

export const useHeaderState = () => {
  const setCustomClass = (newClass: string) => {
    state.customClass = newClass
  }

  return {
    state,
    setCustomClass
  }
}
