import { defineStore } from 'pinia'

export const useComponentsState = defineStore('components', {
  state: () => ({
    navIsExpanded: false,
  }),

  actions: {
    toggleNavbar(payload: boolean) {
      this.navIsExpanded = payload
    },
  },
})
