import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const darkMode = ref(false)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function toggleDarkMode() {
    darkMode.value = !darkMode.value
  }

  return { count, doubleCount, increment, darkMode, toggleDarkMode }
})
