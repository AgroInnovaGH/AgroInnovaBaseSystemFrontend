import { ref } from 'vue'
import type { Ref } from 'vue'

export function useHideWithDelay(showRef: Ref<boolean>, delayMs: number = 300) {
  const timer = ref<ReturnType<typeof setTimeout> | null>(null)

  const start = () => {
    timer.value = setTimeout(() => {
      showRef.value = false
    }, delayMs)
  }

  const cancel = () => {
    if (timer.value) {
      clearTimeout(timer.value)
      timer.value = null
    }
    showRef.value = true
  }

  return { start, cancel }
}


