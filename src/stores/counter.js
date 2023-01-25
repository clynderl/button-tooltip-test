import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const tooltipText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et fuga laboriosam.';
  const buttonText = computed(() => `Was clicked: ${count.value}`)
  function increment() {
    count.value++
  }

  return { buttonText, tooltipText, increment  }
})
